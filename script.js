document.body.innerHTML = `
    <h1>Products</h1>        
    <section class ="products-list">    
    </section>`;

async function getProducts() {
  const data = await fetch(
    "https://fakestoreapi.com/products",
    { method: "GET" }
  ); 

  const products = await data.json();

  const productContainer = document.querySelector(".products-list");  

  products.forEach((product) => {
    productContainer.innerHTML += `
    <div class = "container">
        <div class ="product-container">
          <div>
              <img class ="image" src = "${product.image}" alt = "${product.id}" />  
          </div>                   
          <div class ="specs">
              <p class ="product-title"> ${product.title}</p>
              <p class ="product-price"><span class="price"><i class="fa-solid fa-indian-rupee-sign"></i></span>${product.price}</p>
              <p class ="product-category"><span>Category:</span> ${product.category}</p>
              <p class ="product-description"> <span>Description:</span> ${product.description}</p>   
              <p class ="product-rating"><span class="rating"><i class="fa-solid fa-star"></i></span> ${product.rating.rate}</p>  
              <p class ="product-count"><span>Stocks:</span> ${product.rating.count}</p>           
          </div> 
        </div>
    </div>         
    `;
  });

  console.log(products);
}
getProducts();
