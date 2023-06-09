import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, map } from 'rxjs';
import { StepControlService } from '../steps-sidebar/data-access/step-control.service';

@Component({
  selector: 'app-buttons-control',
  templateUrl: './buttons-control.component.html',
  styleUrls: ['./buttons-control.component.scss'],
})
export class ButtonsControlComponent {
  public activeStep$ = this.stepControlService.currentStep$;
  public isLastStep$ = this.stepControlService.isLastStep$;

  constructor(private stepControlService: StepControlService) {}

  public nextStep() {
    this.stepControlService.nextStep();
  }

  public previousStep() {
    this.stepControlService.previousStep();
  }
}
