const loadQuote2 = async() => {
    try {
        const res = await fetch('https://api.kanye.rest/')
        const data = await res.json();
        displayQuote(data)
    } catch (error) {
        console.log(error)
    }
}

const loadQuote = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(quote => displayQuote(quote));
}
loadQuote();
const displayQuote = (quote) => {
    const quoteField = document.getElementById('quote');
    quoteField.innerText = quote['quote'];
}
const bondCode=` I am Fake James bond . My new code is: 00${7+1+2}`
// console.log(bondCode)
const data={ result: [ {userName: {title:'Mr.',name:"sakib khan"} } ] }
// console.log(data.result[0].userName.name)
const url = `https://www.themealdb.com/api/json/v1/1/search.php?s={food}` 
const array = { hobbies: ["dancing", "singing", "acting"] };
console.log(JSON.stringify(array));