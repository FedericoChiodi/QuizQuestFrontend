import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  @Input() questionText: string = 'Question Placeholder';
  @Input() answer1: string = 'Ans1 Placeholder';
  @Input() answer2: string = 'Ans2 Placeholder';
  @Input() correctAnswer: number = 0;
}
