import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { DataService, DataItem } from "../data.service";
import { Page, Trace, Utils } from '@nativescript/core';

@Component({
    selector: "ns-players",
    templateUrl: "./players.component.html",
})
export class PlayerComponent implements OnInit {
    items: DataItem[];
    constructor(private itemService: DataService, private page: Page) {
        this.page.on('loaded', data => {
            console.log('PlayerComponent onLoaded');
        });
        this.page.on('navigatedTo', data => {
            console.log('PlayerComponent navigatedTo');
        });
    }

    ngOnInit(): void {
        this.items = this.itemService.getPlayers();
    }
}