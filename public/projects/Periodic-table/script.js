const xhr = new XMLHttpRequest();

xhr.open('GET', 'Periodic-table.JSON', true);

xhr.onload = function () {

    document.getElementById('loadingAnimation').style.display = 'none';
    document.querySelector('footer').style.display = 'block';

    let json = JSON.parse(this.responseText);

    // data
    let allElements = document.querySelector('.allElements');

    Array.from(json.elements).forEach(function (e, index) {

        allElements.innerHTML += `

        <div class="element" id='${index}' onclick='showDetails(this.id)' style='border:1px solid #${e.cpkhex};'>
            <p class='atomicNumber'>${e.number}</p>
            <p class='symbol' style='color:#${e.cpkhex};'>${e.symbol}</p>
            <p class='name'>${e.name}</p>
            <p class='atomicWeight'>${e.atomic_mass.toFixed(3)}</p>
        </div>

        <div class="elementDetails" id='properElement${index}'>
            <div class="elementData" style='border-color:#${e.cpkhex};'>
                <p class='atomicNumber'>${e.number}</p>
                <p class='symbol' style='color:#${e.cpkhex};'>${e.symbol}</p>
                <p class='name'>${e.name}</p>
                <p class='atomicWeight'>${e.atomic_mass.toFixed(3)}</p>
            </div>

            <p class='atomicNumber'>Atomic Number : ${e.number}</p>
            <p class='symbol'>Element Symbol : ${e.symbol}</p>
            <p class='name'>Element Name : ${e.name}</p>
            <p class='atomicWeight'>Atomic Weight : ${e.atomic_mass}</p>
            <p class='normalState'>Normal State : ${e.appearance}</p>
            <p class='phase'>Phase : ${e.phase}</p>
            <p class='category'>Category : ${e.category}</p>
            <p class='density'>Density : ${e.density}</p>
            <p class='period'>Period : ${e.period}</p>
            <p class='electronAffinity'>Electron Affinity (eV) : ${e.electron_affinity}</p>
            <p class='discoveredBy'>Discovered by : ${e.discovered_by}</p>
            <p class='namedBy'>Named by : ${e.named_by}</p>
            <p class='readMore'>Read More : <a href="${e.source}" target="_blank">click here</a></p>
            <p class='electronSemantic'>Electron Semantic : ${e.electron_configuration_semantic}</p>
            <button id='closeData${index}' class='closeData'>close</button>
        </div>
        `;
    });
};

xhr.send();

function showDetails(index) {

    let properElementDetails = document.getElementById(`properElement${index}`);

    properElementDetails.classList.add('active');

    document.getElementById(`closeData${index}`).addEventListener('click', removeClass);

    function removeClass() {
        properElementDetails.classList.remove('active');
    }
}