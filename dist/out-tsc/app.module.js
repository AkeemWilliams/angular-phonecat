import { __decorate } from "tslib";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { UpgradeModule } from '@angular/upgrade/static';
import { HttpClientModule } from '@angular/common/http';
import { Phone } from "./core/phone/phone.service";
let AppModule = class AppModule {
    constructor(upgrade) {
        this.upgrade = upgrade;
    }
    ngDoBootstrap() {
        this.upgrade.bootstrap(document.documentElement, ['phonecatApp']);
    }
};
AppModule = __decorate([
    NgModule({
        imports: [
            BrowserModule,
            UpgradeModule,
            HttpClientModule,
        ],
        providers: [
            Phone
        ]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map