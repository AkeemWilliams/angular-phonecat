'use strict';
angular.
    module('core').
    filter('checkmark', () => {
    return function (input) {
        return (input) => input ? '\u2713' : '\u2718';
    };
});
//# sourceMappingURL=checkmark.filter.js.map