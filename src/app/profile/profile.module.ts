
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { ProfileComponent } from "./profile.component";
import { NativeScriptCommonModule, NativeScriptRouterModule } from "@nativescript/angular";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild([
            { path: "", redirectTo: "profile" },
            { path: "profile", component: ProfileComponent },
        ])
    ],
    declarations: [
        ProfileComponent,
    ],
    providers: [
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class ProfileModule { }
