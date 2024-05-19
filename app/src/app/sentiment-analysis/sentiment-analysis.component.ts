import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SentimentService } from '../services/sentiment.service';

@Component({
  selector: 'app-sentiment-analysis',
  standalone: true,
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.scss'],
  imports: [FormsModule, HttpClientModule, CommonModule],
})
export class SentimentAnalysisComponent {
  title: string = '';
  paragraphs: { content: string; sentiment?: string }[] = [];

  constructor(private sentimentService: SentimentService) {}

  addParagraph() {
    this.paragraphs.push({ content: '' });
  }

  analyzeSentiment() {
    const document = {
      title: this.title,
      paragraphs: this.paragraphs,
    };
    this.sentimentService.analyzeSentiment(document).subscribe(
      (response) => {
        this.paragraphs = response.paragraphs;
      },
      (error) => console.error('Error analyzing sentiment:', error)
    );
  }

  getSentimentClass(sentiment: string): string {
    if (sentiment === 'positive') {
      return 'positive';
    } else if (sentiment === 'negative') {
      return 'negative';
    } else {
      return 'neutral';
    }
  }
}
