import type { DiagnosticData } from "@/data/diagnosticTypes";

export const diagnosticData = {
  activity: {
    id: "informatika-5-diagnostika",
    slug: "ka-jau-moku",
    title: "Ką jau moku?",
    subtitle: "Trumpa 5 klasės informatikos pradžios veikla.",
    grade: 5,
    subject: "Informatika",
    expectedQuestionCount: 12,
    estimatedMinutes: {
      min: 10,
      max: 15,
    },
    intro:
      "Atlikdamas užduotis sužinosi, kurios informatikos temos tau jau sekasi, o kurias verta trumpai pakartoti.",
    checkedSkills: [
      "Failų tvarkymas ir skaitmeninių priemonių pasirinkimas",
      "Komandų sekos ir algoritminis mąstymas",
      "Lentelių ir duomenų supratimas",
      "Saugus ir atsakingas elgesys internete",
    ],
    instructions: [
      "Atidžiai perskaityk klausimą.",
      "Pasirink arba sudėliok atsakymą.",
      "Patikrink savo atsakymą.",
      "Perskaityk trumpą paaiškinimą.",
      "Pereik prie kitos užduoties.",
    ],
    exitDialog: {
      title: "Ar tikrai nori baigti veiklą?",
      message:
        "Dar neatlikai visų užduočių. Jei išeisi dabar, šios diagnostikos atsakymai ir rezultatai nebus išsaugoti.",
      continueLabel: "Grįžti prie užduočių",
      exitLabel: "Baigti veiklą",
    },
  },

  areas: {
    digitalTools: {
      id: "digitalTools",
      title: "Failai ir skaitmeninės priemonės",
      description:
        "Failų saugojimas, pavadinimai ir tinkamos skaitmeninės priemonės pasirinkimas.",
    },

    algorithms: {
      id: "algorithms",
      title: "Algoritminis mąstymas",
      description:
        "Veiksmų sekos, komandų vykdymas, kartojimas ir klaidų paieška.",
    },

    data: {
      id: "data",
      title: "Duomenų supratimas",
      description: "Duomenų skaitymas, palyginimas ir išvadų formulavimas.",
    },

    onlineSafety: {
      id: "onlineSafety",
      title: "Saugumas ir bendravimas internete",
      description:
        "Privatumas, slaptažodžiai, pagarbus bendravimas ir saugus technologijų naudojimas.",
    },
  },

  questions: [
    {
      id: "file-folder",
      order: 1,
      type: "singleChoice",
      title: "Tinkamas aplankas",
      area: "digitalTools",
      skill: "fileOrganization",
      difficulty: "easy",

      scenario: [
        "Gabija sukūrė pateiktį apie Saulės sistemą gamtos mokslų pamokai.",
        "Failas pavadintas „Saulės_sistema.pptx“.",
      ],

      question: "Kuriame aplanke šį failą geriausia išsaugoti?",

      options: [
        {
          id: "school-science",
          label: "Mokykla → Gamtos mokslai",
          feedback: {
            title: "Teisingai!",
            text: "Tai mokyklinis darbas apie gamtos mokslus, todėl šiame aplanke jį bus lengviausia surasti.",
          },
        },
        {
          id: "photos-holidays",
          label: "Nuotraukos → Atostogos",
          feedback: {
            title: "Dar ne visai",
            text: "Šis aplankas skirtas asmeninėms atostogų nuotraukoms. Mokyklinį darbą geriau laikyti mokymosi aplanke.",
          },
        },
        {
          id: "games",
          label: "Žaidimai",
          feedback: {
            title: "Dar ne visai",
            text: "Pateiktis nėra žaidimo failas. Pagalvok, kokiai veiklai ji buvo sukurta.",
          },
        },
        {
          id: "downloads",
          label: "Atsisiuntimai",
          feedback: {
            title: "Dar ne visai",
            text: "Atsisiuntimų aplanke dažniausiai laikinai saugomi iš interneto gauti failai. Savo sukurtą darbą geriau išsaugoti pagal jo temą.",
          },
        },
      ],

      correctAnswerId: "school-science",
      gapCode: "folder-purpose",
      recommendationId: "files-and-folders",
    },

    {
      id: "file-name",
      order: 2,
      type: "singleChoice",
      title: "Aiškus failo pavadinimas",
      area: "digitalTools",
      skill: "fileNaming",
      difficulty: "easy",

      scenario: [
        "Matas parašė galutinį lietuvių kalbos pasakojimą apie savo vasaros nuotykį.",
      ],

      question: "Kurį failo pavadinimą jam geriausia pasirinkti?",

      options: [
        {
          id: "generic-work",
          label: "darbas.docx",
          feedback: {
            title: "Dar ne visai",
            text: "Pavadinimas „darbas“ yra per daug bendras. Po kurio laiko gali būti sunku prisiminti, koks tai darbas.",
          },
        },
        {
          id: "new-version",
          label: "naujas2.docx",
          feedback: {
            title: "Dar ne visai",
            text: "Žodis „naujas“ ir skaičius nepaaiškina, kas yra faile. Geriau nurodyti dalyką ir darbo temą.",
          },
        },
        {
          id: "clear-name",
          label: "LT_vasaros_nuotykis_galutinis.docx",
          feedback: {
            title: "Teisingai!",
            text: "Iš šio pavadinimo galima suprasti mokomąjį dalyką, darbo temą ir tai, kad faile yra galutinė versija.",
          },
        },
        {
          id: "random-letters",
          label: "aaaaaaaa.docx",
          feedback: {
            title: "Dar ne visai",
            text: "Atsitiktinės raidės nepadeda suprasti failo turinio. Failo pavadinimas turi būti prasmingas.",
          },
        },
      ],

      correctAnswerId: "clear-name",
      gapCode: "file-naming",
      recommendationId: "file-names",
    },

    {
      id: "create-folder-order",
      order: 3,
      type: "ordering",
      title: "Veiksmų seka",
      area: "algorithms",
      skill: "actionSequence",
      difficulty: "easy",

      scenario: [
        "Emilija nori kompiuteryje sukurti naują aplanką ir pavadinti jį „Gamtos mokslai“.",
      ],

      question: "Sudėliok veiksmus tinkama eilės tvarka.",

      items: [
        {
          id: "enter-name",
          label: "Įrašyti pavadinimą „Gamtos mokslai“.",
        },
        {
          id: "create-folder",
          label: "Pasirinkti komandą „Naujas aplankas“.",
        },
        {
          id: "open-location",
          label: "Atverti vietą, kurioje aplankas bus kuriamas.",
        },
        {
          id: "confirm-name",
          label: "Patvirtinti pavadinimą paspaudžiant Enter.",
        },
      ],

      correctOrder: [
        "open-location",
        "create-folder",
        "enter-name",
        "confirm-name",
      ],

      correctFeedback: {
        title: "Teisingai!",
        text: "Veiksmai sudėti tokia tvarka, kokia juos reikia atlikti kuriant naują aplanką.",
      },

      incorrectFeedback: {
        title: "Dar ne visai",
        text: "Pagalvok, ką reikia padaryti pirmiausia ir po kurio veiksmo galima įrašyti aplanko pavadinimą.",
      },

      hint: "Pirmiausia reikia atverti vietą, kurioje norėsi sukurti aplanką.",

      gapCode: "action-order",
      recommendationId: "command-sequences",
    },

    {
      id: "robot-grid",
      order: 4,
      type: "gridChoice",
      title: "Kur sustos robotukas?",
      area: "algorithms",
      skill: "sequencePrediction",
      difficulty: "medium",

      scenario: ["Robotukas pradeda pažymėtame langelyje."],

      question: "Kuriame langelyje robotukas sustos?",

      grid: {
        rows: 4,
        columns: 4,

        cells: [
          { id: "A", label: "A" },
          { id: "B", label: "B" },
          { id: "C", label: "C" },
          { id: "D", label: "D" },

          { id: "E", label: "E" },
          { id: "F", label: "F" },
          { id: "G", label: "G" },
          { id: "H", label: "H" },

          { id: "I", label: "I" },
          { id: "J", label: "J" },
          { id: "K", label: "K" },
          { id: "L", label: "L" },

          { id: "M", label: "M" },
          { id: "N", label: "N" },
          { id: "O", label: "O" },
          { id: "P", label: "P" },
        ],

        startCellId: "J",
        startDirection: "right",

        commands: [
          "Eik 2 langelius į viršų.",
          "Eik 1 langelį į dešinę.",
          "Eik 1 langelį į apačią.",
          "Eik 1 langelį į dešinę.",
        ],

        accessibilityText:
          "Keturių eilučių ir keturių stulpelių tinklelis. Robotukas pradeda J langelyje.",
      },

      characterImage: {
        src: "/images/diagnostika/robotukas.png",
        alt: "Draugiškas baltas ir tamsiai mėlynas robotukas.",
        width: 2000,
        height: 2000,
      },

      options: [
        {
          id: "D",
          label: "D langelis",
          feedback: {
            title: "Dar ne visai",
            text: "Patikrink visas komandas.",
          },
        },
        {
          id: "H",
          label: "H langelis",
          feedback: {
            title: "Teisingai!",
            text: "Robotukas nuėjo du langelius į viršų, pasuko į dešinę, nusileido vienu langeliu žemyn ir paėjo į dešinę.",
          },
        },
        {
          id: "K",
          label: "K langelis",
          feedback: {
            title: "Dar ne visai",
            text: "Reikia įvykdyti visas komandas.",
          },
        },
        {
          id: "P",
          label: "P langelis",
          feedback: {
            title: "Dar ne visai",
            text: "Iki P langelio jis nenuėjo.",
          },
        },
      ],

      correctAnswerId: "H",
      gapCode: "sequence-result",
      recommendationId: "algorithm-results",
    },

    {
  id: "repeat-square",
  order: 5,
  type: "gridChoice",
  title: "Kartojimo komandos klaida",
  area: "algorithms",
  skill: "loopUnderstanding",
  difficulty: "hard",

  scenario: [
    "Robotukas turi apvažiuoti kvadratą tinklelyje.",
    "Jis pradeda F langelyje ir žiūri į dešinę.",
    "Algoritme parašyta: kartok 3 kartus – eik pirmyn 1 langelį ir pasuk į dešinę.",
  ],

  question:
    "Ką reikia pakeisti, kad robotukas apvažiuotų visą kvadratą?",

  grid: {
    rows: 4,
    columns: 4,
    cells: [
      { id: "A", label: "A" },
      { id: "B", label: "B" },
      { id: "C", label: "C" },
      { id: "D", label: "D" },
      { id: "E", label: "E" },
      { id: "F", label: "F" },
      { id: "G", label: "G" },
      { id: "H", label: "H" },
      { id: "I", label: "I" },
      { id: "J", label: "J" },
      { id: "K", label: "K" },
      { id: "L", label: "L" },
      { id: "M", label: "M" },
      { id: "N", label: "N" },
      { id: "O", label: "O" },
      { id: "P", label: "P" },
    ],
    startCellId: "F",
    startDirection: "right",
    commands: [
      "Kartok 3 kartus:",
      "Eik pirmyn 1 langelį.",
      "Pasuk į dešinę.",
    ],
    accessibilityText:
      "Keturių eilučių ir keturių stulpelių tinklelis. Robotukas pradeda F langelyje ir žiūri į dešinę.",
  },

  characterImage: {
    src: "/images/diagnostika/robotukas.png",
    alt: "Draugiškas baltas ir tamsiai mėlynas robotukas.",
    width: 2000,
    height: 2000,
  },

  options: [
    {
      id: "repeat-two",
      label: "Kartoti 2 kartus",
      feedback: {
        title: "Dar ne visai",
        text: "Kartojant du kartus robotukas apvažiuotų tik dvi kvadrato kraštines.",
      },
    },
    {
      id: "repeat-four",
      label: "Kartoti 4 kartus",
      feedback: {
        title: "Teisingai!",
        text: "Kvadratas turi keturias kraštines, todėl komandą reikia kartoti 4 kartus.",
      },
    },
    {
      id: "move-three",
      label: "Eiti pirmyn 3 langelius",
      feedback: {
        title: "Dar ne visai",
        text: "Pakeitus tik ėjimo atstumą, kartojimų vis tiek liktų per mažai visam kvadratui.",
      },
    },
    {
      id: "remove-turn",
      label: "Pašalinti komandą „Pasuk į dešinę“",
      feedback: {
        title: "Dar ne visai",
        text: "Be posūkio robotukas neapvažiuotų kvadrato, o judėtų tiesia kryptimi.",
      },
    },
  ],

  correctAnswerId: "repeat-four",
  gapCode: "repeat-loop",
  recommendationId: "repeat-command",
},

    {
      id: "data-and-information",
      order: 6,
      type: "singleChoice",
      title: "Duomenys ir informacija",
      area: "data",
      skill: "dataInterpretation",
      difficulty: "medium",

      scenario: [
        "Klasės mokiniai balsavo, kokį vaisių norėtų gauti per išvyką.",
        "Obuolį pasirinko 6 mokiniai, bananą – 9, kriaušę – 4, o apelsiną – 7 mokiniai.",
      ],

      question: "Kuris teiginys yra iš šių duomenų gauta informacija?",

      options: [
        {
          id: "apple-six",
          label: "Obuolys surinko 6 balsus.",
          feedback: {
            title: "Dar ne visai",
            text: "Tai vienas iš surinktų duomenų. Ieškok teiginio, kuris gautas palyginus kelis balsų skaičius.",
          },
        },
        {
          id: "banana-nine",
          label: "Bananas surinko 9 balsus.",
          feedback: {
            title: "Dar ne visai",
            text: "Tai lentelėje arba sąraše pateiktas duomuo. Informacija gaunama duomenis palyginus arba išanalizavus.",
          },
        },
        {
          id: "banana-most-popular",
          label: "Daugiausia mokinių pasirinko bananus.",
          feedback: {
            title: "Teisingai!",
            text: "Palyginus visus balsų skaičius matyti, kad 9 yra didžiausias skaičius, todėl bananai buvo populiariausias pasirinkimas.",
          },
        },
        {
          id: "orange-seven",
          label: "Apelsinas surinko 7 balsus.",
          feedback: {
            title: "Dar ne visai",
            text: "Tai vienas iš pateiktų duomenų. Ieškok išvados, kurią galima padaryti palyginus visus pasirinkimus.",
          },
        },
      ],

      correctAnswerId: "banana-most-popular",
      gapCode: "data-vs-information",
      recommendationId: "data-and-information",
    },

    {
      id: "missing-table-value",
      order: 7,
      type: "singleChoice",
      title: "Trūkstama lentelės reikšmė",
      area: "data",
      skill: "missingValue",
      difficulty: "medium",

      scenario: [
        "Per keturias dienas Augustė perskaitė iš viso 80 knygos puslapių.",
        "Pirmadienį ji perskaitė 18 puslapių, antradienį – 22, o ketvirtadienį – 16 puslapių.",
        "Trečiadienio reikšmė lentelėje neįrašyta.",
      ],

      question: "Kiek puslapių Augustė perskaitė trečiadienį?",

      options: [
        {
          id: "twenty",
          label: "20 puslapių",
          feedback: {
            title: "Dar ne visai",
            text: "Pirmiausia sudėk žinomus skaičius: 18 + 22 + 16. Gautą sumą atimk iš 80.",
          },
        },
        {
          id: "twenty-four",
          label: "24 puslapius",
          feedback: {
            title: "Teisingai!",
            text: "Žinomi skaičiai sudaro 56, todėl iki 80 trūksta 24 puslapių.",
          },
        },
        {
          id: "twenty-six",
          label: "26 puslapius",
          feedback: {
            title: "Dar ne visai",
            text: "Patikrink žinomų dienų sumą. 18 + 22 + 16 yra 56, o ne 54.",
          },
        },
        {
          id: "twenty-eight",
          label: "28 puslapius",
          feedback: {
            title: "Dar ne visai",
            text: "Iš bendro 80 puslapių skaičiaus reikia atimti visų trijų žinomų dienų sumą.",
          },
        },
      ],

      correctAnswerId: "twenty-four",
      gapCode: "missing-table-value",
      recommendationId: "reading-tables",
    },

    {
      id: "digital-tool-selection",
      order: 8,
      type: "singleChoice",
      title: "Tinkamiausia skaitmeninė priemonė",
      area: "digitalTools",
      skill: "toolSelection",
      difficulty: "easy",

      scenario: [
        "Klasės mokiniai apklausė draugus, kaip jie keliauja į mokyklą.",
        "Jiems reikia surašyti rezultatus į lentelę, suskaičiuoti atsakymus ir sukurti diagramą.",
      ],

      question: "Kuri skaitmeninė priemonė šiam darbui tinkamiausia?",

      options: [
        {
          id: "spreadsheet",
          label: "Skaičiuoklė",
          feedback: {
            title: "Teisingai!",
            text: "Skaičiuoklėje galima patogiai surašyti duomenis, atlikti skaičiavimus ir sukurti diagramą.",
          },
        },
        {
          id: "drawing-program",
          label: "Piešimo programa",
          feedback: {
            title: "Dar ne visai",
            text: "Piešimo programa tinka iliustracijoms kurti, tačiau joje būtų nepatogu skaičiuoti ir analizuoti apklausos duomenis.",
          },
        },
        {
          id: "audio-recorder",
          label: "Garso įrašymo programa",
          feedback: {
            title: "Dar ne visai",
            text: "Garso įrašymo programa skirta garsui įrašyti. Ji netinka lentelėms, skaičiavimams ir diagramoms kurti.",
          },
        },
        {
          id: "word-processor",
          label: "Teksto rengyklė",
          feedback: {
            title: "Dar ne visai",
            text: "Teksto rengyklėje galima sukurti paprastą lentelę, tačiau duomenims skaičiuoti ir diagramoms kurti tinkamesnė skaičiuoklė.",
          },
        },
      ],

      correctAnswerId: "spreadsheet",
      gapCode: "tool-selection",
      recommendationId: "digital-tools",
    },

    {
      id: "online-bullying-response",
      order: 9,
      type: "singleChoice",
      title: "Elgesys klasės pokalbyje",
      area: "onlineSafety",
      skill: "onlineCommunication",
      difficulty: "medium",

      scenario: [
        "Klasės grupėje vienas mokinys įkėlė išjuokiančiai pakeistą bendraklasės nuotrauką.",
        "Kiti mokiniai pradėjo ją persiųsti ir rašyti pašaipius komentarus.",
      ],

      question: "Kaip šioje situacijoje geriausia pasielgti?",

      options: [
        {
          id: "forward-without-comment",
          label: "Persiųsti nuotrauką draugui, bet nieko nekomentuoti.",
          feedback: {
            title: "Dar ne visai",
            text: "Persiųsdamas nuotrauką prisidėtum prie jos platinimo, net jeigu pats neparašytum jokio komentaro.",
          },
        },
        {
          id: "reply-with-insult",
          label: "Atsakyti nuotrauką įkėlusiam mokiniui tokiu pačiu įžeidimu.",
          feedback: {
            title: "Dar ne visai",
            text: "Atsakymas kitu įžeidimu problemos neišsprendžia ir gali dar labiau paaštrinti konfliktą.",
          },
        },
        {
          id: "save-and-report",
          label:
            "Neplatinti nuotraukos, išsaugoti įrodymą ir pasakyti patikimam suaugusiajam.",
          feedback: {
            title: "Teisingai!",
            text: "Žeminančio turinio nereikia platinti. Išsaugotas įrodymas ir patikimo suaugusiojo pagalba gali padėti sustabdyti netinkamą elgesį.",
          },
        },
        {
          id: "leave-and-ignore",
          label: "Išeiti iš grupės ir apsimesti, kad nieko nepastebėjai.",
          feedback: {
            title: "Dar ne visai",
            text: "Pasitraukti iš pokalbio galima, tačiau vien to gali nepakakti. Svarbu apie žeminantį elgesį pasakyti patikimam suaugusiajam.",
          },
        },
      ],

      correctAnswerId: "save-and-report",
      gapCode: "cyberbullying-response",
      recommendationId: "online-bullying",
    },

    {
      id: "safe-password",
      order: 10,
      type: "singleChoice",
      title: "Saugesnis slaptažodis",
      area: "onlineSafety",
      skill: "passwordSafety",
      difficulty: "easy",

      scenario: [
        "Tadas kuria naują mokymosi platformos paskyrą.",
        "Pateikti slaptažodžiai yra tik mokomieji pavyzdžiai, todėl jų savo paskyrose naudoti nereikėtų.",
      ],

      question:
        "Kurį slaptažodį iš pateiktų variantų būtų saugiausia pasirinkti?",

      options: [
        {
          id: "name-and-year",
          label: "tadas2014",
          feedback: {
            title: "Dar ne visai",
            text: "Vardą ir gimimo metus gali būti lengva sužinoti arba atspėti. Asmeninės informacijos slaptažodyje geriau nenaudoti.",
          },
        },
        {
          id: "number-sequence",
          label: "12345678",
          feedback: {
            title: "Dar ne visai",
            text: "Paprasta skaičių seka yra lengvai atspėjama, net jeigu ją sudaro aštuoni simboliai.",
          },
        },
        {
          id: "common-word",
          label: "slaptazodis",
          feedback: {
            title: "Dar ne visai",
            text: "Dažnai vartojamas žodis nėra saugus slaptažodis. Jį gali būti lengva atspėti.",
          },
        },
        {
          id: "long-passphrase",
          label: "Miskas!Rieda7Debesis",
          feedback: {
            title: "Teisingai!",
            text: "Šis slaptažodis yra ilgas, sudarytas iš kelių nesusijusių žodžių ir neatskleidžia asmeninės informacijos.",
          },
        },
      ],

      correctAnswerId: "long-passphrase",
      gapCode: "password-safety",
      recommendationId: "safe-passwords",
    },

    {
      id: "personal-data-safety",
      order: 11,
      type: "singleChoice",
      title: "Asmens duomenų apsauga",
      area: "onlineSafety",
      skill: "personalData",
      difficulty: "easy",

      scenario: [
        "Lukas internetiniame žaidime susipažino su žmogumi, kurio nepažįsta realiame gyvenime.",
        "Šis žmogus paprašė papasakoti daugiau apie save.",
      ],

      question: "Kokios informacijos Lukas neturėtų jam siųsti?",

      options: [
        {
          id: "animal-and-books",
          label: "Mėgstamiausias gyvūnas ir knygų žanras.",
          feedback: {
            title: "Dar ne visai",
            text: "Ši informacija paprastai neparodo, kur žmogus gyvena ar kaip su juo tiesiogiai susisiekti.",
          },
        },
        {
          id: "color-and-sport",
          label: "Mėgstamiausia spalva ir sporto šaka.",
          feedback: {
            title: "Dar ne visai",
            text: "Ši informacija paprastai neatskleidžia tikslios žmogaus tapatybės ar buvimo vietos.",
          },
        },
        {
          id: "address-phone-location",
          label: "Namų adresas, telefono numeris ir dabartinė buvimo vieta.",
          feedback: {
            title: "Teisingai!",
            text: "Šie duomenys gali padėti nepažįstamam žmogui nustatyti, kur Lukas gyvena, kur yra ir kaip su juo susisiekti.",
          },
        },
        {
          id: "subject-and-board-game",
          label: "Mėgstamiausias mokomasis dalykas ir stalo žaidimas.",
          feedback: {
            title: "Dar ne visai",
            text: "Ši informacija paprastai neatskleidžia namų adreso, telefono numerio ar dabartinės buvimo vietos.",
          },
        },
      ],

      correctAnswerId: "address-phone-location",
      gapCode: "personal-data",
      recommendationId: "personal-data-safety",
    },

    {
      id: "healthy-workstation",
      order: 12,
      type: "imageChoice",
      title: "Saugi darbo vieta",
      area: "onlineSafety",
      skill: "healthyWorkstation",
      difficulty: "hard",

      scenario: [
        "Dominykas ruošia namų darbą kompiuteriu ir planuoja dirbti ilgiau nei valandą.",
      ],

      question: "Kuris darbo būdas būtų tinkamiausias?",

      options: [
        {
          id: "correct-workstation",
          label:
            "Sėdėti prie stalo taisyklingai, tinkamai pastatyti ekraną ir reguliariai daryti trumpas pertraukas.",
          image: {
            src: "/images/diagnostika/darbo-vieta-teisinga.webp",
            alt: "Mokinys taisyklingai sėdi prie stalo, nugara remiasi į kėdę, o ekranas pastatytas tinkamame aukštyje.",
            width: 600,
            height: 450,
          },
          feedback: {
            title: "Teisingai!",
            text: "Taisyklinga kūno padėtis, tinkamai pastatytas ekranas ir trumpos pertraukos padeda saugoti akis, nugarą bei kaklą.",
          },
        },
        {
          id: "laptop-in-bed",
          label:
            "Gulėti lovoje pasidėjus nešiojamąjį kompiuterį ant pilvo ir dirbti be pertraukos.",
          image: {
            src: "/images/diagnostika/darbo-vieta-lovoje.webp",
            alt: "Mokinys guli lovoje ir nešiojamąjį kompiuterį laiko ant pilvo.",
            width: 600,
            height: 450,
          },
          feedback: {
            title: "Dar ne visai",
            text: "Gulint lovoje sunku išlaikyti tinkamą kaklo ir nugaros padėtį. Ilgai dirbti be pertraukos taip pat nėra sveika.",
          },
        },
        {
          id: "too-close-to-screen",
          label:
            "Sėdėti pasilenkus labai arti ekrano, kad būtų lengviau perskaityti tekstą.",
          image: {
            src: "/images/diagnostika/darbo-vieta-arti-ekrano.webp",
            alt: "Mokinys sėdi pasilenkęs ir žiūri į ekraną iš labai arti.",
            width: 600,
            height: 450,
          },
          feedback: {
            title: "Dar ne visai",
            text: "Sėdėjimas labai arti ekrano ir pasilenkimas gali varginti akis, kaklą bei nugarą. Geriau padidinti tekstą arba tinkamai pastatyti ekraną.",
          },
        },
        {
          id: "dark-room-and-drink",
          label:
            "Dirbti tamsiame kambaryje, o šalia kompiuterio laikyti atvirą gėrimo stiklinę.",
          image: {
            src: "/images/diagnostika/darbo-vieta-tamsoje.webp",
            alt: "Mokinys dirba kompiuteriu tamsiame kambaryje, o šalia įrenginio stovi atvira gėrimo stiklinė.",
            width: 600,
            height: 450,
          },
          feedback: {
            title: "Dar ne visai",
            text: "Tamsi aplinka vargina akis, o šalia kompiuterio laikomas atviras gėrimas gali būti išlietas ir sugadinti įrenginį.",
          },
        },
      ],

      correctAnswerId: "correct-workstation",
      gapCode: "healthy-workstation",
      recommendationId: "safe-workstation",
    },
  ],

  recommendations: [
    {
      id: "files-and-folders",
      area: "digitalTools",
      title: "Failų ir aplankų tvarkymas",
      description:
        "Pasikartok, kaip pasirinkti tinkamą aplanką ir lengvai surasti išsaugotus darbus.",
      priority: 3,
      targetPath: "/5-klase/informatika/failai-ir-aplankai",
    },
    {
      id: "file-names",
      area: "digitalTools",
      title: "Aiškūs failų pavadinimai",
      description:
        "Išmok kurti trumpus ir aiškius failų pavadinimus, kurie padeda suprasti failo turinį.",
      priority: 3,
      targetPath: "/5-klase/informatika/failu-pavadinimai",
    },
    {
      id: "command-sequences",
      area: "algorithms",
      title: "Komandų sekos",
      description:
        "Pasikartok, kodėl algoritmo veiksmai turi būti atliekami tinkama eilės tvarka.",
      priority: 2,
      targetPath: "/5-klase/informatika/komandu-sekos",
    },
    {
      id: "algorithm-results",
      area: "algorithms",
      title: "Algoritmo rezultato numatymas",
      description:
        "Mokykis nuosekliai vykdyti komandas ir numatyti, koks bus galutinis rezultatas.",
      priority: 2,
      targetPath: "/5-klase/informatika/algoritmo-rezultatas",
    },
    {
      id: "repeat-command",
      area: "algorithms",
      title: "Kartojimo komanda",
      description:
        "Išmok atpažinti pasikartojančius veiksmus ir naudoti kartojimo komandą.",
      priority: 5,
      targetPath: "/5-klase/informatika/kartojimo-komanda",
    },
    {
      id: "data-and-information",
      area: "data",
      title: "Duomenys ir informacija",
      description:
        "Pasikartok, kuo pateikti duomenys skiriasi nuo iš jų padarytos išvados.",
      priority: 4,
      targetPath: "/5-klase/informatika/duomenys-ir-informacija",
    },
    {
      id: "reading-tables",
      area: "data",
      title: "Lentelių skaitymas",
      description:
        "Mokykis suprasti lentelėse pateiktus duomenis ir rasti trūkstamas reikšmes.",
      priority: 4,
      targetPath: "/5-klase/informatika/lenteliu-skaitymas",
    },
    {
      id: "digital-tools",
      area: "digitalTools",
      title: "Skaitmeninių priemonių pasirinkimas",
      description:
        "Pasikartok, kuri skaitmeninė priemonė geriausiai tinka tekstui, vaizdui, garsui ar duomenims.",
      priority: 3,
      targetPath: "/5-klase/informatika/skaitmenines-priemones",
    },
    {
      id: "online-bullying",
      area: "onlineSafety",
      title: "Kaip reaguoti į patyčias internete",
      description:
        "Sužinok, kaip neplatinti žeminančio turinio, išsaugoti įrodymus ir kreiptis pagalbos.",
      priority: 1,
      targetPath: "/veiklos/interneto-privatumas",
    },
    {
      id: "safe-passwords",
      area: "onlineSafety",
      title: "Saugesni slaptažodžiai",
      description:
        "Pasikartok, kuo ilgas ir unikalus slaptažodis skiriasi nuo lengvai atspėjamo.",
      priority: 1,
      targetPath: "/veiklos/paskyros-saugumas",
    },
    {
      id: "personal-data-safety",
      area: "onlineSafety",
      title: "Asmens duomenų apsauga",
      description:
        "Pasikartok, kokių duomenų negalima siųsti nepažįstamiems žmonėms internete.",
      priority: 1,
      targetPath: "/veiklos/interneto-privatumas",
    },
    {
      id: "safe-workstation",
      area: "onlineSafety",
      title: "Saugi darbo vieta",
      description:
        "Pasikartok, kaip taisyklingai sėdėti, pastatyti ekraną ir saugiai naudotis įranga.",
      priority: 2,
      targetPath: "/5-klase/informatika/saugi-darbo-vieta",
    },
  ],
} satisfies DiagnosticData;
