import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
    selector: 'todo-header',
    templateUrl: 'todo-header.component.html',
})

export class TodoHeaderComponent implements OnInit {
    public todoHeader: string = "Your things";
    public personalTaskCounter: number = 0;
    public businessTaskCounter: number = 0;
    public ngOnInit():void{

    }

    public getDate() {
        const d = new Date();
        const formattedDate = moment(d).format("MMM D, yyyy");
        // const currentDay = d.getDate();
        // var currentYear = d.getFullYear();
        return formattedDate;
    }
}

