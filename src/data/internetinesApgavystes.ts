export type SkillId =
  | "duomenys"
  | "skuba"
  | "saltinis"
  | "informacija";

export type AnswerId = "a" | "b" | "c";

export interface AnswerOption {
  id: AnswerId;
  text: string;
  feedbackTitle: string;
  feedback: string;
}

export interface ScamScenario {
  id: number;
  title: string;
  message: string[];
  context?: string;
  question: string;
  answers: AnswerOption[];
  correctAnswerId: AnswerId;
  warningSigns: string[];
  safetyRule: string;
  skill: SkillId;
}

export const scamScenarios: ScamScenario[] = [
  {
    id: 1,
    title: "Laimėtas telefonas",
    message: [
      "🎉 SVEIKINAME!",
      "Jūsų telefono numeris buvo atrinktas ir laimėjo naują telefoną!",
      "Prizą būtina atsiimti per 10 minučių, kitaip jis bus perduotas kitam laimėtojui.",
      "Paspausk nuorodą ir įvesk vardą, adresą bei banko kortelės duomenis:",
      "laimek-telefona-prizas.com",
    ],
    question: "Ką darytum gavęs tokią žinutę?",
    answers: [
      {
        id: "a",
        text: "Paspausčiau nuorodą ir greitai įvesčiau duomenis, kad neprarasčiau prizo.",
        feedbackTitle: "Tai būtų nesaugu",
        feedback:
          "Skubos jausmas sukurtas tam, kad nespėtum pagalvoti. Netikroje svetainėje įvesti asmens ar banko duomenys gali patekti sukčiams.",
      },
      {
        id: "b",
        text: "Persiųsčiau žinutę draugui ir paklausčiau, ar jis irgi gavo tokį prizą.",
        feedbackTitle: "Tai dar nepatvirtintų, kad žinutė saugi",
        feedback:
          "Draugas gali būti gavęs tokią pačią apgaulę. Saugiau žinutę parodyti patikimam suaugusiajam ir informacijos ieškoti oficialiame šaltinyje.",
      },
      {
        id: "c",
        text: "Nuorodos nespausčiau, žinutę parodyčiau patikimam suaugusiajam ir ją ištrinčiau.",
        feedbackTitle: "Teisingas ir saugus pasirinkimas",
        feedback:
          "Tu nepasidavei skubinimui, neatskleidei duomenų ir nusprendei pirmiausia pasitikrinti.",
      },
    ],
    correctAnswerId: "c",
    warningSigns: [
      "Žadamas prizas, nors konkurse nedalyvavai.",
      "Skubinama apsispręsti per 10 minučių.",
      "Prašoma asmens ir banko kortelės duomenų.",
      "Naudojamas neaiškus interneto adresas.",
    ],
    safetyRule:
      "Netikėtas prizas, skubinimas ir prašymas įvesti duomenis – labai tikėtini apgavystės požymiai.",
    skill: "skuba",
  },
  {
    id: 2,
    title: "Nemokami žaidimo pinigai",
    message: [
      "🎮 NEMOKAMOS MONETOS!",
      "Gauk 10 000 žaidimo monetų visiškai nemokamai.",
      "Prisijunk prie savo paskyros čia:",
      "game-coins-free-login.com",
      "Pasiūlymas galioja tik pirmiems 100 žaidėjų!",
    ],
    question: "Ką darytum gavęs tokį pasiūlymą?",
    answers: [
      {
        id: "a",
        text: "Atidaryčiau nuorodą ir įvesčiau žaidimo paskyros prisijungimo duomenis.",
        feedbackTitle: "Tai būtų nesaugu",
        feedback:
          "Netikroje svetainėje įvestas prisijungimo vardas ir slaptažodis gali būti panaudoti tavo paskyrai pavogti.",
      },
      {
        id: "b",
        text: "Patikrinčiau, ar toks pasiūlymas paskelbtas oficialioje žaidimo svetainėje arba programėlėje.",
        feedbackTitle: "Teisingas pasirinkimas",
        feedback:
          "Informaciją saugiausia tikrinti oficialioje žaidimo svetainėje, programėlėje arba kūrėjo paskyroje.",
      },
      {
        id: "c",
        text: "Susikurčiau naują slaptažodį ir tada pabandyčiau prisijungti per atsiųstą nuorodą.",
        feedbackTitle: "Naujas slaptažodis nepadaro svetainės saugios",
        feedback:
          "Jeigu naują slaptažodį įvesi sukčių puslapyje, jie vis tiek jį sužinos.",
      },
    ],
    correctAnswerId: "b",
    warningSigns: [
      "Žadamas labai didelis atlygis už nieką.",
      "Prašoma prisijungti per neoficialią nuorodą.",
      "Svetainės adresas nėra oficialus žaidimo adresas.",
      "Skubinama pasinaudoti pasiūlymu.",
    ],
    safetyRule:
      "Nemokami virtualūs daiktai nėra verti tavo slaptažodžio.",
    skill: "duomenys",
  },
  {
    id: 3,
    title: "Draugo prašymas pervesti pinigų",
    message: [
      "Labas, labai skubu.",
      "Mano kortelė neveikia, o man reikia sumokėti 20 €.",
      "Ar gali pervesti dabar? Grąžinsiu vakare.",
      "Tik neskambink, negaliu kalbėti.",
      "Pervesk į šią sąskaitą: LT00 0000 0000 0000 0000",
    ],
    context:
      "Žinutė parašyta neįprastai, o nurodyto sąskaitos numerio anksčiau nesi matęs.",
    question: "Ką darytum gavęs tokią žinutę?",
    answers: [
      {
        id: "a",
        text: "Pervesčiau 20 €, nes žinutė atsiųsta iš draugo paskyros.",
        feedbackTitle: "Tai būtų rizikinga",
        feedback:
          "Draugo paskyra galėjo būti pavogta. Pažįstamas vardas dar neįrodo, kad žinutę parašė tavo draugas.",
      },
      {
        id: "b",
        text: "Atsakyčiau žinute ir paprašyčiau draugo patvirtinti savo vardą bei pavardę.",
        feedbackTitle: "Vien atsakymo toje pačioje paskyroje nepakanka",
        feedback:
          "Sukčius gali žinoti viešai matomą draugo informaciją arba skaityti senesnes jo žinutes.",
      },
      {
        id: "c",
        text: "Pinigų nepervesčiau ir susisiekčiau su draugu kitu būdu.",
        feedbackTitle: "Teisingas pasirinkimas",
        feedback:
          "Paskambinęs draugui žinomu numeriu arba susisiekęs per kitą programėlę gali patikrinti, ar prašymas tikras.",
      },
    ],
    correctAnswerId: "c",
    warningSigns: [
      "Netikėtai prašoma pinigų.",
      "Prašymas labai skubus.",
      "Liepiama neskambinti.",
      "Nurodyta anksčiau nematyta banko sąskaita.",
    ],
    safetyRule:
      "Netikėtą pinigų prašymą visada patvirtink kitu ryšio būdu.",
    skill: "saltinis",
  },
  {
    id: 4,
    title: "Netikras siuntos pranešimas",
    message: [
      "Jūsų siuntos pristatyti nepavyko.",
      "Kad siunta nebūtų grąžinta, sumokėkite 1,49 € pristatymo mokestį per 30 minučių:",
      "siunta-pristatymas-lt.com",
      "Neapmokėjus siunta bus sunaikinta.",
    ],
    context: "Tu neprisimeni, ar šiuo metu apskritai lauki siuntos.",
    question: "Ką darytum gavęs tokią žinutę?",
    answers: [
      {
        id: "a",
        text: "Sumokėčiau 1,49 €, nes suma nedidelė ir nenorėčiau prarasti siuntos.",
        feedbackTitle: "Nedidelė suma dar nereiškia, kad mokėjimas saugus",
        feedback:
          "Sukčiams gali rūpėti ne 1,49 €, o tavo banko kortelės ar banko prisijungimo duomenys.",
      },
      {
        id: "b",
        text: "Nuorodos nespausčiau ir siuntą patikrinčiau oficialioje parduotuvės arba siuntų bendrovės svetainėje.",
        feedbackTitle: "Teisingas pasirinkimas",
        feedback:
          "Oficialią svetainę saugiausia atidaryti pačiam, o ne per SMS žinutėje pateiktą nuorodą.",
      },
      {
        id: "c",
        text: "Paspausčiau nuorodą tik tam, kad pažiūrėčiau, kokios siuntos numeris nurodytas.",
        feedbackTitle: "Geriau nuorodos neatidaryti",
        feedback:
          "Netikras puslapis gali atrodyti beveik taip pat kaip tikros siuntų bendrovės svetainė.",
      },
    ],
    correctAnswerId: "b",
    warningSigns: [
      "Neaišku, apie kokią siuntą kalbama.",
      "Prašoma sumokėti per SMS nuorodą.",
      "Skubinama ir grasinama sunaikinti siuntą.",
      "Adresas nepriklauso aiškiai siuntų bendrovei.",
    ],
    safetyRule:
      "Siuntos būseną tikrink pats atidaręs oficialią parduotuvės arba siuntų bendrovės svetainę.",
    skill: "saltinis",
  },
  {
    id: 5,
    title: "Per gera internetinės parduotuvės nuolaida",
    message: [
      "🔥 TIK ŠIANDIEN!",
      "Sportbačiai, kurių įprasta kaina 129 €, dabar kainuoja tik 9,99 €.",
      "Liko tik 3 poros!",
      "Pirk čia: nike-outlet-lietuva-sale.com",
    ],
    context:
      "Svetainėje yra žinomo prekės ženklo logotipas, bet nėra įmonės kontaktų, grąžinimo taisyklių ar nepriklausomų atsiliepimų.",
    question: "Ką darytum prieš pirkdamas?",
    answers: [
      {
        id: "a",
        text: "Pirkčiau iš karto, nes dėl tokios didelės nuolaidos prekės greitai neliks.",
        feedbackTitle: "Neskubėk",
        feedback:
          "Užrašai „tik šiandien“ ir „liko 3 prekės“ gali būti naudojami tam, kad pirktum nepatikrinęs pardavėjo.",
      },
      {
        id: "b",
        text: "Patikrinčiau svetainės adresą, pardavėjo kontaktus, atsiliepimus ir oficialią prekės ženklo svetainę.",
        feedbackTitle: "Teisingas pasirinkimas",
        feedback:
          "Prieš mokant verta patikrinti įmonę, kontaktus, grąžinimo sąlygas ir nepriklausomus atsiliepimus.",
      },
      {
        id: "c",
        text: "Įvesčiau kortelės duomenis, bet pasirinkčiau pigiausią pristatymą.",
        feedbackTitle: "Pigus užsakymas neapsaugo kortelės duomenų",
        feedback:
          "Netikra svetainė gali išsaugoti kortelės numerį, galiojimo datą ir saugos kodą.",
      },
    ],
    correctAnswerId: "b",
    warningSigns: [
      "Kaina neįtikėtinai maža.",
      "Skubinama pirkti.",
      "Adresas tik primena žinomo prekės ženklo pavadinimą.",
      "Nėra aiškių pardavėjo kontaktų ir grąžinimo taisyklių.",
    ],
    safetyRule:
      "Neįtikėtinai maža kaina ir skubinimas – ženklas, kad pardavėją reikia kruopščiai patikrinti.",
    skill: "saltinis",
  },
  {
    id: 6,
    title: "Paskyros blokavimo grėsmė",
    message: [
      "Jūsų paskyra bus užblokuota!",
      "Pastebėjome neįprastą prisijungimą.",
      "Kad neprarastumėte paskyros, per 15 minučių patvirtinkite savo duomenis:",
      "accounts-security-check.com",
      "Nepatvirtinus paskyra bus visam laikui ištrinta.",
    ],
    context:
      "Laiške naudojamas pažįstamos platformos logotipas, tačiau siuntėjo adresas yra support-security458@gmail.com.",
    question: "Kaip saugiausia pasielgti?",
    answers: [
      {
        id: "a",
        text: "Paspausčiau nuorodą ir prisijungčiau, nes nenorėčiau prarasti paskyros.",
        feedbackTitle: "Tai būtų rizikinga",
        feedback:
          "Netikras puslapis gali atrodyti kaip tikras, bet perduoti tavo prisijungimo duomenis sukčiams.",
      },
      {
        id: "b",
        text: "Nuorodos nespausčiau. Pats atidaryčiau oficialią programėlę arba svetainę ir ten patikrinčiau paskyrą.",
        feedbackTitle: "Teisingas pasirinkimas",
        feedback:
          "Oficialioje programėlėje arba svetainėje gali saugiai patikrinti, ar paskyroje iš tikrųjų yra perspėjimas.",
      },
      {
        id: "c",
        text: "Persiųsčiau laišką draugui ir paprašyčiau jo patikrinti nuorodą.",
        feedbackTitle: "Taip riziką perduotum kitam žmogui",
        feedback:
          "Įtartinų nuorodų nereikėtų siųsti draugams tikrinimo tikslais.",
      },
    ],
    correctAnswerId: "b",
    warningSigns: [
      "Grasinama greitai užblokuoti paskyrą.",
      "Siuntėjo adresas nėra oficialus.",
      "Nuoroda nesutampa su tikros platformos adresu.",
      "Prašoma prisijungti per laiške pateiktą nuorodą.",
    ],
    safetyRule:
      "Paskyros būseną tikrink tik oficialioje programėlėje arba svetainėje.",
    skill: "skuba",
  },
  {
    id: 7,
    title: "Influencerio dovana",
    message: [
      "🎁 SVEIKINAME!",
      "Buvai atrinktas laimėti naują žaidimų konsolę.",
      "Kad patvirtintume tavo tapatybę, įvesk banko kortelės duomenis.",
      "Nuskaičiuosime tik 1 € patvirtinimo mokestį.",
      "influencer-dovana-prizas.com",
    ],
    context:
      "Paskyros pavadinime viena raidė skiriasi nuo tikrojo influencerio paskyros pavadinimo, o profilis sukurtas prieš kelias dienas.",
    question: "Kaip saugiausia pasielgti?",
    answers: [
      {
        id: "a",
        text: "Sumokėčiau 1 €, nes prizas daug vertingesnis.",
        feedbackTitle: "Mažas mokestis gali būti tik masalas",
        feedback:
          "Sukčiams gali rūpėti ne 1 €, o tavo kortelės numeris, galiojimo data ir saugos kodas.",
      },
      {
        id: "b",
        text: "Patikrinčiau oficialią influencerio paskyrą ir konkurso taisykles, o kortelės duomenų nevesčiau.",
        feedbackTitle: "Teisingas pasirinkimas",
        feedback:
          "Konkursą reikia tikrinti oficialiame profilyje, o apie netikrą paskyrą galima pranešti socialiniam tinklui.",
      },
      {
        id: "c",
        text: "Parašyčiau kortelės numerį žinutėje, kad nereikėtų atidaryti nuorodos.",
        feedbackTitle: "Kortelės duomenų negalima siųsti žinute",
        feedback:
          "Banko kortelės numerio, galiojimo datos ir saugos kodo nereikėtų siųsti jokiam prizą žadančiam profiliui.",
      },
    ],
    correctAnswerId: "b",
    warningSigns: [
      "Paskyros pavadinimas šiek tiek skiriasi nuo tikrojo.",
      "Profilis sukurtas neseniai.",
      "Konkurse nedalyvavai.",
      "Prašoma kortelės duomenų ir mažo patvirtinimo mokesčio.",
    ],
    safetyRule:
      "Žinomas vardas ir pažįstama nuotrauka dar neįrodo, kad paskyra tikra.",
    skill: "duomenys",
  },
  {
    id: 8,
    title: "Įtikinamai skambantis DI atsakymas",
    message: [
      "Klausimas: Koks yra didžiausias ežeras Europoje?",
      "DI atsakymas:",
      "Didžiausias Europos ežeras yra Ženevos ežeras, kurio plotas siekia apie 580 km².",
    ],
    context:
      "Atsakymas parašytas užtikrintai, tačiau nepateiktas šaltinis ir nepaaiškinta, pagal kokį Europos apibrėžimą atsakoma.",
    question: "Kaip saugiausia panaudoti šį atsakymą?",
    answers: [
      {
        id: "a",
        text: "Įrašyčiau atsakymą į pristatymą, nes DI pateikė konkretų pavadinimą ir skaičių.",
        feedbackTitle: "Konkretus skaičius dar neįrodo, kad atsakymas teisingas",
        feedback:
          "DI gali pateikti tikroviškai skambantį, bet klaidingą arba ne visą informaciją.",
      },
      {
        id: "b",
        text: "Paprašyčiau DI pateikti šaltinius ir informaciją pats patikrinčiau patikimoje enciklopedijoje ar atlase.",
        feedbackTitle: "Teisingas pasirinkimas",
        feedback:
          "DI gali padėti pradėti paiešką, tačiau svarbius faktus reikia patikrinti nepriklausomuose šaltiniuose.",
      },
      {
        id: "c",
        text: "Paklausčiau DI dar kartą. Jeigu jis atsakymą pakartotų, laikyčiau jį teisingu.",
        feedbackTitle: "Pakartojimas nepadaro fakto patikimesnio",
        feedback:
          "DI gali kelis kartus pakartoti tą pačią klaidingą informaciją.",
      },
    ],
    correctAnswerId: "b",
    warningSigns: [
      "Nepateiktas joks šaltinis.",
      "Neaišku, kaip apibrėžiama Europa.",
      "Atsakymas pateiktas labai užtikrintai.",
      "Informacija bus naudojama mokykliniame darbe.",
    ],
    safetyRule:
      "DI atsakymas gali būti paieškos pradžia, bet ne galutinis įrodymas.",
    skill: "informacija",
  },
];