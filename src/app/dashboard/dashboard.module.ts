import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
import {FilesComponent} from './files/files.component';
import {CalendarComponent} from './calendar/calendar.component';
import {ListComponent} from './files/list/list.component';
import {NewComponent} from './files/new/new.component';
import {DeadlineComponent} from './files/deadline/deadline.component';
import {DownloadFileComponent} from './files/download-file/download-file.component';
import {ModalHearingComponent} from './files/modal-hearing/modal-hearing.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FilterFilePipe} from "../pipes/filter-file.pipe";
import {ListEventsComponent} from './calendar/list-events/list-events.component';
import {NewEventComponent} from './calendar/new-event/new-event.component';

@NgModule({
	declarations: [
		DashboardComponent,
		FilesComponent,
		CalendarComponent,
		ListComponent,
		NewComponent,
		DeadlineComponent,
		DownloadFileComponent,
		ModalHearingComponent,
		FilterFilePipe,
		ListEventsComponent,
		NewEventComponent,
	],
	imports: [
		CommonModule,
		DashboardRoutingModule,
		FormsModule,
		ReactiveFormsModule,
	]
})
export class DashboardModule {
}
