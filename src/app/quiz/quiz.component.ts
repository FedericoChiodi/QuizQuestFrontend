import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit{
  question: string = "";
  label1: string = "";
  label2: string = "";
  points: number = 0;

  ngOnInit(): void {
    this.newGame();
  }

  newGame(){
    this.nextQuestion();
  }

  onClick(i: number){
    // TODO: fare una chiamata ad una rest api per vedere se ho risposto bene o meno passando i
    if(this.checkAnswer()){
      this.calculatePoints(100);
    }

    this.nextQuestion();
  }

  checkAnswer(){
    return true;
  }

  nextQuestion(){
    this.question = "test";
    this.label1 = "ciao";
    this.label2 = "banana";
  }

  calculatePoints(n: number){
    this.points = this.points += n;
  }

}
