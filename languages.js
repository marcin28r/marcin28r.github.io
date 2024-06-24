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
      "putout": "indicating posible moves",
      "auto": "automatic solving",
      "map": "map of moves",
      "nomap": "maps for 7 and 8 rings are disabled",
      "ring-h1" : "Rings",
      "options-h1": "Additional options",
      "back-text": "Back",
      "new-text": "New towers",
      "renew-text": "Again",

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
      "nomap": "mapa ruchów 7 i 8 krążków jest wyłączona",
      "ring-h1" : "Pierścienie",
      "options-h1" : "Dodatkowe opcje",
      "back-text": "Powrót",
      "new-text": "Nowe wieże",
      "renew-text": "Jeszcze raz",
    }
}

const LANGUAGE_STORAGE_KEY = 'actual_lang';

function translateTo(language) {
  let selectedLanguage = language;
  
  if(selectedLanguage === null){
    selectedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY)
  }
  if (selectedLanguage === null) {
      selectedLanguage = 'pl';
  }


  localStorage.setItem(LANGUAGE_STORAGE_KEY, selectedLanguage);

  const elements = document.querySelectorAll('[content]');
  elements.forEach(element => {
    const key = element.getAttribute('content');
    if (language_content[selectedLanguage] && language_content[selectedLanguage][key]) {
      element.textContent = language_content[selectedLanguage][key];
    }
  });
}