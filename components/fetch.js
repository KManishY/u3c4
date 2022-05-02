
let searchNews = async (url) => {
      try {
            let res = await fetch(url);
            let data = await res.json();
            console.log(data);
            return data;
      }
      catch (err) {
            console.log('err: ', err);
            
      }
}
function appendData(data, results) {
      data.forEach((el) => {
            let news_div = document.createElement('div');
            news_div.setAttribute("class", "news");
            let imgDiv = document.createElement('div');
            let img = document.createElement('img');
            img.src = el.urlToImage;
            imgDiv.append(img);
            let content_div = document.createElement('div');
            let title = document.createElement('h2');
            title.innerText = el.title;
            let des = document.createElement('p');
            des.innerText = el.description;
            content_div.append(title, des);
            
            news_div.append(imgDiv, content_div);
            news_div.addEventListener("click", function () {
                  displayB(el);
            })

            results.append(news_div);
            
      })
}
let arr = [];
function displayB(el) {
      window.location.href = ("./news.html");
      arr.push(el);
      localStorage.setItem("news",JSON.stringify(arr));
}
export { searchNews,appendData};