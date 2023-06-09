import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddOnsPickerModule } from './add-ons-picker/add-ons-picker.module';
import { ButtonsControlModule } from './buttons-control/buttons-control.module';
import { FinishingUpModule } from './finishing-up/finishing-up.module';
import { PersonalInfoModule } from './personal-info/personal-info.module';
import { PlanSelectorModule } from './plan-selector/plan-selector.module';
import { StepsModule } from './steps-sidebar/steps.module';
import { ThankYouModule } from './thank-you/thank-you.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    StepsModule,
    ButtonsControlModule,
    PersonalInfoModule,
    PlanSelectorModule,
    AddOnsPickerModule,
    FinishingUpModule,
    ThankYouModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
