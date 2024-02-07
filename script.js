let quote = document.getElementById("quote")
let author = document.getElementById("author")

let togglebtn = document.getElementById("toggle-btn")
let quotebox = document.getElementById("quote-box")


const api_url =" https://api.quotable.io/random"
async function getQuote(url){
    const response = await fetch(url)
    var data = await response.json()
    console.log(data);
    quote.innerHTML = data.content
    author.innerHTML = data.author
    
}

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=Hello%20world",
    "Tweet Window","width=600, height=300")
}

getQuote(api_url);


