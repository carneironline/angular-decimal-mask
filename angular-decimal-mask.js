angular.module('angularDecimalMask', [])
.directive('decimalMask', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ngModel) {
            element.on('keyup', function(e){
                var arr = ngModel.$viewValue.replace('.', '').split(""),
                    newArr = [],
                    newValue = '',
                    charErros = 0;

                angular.forEach(arr, function(char){
                    if(isNaN(char) === false) {
                        newArr.push(char);
                    }
                });

                angular.forEach(newArr, function(char, index){
                    var decimals = 2,
                        total = newArr.length;

                    if ((total > decimals && (total - decimals) == index)) {
                        newValue += '.' + char;
                    } else {
                        newValue += char;
                    }
                });

                ngModel.$setViewValue(newValue);
                ngModel.$render();
            });
        }
    };
});