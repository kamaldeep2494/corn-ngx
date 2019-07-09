import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CronJobsModule } from 'ngx-cron-jobs';
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,FormsModule,CronJobsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
