import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppCreatorComponent } from './components/app-creator/app-creator.component'
import { from } from 'rxjs';
import { TodoHeaderComponent } from './components/todo-header/todo-header.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AppCreatorComponent,
    TodoHeaderComponent,
    TaskListComponent,
    TodoListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
