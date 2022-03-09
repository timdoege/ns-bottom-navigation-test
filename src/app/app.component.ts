import { Component, OnInit } from '@angular/core'
import { Trace } from '@nativescript/core';

@Component({
  selector: 'ns-app',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    Trace.setCategories(Trace.categories.concat(Trace.categories.Error, Trace.categories.Debug));
    Trace.enable();    
  }

}
