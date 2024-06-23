const data = {
  characters: [
    {
      id: 1,
      name: "Luke Skywalker",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
      homeworld: "tatooine",
    },
    {
      id: 2,
      name: "C-3PO",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
      homeworld: "tatooine",
    },
    {
      id: 3,
      name: "R2-D2",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
      homeworld: "naboo",
    },
    {
      id: 4,
      name: "Darth Vader",
      pic: "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
      homeworld: "tatooine",
    },
    {
      id: 5,
      name: "Leia Organa",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
      homeworld: "alderaan",
    },
    {
      id: 6,
      name: "Owen Lars",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
      homeworld: "tatooine",
    },
    {
      id: 7,
      name: "Beru Whitesun lars",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
      homeworld: "tatooine",
    },
    {
      id: 8,
      name: "R5-D4",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
      homeworld: "tatooine",
    },
    {
      id: 9,
      name: "Biggs Darklighter",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
      homeworld: "tatooine",
    },
    {
      id: 10,
      name: "Obi-Wan Kenobi",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
      homeworld: "stewjon",
    },
    {
      id: 11,
      name: "Anakin Skywalker",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
      homeworld: "tatooine",
    },
    {
      id: 12,
      name: "Wilhuff Tarkin",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
      homeworld: "eriadu",
    },
    {
      id: 13,
      name: "Chewbacca",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
      homeworld: "kashyyyk",
    },
    {
      id: 14,
      name: "Han Solo",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
      homeworld: "corellia",
    },
    {
      id: 15,
      name: "Greedo",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
      homeworld: "Rodia",
    },
    {
      id: 16,
      name: "Jabba Desilijic Tiure",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
      homeworld: "tatooine",
    },
    {
      id: 18,
      name: "Wedge Antilles",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/6/60/WedgeHelmetless-ROTJHD.jpg",
      homeworld: "corellia",
    },
    {
      id: 19,
      name: "Jek Tono Porkins",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
      homeworld: "bestine",
    },
    {
      id: 20,
      name: "Yoda",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
    },
    {
      id: 21,
      name: "Palpatine",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
      homeworld: "naboo",
    },
  ],
};

isActive = false;

// homeworld değerini içeren bir array oluştur
let homeworldsRaw = [];
for (let i = 0; i < data.characters.length; i++) {
  homeworldsRaw.push(data.characters[i].homeworld ?? "other");
}

// homeworld değerlerini unique hale getir
let homeworldsUnique = [];
homeworldsRaw.forEach((i) => {
  if (!homeworldsUnique.includes(i)) {
    homeworldsUnique.push(i);
  }
});

// homeworld değerlerini lowercase yap
let homeworldsLowercase = [];
homeworldsUnique.forEach((i) => {
  homeworldsLowercase.push(i.toLowerCase());
});

// homeworld değerlerini yeni bir arraye ata
const homeworld = homeworldsLowercase;
// homeworld değerlerini checkbox olarak render et
function renderCheckBoxes() {
  const checkboxContainer = document.getElementById("checkboxContainer");
  for (i = 0; i < homeworld.length; i++) {
    let checkboxHtml = `<div class="form-check">
    <input class="form-check-input" 
    type="radio" 
    name="homeworld"
    id="homeworld-${homeworld[i]}"
    value="${homeworld[i]}"
    disabled="true"
    >
    <label class="form-check-label" 
    for="homeworld-${homeworld[i]}">${homeworld[i]}</label>
    </div>`;
    checkboxContainer.innerHTML += checkboxHtml;
  }
}
// checkboxları çağır
renderCheckBoxes();

// radio butonları çağır
let radioBoxes = document.querySelectorAll('input[name="homeworld"]');
let isFiltered = false;
// filtrelenmiş homeworld değerini tut
let filteredHomeworld;
// radio butonlara evenlistener ekle
radioBoxes.forEach((radioBox) => {
  radioBox.addEventListener("change", (e) => {
    let selectedHomeworld = e.target.value;
    if (selectedHomeworld != filteredHomeworld) {
      filteredHomeworld = selectedHomeworld;
      filterCharacters();
      isFiltered = true;
    } else {
      return;
    }
  });
});

// karakterleri render et
const characters = data.characters;
// html elementlerini çağır
const charContainer = document.getElementById("charContainer");
const buttonShowCharacters = document.getElementById("buttonShowCharacters");

// karakterleri döngüye sok ve card oluştur
function renderCharacters() {
  const row = document.createElement("div");
  row.classList.add("row");
  charContainer.append(row);

  for (i = 0; i < characters.length; i++) {
    let charImage = characters[i].pic;
    let charName = characters[i].name;
    let charHomeworld = characters[i].homeworld;
    let cardHtml = `<div class="card mx-auto mt-2" style="width: 18rem;">
    <img class="card-img-top" src="${charImage}">
    <div class="card-body">
      <h5 class="card-title">${charName}</h5>
      <p class="card-text">This character's from <strong>${charHomeworld}</strong></p>
    </div>
    </div>`;
    row.innerHTML += cardHtml;
  }
  buttonShowCharacters.setAttribute("onClick", "removeCharacters();");
  buttonShowCharacters.innerHTML = "Hide Characters";
  buttonShowCharacters.classList.toggle("active");
  radioBoxes.forEach((radioBox) => {
    radioBox.disabled = false;
  });
  isActive = true;
}

// cardları sil
function removeCharacters() {
  const row = document.querySelector(".row");
  row.remove();
  buttonShowCharacters.setAttribute("onClick", "renderCharacters();");
  buttonShowCharacters.innerHTML = "Show Characters";
  buttonShowCharacters.classList.toggle("active");
  radioBoxes.forEach((radioBox) => {
    radioBox.disabled = true;
    radioBox.checked = false;
  });
  isActive = false;
}

// karakterleri filtrele ve ekrana bas
function filterCharacters() {
  if (!isActive || !filteredHomeworld) {
    alert("Please select a homeworld to filter by");
    return;
  } else {
    const existingRow = document.querySelector(".row");
    if (existingRow) existingRow.remove();

    const newRow = document.createElement("div");
    newRow.classList.add("row");
    charContainer.append(newRow);

    for (let i = 0; i < characters.length; i++) {
      let newHome = characters[i].homeworld ?? "other";

      if (newHome.toLowerCase() === filteredHomeworld) {
        let charImage = characters[i].pic;
        let charName = characters[i].name;
        let charHomeworld = characters[i].homeworld;
        let cardHtml = `<div class="card mx-auto mt-2" style="width: 18rem;">
    <img class="card-img-top" src="${charImage}">
    <div class="card-body">
      <h5 class="card-title">${charName}</h5>
      <p class="card-text">This character's from <strong>${charHomeworld}</strong></p>
    </div>
    </div>`;
        newRow.innerHTML += cardHtml;
      }
    }
  }
}

// filtreleri temizle
function clearFilter() {
  if (isFiltered == true) {
    radioBoxes.forEach((radioBox) => {
      radioBox.checked = false;
    });
    filteredHomeworld = null;
    isActive = false;
    const row = document.querySelector(".row");
    removeCharacters();
    renderCharacters();
  } else {
    return;
  }
}
