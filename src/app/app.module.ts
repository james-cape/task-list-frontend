import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { TaskListComponent } from './task-list.component';
// import { TaskListFooterComponent } from './task-list-footer/task-list-footer.component';
// import { TaskListHeaderComponent } from './task-list-header/task-list-header.component';
import { TaskDataService } from './task-data.service';
// import { TaskListItemComponent } from './task-list-item/task-list-item.component';
import { ApiService } from './api.service';

@NgModule({
  declarations: [
    AppComponent,
    // TaskListComponent,
    // TaskListFooterComponent,
    // TaskListHeaderComponent,
    // TaskListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [TaskDataService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
