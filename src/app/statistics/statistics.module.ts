
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { StatisticsComponent } from "./statistics.component";
import { NativeScriptCommonModule, NativeScriptRouterModule } from "@nativescript/angular";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild([
            { path: "", redirectTo: "statistics" },
            { path: "statistics", component: StatisticsComponent },
        ])
    ],
    declarations: [
        StatisticsComponent,
    ],
    providers: [
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class StatisticsModule { }
