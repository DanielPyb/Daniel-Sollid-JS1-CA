const detailedBook = document.querySelector(".detailed-book")
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
// BookID will be the title of the book
const bookID = params.get("book");

document.title = bookID

//the previous endpoint will not let one burrow further into the API so I had to use a different endpoint to find details of the book
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