export type PrivacySkillId =
  | "asmeniniai-duomenys"
  | "publikavimas"
  | "leidimai"
  | "skaitmeninis-pedsakas";

export type PrivacyAnswerId = "a" | "b" | "c";

export interface PrivacyAnswer {
  id: PrivacyAnswerId;
  text: string;
  feedbackTitle: string;
  feedback: string;
}

export interface PrivacyScenario {
  id: number;
  title: string;
  message: string[];
  context?: string;
  question: string;
  answers: PrivacyAnswer[];
  correctAnswerId: PrivacyAnswerId;
  warningSigns: string[];
  safetyRule: string;
  skill: PrivacySkillId;
}

export const privacyScenarios: PrivacyScenario[] = [
  {
    id: 1,
    title: "Viešas socialinio tinklo profilis",
    message: [
      "Tavo socialinio tinklo profilį gali matyti visi interneto naudotojai.",
      "Jame matomas tavo vardas, nuotraukos, pomėgiai ir įrašai.",
      "Programėlė siūlo pasirinkti, kas gali matyti tavo turinį.",
    ],
    question: "Koks pasirinkimas būtų saugesnis?",
    answers: [
      {
        id: "a",
        text: "Palikti profilį viešą, kad surinkčiau daugiau sekėjų.",
        feedbackTitle: "Viešas profilis atskleidžia daugiau informacijos",
        feedback:
          "Viešus įrašus ir nuotraukas gali matyti, išsaugoti bei persiųsti ir visiškai nepažįstami žmonės.",
      },
      {
        id: "b",
        text: "Apriboti profilį ir leisti turinį matyti tik patvirtintiems žmonėms.",
        feedbackTitle: "Teisingas pasirinkimas",
        feedback:
          "Privatus profilis suteikia daugiau kontrolės, kas gali matyti tavo įrašus ir asmeninę informaciją.",
      },
      {
        id: "c",
        text: "Palikti profilį viešą, bet ištrinti vieną seną nuotrauką.",
        feedbackTitle: "Vienos nuotraukos ištrynimo nepakanka",
        feedback:
          "Reikia įvertinti viso profilio matomumą, o ne tik vieną paskelbtą nuotrauką.",
      },
    ],
    correctAnswerId: "b",
    warningSigns: [
      "Profilį gali matyti visi.",
      "Viešai rodomos asmeninės nuotraukos ir pomėgiai.",
      "Neaišku, kas išsaugo arba persiunčia turinį.",
    ],
    safetyRule:
      "Reguliariai patikrink profilio privatumo nustatymus ir ribok, kas gali matyti tavo turinį.",
    skill: "asmeniniai-duomenys",
  },
  {
    id: 2,
    title: "Informacija apie mokyklą ir namus",
    message: [
      "Naujas internetinis pažįstamas klausia:",
      "„Kurioje mokykloje mokaisi?“",
      "„Kuriame rajone gyveni?“",
      "„Kada paprastai grįžti namo?“",
    ],
    question: "Kaip saugiausia atsakyti?",
    answers: [
      {
        id: "a",
        text: "Pasakyti viską, nes žmogus atrodo draugiškas.",
        feedbackTitle: "Draugiškas bendravimas dar neįrodo, kad žmogus patikimas",
        feedback:
          "Mokykla, gyvenamoji vieta ir dienotvarkė gali padėti nepažįstamam žmogui nustatyti, kur tave rasti.",
      },
      {
        id: "b",
        text: "Pasakyti tik mokyklos pavadinimą, bet ne namų adresą.",
        feedbackTitle: "Mokyklos pavadinimas taip pat yra jautri informacija",
        feedback:
          "Net keli atskiri faktai gali būti sujungti ir padėti nustatyti tavo buvimo vietą.",
      },
      {
        id: "c",
        text: "Informacijos neatskleisti ir apie pokalbį pasakyti patikimam suaugusiajam.",
        feedbackTitle: "Teisingas pasirinkimas",
        feedback:
          "Nepažįstamam žmogui nereikia žinoti tavo mokyklos, gyvenamosios vietos ar dienotvarkės.",
      },
    ],
    correctAnswerId: "c",
    warningSigns: [
      "Klausinėjama apie mokyklą ir gyvenamąją vietą.",
      "Domimasi tavo dienotvarke.",
      "Žmogų pažįsti tik internete.",
    ],
    safetyRule:
      "Nepažįstamiems žmonėms neatskleisk savo mokyklos, adreso ar įprastos dienotvarkės.",
    skill: "asmeniniai-duomenys",
  },
  {
    id: 3,
    title: "Nuotrauka su vietos žyma",
    message: [
      "Atostogaudamas nufotografavai šeimos namus.",
      "Programėlė siūlo prie nuotraukos pridėti tikslią vietos žymą.",
      "Nuotrauką ketini paskelbti viešai.",
    ],
    question: "Kaip saugiausia pasielgti?",
    answers: [
      {
        id: "a",
        text: "Pridėti tikslią vietą, kad draugai žinotų, kur esi.",
        feedbackTitle: "Tiksli vieta gali atskleisti per daug",
        feedback:
          "Vieša vietos žyma gali parodyti nepažįstamiems žmonėms, kur šiuo metu esi arba kur gyveni.",
      },
      {
        id: "b",
        text: "Nenaudoti tikslios vietos žymos ir patikrinti, ar nuotraukoje nėra adreso ar kitų atpažįstamų ženklų.",
        feedbackTitle: "Teisingas pasirinkimas",
        feedback:
          "Prieš paskelbiant verta patikrinti ne tik vietos žymą, bet ir tai, kas matoma pačioje nuotraukoje.",
      },
      {
        id: "c",
        text: "Pridėti vietos žymą, bet po kelių valandų ją ištrinti.",
        feedbackTitle: "Informacija jau gali būti išsaugota",
        feedback:
          "Kiti žmonės gali padaryti ekrano nuotrauką arba išsaugoti įrašą dar prieš tau jį pakeičiant.",
      },
    ],
    correctAnswerId: "b",
    warningSigns: [
      "Rodoma tiksli buvimo vieta.",
      "Nuotrauka bus vieša.",
      "Fone gali būti matomas adresas ar namo numeris.",
    ],
    safetyRule:
      "Prieš skelbdamas nuotrauką patikrink vietos žymą ir tai, kokią informaciją atskleidžia vaizdas.",
    skill: "publikavimas",
  },
  {
    id: 4,
    title: "Draugo nuotrauka",
    message: [
      "Per klasės renginį nufotografavai draugą juokingoje situacijoje.",
      "Nori nuotrauką įkelti į socialinį tinklą.",
      "Draugas dar nežino, kad ketini ją paskelbti.",
    ],
    question: "Kaip reikėtų pasielgti?",
    answers: [
      {
        id: "a",
        text: "Paskelbti, nes nuotrauką padarei savo telefonu.",
        feedbackTitle: "Nuotraukos padarymas nesuteikia teisės ignoruoti kito žmogaus privatumo",
        feedback:
          "Draugas gali nenorėti, kad tokia jo nuotrauka būtų viešai matoma.",
      },
      {
        id: "b",
        text: "Pirmiausia parodyti nuotrauką draugui ir gauti jo sutikimą.",
        feedbackTitle: "Teisingas pasirinkimas",
        feedback:
          "Prieš skelbiant kito žmogaus nuotrauką reikia gerbti jo nuomonę ir gauti leidimą.",
      },
      {
        id: "c",
        text: "Paskelbti tik trumpam ir vėliau ištrinti.",
        feedbackTitle: "Trumpas paskelbimas vis tiek gali turėti pasekmių",
        feedback:
          "Nuotrauka gali būti išsaugota, persiųsta arba nufotografuota ekrane.",
      },
    ],
    correctAnswerId: "b",
    warningSigns: [
      "Nuotraukoje yra kitas žmogus.",
      "Situacija gali būti jam nemaloni.",
      "Leidimo paskelbti negavai.",
    ],
    safetyRule:
      "Prieš skelbdamas kito žmogaus nuotrauką visada paprašyk jo sutikimo.",
    skill: "publikavimas",
  },
  {
    id: 5,
    title: "Programėlės prašomi leidimai",
    message: [
      "Įsidiegei paprastą žibintuvėlio programėlę.",
      "Ji prašo prieigos prie kontaktų, mikrofono, nuotraukų ir tikslios buvimo vietos.",
      "Be šių leidimų programėlė žada neveikti.",
    ],
    question: "Ką reikėtų daryti?",
    answers: [
      {
        id: "a",
        text: "Suteikti visus leidimus, nes programėlė juos prašo.",
        feedbackTitle: "Ne visi prašomi leidimai yra būtini",
        feedback:
          "Žibintuvėlio funkcijai paprastai nereikia kontaktų, mikrofono ar visų nuotraukų.",
      },
      {
        id: "b",
        text: "Patikrinti, ar leidimai reikalingi programėlės funkcijai, ir nesuteikti nereikalingų leidimų.",
        feedbackTitle: "Teisingas pasirinkimas",
        feedback:
          "Programėlei verta suteikti tik tuos leidimus, kurių iš tikrųjų reikia jos veikimui.",
      },
      {
        id: "c",
        text: "Suteikti leidimus, o po mėnesio juos peržiūrėti.",
        feedbackTitle: "Geriau tikrinti prieš suteikiant prieigą",
        feedback:
          "Programėlė gali pradėti rinkti informaciją iš karto, todėl leidimus reikia įvertinti prieš juos patvirtinant.",
      },
    ],
    correctAnswerId: "b",
    warningSigns: [
      "Prašoma funkcijai nereikalingų leidimų.",
      "Norima prieigos prie daug asmeninės informacijos.",
      "Nepaaiškinama, kam duomenys bus naudojami.",
    ],
    safetyRule:
      "Programėlėms suteik tik tuos leidimus, kurių tikrai reikia jų funkcijoms.",
    skill: "leidimai",
  },
  {
    id: 6,
    title: "Linksma internetinė viktorina",
    message: [
      "Internete randi viktoriną „Koks tavo slaptas personažas?“",
      "Prieš rezultatą ji prašo įvesti vardą, gimimo datą, mokyklą ir augintinio vardą.",
      "Viktorinos kūrėjas nenurodytas.",
    ],
    question: "Kaip saugiausia pasielgti?",
    answers: [
      {
        id: "a",
        text: "Įvesti tikrus duomenis, nes kitaip rezultatas gali būti netikslus.",
        feedbackTitle: "Pramoginė viktorina neturėtų reikalauti tiek asmeninių duomenų",
        feedback:
          "Ši informacija gali būti renkama reklamai, paskyroms atspėti arba kitais neaiškiais tikslais.",
      },
      {
        id: "b",
        text: "Įvesti tik augintinio vardą, nes tai nėra svarbi informacija.",
        feedbackTitle: "Augintinio vardas kartais naudojamas saugumo klausimuose",
        feedback:
          "Net nekaltai atrodantys duomenys gali būti naudingi bandant atspėti slaptažodžius ar paskyros atkūrimo atsakymus.",
      },
      {
        id: "c",
        text: "Viktorinos nepildyti, jeigu neaišku, kas renka duomenis ir kam jie bus naudojami.",
        feedbackTitle: "Teisingas pasirinkimas",
        feedback:
          "Prieš pateikiant informaciją reikia suprasti, kas ją gaus ir kodėl ji reikalinga.",
      },
    ],
    correctAnswerId: "c",
    warningSigns: [
      "Prašoma daug asmeninių duomenų.",
      "Duomenys nereikalingi paprastai viktorinai.",
      "Neaišku, kas sukūrė svetainę.",
    ],
    safetyRule:
      "Pramoginėms viktorinoms neatskleisk tikrų asmeninių duomenų.",
    skill: "leidimai",
  },
  {
    id: 7,
    title: "Nepažįstamo žmogaus kvietimas",
    message: [
      "Gauni kvietimą draugauti iš nepažįstamo profilio.",
      "Profilio nuotraukoje – panašaus amžiaus žmogus.",
      "Paskyroje labai mažai įrašų, o visos nuotraukos įkeltos tą pačią dieną.",
    ],
    question: "Kaip saugiausia pasielgti?",
    answers: [
      {
        id: "a",
        text: "Priimti kvietimą, nes žmogus atrodo panašaus amžiaus.",
        feedbackTitle: "Profilio nuotrauka gali būti ne tikrojo žmogaus",
        feedback:
          "Netikros paskyros gali naudoti pavogtas nuotraukas ir melagingą informaciją.",
      },
      {
        id: "b",
        text: "Priimti kvietimą, bet iš pradžių nieko žmogui nerašyti.",
        feedbackTitle: "Priėmus kvietimą profilis gali pamatyti tavo informaciją",
        feedback:
          "Priklausomai nuo privatumo nustatymų, naujas kontaktas gali iš karto matyti tavo įrašus ir nuotraukas.",
      },
      {
        id: "c",
        text: "Kvietimo nepriimti ir prireikus profilį užblokuoti arba apie jį pranešti.",
        feedbackTitle: "Teisingas pasirinkimas",
        feedback:
          "Nereikia priimti kvietimų iš žmonių, kurių tikrai nepažįsti.",
      },
    ],
    correctAnswerId: "c",
    warningSigns: [
      "Profilio savininko nepažįsti.",
      "Paskyroje mažai tikros veiklos.",
      "Visas turinys įkeltas labai neseniai.",
    ],
    safetyRule:
      "Draugų sąraše laikyk tik žmones, kuriuos iš tikrųjų pažįsti.",
    skill: "asmeniniai-duomenys",
  },
  {
    id: 8,
    title: "Senas įrašas vėl išplito",
    message: [
      "Prieš dvejus metus paskelbei juokingą vaizdo įrašą.",
      "Vėliau jį ištrynei.",
      "Dabar pamatai, kad kitas žmogus išsaugojo vaizdo įrašą ir vėl juo dalijasi.",
    ],
    question: "Ką ši situacija parodo?",
    answers: [
      {
        id: "a",
        text: "Ištrynus įrašą jis visada visiškai dingsta iš interneto.",
        feedbackTitle: "Ištrintas turinys gali būti išsaugotas kitur",
        feedback:
          "Kiti žmonės gali išsaugoti, persiųsti arba nufotografuoti viešai paskelbtą turinį.",
      },
      {
        id: "b",
        text: "Prieš skelbiant reikia pagalvoti, ar turinys nepakenks vėliau.",
        feedbackTitle: "Teisingas pasirinkimas",
        feedback:
          "Skaitmeninis pėdsakas gali išlikti ilgiau nei pats įrašas tavo paskyroje.",
      },
      {
        id: "c",
        text: "Viešas įrašas yra saugus, jeigu jis paskelbtas tik kelioms minutėms.",
        feedbackTitle: "Net kelių minučių gali pakakti turiniui išsaugoti",
        feedback:
          "Kiti žmonės gali labai greitai padaryti ekrano nuotrauką arba atsisiųsti vaizdo įrašą.",
      },
    ],
    correctAnswerId: "b",
    warningSigns: [
      "Turinys buvo paskelbtas viešai.",
      "Kiti žmonės galėjo jį išsaugoti.",
      "Ištrynimas negarantuoja, kad neliko kopijų.",
    ],
    safetyRule:
      "Prieš skelbdamas pagalvok, ar neprieštarautum, jeigu turinį kas nors pamatytų ir vėliau.",
    skill: "skaitmeninis-pedsakas",
  },
];