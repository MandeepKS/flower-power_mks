/* --------------------------------------------
 import apiconnection is for accessing the api
 --------------------------------------------- */
 import {apiUrl} from "./apiconnection.js";



 /* ---------------------------------- 
   this method is fetching the data
    from  Api
    -------------------------------*/
    export async function getRaincoat(id) {
      
        
        const response = await fetch(apiUrl + id);
        const rainyjacket = await response.json();
        if(!response.ok){
          alert("Error: Bad connection, Jacket id is not fetching the data.");  
        }

         /* while fetching the data from api, we are removing loading h1 element from 
       productdetail page */
       const html_loader = document.getElementById("loading");
       html_loader.remove();
        return rainyjacket;
 }

  /* ---------------------------------------
  this method adds the data(product-cards) on html page
  ---------------------------------------- */

  function renderRaincoat(jacketData) {
    
    /* Order preview Image section */
    const jacketImage = document.querySelector(".order-preview");
    jacketImage.innerHTML += `<img src="${jacketData.image}" alt="Noir_Femme_Raincoat">`;
    

    /* Order preview detail */
    const jacketElements = document.querySelector(".order-preview-product-detail");
     jacketElements.innerHTML += 
     
     `<h2 class="checkout-produt-title">${jacketData.title}</h2>
     <p class="checkout-prodt-size">Size: S</p>
     <p class="checkout-prodt-color">Color: ${jacketData.baseColor} Blue</p>
     <p class="checkout-prodt-quantity">Quantity: 1</p>
     <h3 class="checkout-prodt-price">NOK ${jacketData.price}</h3>
    <hr>
    <p class="checkout-prodt-shipping">Shipping : <span class="shipping-free">Free</span></p>
    <h4 class="checkout-prodt-total-price">Total <span class="price-in-krone">NOK ${jacketData.price}</span></h4>
    <a href="collection" class="btn-outeryellow checkout-button">CONTINUE SHOPPING</a>`;
   }


/* -------------------------------------------- 
    THis function we can say main() ,  this function will be 
     run in index.js
    --------------------------------------------  */
    
 export async function checkoutPage(){
    //make new url objects from web address-bar

    try {
      const url = new URL(location.href);
      const id = url.searchParams.get("id");
      if(id === null || id === 0){
        const jacketCartEmpty = document.querySelector(".order-preview-product-detail");
        jacketCartEmpty.innerHTML += `<h2 class="checkout-produt-title">Cart is empty</h2>`;
        
        const html_loader = document.getElementById("loading");
        html_loader.remove();
        return;
      }
      const single_jacket = await getRaincoat(id);
      renderRaincoat(single_jacket);
    } catch (error) {
      
      alert("Error : "  + error);
    }
   
    
  }


 