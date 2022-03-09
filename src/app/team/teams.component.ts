import { Component, OnInit } from "@angular/core";
import { DataService, DataItem } from "../data.service";
import { Page, Trace, Utils } from '@nativescript/core';

@Component({
    selector: "ns-teams",
    templateUrl: "./teams.component.html",
})
export class TeamsComponent implements OnInit {
    items: DataItem[];

    constructor(private itemService: DataService, private page: Page) {
        this.page.on('loaded', data => {
            console.log('TeamsComponent onLoaded');
        });
        this.page.on('navigatedTo', data => {
            console.log('TeamsComponent navigatedTo');
        });
    }

    ngOnInit(): void {
        this.items = this.itemService.getTeams();
    }
}