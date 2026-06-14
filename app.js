import daftarProduk from "./data.js";

let carts = [];
const productListElement = document.getElementById("product-list");

// Menampilkan total produk di dalam array
renderProducts();

function renderProducts() {
    productListElement.innerHTML = ""; // Clear existing products
    const allProducts = daftarProduk.map(product => {
        const {id, namaProduk, kategori, harga, stok, isTersedia,
            varianWarna: [varian1, varian2],
            penilaian: { skor, jumlahUlasan},
            spesifikasi: { berat, kondisi }
         } = product;
        return `
            <div class="card">
                <h3>${namaProduk}</h3>
                <p class="price">Price: ${harga.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }) }</p>
                <small>Kategori : ${kategori}</small>
                <span class="rating">⭐${skor} , ${jumlahUlasan} ulasan</span>
                <button class="btn-add">🛒 Add to Cart</button>
            </div>

        `;
    }).join("");
    productListElement.innerHTML = allProducts;
}

function addToCart(id){
    const indexTarget = daftarProduk.findIndex((el,ind) => { ind === id});

}