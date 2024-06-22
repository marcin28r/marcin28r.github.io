const language_content = {
    "en": {
      "nav-1": "History",
      "nav-2": "Rules",
      "nav-3": "Algorithms",
      "nav-4": "App",
      "nav-5": "Solv",
      "hanoi": "Towers of Hanoi",
      "back-button-text": "back",
      "map-button-text": "map",
      "auto-button-text": "auto",
      "hint-button-text": "hint",
      "mapcenter-button-text": "center",
      "wood": "wood",
      "color": "color",
      "patern": "patern",
      "hint": "single hint",
      "putout": "indicating the correct insertion",
      "auto": "automatic solving",
      "map": "moves map",
      "mo-map-info": "maps for 7 and 8 rings are disabled",
      "ring-text" : "Rings",
      "options" : "Facilities"


    },
    "pl": {
      "nav-1": "Historia",
      "nav-2": "Zasady",
      "nav-3": "Algorytmy",
      "nav-4": "Aplikacja",
      "nav-5": "Układaj",
      "hanoi": "Wieże Hanoi",
      "back-button-text": "powrót",
      "map-button-text": "mapa",
      "auto-button-text": "auto",
      "hint-button-text": "wskazówka",
      "mapcenter-button-text": "wyśrodkuj",
      "wood": "drewno",
      "color": "kolor",
      "patern": "wzór",
      "hint": "pojedyncza podpowiedź",
      "putout": "wskazywanie poprawnego odkładania",
      "auto": "automatyczne układanie",
      "map": "mapa ruchów",
      "mo-map-info": "mapa ruchów 7 i 8 krążków jest wyłączona",
      "ring-text" : "Pierścienie",
      "options" : "Ułatwienia"
    }
}

const LANGUAGE_STORAGE_KEY = 'actual_lang';

function translateTo(language) {
  let selectedLanguage = language;
  
  if(selectedLanguage === null){
    selectedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY)
    console.log("wczytuję z localstorage " + selectedLanguage);
  }
  if (selectedLanguage === null) {
    console.log("ustawiam na basic pl");
      selectedLanguage = 'pl';
  }


  console.log("ustawiam local na " + selectedLanguage);
  console.log(selectedLanguage);
  localStorage.setItem(LANGUAGE_STORAGE_KEY, selectedLanguage);

  const elements = document.querySelectorAll('[content-data]');
  console.log(selectedLanguage);
  elements.forEach(element => {
    const key = element.getAttribute('content-data');
    if (language_content[selectedLanguage] && language_content[selectedLanguage][key]) {
      element.textContent = language_content[selectedLanguage][key];
    }
  });
}