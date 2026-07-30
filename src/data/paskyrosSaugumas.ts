export type AccountSecuritySkillId =
  | "stiprumas"
  | "unikalumas"
  | "kodai"
  | "prisijungimas";

export type AccountSecurityAnswerId = "a" | "b" | "c";

export interface AccountSecurityAnswer {
  id: AccountSecurityAnswerId;
  text: string;
  feedbackTitle: string;
  feedback: string;
}

export interface AccountSecurityScenario {
  id: number;
  title: string;
  message: string[];
  context?: string;
  question: string;
  answers: AccountSecurityAnswer[];
  correctAnswerId: AccountSecurityAnswerId;
  warningSigns: string[];
  safetyRule: string;
  skill: AccountSecuritySkillId;
}

export const accountSecurityScenarios: AccountSecurityScenario[] = [
  {
    id: 1,
    title: "Tas pats slaptažodis visur",
    message: [
      "Turi žaidimo, elektroninio pašto ir socialinio tinklo paskyras.",
      "Visose trijose paskyrose naudoji tą patį slaptažodį.",
      "Taip jį lengviau prisiminti.",
    ],
    question: "Koks būtų saugiausias sprendimas?",
    answers: [
      {
        id: "a",
        text: "Palikčiau tą patį slaptažodį, nes jis yra pakankamai ilgas.",
        feedbackTitle: "Vien ilgio nepakanka",
        feedback:
          "Jeigu vienos svetainės duomenys nutekėtų, tas pats slaptažodis galėtų būti išbandytas ir kitose tavo paskyrose.",
      },
      {
        id: "b",
        text: "Kiekvienai svarbiai paskyrai sukurčiau skirtingą slaptažodį.",
        feedbackTitle: "Teisingas pasirinkimas",
        feedback:
          "Skirtingi slaptažodžiai apsaugo kitas paskyras, jeigu vienos paskyros slaptažodis būtų pavogtas.",
      },
      {
        id: "c",
        text: "Prie to paties slaptažodžio kiekvienoje svetainėje pridėčiau jos pavadinimą.",
        feedbackTitle: "Tai lengvai nuspėjama sistema",
        feedback:
          "Jeigu sukčius sužinotų vieną slaptažodį, jis galėtų nesunkiai atspėti, kaip sudaryti ir kitų paskyrų slaptažodžiai.",
      },
    ],
    correctAnswerId: "b",
    warningSigns: [
      "Tas pats slaptažodis naudojamas keliose paskyrose.",
      "Vienos paskyros nutekėjimas gali paveikti visas kitas.",
      "Slaptažodžių keitimo sistema yra lengvai nuspėjama.",
    ],
    safetyRule:
      "Kiekvienai svarbiai paskyrai naudok skirtingą slaptažodį.",
    skill: "unikalumas",
  },
  {
    id: 2,
    title: "Lengvai atspėjamas slaptažodis",
    message: [
      "Kuri naujos paskyros slaptažodį.",
      "Svarstai naudoti savo vardą, gimimo metus ir skaičius 123.",
      "Tokį slaptažodį būtų lengva prisiminti.",
    ],
    question: "Koks slaptažodis būtų saugesnis?",
    answers: [
      {
        id: "a",
        text: "Trumpas slaptažodis su vardu ir gimimo metais.",
        feedbackTitle: "Tokį slaptažodį gali būti lengva atspėti",
        feedback:
          "Vardas, gimimo metai, augintinio vardas ar mėgstama komanda dažnai būna matomi arba lengvai sužinomi.",
      },
      {
        id: "b",
        text: "Ilga, atsitiktinė ir tik šiai paskyrai skirta slaptažodžio frazė.",
        feedbackTitle: "Teisingas pasirinkimas",
        feedback:
          "Ilgas ir unikalus slaptažodis paprastai yra saugesnis už trumpą, net jeigu trumpame slaptažodyje yra keli simboliai ar skaičiai.",
      },
      {
        id: "c",
        text: "Žodis „slaptazodis“, tik kelias raides pakeitus skaičiais.",
        feedbackTitle: "Paprasti pakeitimai nepadaro slaptažodžio stipraus",
        feedback:
          "Dažnus žodžius ir įprastus raidžių pakeitimus slaptažodžių spėjimo programos gali patikrinti labai greitai.",
      },
    ],
    correctAnswerId: "b",
    warningSigns: [
      "Naudojama asmeninė informacija.",
      "Slaptažodis yra trumpas.",
      "Pasirinktas labai dažnas žodis.",
      "Raidės pakeistos nuspėjamais skaičiais.",
    ],
    safetyRule:
      "Rinkis ilgą, unikalų ir sunkiai atspėjamą slaptažodį arba slaptažodžio frazę.",
    skill: "stiprumas",
  },
  {
    id: 3,
    title: "Draugas prašo slaptažodžio",
    message: [
      "Draugas nori trumpam prisijungti prie tavo žaidimo paskyros.",
      "Jis žada nieko nekeisti ir tik surinkti kasdienį prizą.",
      "Draugas sako: „Juk gali manimi pasitikėti.“",
    ],
    question: "Kaip saugiausia pasielgti?",
    answers: [
      {
        id: "a",
        text: "Pasakyčiau slaptažodį, bet po kelių dienų jį pakeisčiau.",
        feedbackTitle: "Slaptažodžio dalintis nereikėtų",
        feedback:
          "Slaptažodis gali būti netyčia išsaugotas, parodytas kitam žmogui arba panaudotas paskyros nustatymams pakeisti.",
      },
      {
        id: "b",
        text: "Prisijungčiau pats ir leisčiau draugui naudotis paskyra mano įrenginyje.",
        feedbackTitle: "Tai vis tiek gali kelti riziką",
        feedback:
          "Kitas žmogus gali pakeisti nustatymus, išleisti virtualius daiktus arba pažeisti platformos taisykles.",
      },
      {
        id: "c",
        text: "Slaptažodžio nesakyčiau ir paaiškinčiau, kad paskyra yra asmeninė.",
        feedbackTitle: "Teisingas pasirinkimas",
        feedback:
          "Net artimam draugui nereikėtų atskleisti savo paskyros slaptažodžio.",
      },
    ],
    correctAnswerId: "c",
    warningSigns: [
      "Prašoma atskleisti asmeninį slaptažodį.",
      "Bandoma paveikti pasitikėjimu arba draugyste.",
      "Neaišku, ką kitas žmogus darys paskyroje.",
    ],
    safetyRule:
      "Slaptažodis yra asmeninis. Jo nesakyk net draugams.",
    skill: "unikalumas",
  },
  {
    id: 4,
    title: "Prašymas atsiųsti prisijungimo kodą",
    message: [
      "Gauni šešių skaitmenų prisijungimo kodą.",
      "Po kelių sekundžių tau parašo nepažįstamas žmogus:",
      "„Atsiprašau, per klaidą kodas buvo išsiųstas tavo numeriu. Persiųsk jį man.“",
    ],
    question: "Ką turėtum daryti?",
    answers: [
      {
        id: "a",
        text: "Persiųsčiau kodą, nes jis skirtas ne man.",
        feedbackTitle: "Kodo persiųsti negalima",
        feedback:
          "Prisijungimo kodas galėjo būti atsiųstas todėl, kad kažkas bando prisijungti prie tavo paskyros.",
      },
      {
        id: "b",
        text: "Kodo niekam nesiųsčiau ir patikrinčiau savo paskyros saugumo nustatymus.",
        feedbackTitle: "Teisingas pasirinkimas",
        feedback:
          "Vienkartinis kodas gali patvirtinti prisijungimą. Jį gavęs sukčius galėtų patekti į tavo paskyrą.",
      },
      {
        id: "c",
        text: "Paprašyčiau nepažįstamo žmogaus pirmiausia pasakyti savo vardą.",
        feedbackTitle: "Vardas neįrodo, kad žmogus patikimas",
        feedback:
          "Prisijungimo ir paskyros atkūrimo kodų negalima siųsti kitam žmogui, nepriklausomai nuo jo pateikto paaiškinimo.",
      },
    ],
    correctAnswerId: "b",
    warningSigns: [
      "Gaunamas kodas, kurio pats neprašei.",
      "Nepažįstamas žmogus prašo kodą persiųsti.",
      "Prašymas pateikiamas iš karto po kodo gavimo.",
    ],
    safetyRule:
      "Prisijungimo ir paskyros atkūrimo kodų niekam neatskleisk.",
    skill: "kodai",
  },
  {
    id: 5,
    title: "Dviejų veiksmų patvirtinimas",
    message: [
      "Paskyros nustatymuose matai pasiūlymą įjungti dviejų veiksmų patvirtinimą.",
      "Įjungus šią apsaugą, prisijungiant kartais reikės papildomo patvirtinimo.",
    ],
    question: "Kodėl verta jį įjungti?",
    answers: [
      {
        id: "a",
        text: "Jis gali padėti apsaugoti paskyrą, net jeigu kas nors sužinotų slaptažodį.",
        feedbackTitle: "Teisingas pasirinkimas",
        feedback:
          "Papildomas patvirtinimo veiksmas apsunkina prisijungimą žmogui, kuris turi slaptažodį, bet neturi tavo patvirtinimo priemonės.",
      },
      {
        id: "b",
        text: "Jį įjungus slaptažodžio daugiau nebereikia saugoti.",
        feedbackTitle: "Slaptažodis vis tiek turi būti saugus",
        feedback:
          "Dviejų veiksmų patvirtinimas yra papildoma apsauga, tačiau jis nepakeičia stipraus ir unikalaus slaptažodžio.",
      },
      {
        id: "c",
        text: "Jis reikalingas tik žmonėms, kurie turi daug sekėjų.",
        feedbackTitle: "Papildoma apsauga naudinga visiems",
        feedback:
          "Elektroninio pašto, žaidimų, mokymosi ir socialinių tinklų paskyrose gali būti vertingų asmeninių duomenų.",
      },
    ],
    correctAnswerId: "a",
    warningSigns: [
      "Paskyra apsaugota tik vienu slaptažodžiu.",
      "Elektroninio pašto paskyra naudojama kitoms paskyroms atkurti.",
      "Paskyroje saugomi asmeniniai duomenys ar virtualūs pirkiniai.",
    ],
    safetyRule:
      "Kai įmanoma, įjunk dviejų veiksmų patvirtinimą ir saugok atsarginius atkūrimo kodus.",
    skill: "kodai",
  },
  {
    id: 6,
    title: "Prisijungimas svetimame kompiuteryje",
    message: [
      "Mokyklos bibliotekoje prisijungei prie savo elektroninio pašto.",
      "Naršyklė pasiūlė išsaugoti slaptažodį.",
      "Po tavęs tuo pačiu kompiuteriu naudosis kiti žmonės.",
    ],
    question: "Kaip saugiausia pasielgti baigus darbą?",
    answers: [
      {
        id: "a",
        text: "Uždaryčiau naršyklės langą ir palikčiau paskyrą prisijungusią.",
        feedbackTitle: "Vien uždaryti langą gali nepakakti",
        feedback:
          "Kitas žmogus gali vėl atidaryti svetainę ir rasti tavo paskyrą vis dar prijungtą.",
      },
      {
        id: "b",
        text: "Atsijungčiau nuo paskyros ir neleisčiau naršyklei išsaugoti slaptažodžio.",
        feedbackTitle: "Teisingas pasirinkimas",
        feedback:
          "Svetimame ar viešame įrenginyje svarbu atsijungti ir nepalikti išsaugotų prisijungimo duomenų.",
      },
      {
        id: "c",
        text: "Ištrinčiau vieną perskaitytą laišką ir tada uždaryčiau puslapį.",
        feedbackTitle: "Tai neapsaugo paskyros",
        feedback:
          "Svarbiausia atsijungti nuo paskyros ir patikrinti, ar slaptažodis nebuvo išsaugotas.",
      },
    ],
    correctAnswerId: "b",
    warningSigns: [
      "Naudojamas bendras arba svetimas įrenginys.",
      "Naršyklė siūlo išsaugoti slaptažodį.",
      "Paskyra gali likti prisijungusi uždarius langą.",
    ],
    safetyRule:
      "Svetimame įrenginyje neišsaugok slaptažodžio ir visada atsijunk nuo paskyros.",
    skill: "prisijungimas",
  },
  {
    id: 7,
    title: "Pranešimas apie nutekintą slaptažodį",
    message: [
      "Oficialioje programėlėje matai perspėjimą:",
      "„Šis slaptažodis galėjo patekti į duomenų nutekėjimą.“",
      "Tą patį slaptažodį naudoji dar dviejose paskyrose.",
    ],
    question: "Ką reikėtų padaryti pirmiausia?",
    answers: [
      {
        id: "a",
        text: "Nieko nekeisčiau, jeigu paskyroje dar nematau įtartinos veiklos.",
        feedbackTitle: "Laukti nereikėtų",
        feedback:
          "Nutekintas slaptažodis gali būti panaudotas vėliau, todėl jį svarbu pakeisti kuo greičiau.",
      },
      {
        id: "b",
        text: "Pakeisčiau slaptažodį tik toje paskyroje, kuri parodė perspėjimą.",
        feedbackTitle: "Reikia patikrinti ir kitas paskyras",
        feedback:
          "Jeigu tą patį slaptažodį naudojai kitur, jis gali kelti pavojų ir toms paskyroms.",
      },
      {
        id: "c",
        text: "Pakeisčiau slaptažodį visose paskyrose, kuriose jis buvo naudojamas, ir patikrinčiau prisijungimų istoriją.",
        feedbackTitle: "Teisingas pasirinkimas",
        feedback:
          "Nutekinto slaptažodžio nebereikėtų naudoti. Taip pat verta atsijungti nuo nepažįstamų įrenginių ir įjungti papildomą apsaugą.",
      },
    ],
    correctAnswerId: "c",
    warningSigns: [
      "Gautas oficialus saugumo perspėjimas.",
      "Tas pats slaptažodis naudojamas keliose paskyrose.",
      "Paskyroje gali būti nežinomų prisijungimų.",
    ],
    safetyRule:
      "Nutekintą slaptažodį pakeisk visose vietose, kuriose jį naudojai.",
    skill: "prisijungimas",
  },
  {
    id: 8,
    title: "Slaptažodžių tvarkyklė",
    message: [
      "Turi daug paskyrų ir sunku prisiminti visus skirtingus slaptažodžius.",
      "Svarstai juos užrašyti viename viešai pasiekiamame dokumente.",
    ],
    question: "Koks sprendimas būtų saugesnis?",
    answers: [
      {
        id: "a",
        text: "Visus slaptažodžius užrašyti paprastame dokumente ir pavadinti jį „Slaptažodžiai“.",
        feedbackTitle: "Toks dokumentas gali būti lengvai surastas",
        feedback:
          "Jeigu kas nors patektų į įrenginį ar debesijos paskyrą, visi slaptažodžiai būtų vienoje lengvai atpažįstamoje vietoje.",
      },
      {
        id: "b",
        text: "Naudoti patikimą slaptažodžių tvarkyklę, apsaugotą stipriu pagrindiniu slaptažodžiu.",
        feedbackTitle: "Teisingas pasirinkimas",
        feedback:
          "Slaptažodžių tvarkyklė gali sugeneruoti ir saugoti skirtingus stiprius slaptažodžius, kad nereikėtų jų visų prisiminti.",
      },
      {
        id: "c",
        text: "Visose paskyrose naudoti vieną lengvai įsimenamą slaptažodį.",
        feedbackTitle: "Vienas slaptažodis visoms paskyroms yra rizikingas",
        feedback:
          "Pavogus vieną slaptažodį, gali būti bandoma prisijungti prie visų tavo paskyrų.",
      },
    ],
    correctAnswerId: "b",
    warningSigns: [
      "Slaptažodžiai laikomi neapsaugotame dokumente.",
      "Failo pavadinimas aiškiai parodo jo turinį.",
      "Tas pats slaptažodis naudojamas keliose paskyrose.",
    ],
    safetyRule:
      "Skirtingus slaptažodžius saugiau laikyti patikimoje slaptažodžių tvarkyklėje.",
    skill: "stiprumas",
  },
];