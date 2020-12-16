//
(function () {
    var PERSON = /** @class */ (function () {
        function PERSON(a, b) {
            this.fir = a;
            this.las = b;
            this.all = this.fir + '---' + this.las;
        }
        return PERSON;
    }());
    var p = new PERSON('诸葛', '金');
    function iii(oo) {
        return oo.fir + oo.las + '===' + oo.all;
    }
    console.log(iii(p));
})();
