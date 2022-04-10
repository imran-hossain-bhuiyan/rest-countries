const loadCountries= () =>{
    fetch('https://restcountries.com/v2/all')
    .then(res=> res.json())
    .then(data => displayCountries(data))
};

const displayCountries = countries =>{
    console.log(countries);
    const countriesHTML = countries.map(country => getCountryHTML(country));
    const showCounrty = document.getElementById('countries');
    showCounrty.innerHTML = countriesHTML.join(' ');
};
const getCountryHTML = country =>{
    return(
        `
        <div class='styles'>
            <img src="${country.flags.png}" alt="">
            <h3 class='MtextStyle'>Country Name: ${country.name}</h3>
            <h4 class='textStyle'>Capital: ${country.capital}</h4>
            <h4 class='textStyle'>Region: ${country.region}</h4>
            
        </div>
        `
    )
};
loadCountries();