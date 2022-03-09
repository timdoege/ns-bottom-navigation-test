import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { BarcodeView, ScanResult } from '@nativescript-community/ui-barcodeview';
import { Page, Trace, Utils } from '@nativescript/core';

@Component({
    selector: "ns-profile",
    templateUrl: "./profile.component.html",
})
export class ProfileComponent implements OnInit {

    public pauseScanning = false;
    @ViewChild('scannerView') scannerView: ElementRef;

    constructor(private page: Page) {
        this.page.on('loaded', data => {
            console.log('ProfileComponent onLoaded');
        });
        this.page.on('navigatedTo', data => {
            console.log('ProfileComponent navigatedTo');
        });
    }

    ngOnInit(): void {
    }

    onBarcodePluginScanResult(result: ScanResult): void {
        if (result.text && result.text.length > 0) {
            console.log(result.text);
        }
    }

}