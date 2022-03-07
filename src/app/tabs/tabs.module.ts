import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule, NativeScriptRouterModule, NSEmptyOutletComponent } from "@nativescript/angular";
import { NativeScriptMaterialBottomNavigationModule } from '@nativescript-community/ui-material-bottom-navigation/angular';

import { TabsComponent } from "./tabs.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        NativeScriptMaterialBottomNavigationModule,
        NativeScriptRouterModule.forChild([
            {
                path: "default", component: TabsComponent, children: [
                    {
                        path: "players",
                        outlet: "playerTab",
                        component: NSEmptyOutletComponent,
                        loadChildren: () => import("./../player/players.module").then(m => m.PlayersModule),
                    },
                    {
                        path: "teams",
                        outlet: "teamTab",
                        component: NSEmptyOutletComponent,
                        loadChildren: () => import("./../team/teams.module").then(m => m.TeamsModule),
                    },
                    {
                        path: "statistics",
                        outlet: "statisticsTab",
                        component: NSEmptyOutletComponent,
                        loadChildren: () => import("./../statistics/statistics.module").then(m => m.StatisticsModule),
                    },
                    {
                        path: "profile",
                        outlet: "profileTab",
                        component: NSEmptyOutletComponent,
                        loadChildren: () => import("./../profile/profile.module").then(m => m.ProfileModule),
                    }

                ]
            }
        ])
    ],
    declarations: [
        TabsComponent
    ],
    providers: [
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class TabsModule { }