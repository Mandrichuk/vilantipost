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
import blackEnvelope from "../assets/icons/blackEnvelope.png";
import whiteEnvelope from "../assets/icons/whiteEnvelope.png";
import customEnvelope from "../assets/icons/customEnvelope.png";
import checked from "../assets/icons/checked.png";

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
  blackEnvelope,
  whiteEnvelope,
  customEnvelope,
  checked,
};

export const deliveryPrices = {
  value: 5000,
  ru: {
    price: "6000₽",
  },
  en: {
    price: "60€",
  },
};

export const links = {
  home: "/",
  form: "/form",
  orders: "/orders",
  settings: "/settings",
};

export const trackPage = {
  ru: {
    title: "Отследить посылку",
    input: {
      value: "Номер посылки",
      type: "number",
      placeholder: "123456789",
      field: "parcelNumber",
    },
    buttonSubmit: "Отследить",
  },
  en: {
    title: "Track your parcel",
    input: {
      value: "Parcel number",
      type: "number",
      placeholder: "123456789",
      field: "parcelNumber",
    },
    buttonSubmit: "Track",
  },
};

export const homePage = {
  orderBox: {
    ru: {
      title: "Отправьте свои документы в/из России!",
      fromWhereInputs: ["В Россию", "Из России"],
      fromInput: "Из какой страны вы отправляете",
      toInput: "В какую страну отправляете",
      errorMessage: "*Выберите страну из всплывающего списка!",
      youSend: {
        label: "Вы отправляете",
        name: "Документы",
        article: "вес от 0.5кг до 2.5кг",
      },
      amountInput: "Укажите вес документов",
      amountVariants: [
        { label: "150г", value: 150 },
        { label: "300г", value: 300 },
      ],
      buttonSubmit: "Перейти к деталям",
    },
    en: {
      title: "Send your documents to/from Russia!",
      fromWhereInputs: ["To Russia", "From Russia"],
      fromInput: "From which country you send",
      toInput: "To which country you send",
      errorMessage: "*Select country from the popup list!",
      youSend: {
        label: "You send",
        name: "Documents",
        article: "weight from 0.5kg to 2.5kg",
      },
      amountInput: "Specify the weight of the documents",
      amountVariants: [
        { label: "150g", value: 150 },
        { label: "300g", value: 300 },
      ],
      buttonSubmit: "Go to details",
    },
  },
};

export const formPage = {
  ru: {
    title: "Заполнение формы",
    envelopeText: "Документы ",
    totalPrice: `Итого: ${deliveryPrices.ru.price}`,
    formNotFullfilled: "Необходимо заполнить все поля",
  },
  en: {
    title: "Form filling",
    envelopeText: "Documents ",
    totalPrice: `Total: ${deliveryPrices.en.price}`,
    formNotFullfilled: "Fill in all fields",
  },
  formFromClient: {
    ru: {
      formTitle: "Откуда",
      informDetails: "(форма заполняется на английском)",
      alertMessage: "*Все поля обязательны для заполнения",
      numberInput: {
        value: "Телефон",
        type: "number",
        placeholder: "<номер>",
        field: "phoneNumber",
      },
      countryName: { value: "Страна", field: "" },
      textInputs: [
        {
          value: "Отправитель",
          type: "text",
          placeholder: "FIO",
          field: "sender",
        },
        { value: "Город", type: "text", placeholder: "Moscow", field: "city" },
        {
          value: "Улица",
          type: "text",
          placeholder: "st. Arbat",
          field: "street",
        },
        {
          value: "Номер дома",
          type: "text",
          placeholder: "150",
          field: "houseNumber",
        },
        {
          value: "Почтовый индекс",
          type: "number",
          placeholder: "1234567",
          field: "zipCode",
        },
        {
          value: "Эл. почта отправителя",
          type: "email",
          placeholder: "email@gmail.com",
          field: "email",
        },
      ],
      submitButton: "Продолжить",
    },
    en: {
      formTitle: "Where from",
      informDetails: "(form is filled in English)",
      alertMessage: "*All fields are required",
      numberInput: {
        value: "Phone",
        type: "number",
        placeholder: "<number>",
        field: "phoneNumber",
      },
      countryName: { value: "Country", field: "" },
      textInputs: [
        { value: "Sender", type: "text", placeholder: "FIO", field: "sender" },
        { value: "City", type: "text", placeholder: "Moscow", field: "city" },
        {
          value: "Street",
          type: "text",
          placeholder: "st. Arbat",
          field: "street",
        },
        {
          value: "House number",
          type: "text",
          placeholder: "150",
          field: "houseNumber",
        },
        {
          value: "ZIP code",
          type: "number",
          placeholder: "1234567",
          field: "zipCode",
        },
        {
          value: "Sender's email",
          type: "email",
          placeholder: "email@gmail.com",
          field: "email",
        },
      ],
      submitButton: "Continue",
    },
  },
  formToClient: {
    ru: {
      formTitle: "Куда",
      informDetails: "(форма заполняется на английском)",
      alertMessage: "*Все поля обязательны для заполнения",
      numberInput: {
        value: "Телефон",
        type: "number",
        placeholder: "<номер>",
        field: "phoneNumber",
      },
      countryName: { value: "Страна", field: "" },
      textInputs: [
        {
          value: "Получатель",
          type: "text",
          placeholder: "FIO",
          field: "recipient",
        },
        { value: "Город", type: "text", placeholder: "Moscow", field: "city" },
        {
          value: "Улица",
          type: "text",
          placeholder: "st. Arbat",
          field: "street",
        },
        {
          value: "Номер дома",
          type: "text",
          placeholder: "150",
          field: "houseNumber",
        },
        {
          value: "Почтовый индекс",
          type: "number",
          placeholder: "1234567",
          field: "zipCode",
        },
        {
          value: "Эл. почта получателя",
          type: "email",
          placeholder: "email@gmail.com",
          field: "email",
        },
      ],
      submitButton: "Продолжить",
    },
    en: {
      formTitle: "Where to",
      informDetails: "(form is filled in English)",
      alertMessage: "*All fields are required",
      numberInput: {
        value: "Phone",
        type: "number",
        placeholder: "<number>",
        field: "phoneNumber",
      },
      countryName: { value: "Country", field: "" },
      textInputs: [
        {
          value: "Recipient",
          type: "text",
          placeholder: "FIO",
          field: "recipient",
        },
        { value: "City", type: "text", placeholder: "Moscow", field: "city" },
        {
          value: "Street",
          type: "text",
          placeholder: "st. Arbat",
          field: "street",
        },
        {
          value: "House number",
          type: "text",
          placeholder: "150",
          field: "houseNumber",
        },
        {
          value: "ZIP code",
          type: "number",
          placeholder: "1234567",
          field: "zipCode",
        },
        {
          value: "Recipient's email",
          type: "email",
          placeholder: "email@gmail.com",
          field: "email",
        },
      ],
      submitButton: "Continue",
    },
  },
  shippingForm: {
    ru: {
      formTitle: "Метод доставки",
      deliveryMethod: "Бесплатная доставка курьером!",
      deliveryBy: "Будет доставлен курьером",
      toInputText: "Введите адрес для курьера:",
      adressInput: {
        value: "Адрес",
        type: "text",
        placeholder: "Moscow, st. Lenina, 1",
        field: "address",
      },
      submitButton: "Продолжить",
    },
    en: {
      formTitle: "Shipping method",
      deliveryMethod: "Free shipping by the courier!",
      deliveryBy: "Will be delivered by the courier",
      toInputText: "Enter the address for the courier:",
      adressInput: {
        value: "Address",
        type: "text",
        placeholder: "Moscow, st. Lenina, 1",
        field: "address",
      },
      submitButton: "Continue",
    },
  },
  paymentForm: {
    ru: {
      formTitle: "Оплаты",
      paymentMethod: "Вид оплаты: Карта",
      paymentDetails: [
        "Интернет-платеж производится на странице платежного шлюза «Stripe»",
        "Оплата возможна картами Visa/MasterCard",
        "Оплата производится в Евро",
      ],
      connectionAfter: {
        do: {
          message: "Свяжитесь со мной для уточнения деталей",
          value: true,
          name: "connectAfter",
        },
        dont: {
          message: "Не связываться со мной",
          value: false,
          name: "connectAfter",
        },
      },
      acceptRules:
        "Я прочитал(а) и согласен с политикой конфиденциальности и условиями предоставления услуг",
      finalPrice: `Стоимость: ${deliveryPrices.ru.price}`,
      submitButton: "Перейти к оплате",
    },
    en: {
      formTitle: "Payment",
      paymentMethod: "Payment method: Card",
      paymentDetails: [
        "The payment is made on the payment gateway of «Stripe»",
        "Payment is possible on Visa/MasterCard cards",
        "Payment is made in EUR",
      ],
      connectionAfter: {
        do: {
          message: "Contact me for details",
          value: true,
          name: "connectAfter",
        },
        dont: {
          message: "I don't want to be contacted",
          value: false,
          name: "connectAfter",
        },
      },
      acceptRules:
        "I have read and accept the privacy policy and terms of service",
      finalPrice: `Final price: ${deliveryPrices.en.price}`,
      submitButton: "Go to payment",
    },
  },
};

export const navbar = {
  nav: [
    {
      ru: {
        name: "Главная",
      },
      en: {
        name: "Home",
      },
      type: "",
      icon: "IoHome",
      link: "/",
      withinSite: true,
    },
    {
      ru: {
        name: "Отследить",
      },
      en: {
        name: "Track",
      },
      type: "",
      icon: "RiPhoneFindFill",
      link: "/track-parcel",
      withinSite: true,
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
      withinSite: true,
    },
  ],
  socials: [
    {
      ru: {
        name: "Телеграм",
      },
      en: {
        name: "Telegram",
      },
      type: "",
      icon: "FaTelegram",
      link: "https://www.telegram.org/",
      withinSite: false,
    },
    {
      ru: {
        name: "WhatsApp",
      },
      en: {
        name: "WhatsApp",
      },
      type: "",
      icon: "FaWhatsapp",
      link: "https://www.whatsapp.com/",
      withinSite: false,
    },
  ],
};

export const RussiaData = {
  id: 2,
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
};

export const countries = [
  {
    id: 1,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
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
    id: 11,
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
    id: 12,
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
    id: 13,
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
    id: 14,
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
    id: 15,
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
    id: 16,
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
    id: 17,
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
    id: 18,
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
    id: 19,
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
    id: 20,
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
    id: 21,
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
    id: 22,
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
    id: 23,
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
    id: 24,
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
    id: 25,
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
    id: 26,
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
    id: 27,
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
    id: 28,
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
    id: 29,
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
    id: 30,
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
    id: 31,
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
    id: 32,
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
    id: 33,
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
    id: 34,
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
    id: 35,
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
    id: 36,
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
  {
    id: 37,
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
    id: 38,
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
    id: 39,
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
    id: 40,
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
    id: 41,
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
    id: 42,
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
    id: 43,
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
    id: 44,
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
    id: 45,
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
    id: 46,
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
    id: 47,
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
    id: 48,
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
    id: 49,
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
    id: 50,
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
    id: 51,
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
    id: 52,
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
    id: 53,
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
    id: 54,
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
    id: 55,
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
    id: 56,
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
    id: 57,
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
    id: 58,
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
    id: 59,
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
    id: 60,
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
    id: 61,
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
    id: 62,
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
    id: 63,
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
    id: 64,
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
    id: 65,
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
    id: 66,
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
    id: 67,
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
    id: 68,
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
    id: 69,
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
    id: 70,
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
    id: 71,
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
    id: 72,
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
    id: 73,
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
    id: 74,
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
    id: 75,
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
    id: 76,
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
    id: 77,
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
    id: 78,
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
    id: 79,
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
    id: 80,
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
    id: 81,
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
    id: 82,
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
