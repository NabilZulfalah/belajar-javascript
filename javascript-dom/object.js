var siswa =new Object();
siswa.namadepan = "nabil";
siswa.namabelakang = "zulfalah";
siswa.alamat = "bandung";
siswa.namalengkap = function() {
    return this.namadepan + " " + this.namabelakang;
};

alert("Nama : " +siswa.namalengkap());

// function namalengkap () {

// }