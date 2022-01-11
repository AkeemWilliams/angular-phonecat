class PhoneDetailController {
    constructor($routeParams, phone) {
        const phoneId = $routeParams.phoneId;
        phone.get(phoneId).subscribe(data => {
            this.phone = data;
            this.setImage(data.images[0]);
        });
    }
    setImage(imageUrl) {
        this.mainImageUrl = imageUrl;
    }
}
PhoneDetailController.$inject = ['$routeParams', 'Phone'];
angular.
    module('phoneDetail').
    component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: PhoneDetailController
});
export {};
//# sourceMappingURL=phone-detail.component.js.map