import { OnInit, ViewChild, ElementRef, OnDestroy, HostListener, NgZone } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';
import { Device, Page } from '@nativescript/core';
import { BottomNavigation } from '@nativescript-community/ui-material-bottom-navigation';


@Component({
    selector: "tabs-page",
    templateUrl: "./tabs.component.html"
})
export class TabsComponent {

    @ViewChild('mainTabView') mainTabViewElement: ElementRef;
    private mainTabView: BottomNavigation;
    public tabSelectedIndex: number; 

    constructor(
        private routerExtension: RouterExtensions,
        private activeRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.routerExtension.navigate(
            [
                { 
                    outlets: {
                        playerTab: ["players"], teamTab: ["teams"],
                        statisticsTab: ["statistics"], profileTab: ["profile"]
                    }
                }
            ],
            { relativeTo: this.activeRoute });
    }

    onBottomNavigationLoaded(args: any) {
        this.mainTabView = (<BottomNavigation>this.mainTabViewElement.nativeElement);
        console.log('BottomNavigationComponent loaded - selIdx =', this.mainTabView.selectedIndex, ', tabSelectedIndex = ', this.tabSelectedIndex);
        if (this.tabSelectedIndex !== this.mainTabView.selectedIndex) {
            this.setSelectedIndex(this.tabSelectedIndex);
        }
    }
    
    onSelectedIndexChanged(args: any) {
        const newIndex = args.newIndex;
        console.log('onSelectedIndexChanged - NEW ', newIndex, 'internal=',this.tabSelectedIndex);
    }

    getIconSource(icon: string): string {
        let selTabIdx = this.tabSelectedIndex;
        if (this.mainTabView) {
            selTabIdx = this.mainTabView.selectedIndex;
        }
        // console.log('getIconSource for icon', icon, ' - selTabIdx is ', selTabIdx);
        if (selTabIdx === 0 && icon === 'ichome') {
            return 'res://' + icon + 'on';
        }
        if (selTabIdx === 1 && icon === 'icnotification') {
            return 'res://' + icon + 'on';
        }
        return 'res://' + icon;
    }

    public setSelectedIndex(idx: number) {
        if (this.mainTabView) {
            // console.log('setSelectedIndex - SET IDX', idx);
            this.mainTabView.selectedIndex = idx;
            this.tabSelectedIndex = idx;
        }
        else {
            // console.log('BottonNavigationComponent not ready yet - mark tab change for later to tab ', idx);
            this.tabSelectedIndex = idx;
        }
    }    
}
