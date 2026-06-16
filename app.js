import daftarProduk from "./data.js";

let carts = [];
const productListElement = document.getElementById("product-list");
const cartListElement = document.getElementById("showcart");
const cartShow = document.getElementById("cart-show");
const searchInput = document.getElementById("search-product");

// Menampilkan total produk di dalam array
renderProducts();

window.addEventListener("DOMContentLoaded",()=>{
    if(searchInput.length < 1){
        return renderProducts();
    }else{
        searchInput.addEventListener("input", (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredProducts = daftarProduk.filter(product =>
            product.namaProduk.toLowerCase().includes(searchTerm) ||
            product.kategori.toLowerCase().includes(searchTerm)
        );
        renderProducts(filteredProducts);
    });
    }
    
})

function Cart(id,quantity){
    this.id = id;
    this.quantity = quantity;
}

// Tambahkan event listener untuk semua tombol "Add to Cart"
productListElement.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-add")) {
        const id = parseInt(e.target.getAttribute("data-id"));
        addToCart(id);
    }
});

function renderProducts(productsToRender = daftarProduk) {
   
    productListElement.innerHTML = ""; // Clear existing products
    const allProducts = productsToRender.map((product,index) => {
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

    const indexTarget = daftarProduk.findIndex((el,ind) =>  ind === id);
    const qty = 1;
    const chosenProducts = daftarProduk[indexTarget];
    const itemsInCart = carts.find(item => item.id === chosenProducts.id);

    if(itemsInCart){
        itemsInCart.quantity += 1;
        renderCart()
    }else{
        carts.push(new Cart(chosenProducts.id,qty));
        cartBadge.textContent = carts.length;
        renderCart()
    }
}

//masih error, belum bisa menampilkan produk yang sudah di add to cart
function renderCart(){
    cartListElement.innerHTML = "";
    const cartList = carts.map(items => {
        const findProducts = daftarProduk.find(item => item.id === items.id);
        const total = findProducts.harga * items.quantity;

        return `
            <ul class="cart-list">
                <li class="cart-item">
                    <p><a href="#">${findProducts.namaProduk}</a></p>
                    <span>${total.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</span>
                    <span>Quantity: ${items.quantity}</span>
                    <button class="btn-remove" data-id="${items.id}">Hapus</button>
                </li>
            </ul>
        `;
    }).join("");
    cartListElement.innerHTML = cartList;
    const btnPay = document.createElement("button");
    btnPay.textContent = "Proccess to Payment";
    btnPay.classList.add("btn-payment");
    cartListElement.appendChild(btnPay);
}

cartShow.addEventListener("click", (e) => {
    e.preventDefault();
    cartListElement.classList.toggle("display-none");
    renderCart();
});