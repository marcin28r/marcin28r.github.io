const language_content = {
    "en": {
      "nav-1": "History",
      "nav-2": "Rules",
      "nav-3": "Algorithms",
      "nav-4": "Application",
      "nav-5": "Solve",
      "hanoi": "Towers of Hanoi",
      "back-button-text": "back",
      "map-button-text": "map",
      "auto-button-text": "auto",
      "hint-button-text": "hint",
      "mapcenter-button-text": "center",
      "wood": "wood",
      "color": "color",
      "patern": "pattern",
      "hint": "single hint",
      "putout": "indicating posible moves",
      "auto": "automatic solving",
      "map": "map of moves",
      "double": "2 players",
      "nomap": "maps for 7 and 8 disks are disabled",
      "ring-h1" : "Disks",
      "options-h1": "Additional options",
      "back-text": "Back",
      "new-text": "New towers",
      "renew-text": "Again",
      "history-1": "The Towers of Hanoi is a logical puzzle that, in its simplest form, is intended for one player, similar to solving Solitaire from a deck of cards, Rubik's Cube, or playing Minesweeper. In this case, the player must face the problem of moving a tower of oval discs of different diameters from one stack to another, while also using the third one. The puzzle was popularized in Europe by the French mathematician Édouard Lucas, who was born on April 4, 1942 in the French city of Amiens. He is best known for his work in number theory and his creation of the Fibonacci number formula. The mathematician created primality testing methods that are still used today. In 1876, he used his methods to prove that Mersenne's number M127 was a prime number. It is the largest prime number discovered without the help of a computer. Lucas, under the pseudonym N. Claus de Siam, introduced copies of the puzzle to the market with the legend of the Brahma Towers. The story gives the entire puzzle a rather sublime tone, creating a mystical task connecting the beginning and the end of the world. Legend says that when the Brahma monks finish moving the tower with 64 disks, the world will end. According to calculations, it will take them 600 billion years.",
      "history-2": "In the great temple at Benares, beneath the dome which marks the centre of the world, rests a brass-plate in which are fixed three diamond needles, each a cubit high and as thick as the body of a bee. On one of these needles, at the creation, God placed sixty-four discs of pure gold, the largest disc resting on the brass plate, and the others getting smaller and smaller up to the top one. This is the Tower of Bramah. Day and night unceasingly the priests transfer the discs from one diamond needle to another according to the fixed and immutable laws of Bramah, which require that the priest must not move more than one disc at a time and that he must place this disc on a needle so that there is no smaller disc below it. When the sixty-four discs shall have been thus transferred from the needle on which at the creation God placed them to one of the other needles, tower, temple and Brahmins alike will crumble into dust, and with a thunderclap the world will vanish.",
      "rules-1": "The physical version includes elements such as: discs, poles and a base. Although the classic layout refers to the legend included in the original set, the game itself can also be reproduced using only elements of different diameters placed on three stacks. Preparing the game involves constructing a tower of disks on the first stack so that the diameter of the disks decreases as the tower increases. The main goal of the game is to move the discs so as to recreate the initial tower from the first stack in the third stack. The game is based on three main rules:",
      "mrule-1": "always lift one disk placed on the top of one of the three stacks",
      "mrule-2": "only one disc can be moved in a single move",
      "mrule-3": "only place the raised disk on one with a larger diameter, or on a stack without disks",
      "h3recursive": "Recursive solution",
      "h3binary": "Binary solution",
      "h3iterative": "Iterative solution",
      "alg-1": "Several approaches have been developed to solve this problem. By unifying and dividing the entire translation process into individual stages, we are able to systematically, step by step, solve the puzzle without having to worry about the multitude of options. Recursive or iterative approaches make it easier to solve the task, especially if we want the optimal solution, i.e. the smallest number of moves and the fastest solving time.",
      "alg-rec": "Our main goal is to move the tower from the first stack to the third one. The easiest way would be to move the largest disc directly to the last stack, but this is not allowed by the rules of the game itself. We must note that there are discs in our way, covering the largest one. So we move them to the auxiliary stack to free the one with the largest diameter. However, if this transfer is also impossible, we move the subsequent disks covering the next smallest one to another stack. This is the recursive approach to solving this problem.",
      "alg-rec-1":"Consider the example with three discs shown in the figure. Initially, having all the disks on stack A, two of them prevent us from moving the largest one to C. So let's move the two smaller disks (n - 1) to B. To do this, first we put the smallest disk (n - 2) to C, then the medium one to B to finally build a tower consisting of two disks on stack B. At this point, we are in a situation where the largest disk is not covered and we can place it in the target place, on stack C. Now the moment comes when we have to rebuild the tower on the biggest disc. We do this by moving from B to A, then from B to C and finally from A to C.",
      "rrule-1": "move n - 1 disks from the starting stack to the auxiliary stack,",
      "rrule-2": "move disk n from the starting stack to the target stack,",
      "rrule-3": "move the disks from the auxiliary stack to the target stack, covering the n'th disk.",
      "alg-bin-1":"One interesting aspect of the Towers of Hanoi problem is its correlation with the binary system. We assume that each bit in a binary number with the number of bits equal to the number of disks will represent a particular disk. After assuming the situation in which the disk with the smallest diameter is the bit furthest to the right, and the largest one is the bit furthest to the left, we are able to decide on the order of moving the disks by tracking changes in the binary number. The entire process will allow us to move the tower to the target stack in the optimal number of moves. We start composing by filling all the bits in our representation with zeros. We then iteratively add one to our number. Changing the number of a particular bit from 0 to 1 represents the disk we will be lifting. The target position of the moved disc in each number changes depends on the parity of the number of all discs. If the number of disks is odd, we move them to the first stack on the left, which allows for shifting. If the number of discs is even, we place them on the right one. It should be noted that if the stack from which we take the ring is a border stack, it is allowed to move from the last stack to the first when shifting to the right, and from the first to the last in a similar situation when shifting to the left. The entire process for the three-disk example can be seen in the figure.",
      "alg-ite-1":"This approach is one of the easiest to understand and replicate. The entire solving process can be divided into two stages by adding one preliminary dependency. It involves deciding which side we will move the smallest disk to. If we have an even number of disks, we move them to the right stack. However, if we have an odd number, we move to the left. If the stack is an outermost stack, it is allowed to move to the other side of the puzzle:",
      "irule-1": "move the smallest disc to the stack on the selected side from its current position,",
      "irule-2": "make one allowed move between stacks that do not have the smallest disk on top.",
      "app-1": "In addition to the information element, the application also contains an interactive puzzle of the Towers of Hanoi. After selecting \"Solve\" in the navigation, it will take the user to the puzzle configurator.",
      "app-2": "The entire moving process involves clicking on three panels with stacks. When we click on a specific stack, the disk from its top will be suspended above it. However, when one disk is already up and we click on the next stack, the disk will be placed on it. Of course, it is important that the move is up to rules. Otherwise, an illegal move will be signaled. The stack on which we wanted to place the currently too large disk will be highlighted in red. A panel that displays information about a given batch is also always visible. On the left there are numbers that reflect the number of moves made compared to the optimal ones. On the right side we can track the passing time. When the puzzle is completed, the information panel will be highlighted in green, followed by a summary panel. We can choose one of three options from the penel. The first \"Again\" will allow you to complete the puzzle in the same configuration. The second one will take us to the configurator, and the last one will take us to the start page.",
      "apph3": "The configurator allows to customize:",
      "appl-1": "Number of discs - remember that the more discs, the greater the number of moves needed to solve the puzzle, which increases the difficulty level.",
      "appl-2": "Displaying discs - there's three options for displaying discs (wooden, colorful, patterned). They can improve their visibility or simply make stacking more enjoyable.",
      "appl-3": "Single hint - the option after pressing the \"hint\" button suggests the next move, which is the most optimal in the current situation. Firstly it highlights in blue the stack from which the disc should be taken, and then the one on which we should place it.",
      "appl-4": "Indicating posible moves - an option that passively highlights  in green the stacks on which we can put the currently picked up disc. This option may be especially helpful for people who are just getting used to the rules.",
      "appl-5": "Automatic solving - this option provides the \"auto\" button, after activation of which the application will try to solve the puzzle by itself. It should be noted that each of its moves is the most optimal in a given situation. When the option is active the button lights up green and turning it off can be initiated by clicking the button again, then the application will complete the current move and stop.",
      "appl-6": "Map of moves - provides a panel in which all possible arrangements of the current puzzle are visible. There is also a \"map\" button which increases the map display area. Centering the map area is done by using the \"center\" button.",
      "appl-7": "2 players - option available and suggested only on wide screens. It allows you to display two similar puzzles side by side. Note that any of the return options ends both of them.",
      "aut" : "author - Marcin Oszczepiński"
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
      "double": "2 graczy",
      "nomap": "mapa ruchów 7 i 8 krążków jest wyłączona",
      "ring-h1" : "Krążki",
      "options-h1" : "Dodatkowe opcje",
      "back-text": "Powrót",
      "new-text": "Nowe wieże",
      "renew-text": "Jeszcze raz",
      "history-1": "Wieże Hanoi to zagadka logiczna, która w swojej najprostszej formie przeznaczona jest dla jednego gracza, podobnie jak np. układanie Pasjansa z talii kart, kostki Rubika, lub też gra w Sapera. W tym przypadku gracz musi zmierzyć się z problemem przełożenia wieży złożonej z owalnych krążków o różnej średnicy z jednej tyczki na drugą mogąc posługiwać się przy tym trzecią tyczką. Zagadkę w Europie spopularyzował francuski matematyk Édouard Lucas, który urodził się 4 kwietnia 1942 roku we francuskim mieście Amiens. Najbardziej znany jest ze swoich prac w dziedzinie teorii liczb i stworzenia wzoru na liczby Fibonacciego. Matematyk stworzył metody testowania pierwszości, które są stosowane do dzisiaj.  W 1876 roku wykorzystał swoje metody aby udowodnić, że liczba Mersenne’a M127 jest liczbą pierwszą. Jest to największa liczba pierwsza odkryta bez pomocy komputera.  Lucas pod pseudonimem  N. Claus de Siam wprowadzał na rynek egzemplarze łamigłówki opatrzone dodatkowo legendą wież Brahmy. Historia nadaje całej łamigłówce dość wyniosłego wydźwięku, tworząc z niej mistyczne zadanie wiążące początek i koniec świata. Legenda mów o tym, że gdy tamtejsi mnisi zakończą przekładanie wieży o 64 dyskach nastąpi koniec świata. Według obliczeń najszybciej zrobią to w niecałe 600 miliardów lat.",
      "history-2": "W wielkiej świątyni w Benares, pod kopułą wyznaczającą środek świata, znajduje się mosiężna płyta, w której zamocowane są trzy diamentowe igły, każda wysoka na łokieć i gruba jak ciało pszczoły. Podczas stworzenia Bóg umieścił na jednej z tych igieł sześćdziesiąt cztery krążki z czystego złota, z których największy spoczywał na mosiężnej płycie, a pozostałe stawały się coraz mniejsze, aż do najwyższego. Jest to Wieża Bramaha. Kapłani nieprzerwanie dzień i noc przenoszą krążki z jednej diamentowej igły na drugą, zgodnie z ustalonymi i niezmiennymi prawami Bramy, które wymagają, aby kapłan nie mógł przesuwać więcej niż jednego krążka na raz i musiał go umieścić na igle tak, aby pod nim nie było mniejszego krążka. Kiedy sześćdziesiąt cztery krążki zostaną w ten sposób przeniesione z igły, na której Bóg je umieścił przy stworzeniu, do jednej z pozostałych igieł, wieża, świątynia i bramini rozsypią się w pył i wraz z grzmotem świat zniknie.",
      "rules-1": "W skład fizycznej wersji wchodzą takie elementy jak: krążki, tyczki oraz podstawa. Choć klasyczny układ nawiązuje do legendy dołączanych do oryginalnego zestawu, to samą grę można równie dobrze odwzorować wykorzystując jedynie elementy o różnej średnicy układane na trzech stosach. Przygotowanie gry obejmuje skonstruowanie wieży z krążków na pierwszej tyczce tak, aby średnica krążków malała wraz ze spiętrzaniem się wieży. Nadrzędnym celem gry jest przełożenie krążków tak, aby odtworzyć początkową wieżę z pierwszej tyczki, na tyczce trzeciej. Gra opiera się na trzech głównych zasadach:",
      "mrule-1": "zawsze podnosimy jeden krążek umieszczony na szczycie jednej z trzech tyczek",
      "mrule-2": "można przekładać tylko jeden krążek w pojedynczym ruchu",
      "mrule-3": "możemy położyć podniesiony krążek jedynie na taki o większej średnicy, lub tyczkę bez krążków",
      "h3recursive": "Rozwiązanie rekurencyjne",
      "h3binary": "Rozwiązanie binarne",
      "h3iterative": "Rozwiązanie iteracyjne",
      "alg-1": "Powstało kilka podejść do rozwiązywania tego problemu. Dzięki ujednoliceniu i rozłożeniu całego procesu przekładania na poszczególne etapy jesteśmy w stanie systematycznie, krok po kroku, rozwiązywać łamigłówkę, nie martwiąc się mnogością opcji. Podejścia rekurencyjne, czy iteracyjne ułatwiają rozwiązywanie powierzonego nam zadania, tym bardziej jeśli zależy nam na optymalnej, czyli najmniejszej ilości ruchów, jak i najszybszym czasie ułożenia.",
      "alg-rec": "Naszym głównym celem jest przeniesienie wieży z pierwszej tyczki na tyczkę trzecią. Najłatwiej byłoby przenieść największy krążek od razu na ostatnią tyczkę, jednak na to nie zezwalają zasady samej gry. Musimy zauważyć, że na drodze stoją nam, a w zasadzie leżą, krążki przykrywające największy. Przenosimy je zatem na słupek pomocniczy, aby uwolnić ten o największej średnicy. Jeśli jednak i to przeniesienie jest niemożliwe, to przenosimy kolejne krążki przykrywające kolejny najmniejszy na inną tyczkę. Na tym polega rekurencyjne podejście do rozwiązania tego problemu.",
      "alg-rec-1": "Rozważmy przykład z trzema krążkami widoczny na rysunku. Początkowo mając wszystkie krążki na tyczce A, dwa z nich uniemożliwiają nam przeniesienie największego na C. Przełóżmy zatem dwa mniejsze krążki (n - 1) na B. Aby to zrobić najpierw odkładamy najmniejszy krążek (n - 2) na C, następnie, średni na B, aby ostatecznie zbudować wieżę złożoną z dwóch krążków na tyczce B. W tym momencie jesteśmy w sytuacji, gdzie największy krążek nie jest niczym przykryty, a my możemy umieścić go w miejscu docelowym, na tyczce C. Teraz nadchodzi moment, w którym musimy odbudowywać wieżę na największym krążku. Robimy to przekładając z B na A, następnie z B na C i ostatecznie z A na C.",
      "rrule-1": "przenieś n - 1 krążków z tyczki początkowej na tyczkę pomocniczą,",
      "rrule-2": "przenieś krążek n z początkowej na docelową tyczkę,",
      "rrule-3": "przenieś krążki z tyczki pomocniczej na tyczkę docelową przykrywając n-ty krążek.",
      "alg-bin-1": "Jednym z ciekawych aspektów problemu wież Hanoi jest jego korelacja z systemem binarnym zapisu liczb. Zakładamy, że każdy bit w liczbie binarnej o ilości bitów równej liczbie krążków będzie reprezentować poszczególny pierścień. Po przyjęciu sytuacji, w której krążek o najmniejszej średnicy jest bitem najbardziej z prawej, a największy tym najbardziej wysuniętym w lewo, jesteśmy w stanie poprzez śledzenie zmian w liczbie binarnej decydować o kolejności przekładania krążków. Cały proces pozwoli nam na przełożenie wieży na palik docelowy w optymalnej liczbie ruchów. Układanie zaczynamy wypełniając wszystkie bity w naszej reprezentacji zerami. Następnie iteracyjnie dodajemy jedynkę do naszej liczby, a zmiana liczby poszczególnego bitu z 0 na 1 reprezentuje krążek, który będziemy podnosić. Docelowe miejsce przekładanego krążka w każdej zmianie liczby, jest zależne od parzystości liczby wszystkich krążków. Jeśli liczba krążków jest nieparzysta, przekładamy na pierwszy słupek po lewej stronie, który pozwala na przełożenie. Jeśli zaś ilość krążków jest parzysta, odkładamy w prawą. Należy zaznaczyć, że jeżeli słupek, z którego pobieramy pierścień jest słupkiem granicznym, to dozwolone jest przejście z ostatniego słupka na pierwszy, w sytuacji przekładania w prawo, a z pierwszego na ostatni w analogicznej sytuacji z przekładaniem w lewo. Cały proces dla przykładu złożonego z trzech krążków można zobaczyć na rysunku.",
      "alg-ite-1": "Podejście iteracyjne jest jednym z prostszych do zrozumienia i odtworzenia. Cały proces przekładania możemy podzielić na dwa etapy, dodając do niego jedną zależność wstępną. Polega ona na tym, aby zdecydować, w którą ze stron będziemy przekładać najmniejszy pierścień. Jeśli mamy parzystą liczbę krążków przekładamy na tyczkę po prawej stronie, jeśli nieparzystą, w lewą. Jeśli tyczka jest tyczką skrajną to dozwolone jest przejście na drugą stronę układanki:",
      "irule-1": "przekładamy najmniejszy z krążków na tyczkę po wybranej stronie od jego aktualnego położenia,",
      "irule-2": "wykonujemy jeden dozwolony ruch pomiędzy tyczkami, na których szczycie nie znajduje się najmniejszy krążek.",
      "app-1": "Aplikacja poza elementem informacyjnym zawiera również interaktywną układankę wież Hanoi. Po wyborze opcji \"Układaj\" w nawigacji przeniesie użytkownika do konfiguratora łamigłówki.",
      "app-2": "Cały proces przekładania polega na klikaniu w trzy panele ze stosami. Kiedy klikniemy na konkretny stos, krążek z jego szczytu zostanie zawieszony nad nim. Kiedy natomiast jeden krążek jest już w górze, a my klikniemy na kolejny stos, krążek zostanie na nim umieszczony. Oczywiście istotne jest, aby przełożenie uwzględniało zasady. W przeciwnym wypadku niedozwolony ruch zostanie zasygnalizowany. Stos, na którym aktualne chcieliśmy położyć za duży krążek, podświetli się kolorem czerwonym. Zawsze widoczny jest również panel, który wyświetla informacje o danej partii. Z lewej widnieją numery, które odzwierciedlają ilość ruchów wykonanych w stosunku do tych optymalnych. Po prawej stronie możemy śledzić upływający czas. Kiedy układanka zostanie ułożona panel informacyjny podświetli się na zielono, a zaraz po tym pokaże się panel z podsumowaniem. Z panelu możemy wybrać jedną z trzech opcji. Przycisk \"Jeszcze raz\" pozwoli układać łamigłówkę w tej samej konfiguracji. Druga opcja przeniesie nas do konfiguratora, a ostatnia do strony początkowej.",
      "apph3": "Konfigurator pozwala na dostosowanie:",
      "appl-1": "Ilości krążków - należy pamiętać, że im więcej krążków tym większa liczba ruchów potrzebna do ułożenia łamigłówki. Poziom trudności zwiększa się z każdym dodanym krążkiem.",
      "appl-2": "Wyświetlania krążków - jedna z trzech opcji wyświetlania krążków (drewniane, kolorowe, we wzory). Wybór może poprawić ich widoczność lub po prostu uprzyjemnić układanie.",
      "appl-3": "Pojedyncza podpowiedź - opcja po wciśnięciu przycisku ,,wskazówka'' sugeruje kolejne przełożenie, które w aktualnej sytuacji jest tym najbardziej optymalnym. Kolejno podświetla w kolorze niebieskim palik, z którego należy pobrać krążek, a następnie ten, na który powinniśmy go odłożyć.",
      "appl-4":  "Wskazywanie poprawnego odkładania - opcja pasywanie podświetla stosy na które możemy odłożyć aktualnie podniesiony krążek kolorem zielonym. Opcja ta może być szczególnie pomocna dla osób, które  dopiero oswajają się z zasadami.",
      "appl-5": "Automatyczne układanie - opcja udostępnia przycisk ,,auto'', po którego aktywacji aplikacja będzie sama dążyć do ułożenia łamigłówki. Należy zaznaczyć, że każdy z jej ruchów jest tym najbardziej optymalnym w danej sytuacji. Kiedy opcja jest aktywna przycisk świeci się na zielono, a wyłączenie jej można zainicjować klikając na przycisk ponownie. Aplikacja dokończy wtedy aktualne przełożenie i zakończy działanie.",
      "appl-6": "Mapa ruchów - udostępnia panel, w którym rozmieszczone są wszystkie możliwe ułożenia aktualnej łamigłówki. Dostępny jest również przycisk ,,mapa'', który zwiększa obszar wyświetlania mapy. Wycentrowanie obszaru mapy realizuje przycisk ,,wyśrodkuj''.",
      "appl-7": "2 graczy - opcja dostępna i sugerowana jedynie na szerokich ekranach. Pozwala na wyświetlenie dwóch podobnych łamigłówek jedna obok drugiej. Należy zwrócić uwagę, że którakolwiek z opcji powrotu kończy działanie obu z nich.",
      "aut" : "autor - Marcin Oszczepiński"
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