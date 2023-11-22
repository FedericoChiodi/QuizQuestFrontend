import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuestionComponent } from "../question/question.component";
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  question_text: string = "";
  answer1: string = "";
  answer2: string = "";
  correct_answer: number = 0;

  points: number = 0;
  random: number = 1;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.newQuestion();
  }

  newQuestion() {
    this.getRandomQuestion().subscribe({
      next: (question: QuestionComponent) => {
        this.question_text = question.questionText;
        this.answer1 = question.answer1;
        this.answer2 = question.answer2;
        this.correct_answer = question.correctAnswer;

        console.log(this.question_text + " " + this.correct_answer);
      },
      error: (error) => {
        console.error('Error getting random question:', error);
      }
    });
  }

  onClick(i: number) {
    if(this.checkAnswer(i)){
      this.calculatePoints(100);
    }
    else {
      this.calculatePoints(-50);
    }

    this.newQuestion();
  }

  checkAnswer(i: number) {
    return (i == this.correct_answer);
  }

  getRandomQuestion(): Observable<QuestionComponent> {
    this.random = Math.round((Math.random() * 99) + 1);
    let apiUrl = 'http://localhost:8081/QuizQuest/questions/' + this.random;

    apiUrl = 'http://localhost:8081/QuizQuest/questions/1';

    return this.http.get<QuestionComponent>(apiUrl).pipe(
      catchError((error) => {
        console.error('Error getting random question:', error);
        return throwError(error);
      })
    );
  }

  calculatePoints(n: number) {
    this.points = Math.max(this.points + n, 0);
  }

}
