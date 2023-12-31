// Logos
import logo from "../assets/logos/logo.png";
import fullLogo from "../assets/logos/fullLogo.png";

// Graphics
import MapInPhone from "../assets/graphics/MapInPhone.jpg";
import PeopleDeal from "../assets/graphics/PeopleDeal.jpg";
import MapLocation from "../assets/graphics/MapLocation.jpg";

// Lotties
import question from "../assets/lotties/question.json";
import spinningWorld from "../assets/lotties/spinningWorld.json";
import uploadScreen from "../assets/lotties/uploadScreen.json";
import walkingPackage from "../assets/lotties/walkingPackage.json";

// icons
import envelope from "../assets/icons/envelope.png";

export default {
  logo,
  fullLogo,
  MapInPhone,
  PeopleDeal,
  MapLocation,
  question,
  spinningWorld,
  uploadScreen,
  walkingPackage,
  envelope,
};

export const links = {
  home: "/",
  sendForm: "/sendform",
  
}

export const homePage = {
  orderBox: {
    ru: {
      title: "Отправьте свои документы в/из России!",
      fromWhereInputs: ["В Россию", "Из России"],
      fromInput: "Из какой страны вы отправляете",
      toInput: "В какую страну отправляете",
      youSend: {
        label: "Вы отправляете",
        name: "Документы",
        article: "вес от 0.5 до 2.5 кг",
      },
      amountInput: "Укажите вес документов",
      amountVariants: [
        { label: "0.5кг", value: 0.5 },
        { label: "1кг", value: 1 },
        { label: "1.5кг", value: 1.5 },
        { label: "2кг", value: 2 },
        { label: "2.5кг", value: 2.5 },
      ],
      buttonSubmit: "Перейти к деталям",
    },
    en: {
      title: "Send your documents to/from Russia!",
      fromWhereInputs: ["To Russia", "From Russia"],
      fromInput: "From which country you send",
      toInput: "To which country you send",
      youSend: {
        label: "You send",
        name: "Documents",
        article: "weight from 0.5 to 2.5 kg",
      },
      amountInput: "Specify the weight of the documents",
      amountVariants: [
        { label: "0.5kg", value: 0.5 },
        { label: "1kg", value: 1 },
        { label: "1.5kg", value: 1.5 },
        { label: "2kg", value: 2 },
        { label: "2.5kg", value: 2.5 },
      ],
      buttonSubmit: "Go to details",
    },
  },
};

export const sidebar = {
  nav: [
    {
      ru: {
        name: "Главная",
      },
      en: {
        name: "Home",
      },
      type: "active",
      icon: "IoHome",
      link: "/",
    },
    {
      ru: {
        name: "Заказы",
      },
      en: {
        name: "Orders",
      },
      type: "alert",
      icon: "PiPackageFill",
      link: "/orders",
    },
    {
      ru: {
        name: "Настройки",
      },
      en: {
        name: "Settings",
      },
      type: "",
      icon: "IoIosSettings",
      link: "/settings",
    },
    {
      ru: {
        name: "Язык",
      },
      en: {
        name: "Language",
      },
      type: "",
      icon: "FaLanguage",
    },
    {
      ru: {
        name: "Тема",
      },
      en: {
        name: "Theme",
      },
      type: "",
      icon: "MdColorLens",
    },
  ],
  socials: [
    {
      ru: {
        name: "Инстаграм",
      },
      en: {
        name: "Instagram",
      },
      type: "",
      icon: "FaInstagram",
      link: "/instagram",
    },
    {
      ru: {
        name: "Телеграм",
      },
      en: {
        name: "Telegram",
      },
      type: "",
      icon: "FaTelegram",
      link: "/telegram",
    },
  ],
};

export const countries = [
  {
    ru: {
      name: "Украина",
    },
    en: {
      name: "Ukraine",
    },
    code: "UA",
    number: "+380",
    flag: "🇺🇦",
    exampleNumber: "xx yyyyyyy",
  },
  {
    ru: {
      name: "Россия",
    },
    en: {
      name: "Russia",
    },
    code: "RU",
    number: "+7",
    flag: "🇷🇺",
    exampleNumber: "xx yyyyyyyy",
  },
  {
    ru: {
      name: "Польша",
    },
    en: {
      name: "Poland",
    },
    code: "PL",
    number: "+48",
    flag: "🇵🇱",
    exampleNumber: "xx yyyyyyy",
  },
  {
    ru: {
      name: "Словацкая Республика",
    },
    en: {
      name: "Slovakia",
    },
    code: "SK",
    number: "+421",
    flag: "🇸🇰",
    exampleNumber: "xx yyyyyyy",
  },
  {
    ru: {
      name: "Австралия",
    },
    en: {
      name: "Australia",
    },
    code: "AU",
    number: "+61",
    flag: "🇦🇺",
    exampleNumber: "xx yyyyyyy",
  },
  {
    ru: {
      name: "Австрия",
    },
    en: {
      name: "Austria",
    },
    code: "AT",
    number: "+43",
    flag: "🇦🇹",
    exampleNumber: "xx yyyyyyy",
  },
  {
    ru: {
      name: "Азербайджан",
    },
    en: {
      name: "Azerbaijan",
    },
    code: "AZ",
    number: "+994",
    flag: "🇦🇿",
    exampleNumber: "xx yyyyyyy",
  },
  {
    ru: {
      name: "Азорские острова",
    },
    en: {
      name: "Azores",
    },
    code: "PT",
    number: "+351",
    flag: "🇵🇹",
    exampleNumber: "xx yyyyyyy",
  },
  {
    ru: {
      name: "Албания",
    },
    en: {
      name: "Albania",
    },
    code: "AL",
    number: "+355",
    flag: "🇦🇱",
    exampleNumber: "xx yyyyyyy",
  },
  {
    ru: {
      name: "Алжир",
    },
    en: {
      name: "Algeria",
    },
    code: "DZ",
    number: "+213",
    flag: "🇩🇿",
    exampleNumber: "xx yyyyyyy",
  },
  {
    ru: {
      name: "Американские острова Самоа",
    },
    en: {
      name: "American Samoa",
    },
    code: "AS",
    number: "+1",
    flag: "🇦🇸",
    exampleNumber: "xxx yyyyyyy",
  },
  {
    ru: {
      name: "Ангилья",
    },
    en: {
      name: "Anguilla",
    },
    code: "AI",
    number: "+1",
    flag: "🇦🇮",
    exampleNumber: "xxx yyyyyyy",
  },
  {
    ru: {
      name: "Ангола",
    },
    en: {
      name: "Angola",
    },
    code: "AO",
    number: "+244",
    flag: "🇦🇴",
    exampleNumber: "xx yyyyyyy",
  },
  {
    ru: {
      name: "Андорра",
    },
    en: {
      name: "Andorra",
    },
    code: "AD",
    number: "+376",
    flag: "🇦🇩",
    exampleNumber: "xx yyyyyyy",
  },
  {
    ru: {
      name: "Антигуа и Барбуда",
    },
    en: {
      name: "Antigua and Barbuda",
    },
    code: "AG",
    number: "+1",
    flag: "🇦🇬",
    exampleNumber: "xxx yyyyyyy",
  },
  {
    ru: {
      name: "Аргентина",
    },
    en: {
      name: "Argentina",
    },
    code: "AR",
    number: "+54",
    flag: "🇦🇷",
    exampleNumber: "xx yyyyyyy",
  },
  {
    ru: {
      name: "Аруба",
    },
    en: {
      name: "Aruba",
    },
    code: "AW",
    number: "+297",
    flag: "🇦🇼",
    exampleNumber: "xx yyyyyyy",
  },
  {
    ru: {
      name: "Афганистан",
    },
    en: {
      name: "Afghanistan",
    },
    code: "AF",
    number: "+93",
    flag: "🇦🇫",
    exampleNumber: "xx yyyyyyy",
  },
  {
    ru: {
      name: "Багамы",
    },
    en: {
      name: "Bahamas",
    },
    code: "BS",
    number: "+1",
    flag: "🇧🇸",
    exampleNumber: "xxx yyyyyyy",
  },
  {
    ru: {
      name: "Бангладеш",
    },
    en: {
      name: "Bangladesh",
    },
    code: "BD",
    number: "+880",
    flag: "🇧🇩",
    exampleNumber: "xx yyyyyyy",
  },
  {
    ru: {
      name: "Барбадос",
    },
    en: {
      name: "Barbados",
    },
    code: "BB",
    number: "+1",
    flag: "🇧🇧",
    exampleNumber: "xxx yyyyyyy",
  },
  {
    ru: {
      name: "Бахрейн",
    },
    en: {
      name: "Bahrain",
    },
    code: "BH",
    number: "+973",
    flag: "🇧🇭",
    exampleNumber: "xx yyyyyyy",
  },
  {
    ru: {
      name: "Белиз",
    },
    en: {
      name: "Belize",
    },
    code: "BZ",
    number: "+501",
    flag: "🇧🇿",
    exampleNumber: "xx yyyyyyy",
  },
  {
    ru: {
      name: "Бельгия",
    },
    en: {
      name: "Belgium",
    },
    code: "BE",
    number: "+32",
    flag: "🇧🇪",
    exampleNumber: "xx yyyyyyy",
  },
  {
    ru: {
      name: "Бенин",
    },
    en: {
      name: "Benin",
    },
    code: "BJ",
    number: "+229",
    flag: "🇧🇯",
    exampleNumber: "xx yyyyyyy",
  },
  {
    ru: {
      name: "Бермуда",
    },
    en: {
      name: "Bermuda",
    },
    code: "BM",
    number: "+1",
    flag: "🇧🇲",
    exampleNumber: "xxx yyyyyyy",
  },
  {
    ru: {
      name: "Болгария",
    },
    en: {
      name: "Bulgaria",
    },
    code: "BG",
    number: "+359",
    flag: "🇧🇬",
    exampleNumber: "xx yyyyyyy",
  },
  {
    ru: {
      name: "Боливия",
    },
    en: {
      name: "Bolivia",
    },
    code: "BO",
    number: "+591",
    flag: "🇧🇴",
    exampleNumber: "xx yyyyyyy",
  },
  {
    ru: {
      name: "Бонайре",
    },
    en: {
      name: "Bonaire",
    },
    code: "BQ",
    number: "+599",
    flag: "🇧🇶",
    exampleNumber: "xxx yyyyyyy",
  },
  {
    ru: {
      name: "Босния и Герцеговина",
    },
    en: {
      name: "Bosnia and Herzegovina",
    },
    code: "BA",
    number: "+387",
    flag: "🇧🇦",
    exampleNumber: "xx yyyyyyy",
  },
  {
    ru: {
      name: "Ботсвана",
    },
    en: {
      name: "Botswana",
    },
    code: "BW",
    number: "+267",
    flag: "🇧🇼",
    exampleNumber: "xx yyyyyyy",
  },
  {
    ru: {
      name: "Бразилия",
    },
    en: {
      name: "Brazil",
    },
    code: "BR",
    number: "+55",
    flag: "🇧🇷",
    exampleNumber: "xx yyyyyyy",
  },
  {
    ru: {
      name: "Британские Виргинские острова",
    },
    en: {
      name: "British Virgin Islands",
    },
    code: "VG",
    number: "+1",
    flag: "🇻🇬",
    exampleNumber: "xxx yyyyyyy",
  },
  {
    ru: {
      name: "Бруней",
    },
    en: {
      name: "Brunei",
    },
    code: "BN",
    number: "+673",
    flag: "🇧🇳",
    exampleNumber: "xx yyyyyyy",
  },
  {
    ru: {
      name: "Буркина-Фасо",
    },
    en: {
      name: "Burkina Faso",
    },
    code: "BF",
    number: "+226",
    flag: "🇧🇫",
    exampleNumber: "xx yyyyyyy",
  },
  {
    ru: {
      name: "Бурунди",
    },
    en: {
      name: "Burundi",
    },
    code: "BI",
    number: "+257",
    flag: "🇧🇮",
    exampleNumber: "xx yyyyyyy",
  },
  {
    ru: {
      name: "Бутан",
    },
    en: {
      name: "Bhutan",
    },
    code: "BT",
    number: "+975",
    flag: "🇧🇹",
    exampleNumber: "xx yyyyyyy",
  },
  // ... (Previous entries)

  {
    ru: {
      name: "Сейшельские острова",
    },
    en: {
      name: "Seychelles",
    },
    code: "SC",
    number: "+248",
    flag: "🇸🇨",
    exampleNumber: "xx yyyyyyy",
  },
  {
    ru: {
      name: "Сенегал",
    },
    en: {
      name: "Senegal",
    },
    code: "SN",
    number: "+221",
    flag: "🇸🇳",
    exampleNumber: "xx yyyyyyy",
  },
  {
    ru: {
      name: "Сербия",
    },
    en: {
      name: "Serbia",
    },
    code: "RS",
    number: "+381",
    flag: "🇷🇸",
    exampleNumber: "xx yyyyyyy",
  },
  {
    ru: {
      name: "Сеута",
    },
    en: {
      name: "Ceuta",
    },
    code: "ES",
    number: "+34",
    flag: "🇪🇦",
    exampleNumber: "xxx yyyyyyy",
  },
  {
    ru: {
      name: "Сингапур",
    },
    en: {
      name: "Singapore",
    },
    code: "SG",
    number: "+65",
    flag: "🇸🇬",
    exampleNumber: "xxxx yyyyyyy",
  },
  {
    ru: {
      name: "Сирия",
    },
    en: {
      name: "Syria",
    },
    code: "SY",
    number: "+963",
    flag: "🇸🇾",
    exampleNumber: "xx yyyyyyy",
  },
  {
    ru: {
      name: "Словения",
    },
    en: {
      name: "Slovenia",
    },
    code: "SI",
    number: "+386",
    flag: "🇸🇮",
    exampleNumber: "xx yyyyyy",
  },
  {
    ru: {
      name: "Соломоновы острова",
    },
    en: {
      name: "Solomon Islands",
    },
    code: "SB",
    number: "+677",
    flag: "🇸🇧",
    exampleNumber: "xxx yyyyy",
  },
  {
    ru: {
      name: "Сомали",
    },
    en: {
      name: "Somalia",
    },
    code: "SO",
    number: "+252",
    flag: "🇸🇴",
    exampleNumber: "xx yyyyyy",
  },
  {
    ru: {
      name: "Восточный Тимор",
    },
    en: {
      name: "Timor-Leste",
    },
    code: "TL",
    number: "+670",
    flag: "🇹🇱",
    exampleNumber: "xxx yyyyyy",
  },
  {
    ru: {
      name: "США (Соединенные Штаты Америки)",
    },
    en: {
      name: "United States",
    },
    code: "US",
    number: "+1",
    flag: "🇺🇸",
    exampleNumber: "(xxx) yyy-yyyy",
  },
  {
    ru: {
      name: "Сьерра-Леоне",
    },
    en: {
      name: "Sierra Leone",
    },
    code: "SL",
    number: "+232",
    flag: "🇸🇱",
    exampleNumber: "xx yyyyyy",
  },
  {
    ru: {
      name: "Таджикистан",
    },
    en: {
      name: "Tajikistan",
    },
    code: "TJ",
    number: "+992",
    flag: "🇹🇯",
    exampleNumber: "xx yyyyyyy",
  },
  {
    ru: {
      name: "Таиланд",
    },
    en: {
      name: "Thailand",
    },
    code: "TH",
    number: "+66",
    flag: "🇹🇭",
    exampleNumber: "xx yyyyyyy",
  },
  {
    ru: {
      name: "Тайвань",
    },
    en: {
      name: "Taiwan",
    },
    code: "TW",
    number: "+886",
    flag: "🇹🇼",
    exampleNumber: "xx yyyyyyy",
  },
  {
    ru: {
      name: "Танзания",
    },
    en: {
      name: "Tanzania",
    },
    code: "TZ",
    number: "+255",
    flag: "🇹🇿",
    exampleNumber: "xx yyyyyy",
  },
  {
    ru: {
      name: "Теркс и Кайкос, острова",
    },
    en: {
      name: "Turks and Caicos Islands",
    },
    code: "TC",
    number: "+1",
    flag: "🇹🇨",
    exampleNumber: "(xxx) yyy-yyyy",
  },
  {
    ru: {
      name: "Того",
    },
    en: {
      name: "Togo",
    },
    code: "TG",
    number: "+228",
    flag: "🇹🇬",
    exampleNumber: "xx yyyyyy",
  },
  {
    ru: {
      name: "Тонга",
    },
    en: {
      name: "Tonga",
    },
    code: "TO",
    number: "+676",
    flag: "🇹🇴",
    exampleNumber: "xxx yyy",
  },
  {
    ru: {
      name: "Тринидад и Тобаго",
    },
    en: {
      name: "Trinidad and Tobago",
    },
    code: "TT",
    number: "+1",
    flag: "🇹🇹",
    exampleNumber: "(xxx) yyy-yyyy",
  },
  {
    ru: {
      name: "Тувалу",
    },
    en: {
      name: "Tuvalu",
    },
    code: "TV",
    number: "+688",
    flag: "🇹🇻",
    exampleNumber: "xxx yyy",
  },
  {
    ru: {
      name: "Тунис",
    },
    en: {
      name: "Tunisia",
    },
    code: "TN",
    number: "+216",
    flag: "🇹🇳",
    exampleNumber: "xx yyyyyy",
  },
  {
    ru: {
      name: "Турция",
    },
    en: {
      name: "Turkey",
    },
    code: "TR",
    number: "+90",
    flag: "🇹🇷",
    exampleNumber: "xxx yyyyyy",
  },
  {
    ru: {
      name: "Туркменистан",
    },
    en: {
      name: "Turkmenistan",
    },
    code: "TM",
    number: "+993",
    flag: "🇹🇲",
    exampleNumber: "xx yyyyyy",
  },
  {
    ru: {
      name: "Уганда",
    },
    en: {
      name: "Uganda",
    },
    code: "UG",
    number: "+256",
    flag: "🇺🇬",
    exampleNumber: "xx yyyyyy",
  },
  {
    ru: {
      name: "Венгрия",
    },
    en: {
      name: "Hungary",
    },
    code: "HU",
    number: "+36",
    flag: "🇭🇺",
    exampleNumber: "xx yyyyyy",
  },
  {
    ru: {
      name: "Узбекистан",
    },
    en: {
      name: "Uzbekistan",
    },
    code: "UZ",
    number: "+998",
    flag: "🇺🇿",
    exampleNumber: "xx yyyyyy",
  },
  {
    ru: {
      name: "Уоллис и Футуна острова",
    },
    en: {
      name: "Wallis and Futuna Islands",
    },
    code: "WF",
    number: "+681",
    flag: "🇼🇫",
    exampleNumber: "xx xx xx",
  },
  {
    ru: {
      name: "Уругвай",
    },
    en: {
      name: "Uruguay",
    },
    code: "UY",
    number: "+598",
    flag: "🇺🇾",
    exampleNumber: "xx yyyyyy",
  },
  {
    ru: {
      name: "Фиджи",
    },
    en: {
      name: "Fiji",
    },
    code: "FJ",
    number: "+679",
    flag: "🇫🇯",
    exampleNumber: "xxx yy yy",
  },
  {
    ru: {
      name: "Филиппины",
    },
    en: {
      name: "Philippines",
    },
    code: "PH",
    number: "+63",
    flag: "🇵🇭",
    exampleNumber: "xx yyyyyyy",
  },
  {
    ru: {
      name: "Финляндия",
    },
    en: {
      name: "Finland",
    },
    code: "FI",
    number: "+358",
    flag: "🇫🇮",
    exampleNumber: "xx yyy yyy",
  },
  {
    ru: {
      name: "Франция",
    },
    en: {
      name: "France",
    },
    code: "FR",
    number: "+33",
    flag: "🇫🇷",
    exampleNumber: "xx xx xx xx",
  },
  {
    ru: {
      name: "Французская Гайана",
    },
    en: {
      name: "French Guiana",
    },
    code: "GF",
    number: "+594",
    flag: "🇬🇫",
    exampleNumber: "xx xx xx xx",
  },
  {
    ru: {
      name: "Французская Полинезия",
    },
    en: {
      name: "French Polynesia",
    },
    code: "PF",
    number: "+689",
    flag: "🇵🇫",
    exampleNumber: "xx xx xx",
  },
  {
    ru: {
      name: "Хорватия",
    },
    en: {
      name: "Croatia",
    },
    code: "HR",
    number: "+385",
    flag: "🇭🇷",
    exampleNumber: "xx yyyyyy",
  },
  {
    ru: {
      name: "Центральноафриканская Республика",
    },
    en: {
      name: "Central African Republic",
    },
    code: "CF",
    number: "+236",
    flag: "🇨🇫",
    exampleNumber: "xx xx xx xx",
  },
  {
    ru: {
      name: "Чад",
    },
    en: {
      name: "Chad",
    },
    code: "TD",
    number: "+235",
    flag: "🇹🇩",
    exampleNumber: "xx xx xx xx",
  },
  {
    ru: {
      name: "Чехия",
    },
    en: {
      name: "Czech Republic",
    },
    code: "CZ",
    number: "+420",
    flag: "🇨🇿",
    exampleNumber: "xxx xxx xxx",
  },

  {
    ru: {
      name: "Чили",
    },
    en: {
      name: "Chile",
    },
    code: "CL",
    number: "+56",
    flag: "🇨🇱",
    exampleNumber: "9 xxxx xxxx",
  },
  {
    ru: {
      name: "Черногория",
    },
    en: {
      name: "Montenegro",
    },
    code: "ME",
    number: "+382",
    flag: "🇲🇪",
    exampleNumber: "6x xxx xxx",
  },
  {
    ru: {
      name: "Швейцария",
    },
    en: {
      name: "Switzerland",
    },
    code: "CH",
    number: "+41",
    flag: "🇨🇭",
    exampleNumber: "0xx xxx xx xx",
  },
  {
    ru: {
      name: "Швеция",
    },
    en: {
      name: "Sweden",
    },
    code: "SE",
    number: "+46",
    flag: "🇸🇪",
    exampleNumber: "07x-xxx xx xx",
  },
  {
    ru: {
      name: "Шри-Ланка",
    },
    en: {
      name: "Sri Lanka",
    },
    code: "LK",
    number: "+94",
    flag: "🇱🇰",
    exampleNumber: "07x xxx xxxx",
  },
  {
    ru: {
      name: "Ямайка",
    },
    en: {
      name: "Jamaica",
    },
    code: "JM",
    number: "+1",
    flag: "🇯🇲",
    exampleNumber: "(876) xxx-xxxx",
  },
  {
    ru: {
      name: "Япония",
    },
    en: {
      name: "Japan",
    },
    code: "JP",
    number: "+81",
    flag: "🇯🇵",
    exampleNumber: "080-xxxx-xxxx",
  },
];
