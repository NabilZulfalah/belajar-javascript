var x = "25";
var y = "3.14";

var toNum = parseInt(x);
var toFloat = parseFloat(y);
var toString = toNum.toString();
console.log(toString + toString);
// fungsoi deklarasi
function jumlah (a, b) {    
    return a + b;
}
// fungsi ekspresoy
var kurang = function kurang (a, b) {   
    return a - b;
}

alert(jumlah(5, 20));
alert(kurang(20,10));