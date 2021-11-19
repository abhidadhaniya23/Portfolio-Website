// first of all made this xhr object for http request from server...
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.covid19api.com/summary', true);

xhr.onload = function () {

    document.querySelector('footer').style.display = 'block';

    // when data loaded then animation display none...
    document.querySelector('.loadingio-spinner-dual-ball-xoxuohfn7zk').style.display = 'none';


    // if status ok then ....
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        // console.log(json);

        let country = document.getElementById('countryData');
        Array.from(json.Countries).forEach(function (element) {

            let activeCases = parseInt(element.TotalConfirmed) - (parseInt(element.TotalDeaths) + parseInt(element.TotalRecovered));
            let activeCasesIndia = parseInt(json.Countries[76].TotalConfirmed) - (parseInt(json.Countries[76].TotalDeaths) + parseInt(json.Countries[76].TotalRecovered));
            let activeCasesGlobal = parseInt(json.Global.TotalConfirmed) - (parseInt(json.Global.TotalDeaths) + parseInt(json.Global.TotalRecovered));

            country.innerHTML += `
                <div class="container" id="${element.Country}">
                    <div class="country-data">
                        <h4 class="country">${element.Country}</h4>
                        <p>New Cases : ${numberWithCommas(element.NewConfirmed)}</p>
                        <p>New Deaths : ${numberWithCommas(element.NewDeaths)}</p>
                        <p>Active Case : ${numberWithCommas(activeCases)}</p>
                        <p>Deaths : ${numberWithCommas(element.TotalDeaths)}</p>
                        <p>Recovered : ${numberWithCommas(element.TotalRecovered)}</p>
                    </div>
                </div>
            `;

            let topCases = document.querySelector('.india-vs-global');
            topCases.innerHTML = `
                <div class="data">
                    <h4 class="country">Global</h4>
                    <p>New Cases : ${numberWithCommas(json.Global.NewConfirmed)}</p>
                    <p>New Deaths : ${numberWithCommas(json.Global.NewDeaths)}</p>
                    <p>Active Case : ${numberWithCommas(activeCasesGlobal)}</p>
                    <p>Deaths : ${numberWithCommas(json.Global.TotalDeaths)}</p>
                    <p>Recovered : ${numberWithCommas(json.Global.TotalRecovered)}</p>
                </div>
                <h1>V/S</h1>
                <div class="data">
                    <h4 class="country">India</h4>
                    <p>New Cases : ${numberWithCommas(json.Countries[76].NewConfirmed)}</p>
                    <p>New Deaths : ${numberWithCommas(json.Countries[76].NewDeaths)}</p>
                    <p>Active Case : ${numberWithCommas(activeCasesIndia)}</p>
                    <p>Deaths : ${numberWithCommas(json.Countries[76].TotalDeaths)}</p>
                    <p>Recovered : ${numberWithCommas(json.Countries[76].TotalRecovered)}</p>
                </div>
            `;
        });

        // notice for last time updated...
        let updatedTime = document.getElementById('updatedTime');
        updatedTime.innerHTML = `This data updated on : <b>${json.Date}</b>`

        // create working search...
        let userInput = document.getElementById('userInput');
        Array.from(json.Countries).forEach(function (element) {

            let properCountry = document.getElementById(`${element.Country}`);
            userInput.addEventListener('input', () => {

                let countryName = element.Country.toLowerCase();

                if (countryName.includes(userInput.value.toLowerCase())) {
                    properCountry.style.display = 'block';
                }
                else {
                    properCountry.style.display = 'none';
                }
            });
        })
    }
    else {
        console.error('failed to load data....');
    }
}
xhr.send();

// function numberWithCommas(x) {
//     x = x.toString();
//     var pattern = /(-?\d+)(\d{3})/;
//     while (pattern.test(x))
//         x = x.replace(pattern, "$1,$2");
//     return x;
// }

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}