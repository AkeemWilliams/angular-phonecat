class PhoneListController {
    constructor(phone) {
        phone.query().subscribe(phones => {
            this.phones = phones;
        });
        this.orderProp = 'age';
    }
}
PhoneListController.$inject = ['Phone'];
angular.
    module('phoneList').
    component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: PhoneListController
});
export {};
//# sourceMappingURL=phone-list.component.js.map