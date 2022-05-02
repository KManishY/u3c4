// Ude Import export (MANDATORY)
import navbar from "../components/nevbar.js";
document.getElementById("navbar").innerHTML = navbar();


// let arr = JSON.parse(localStorage.getItem("search"))
let read = (ids) => {
      return document.getElementById(ids);
}



let news = JSON.parse(localStorage.getItem("news"));
let details = read("detailed_news");

news.map(({ urlToImage, title, description })=> {
      let img = document.createElement("img");
      img.src = urlToImage;
      let name = document.createElement("h3");
      name.innerText = title;
      let des = document.createElement("p")
      des.innerText = description;
      details.append(img,name,des)
});