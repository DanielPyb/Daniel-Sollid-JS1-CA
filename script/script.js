
const url= "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=yAqTGlwZaUNc87lEWTS3DDdcugw7sSDB"
const bookList = document.querySelector(".book-list")

function HTMLbooks(arr){
    bookList.innerHTML = "";
    for(let i = 0; i < 6; i++){
        bookList.innerHTML += 
        `<div class="card">
            <h2 class="title">${arr.results.books[i].title}</h2>
            <h4>Written by ${arr.results.books[i].author}</h4>
            <img src="${arr.results.books[i].book_image}"></img>
            <a href="details.html?book=${arr.results.books[i].title}">Read more here</a>
        </div>`
    }
}

async function getQuestion() {
    try{
    const response = await fetch(url);
    const results = await response.json();
    HTMLbooks(results);
    }
    catch(error){
        bookList.innerHTML = "Error " + error
    }
}

getQuestion();

