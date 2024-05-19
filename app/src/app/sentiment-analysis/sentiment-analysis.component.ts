import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { SentimentService } from '../services/sentiment.service';

@Component({
  selector: 'app-sentiment-analysis',
  standalone: true,
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.scss'],
  imports: [FormsModule, HttpClientModule, CommonModule], // Add CommonModule here
})
export class SentimentAnalysisComponent {
  content: string = '';
  sentiment: string | null = null;

  constructor(private sentimentService: SentimentService) {}

  analyzeSentiment() {
    this.sentimentService.analyzeSentiment(this.content).subscribe(
      (response) => (this.sentiment = response.sentiment),
      (error) => console.error('Error analyzing sentiment:', error)
    );
  }
}
