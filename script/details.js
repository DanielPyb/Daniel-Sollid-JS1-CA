const detailedBook = document.querySelector(".detailed-book")
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const bookID = params.get("book");

document.title = bookID


const url = "https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?title=" + bookID + "&api-key=yAqTGlwZaUNc87lEWTS3DDdcugw7sSDB"


async function getDetails() {
    try{
    const response = await fetch(url);
    const results = await response.json();
    createDetails(results);
    }
    catch(error){
        detailedBook.innerHTML = "Error " + error
    }
}

function createDetails(info){
    detailedBook.innerHTML = "";
    detailedBook.innerHTML += 
    `<div class="card">
        <h2 class="title">${info.results[0].title}</h2>
        <p>Written by ${info.results[0].author}</p>
        <p>${info.results[0].description}</p>
        <p>Published by ${info.results[0].publisher}</p>
    </div> `
}

getDetails();