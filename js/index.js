import { jacketscollectionHomePage } from "./home.js";
import { jacketPage } from "./postjacket.js";
import { jacketscollectionPage } from "./postjackets.js";
import { checkoutPage } from "./checkout.js";



/* "/" is index or home page on live server */
if(location.pathname === "/" || location.pathname === "/index.html")
{
  //jacketscollectionHomePage();
  jacketscollectionPage();
}

if(location.pathname === "/collection" || location.pathname === "/collection.html")
{
  jacketscollectionPage();

}


if(location.pathname === "/productdetail" || location.pathname === "/productdetail.html")
{
 
  jacketPage();
}


if(location.pathname === "/checkout.html" || location.pathname === "/checkout")
{
  checkoutPage();
}