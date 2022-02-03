function data() {
    var sepatu = {
        brand: "Nike",
        harga: 2000000,
        ukuran: 42,
        stok: 16

    }

    for (var x in sepatu) {
        console.log(sepatu[x])
    }
}
data()