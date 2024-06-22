const language_content = {
    "en": {
      "nav-1": "History",
      "nav-2": "Rules",
      "nav-3": "Algorithms",
      "nav-4": "App",
      "nav-5": "Solv",
      "hanoi": "Towers of Hanoi",
      "back-button-text": "Back",
      "map-button-text": "Map",
      "auto-button-text": "Auto",
      "hin-button-text": "Hint",
      "mapcenter-button-text": "Center Map",
    },
    "pl": {
      "nav-1": "Historia",
      "nav-2": "Zasady",
      "nav-3": "Algorytmy",
      "nav-4": "Aplikacja",
      "nav-5": "Układaj",
      "hanoi": "Wieże Hanoi",
      "back-button-text": "Powrót",
      "map-button-text": "Mapa",
      "auto-button-text": "Auto PL",
      "hin-button-text": "Wskazówka",
      "mapcenter-button-text": "Centeruj Mapę",
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
