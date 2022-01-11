declare var angular: angular.IAngularStatic;

import { Phone, PhoneData } from "app/core/phone/phone.service";

  class PhoneListController {
    phones: PhoneData[];
    orderProp: string;
  
    static $inject = ['Phone'];
    constructor(phone: Phone) {
      phone.query().subscribe(phones =>{
        this.phones = phones
      });
      
      this.orderProp = 'age';
    }
  
  }
  
  angular.
    module('phoneList').
    component('phoneList', {
      templateUrl: 'phone-list/phone-list.template.html',
      controller: PhoneListController
    });