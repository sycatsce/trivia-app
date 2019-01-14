import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';

import { QuizzPage } from './quizz.page';
import { DifficultiesComponent } from './difficulties/difficulties.component';
import { ReadyComponent } from './ready/ready.component';
import { ResultsComponent } from './results/results.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionComponent } from './question/question.component';

const routes: Routes = [
  {
    path: '',
    component: QuizzPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    IonicStorageModule.forRoot(),
    HttpClientModule,
  ],
  declarations: [QuizzPage, DifficultiesComponent, ReadyComponent, ResultsComponent, QuestionsComponent, QuestionComponent]
})
export class QuizzPageModule {}
