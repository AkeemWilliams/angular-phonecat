import { __decorate } from "tslib";
import { downgradeInjectable } from '@angular/upgrade/static';
import { Injectable } from "@angular/core";
let Phone = class Phone {
    constructor(http) {
        this.http = http;
    }
    query() {
        return this.http.get(`phones/phones.json`);
    }
    get(id) {
        return this.http.get(`phones/${id}.json`);
    }
};
Phone = __decorate([
    Injectable()
], Phone);
export { Phone };
angular.module('core.phone')
    .factory('phone', downgradeInjectable(Phone));
//# sourceMappingURL=phone.service.js.map