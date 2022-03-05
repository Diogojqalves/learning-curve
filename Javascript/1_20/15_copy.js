const arr1 = ['JAN', 'FEV', 'MAR'];
let arr2;
(function() {
    arr2 = [...arr1];
    arr1[0] = 'potato';
})();
console.log(arr2);