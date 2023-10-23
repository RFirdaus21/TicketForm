var tujuan = document.getElementById("tujuan");
var harga = document.getElementById("harga");
var member = document.getElementById("member");
var diskon = document.getElementById("diskon");
var hasil = document.getElementById("hasil");
var jumlah = document.getElementById("jumlah");
var proceed = document.getElementById("proceed");
if (tujuan.value) {
    harga.value = hargaTiket[tujuan.value];
}

tujuan.addEventListener("change", function(){
    var kotaPilihan = tujuan.value;
    if (kotaPilihan) {
        harga.value = hargaTiket[kotaPilihan];
    } else {
        harga.value = "";
    }
});

hargaTiket = {
    "bandung" : 20000,
    "semarang": 50000,
    "sleman": 60000,
    "surabaya": 90000,
    "makassar": 150000,
    "palembang": 200000
}

member.addEventListener("change", function(){
    var harga_diskon = Number(harga.value);
    if (harga_diskon){
        diskon.value = countDiskon(harga_diskon, member);
    } else {
        diskon.value = "";
    }
});

var countDiskon = function (harga, member) {
    var diskon = 0;
    if (member.checked) {
        diskon = harga * 0.15;
    } return diskon;
}

proceed.addEventListener("click", function(event) {
    var hargaTiket = Number(harga.value);
    var jumlahTiket = Number(jumlah.value);
    var diskonMember = Number(diskon.value);

    var totalBayar = hargaTiket * jumlahTiket - diskonMember;

    hasil.value = totalBayar;

    event.preventDefault();
});

var totalBayar = function (harga, jumlah, diskon) {
    var hasil = (harga * jumlah) - diskon;
    hasil.value = hasil;
    return hasil;
}