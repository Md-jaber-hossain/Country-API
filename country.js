function countryUpdate(){
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountry(data));
};
countryUpdate();

function displayCountry(countries){
    const countriesId = document.getElementById('countries');
    for(const country of countries){
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('country-style')
        div.innerHTML = `<h3>Name: ${country.name}</h3>
        <p>Capital: ${country.capital}</p>
        <p>Region: ${country.region}</p>
        <button onclick="countryByName('${country.name}')">Search</button>`;
        countriesId.appendChild(div);
    }
};

function countryByName(searchByName){
    url = `https://restcountries.eu/rest/v2/name/${searchByName}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetails(data));
};

function displayCountryDetails(data){
    const countryDetailId = document.getElementById('country-details');
    countryDetailId.textContent = '';
    const div = document.createElement('div');
    div.innerHTML = `
    <p>Capital: ${data[0].capital}</p>
    <p>Region: ${data[0].region}</p>
    <img width="200px" src="${data[0].flag}" alt="">`;

    countryDetailId.appendChild(div)
}