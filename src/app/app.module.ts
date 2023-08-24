import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login-form-component/login.component';
import { AppComponent } from './app.component';
import { DataBinding } from './assignment-2-data-binding/databinding.component';
import { SuccessComponent } from './success/success.component';
import  { WarningAlertComponent } from './warning-alert/warning.component';
import { DirectiveComponent } from './directives-assignment/directive.component';
import { ExampleComponent } from './example/example.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight-renderer/better-highlight.directive';
import { UnlessDirective } from './unless.directive';

 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DataBinding,
    SuccessComponent,
    WarningAlertComponent,
    DirectiveComponent,
    ExampleComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
