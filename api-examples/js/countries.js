const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {
    const countryContainer = document.getElementById('all-countries')
    // for(const country of countries){
    //     console.log(country['name'])
    //     const h1 = document.createElement('h1');
    //     h1.innerText = country['name']
    //     countryContainer.appendChild(h1)
    // }
    
    countries.forEach(country => {
        const countryDiv = document.createElement('div')
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
            <h3>Name: ${country['name']}</h3>
            <img src="${country['flag']}" class="img-container"">
            <button onclick="loadCountryDetails('${country['alpha2Code']}')">Details</button>
        `
        countryContainer.appendChild(countryDiv)
    });
}

const loadCountryDetails = code => {
    // https://restcountries.com/v2/alpha/{code}
    const url = `https://restcountries.com/v2/alpha/${code}`
    // console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => showCountryDetail(data))
}

const showCountryDetail = country => {
    const detailsContainer = document.getElementById('country-detail');
    detailsContainer.innerHTML = `
        <h3>Name: ${country['name']}</h3>
        <img src="${country['flag']}" class="img-container"">
    `
}

loadCountries()