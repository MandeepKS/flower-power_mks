/* --------------------------------------------
 import apiconnection is for accessing the api
 --------------------------------------------- 
 THis home.js not using in this project
 because we are rendering all the products to 
 index.html instead of just 3 products
 
 */
 import {apiUrl} from "./apiconnection.js";



 /* ---------------------------------- 
   this method is fetching the data
    from  Api
    -------------------------------*/
    export async function getRaincoats() {
 
     const response = await fetch(apiUrl);
     const rainyjackets = await response.json();
     if(!response.ok){
     alert("Error: Bad connection,Jackets data are not fetching.");   
    }
     
    /* while fetching the data from api, we are removing loading h1 element from 
       index page */
     const html_loader = document.getElementById("loading");
     html_loader.remove();
     return rainyjackets;
    
 }
 
  /* ---------------------------------------
   this method adds the data (product-card) on html page
   ---------------------------------------- */
 
 function renderRaincoat(jacketData) {
  
  const jacketElements = document.querySelector(".container-3");
  jacketElements.innerHTML += `<div class="feature-products-card">
   <img src="${jacketData.image}" alt="Raincho_Unisex_Raincoat">
   <h4 class="ftr-prdt-name">${jacketData.title}</h4>
   <p >NOK ${jacketData.price}</p>
   <!-- here is productdetail.html?id, but .html is not working on live site,so i removed here .html -->
   <a href="productdetail?id=${jacketData.id}" class="btn-yellow cart">ADD TO CART</a>
  </div>`
 }
 
 
 /* -------------------------------------------------
     this function generate list of jackets 
    ***********************************
    this method is render the list of jackets,
     with the help of forEach loop.
    ------------------------------------------------- */
 export async function renderRaincoats(listOfjackets) {
       try {
           for(let i= 0; i<3; i++){
               renderRaincoat(listOfjackets[i]);
            }
       } catch (error) {
          alert("Error : " + error);
       }
       
  }
 
 /* -------------------------------------------- 
    THis function we can say main() ,  this function will be 
     run in index.js
    --------------------------------------------  */
  export async function jacketscollectionHomePage(){
   
   /* --------------------------------------------
      with the help of (collection_of_jackets) variable
       fetched data from (getRaincoats, method),
       further stores in renderRaincoats() ,method
       for rendering. 
 
      ----------------------------------------------- */
   const collection_of_jackets = await getRaincoats();
   
   renderRaincoats(collection_of_jackets);
 }
 
 