import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SentimentAnalysisComponent } from './sentiment-analysis.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SentimentService } from '../services/sentiment.service';
import { of } from 'rxjs';

describe('SentimentAnalysisComponent', () => {
  let component: SentimentAnalysisComponent;
  let fixture: ComponentFixture<SentimentAnalysisComponent>;
  let sentimentService: SentimentService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientTestingModule,
        SentimentAnalysisComponent,
      ], // Import the standalone component
      providers: [SentimentService],
    }).compileComponents();

    fixture = TestBed.createComponent(SentimentAnalysisComponent);
    component = fixture.componentInstance;
    sentimentService = TestBed.inject(SentimentService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a paragraph', () => {
    component.addParagraph();
    expect(component.paragraphs.length).toBe(1);
  });

  it('should analyze sentiment and update paragraphs', () => {
    const mockResponse = {
      title: 'Test Document',
      paragraphs: [{ content: 'Test paragraph', sentiment: 'positive' }],
    };

    spyOn(sentimentService, 'analyzeSentiment').and.returnValue(
      of(mockResponse)
    );

    component.title = 'Test Document';
    component.paragraphs = [{ content: 'Test paragraph' }];
    component.analyzeSentiment();

    expect(sentimentService.analyzeSentiment).toHaveBeenCalledWith({
      title: 'Test Document',
      paragraphs: [{ content: 'Test paragraph' }],
    });

    expect(component.paragraphs).toEqual(mockResponse.paragraphs);
  });
});
