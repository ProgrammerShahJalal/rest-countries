const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(data => displayCountries(data))
}
const displayCountries = countries => {
    console.log(countries);
    const container = document.getElementById("countries");
    const getCountryHTML = country => {
        const { name, capital, nativeName, population, flag } = country;
        return `
        <div class = "country">
        <h2>${name}</h2>
        <h4>Capital: ${capital}</h4>
        <h4>Native Name: ${nativeName}</h4>
        <h4>Population: ${population}</h4>
        <div class = "image">
        <img src= "${flag}">
        </div>
        </div>
        `;
    }
    const countryHTML = countries.map(country => getCountryHTML(country));
    container.innerHTML = countryHTML.join(' ');
    console.log(countryHTML);
}
loadCountries();
