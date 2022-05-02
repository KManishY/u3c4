// Ude Import export (MANDATORY)
import navbar from "../components/nevbar.js";
document.getElementById("navbar").innerHTML = navbar();



// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { searchNews, appendData } from "../components/fetch.js";

function search(e) {
      if (e.key == "Enter") {
            let search_input = document.getElementById("search_input").value;
            var url = `https://masai-mock-api.herokuapp.com/news?q=${search_input}`;
            searchNews(url).then((data) => {
                  console.log(data);
                  let results = document.getElementById("results");
                  results.innerHTML = null;
                  appendData(data.articles, results);
            });
      }
}
document.getElementById("search_input").addEventListener("keydown", search);

