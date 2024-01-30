var siswa = new Object();
siswa.namaDepan = "Nabil";
siswa.namaBelakang = "Zulfalah";
siswa.alamat = "Bandung";
siswa.namalengkap = function() {
    return this.namaDepan + " " + this.namaBelakang;
};

//cara ke-2
var siswa2 = {
    namadepan : "Teti",
    namabelakang : "Simatupang",
    umur : "100",
    namalengkap : function() {
        return siswa2.namadepan + " " + siswa2.namabelakang;
    }
};

alert("Nama kamu pasti " +siswa.namalengkap());
alert("dan alamat kamu pasti di " + siswa.alamat + " yaa");
alert("Nama kamu pasti " +siswa2.namalengkap());


// function namalengkap () {

// }

//kalau manggil function harus pake () lagi, seperti function nya







// var siswa =new Object();
// siswa.namadepan = "nabil";
// siswa.namabelakang = "zulfalah";
// siswa.alamat = "bandung";
// siswa.namalengkap = function() {
//     return this.namadepan + " " + this.namabelakang;
// };