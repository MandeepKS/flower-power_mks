/* --------------------------------------------
 import apiconnection is for accessing the api
 --------------------------------------------- */
import {apiUrl} from "./apiconnection.js";



/* ---------------------------------- 
  this method is fetching the data
   from  Api
   -------------------------------*/
   export async function getRaincoats() {
     
    const response = await fetch(apiUrl);
    const rainyjackets = await response.json();
   
    
    if (!response.ok) 
    {
      alert("Error: Bad connection,Jackets data are not fetching.");  
    }

     /* while fetching the data from api, we are removing loading h1 element from 
       collection page */
       const html_loader = document.getElementById("loading");
       html_loader.remove();
    return rainyjackets;
   
}

 /* ---------------------------------------
  this method adds the product-card to html page
  ---------------------------------------- */

function renderRaincoat(jacketData) {
   
const image_alt = jacketData.images[0].alt;
const flower_img = jacketData.images[0].src;
const flower_price = jacketData.prices.price/100;

 const jacketElements = document.querySelector(".container-3");
  jacketElements.innerHTML += `<div class="feature-products-card">
  <img src="${flower_img}" alt="${image_alt}">
  <h4 class="ftr-prdt-name">${jacketData.name}</h4>
  <p >NOK ${flower_price}</p>
  
  <!-- here is productdetail.html?id, but .html is not working on live site,so i removed here .html -->
  
  <a href="productdetail?id=${jacketData.id}" class="btn-yellow cart">ADD TO CART</a>
 </div>`
}


/* -------------------------------------------------
    this method is render the list of jackets,
    with the help of forEach loop.
    ***********************************
    this function generate list of jackets
   ------------------------------------------------- */
export async function renderRaincoats(listOfjackets) {
  try {
       listOfjackets.forEach(renderRaincoat);
  } catch (error) 
  {
     alert("Error: " + error);
  }
 
 }

 /* -------------------------------------------- 
    THis function we can say main() ,  this function will be 
     run in index.js
    --------------------------------------------  */
 export async function jacketscollectionPage(){
  
  /* --------------------------------------------
     with the help of (collection_of_jackets) variable
      fetched data from (getRaincoats, method),
      further stores in renderRaincoats() ,method
      for rendering. 

     ----------------------------------------------- */
  const collection_of_jackets = await getRaincoats();
  renderRaincoats(collection_of_jackets);
}

