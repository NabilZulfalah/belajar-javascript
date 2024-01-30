var x = prompt("masukkan nilai : ");

if(x < 40) {
    alert("nilai kamu adalah = " + x + " grade E, diajar cing baleg");
}
else if(x < 65) {
    alert("nilai kamu adalah =" + x + " grade D" );
} 
else if(x < 75) {
    alert("nilai kamu adalah =" + x + " grade C");
}
else if (x < 85) {
    alert("nilai kamu adalah =" + x + " grade B");
} 
else if(x <=100) {
    alert("nilai kamu adalah=" + x + " grade A, alus euy");
} else {
    alert("bukan angka eta mah euy");
}
