import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { StudentsPageComponent } from './students-page/students-page.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { UppercaseApprovedPipe } from './pipes/uppercaseApproved.pipe';
import { ReactiveformComponent } from './reactiveform/reactiveform.component'; 


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    StudentsPageComponent,
    UppercaseApprovedPipe,
    ToolbarComponent,
    ReactiveformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }