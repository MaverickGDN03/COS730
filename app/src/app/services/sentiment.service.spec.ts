import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { SentimentService } from './sentiment.service';

describe('SentimentService', () => {
  let service: SentimentService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SentimentService],
    });
    service = TestBed.inject(SentimentService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should analyze sentiment', () => {
    const mockDocument = {
      title: 'Test Document',
      paragraphs: [{ content: 'Test paragraph' }],
    };
    const mockResponse = {
      title: 'Test Document',
      paragraphs: [{ content: 'Test paragraph', sentiment: 'positive' }],
    };

    service.analyzeSentiment(mockDocument).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne('http://localhost:8000/api/documents/');
    expect(req.request.method).toBe('POST');
    req.flush(mockResponse);
  });
});
