//接口 一种约束
(function () {
    function yy(oo) {
        return oo.firsrName + '___' + oo.lastName;
    }
    yy({ firsrName: 'Jay', lastName: 'Chou' });
})();
