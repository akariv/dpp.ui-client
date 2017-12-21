import './rxjs-extensions';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { ServerEventsService } from './server-events.service';
import {HttpClientModule} from "@angular/common/http";
import { StepsContainerComponent } from './steps-container/steps-container.component';
import { StepAdderComponent } from './step-adder/step-adder.component';
import { StepBaseComponent } from './step-base/step-base.component';
import {FormsModule} from "@angular/forms";
import {ExecutionSupervisorService} from "./execution-supervisor.service";
import { StepSourceComponent } from './steps/step-source/step-source.component';
import { StepSkipComponent } from './steps/step-skip/step-skip.component';
import { StepMutateComponent } from './steps/step-mutate/step-mutate.component';
import { ResultTableComponent } from './components/result-table/result-table.component';
import { StepFilterComponent } from './steps/step-filter/step-filter.component';
import { UniqueValuesPipe } from './unique-values.pipe';
import { ExecutionStatusComponent } from './components/execution-status/execution-status.component';
import { ExecutionStepComponent } from './steps/execution-step/execution-step.component';
import { ZerosPipe } from './pipes/zeros.pipe';


@NgModule({
  declarations: [
    AppComponent,
    StepsContainerComponent,
    StepAdderComponent,
    StepBaseComponent,
    StepSourceComponent,
    StepSkipComponent,
    StepMutateComponent,
    ResultTableComponent,
    StepFilterComponent,
    UniqueValuesPipe,
    ExecutionStatusComponent,
    ExecutionStepComponent,
    ZerosPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [ServerEventsService, ExecutionSupervisorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
