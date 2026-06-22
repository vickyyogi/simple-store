import daftarProduk from "./data.js";

let carts = [];
const productListElement = document.getElementById("product-list");
const cartListElement = document.getElementById("showcart");
const cartShow = document.getElementById("cart-show");
const searchInput = document.getElementById("search-product");
const filterProducts = document.getElementById("filter-category");
const sortProducts = document.getElementById("sort-products");

// Menampilkan total produk di dalam array
renderProducts();

window.addEventListener("DOMContentLoaded",()=>{
    if(searchInput.length < 1){
        renderProducts();
        setFilter();
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

//constructor
function Cart(id,quantity){
    this.id = id;
    this.quantity = quantity;
}

function renderProducts(productsToRender = daftarProduk) {
   
    productListElement.innerHTML = ""; // Clear existing products
    const allProducts = productsToRender.map(product => {
        
        //destructuring 
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
                <button class="btn-add" data-id="${id}">🛒 Add to Cart</button>
            </div>

        `;
        return showData; 
    }).join("");
    productListElement.innerHTML = allProducts;
}

// Tambahkan event listener untuk semua tombol "Add to Cart"
productListElement.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-add")) {
        const id = e.target.getAttribute("data-id");
        addToCart(id);
    }
});

function addToCart(id){
    const cartBadge = document.getElementById("cart-badge");

    const targetID = daftarProduk.find(item =>  item.id === id);
    const qty = 1;
    const itemsInCart = carts.find(item => item.id === targetID.id);

    if(itemsInCart){
        itemsInCart.quantity += 1;
        renderCart();
    }else{
        carts.push(new Cart( targetID.id, qty ));
        cartBadge.textContent = carts.length;
        renderCart();
    }
}


//menampilkan product yang ada di keranjang
function renderCart() {
    cartListElement.innerHTML = "";
    
    // Buat wadah utama
    const ul = document.createElement("ul");
    ul.className = "cart-list";

    carts.forEach(items => {
        const findProducts = daftarProduk.find(item => item.id === items.id);
        const total = findProducts.harga * items.quantity;

        const li = document.createElement("li");
        li.className = "cart-item";
        li.innerHTML = `
            <p>${findProducts.namaProduk}</p>
            <span>${total.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</span>
            <input type="number" min="1" value="${items.quantity}" data-id="${items.id}" class="input-quantity">
            <button class="btn-remove" data-id="${items.id}">Hapus</button>
        `;
        ul.appendChild(li);
    });

    cartListElement.appendChild(ul);
    
    // Tambahkan tombol payment
    const btnPay = document.createElement("button");
    btnPay.textContent = "Proccess to Payment";
    btnPay.classList.add("btn-payment");
    cartListElement.appendChild(btnPay);
}

//event listener untuk quantity
cartListElement.addEventListener("change",(e)=>{
    if(e.target.classList.contains("input-quantity")){
        const id = e.target.getAttribute("data-id");
        const newQuantity = parseInt(e.target.value)
        const findProducts = carts.find(item => item.id === id);
        if(findProducts){
            findProducts.quantity = newQuantity;
            renderCart();
        }
    }
})

//togle keranjang
cartShow.addEventListener("click", (e) => {
    e.preventDefault();
    cartListElement.classList.toggle("display-none");
    renderCart();
});

// Event listener untuk tombol "Hapus" di dalam keranjang
cartListElement.addEventListener("click", (e) => {
    const cartBadge = document.getElementById("cart-badge");
    if(e.target.classList.contains("btn-remove")){
        const id = parseInt(e.target.getAttribute("data-id"));
        const indexInCart = carts.find(item => item.id === id);

        if(!indexInCart){
            carts.splice(indexInCart, 1);
            cartBadge.textContent = carts.length;
            renderCart();
        }
    }

});

//membuat array kategori untuk filter
const categories = [...new Set(daftarProduk.map(product => product.kategori))];
categories.unshift("All"); // Menambahkan opsi "All" di awal array

//menampilkan filter untuk kategori
const setFilter = () => {
    filterProducts.innerHTML = "";

    const listCategories = categories.map(list => {
        return `
                <option value="${list}">${list}</option>
        `;
    }).join("");
    filterProducts.innerHTML = listCategories
}

setFilter();

filterProducts.addEventListener("change",(e)=>{
    const filterTerm= e.target.value;
    const findFilter = daftarProduk.filter(product => product.kategori === filterTerm);
    if(filterTerm === "All"){
        renderProducts();
    } else {
        console.log(findFilter)
        renderProducts(findFilter);
    }
});

sortProducts.addEventListener("change",(e)=>{
    const sortRange = e.target.value;
    console.log(sortRange)
    switch (sortRange) {
        case "price-low-high":
                const sorta = daftarProduk.sort((a,b) => a.harga - b.harga);
                renderProducts(sorta);
            break;
        case "price-high-low":
                const sortb = daftarProduk.sort((a,b) => b.harga - a.harga);
                renderProducts(sortb);
            break;
        case "rating":
                const sortRating = daftarProduk.sort((a,b) => b.penilaian.skor - a.penilaian.skor);
                renderProducts(sortRating)
            break;
    
        default:
            renderCart();
    }
})