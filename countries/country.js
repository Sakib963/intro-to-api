const getValue = () => {
    const dropdown = document.getElementById('selected-value');
    const region = dropdown.value;
    getCountryByRegion(region)
}

const getCountryByRegion = async(region) => {
    const url = `https://restcountries.com/v3.1/region/${region}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data)

        displayCountry(data);
    } catch (error) {
        console.log(error)
    }
}

const getCountryByCapital = async(capital) =>{
    const url = `https://restcountries.com/v3.1/capital/${capital}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data)

        displayCountry(data); 
    } catch (error) {
        console.log(error)
    }
}

const getCountryByLanguage = async(language) => {
    const url = `https://restcountries.com/v3.1/lang/${language}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data)

        displayCountry(data); 
    } catch (error) {
        console.log(error)
    }
}

const capitalButton = document.getElementById('capital-button').addEventListener('click', function(){
    const capitalKey = document.getElementById('capital-input-field').value;
    getCountryByCapital(capitalKey);
})

const languageButton = document.getElementById('language-button').addEventListener('click', function(){
    const language = document.getElementById('language-input-field').value;
    getCountryByLanguage(language);
})

const displayCountry = (countries) => {
    const countryContainer = document.getElementById('country-container');
    countryContainer.innerHTML = '';
    for(const country of countries){
        const div = document.createElement('div');
        div.classList.add('card', 'card-compact', 'bg-base-100', 'shadow-xl')
        const countryName = country['name']['common'];
        const countryCapital = country['capital'][0];
        const countryLanguage = Object.values(country['languages']).join(', ');
        const countryPopulation = country['population']
        const countryRegion = country['region']
        const countryImage = country['flags']['png']
        
        div.innerHTML = `
        <figure><img src="${countryImage}" class="mt-4"/></figure>
        <div class="card-body">
          <h2 class="card-title">Country Name: ${countryName}</h2>
          <h2 class="text-lg">Capital City: ${countryCapital}</h2>
          <h2 class="text-lg">Region: ${countryRegion}</h2>
          <p>Languages: ${countryLanguage}</p>
          <p>Population: ${countryPopulation}</p>
        </div>
        `
        countryContainer.appendChild(div);
    }
}