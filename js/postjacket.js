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
    
    const jacketElements = document.querySelector(".productdetail-container-1");
     jacketElements.innerHTML += `<div class="prodt-detail">
     <img src="${jacketData.image}" alt="Raincho_Unisex_Raincoat"></div>
     <div class="prodt-description">
     <h1 class="prodt-title">${jacketData.title}</h1>
     <h3 class="prodt-price">NOK ${jacketData.price}</h3>
     <h5 class="prodt-tax-detail">inc. all taxes and duties</h5>
     <p class="prodt-desc">${jacketData.description}</p>
     <label for="color-option">COLOR:</label><br>
     <select name="color-option" id="color-option">
             <option value="${jacketData.baseColor}">${jacketData.baseColor}</option>
     </select>
     <span class="prodt-size">
                            <a href="#">${jacketData.sizes[0]}</a>
                            <a href="#">${jacketData.sizes[1]}</a>
                            <a href="#">${jacketData.sizes[2]}</a>
                            <a href="#">${jacketData.sizes[3]}</a>
                            <a href="#">${jacketData.sizes[4]}</a>
                            <a href="#">${jacketData.sizes[5]}</a>
                        </span>
     <a href="checkout.html?id=${jacketData.id}" class="btn-yellow product-btn">ADD TO CART</a>
    </div>`
   }


/* -------------------------------------------- 
    THis function we can say main() ,  this function will be 
     run in index.js
    --------------------------------------------  */
    
 export async function jacketPage(){
    //make new url objects from web address-bar

    try {
      const url = new URL(location.href);
      const id = url.searchParams.get("id");
      const single_jacket = await getRaincoat(id);
      renderRaincoat(single_jacket);
    } catch (error) {
      
      alert("Error : "  + error);
    }
   
    
  }


 