import { Component, OnInit } from "@angular/core";
import { Page, Trace, Utils } from '@nativescript/core';

@Component({
    selector: "ns-statistics",
    templateUrl: "./statistics.component.html",
})
export class StatisticsComponent implements OnInit {

    constructor(private page: Page) {
        this.page.on('loaded', data => {
            console.log('StatisticsComponent onLoaded');
        });
        this.page.on('navigatedTo', data => {
            console.log('StatisticsComponent navigatedTo');
        });
    }

    ngOnInit(): void {
    }
}