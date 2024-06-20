const language_content = {
    "en": {
      "nav-1": "Rules",
      "nav-2": "History",
      "nav-3": "Algorithms",
      "nav-4": "App",
      "nav-5": "Solv",
      "hanoi": "Towers of Hanoi"
    },
    "pl": {
      "nav-1": "Zasady",
      "nav-2": "Historia",
      "nav-3": "Algorytmy",
      "nav-4": "Podręcznik",
      "nav-5": "Układaj",
      "hanoi": "Wieże Hanoi"
    }
  }
  
  function translateTo(language) {
    const elements = document.querySelectorAll('[content]');
    
    elements.forEach(element => {
      const key = element.getAttribute('content');
      if (language_content[language] && language_content[language][key]) {
        element.textContent = language_content[language][key];
      }
    });
  }
  
  // Początkowe ustawienie na język angielski
  translateTo('pl');