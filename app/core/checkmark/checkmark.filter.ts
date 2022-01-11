'use strict';

angular.
  module('core').
  filter('checkmark', () => {
    return function(input) {
      return (input:boolean) => input ? '\u2713' : '\u2718';
    };
  });
