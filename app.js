import daftarProduk from "./data.js";

let carts = [];
const productListElement = document.getElementById("product-list");
const cartListElement = document.getElementById("showcart");
const cartShow = document.getElementById("cart-show");

// Menampilkan total produk di dalam array
renderProducts();

// Tambahkan event listener untuk semua tombol "Add to Cart"
productListElement.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-add")) {
        const id = parseInt(e.target.getAttribute("data-id"));
        addToCart(id);
    }
});

function renderProducts() {
    productListElement.innerHTML = ""; // Clear existing products
    const allProducts = daftarProduk.map((product,index) => {
        const {id, namaProduk, kategori, harga, stok, isTersedia,
            varianWarna: [varian1, varian2],
            penilaian: { skor, jumlahUlasan},
            spesifikasi: { berat, kondisi }
         } = product;

         const showData = `
            <div class="card">
                <h3><a href="#">${namaProduk}</a></h3>
                <p class="price">Price: ${harga.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }) }</p>
                <small>Kategori : ${kategori}</small>
                <span class="rating">⭐${skor} , ${jumlahUlasan} ulasan</span>
                <button class="btn-add" data-id="${index}">🛒 Add to Cart</button>
            </div>

        `;
        return showData; 
    }).join("");
    productListElement.innerHTML = allProducts;
}

function addToCart(id){
    const cartBadge = document.getElementById("cart-badge");

    const indexTarget = daftarProduk.findIndex((el,ind) => { ind === id});
    carts.push(indexTarget);
    cartBadge.textContent = carts.length;
}

//masih error, belum bisa menampilkan produk yang sudah di add to cart
function renderCart(){
    cartListElement.innerHTML = "";
    const cartItems = carts.map((cartId) => {
        const { namaProduk, harga } = daftarProduk[cartId];
        return `
            <li class="cart-item">
                <span>${namaProduk}</span>
                <span>${harga.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }) }</span>
            </li>
        `;
    }).join("");
    cartListElement.innerHTML = cartItems;
}

cartShow.addEventListener("click", (e) => {
    e.preventDefault();
    cartListElement.classList.toggle("display-none");
    renderCart();
});