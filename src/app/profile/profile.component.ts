import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { BarcodeView, ScanResult } from '@nativescript-community/ui-barcodeview';

@Component({
    selector: "ns-profile",
    templateUrl: "./profile.component.html",
})
export class ProfileComponent implements OnInit {

    public pauseScanning = false;
    @ViewChild('scannerView') scannerView: ElementRef;

    constructor() { }

    ngOnInit(): void {
    }

    onBarcodePluginScanResult(result: ScanResult): void {
        if (result.text && result.text.length > 0) {
            console.log(result.text);
        }
    }

}