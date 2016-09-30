import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { routes } from './app.routes';

@NgModule({
    imports:        [BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(routes)],
    declarations:   [AppComponent, TemplateFormsComponent, ReactiveFormsComponent],
    bootstrap:      [AppComponent]
})
export class AppModule {}