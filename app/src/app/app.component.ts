import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SentimentAnalysisComponent } from './sentiment-analysis/sentiment-analysis.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SentimentAnalysisComponent], // Import the standalone component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Sentiment Analysis App';
}
