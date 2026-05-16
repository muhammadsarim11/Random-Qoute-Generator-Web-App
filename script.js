let quote = document.getElementById("quote");
let author = document.getElementById("author");

let togglebtn = document.getElementById("toggle-btn");

const api_url = "https://dummyjson.com/quotes/random";

// Function to get random quote
async function getQuote(url) {

    try {

        const response = await fetch(url);

        // Convert JSON data into JS object
        const data = await response.json();

        console.log(data);

        // Show quote and author
        quote.innerHTML = data.quote;
        author.innerHTML = data.author;

    } catch (error) {

        quote.innerHTML = "Failed to load quote";
        author.innerHTML = "";

        console.log(error);
    }
}

// Get first quote when page loads
getQuote(api_url);

// Get new quote on every button click
togglebtn.addEventListener("click", () => {
    getQuote(api_url);
});


// Tweet function
function tweet() {

    window.open(
        `https://twitter.com/intent/tweet?text=${quote.innerHTML} -- ${author.innerHTML}`,
        "Tweet Window",
        "width=600,height=300"
    );

}
