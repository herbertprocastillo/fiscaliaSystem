import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';

@Component({
	selector: 'app-calendar',
	templateUrl: './calendar.component.html',
	styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

	week: any = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

	monthSelect: any = [];
	dateSelect: any;

	constructor() {
	}

	ngOnInit(): void {
		this.getDaysFromDate(12, 2021);
	}




	getDaysFromDate(month: number, year: number) {
		const startDate = moment(`${year}/${month}/01`);
		const endDate = startDate.clone().endOf('month');
		this.dateSelect = startDate;

		const diffDays = endDate.diff(startDate, 'days', true);
		const numberDays = Math.round(diffDays)

		this.monthSelect = Object.keys([...Array(numberDays)]).map((a: any) => {
			a = parseInt(a) + 1;
			const dayObject = moment(`${year}-${month}-${a}`);
			return {
				name: dayObject.format("dddd"),
				value: a,
				indexWeek: dayObject.isoWeekday()
			}
		});
	}

}
