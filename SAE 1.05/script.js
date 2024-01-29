
var listeAnalogies = document.querySelector(".liste-analogies")
var numCase = 0



for (let i = 0; i < data.length; i++) {
    numCase++;

    var id = data[i].id;
    var analogie = data[i].analogie;
    var valeurAnalogie = data[i].valeurAnalogie;
    var description = data[i].description;
    var img = data[i].img;

    var blocHTML = document.createElement('section');
    blocHTML.id = id;

    blocHTML.innerHTML = `
        <div class="container">
            <div class="texte"
                <h1>
                <span class="si-jetais">Si j’étais ${analogie}</span>
                <span class="je-serais">je serais ${valeurAnalogie}</span>
                </h1>
            <p class="description">${description}</p>
            </div>
            <img class="image" src="${img}" alt="${analogie} illustration" />
        </div>
    `;

    listeAnalogies.appendChild(blocHTML);
}
















