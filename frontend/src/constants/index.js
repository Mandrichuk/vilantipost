import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  TbCircleNumber1,
  TbCircleNumber2,
  TbCircleNumber3,
  TbCircleNumber4,
  TbCircleNumber5,
} from "react-icons/tb";

// Logos

// Graphics
import mobileRuPoster from "../assets/graphics/mobRuPoster.jpg";
import mobileEnPoster from "../assets/graphics/mobEnPoster.jpg";
import pcRuPoster from "../assets/graphics/pcRuPoster.jpg";
import pcEnPoster from "../assets/graphics/pcEnPoster.jpg";
import peopleRating from "../assets/graphics/peopleRatings.jpg";
import DeliveryToPerson from "../assets/graphics/DeliveryToPerson.png";
import courierDelivery from "../assets/graphics/courierDelivery.png";
import worldDelivery from "../assets/graphics/worldDelivery.png";
import sendToStock from "../assets/graphics/sendToStock.png";
import fullFillForm from "../assets/graphics/fullFillForm.png";
import deliveryBox from "../assets/graphics/deliveryBox.png";
import passport from "../assets/graphics/passport.png";
import money from "../assets/graphics/money.png";
import personalDocuments from "../assets/graphics/personalDocuments.png";
import flashDrive from "../assets/graphics/flashDrive.png";
import creditCard from "../assets/graphics/creditCard.png";
import documents from "../assets/graphics/documents.png";
import delivery from "../assets/graphics/delivery.png";

// Lotties
import animatedMessage from "../assets/lotties/animatedMessage.json";

// icons
import blackEnvelope from "../assets/icons/blackEnvelope.png";
import whiteEnvelope from "../assets/icons/whiteEnvelope.png";
import customEnvelope from "../assets/icons/customEnvelope.png";

// flags
import SlovakFlag from "../assets/flags/SlovakFlag.png";
import AustrianFlag from "../assets/flags/AustrianFlag.png";
import ChechFlag from "../assets/flags/ChechFlag.png";
import GermanyFlag from "../assets/flags/GermanyFlag.png";
import ItalianFlag from "../assets/flags/ItalianFlag.png";
import RussianFlag from "../assets/flags/RussianFlag.png";
import SpainFlag from "../assets/flags/SpainFlag.png";
import UnitedKingdomFlag from "../assets/flags/UnitedKingdomFlag.jpg";
import FranceFlag from "../assets/flags/FranceFlag.png";
import PolandFlag from "../assets/flags/PolandFlag.png";
import SwedenFlag from "../assets/flags/SwedenFlag.png";
import TurkeyFlag from "../assets/flags/TurkeyFlag.png";

// ratings
import rating0 from "../assets/ratings/rating-0.png";
import rating05 from "../assets/ratings/rating-05.png";
import rating10 from "../assets/ratings/rating-10.png";
import rating15 from "../assets/ratings/rating-15.png";
import rating20 from "../assets/ratings/rating-20.png";
import rating25 from "../assets/ratings/rating-25.png";
import rating30 from "../assets/ratings/rating-30.png";
import rating35 from "../assets/ratings/rating-35.png";
import rating40 from "../assets/ratings/rating-40.png";
import rating45 from "../assets/ratings/rating-45.png";
import rating50 from "../assets/ratings/rating-50.png";

export const notifySuccess = () => {
  if (!toast.isActive("success")) {
    toast.success("Thanks for your order!", {
      toastId: "success",
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
    });
  }
};

export const notifyError = () => {
  if (!toast.isActive("success")) {
    toast.success("Thanks for your order!", {
      toastId: "success",
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });
  }
};

export default {
  mobileRuPoster,
  mobileEnPoster,
  pcRuPoster,
  pcEnPoster,
  delivery,
  peopleRating,
  documents,
  blackEnvelope,
  whiteEnvelope,
  customEnvelope,
  passport,
  money,
  deliveryBox,
  animatedMessage,
  personalDocuments,
  flashDrive,
  creditCard,
  SlovakFlag,
  AustrianFlag,
  ChechFlag,
  GermanyFlag,
  ItalianFlag,
  RussianFlag,
  SpainFlag,
  UnitedKingdomFlag,
  FranceFlag,
  PolandFlag,
  SwedenFlag,
  TurkeyFlag,
  rating0,
  rating05,
  rating10,
  rating15,
  rating20,
  rating25,
  rating30,
  rating35,
  rating40,
  rating45,
  rating50,
};

export const domens = {
  backend: "37.140.192.78/",
  frontend: "37.140.192.78/",
};

export const formTitles = [
  "id",
  "sender",
  "sender_country",
  "sender_city",
  "sender_street",
  "sender_houseNumber",
  "sender_zipCode",
  "sender_email",
  "sender_phoneNumber",
  "recipient",
  "recipient_country",
  "recipient_city",
  "recipient_street",
  "recipient_houseNumber",
  "recipient_zipCode",
  "recipient_email",
  "recipient_phoneNumber",
  "sender_street",
  "paymentForm_contactAfter",
  "paymentForm_acceptRules",
  "parcel_fedExNumber",
];

export const motions = {
  whileTap: { scale: 0.8 },
  sidebarVariants: {
    open: { x: 0 },
    closed: { x: "-100%" },
  },
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
  admin: "/admin",
  adminEdit: "/admin/edit",
  adminLogin: "/admin/login",
};

export const navId = {
  form: "form",
  popularServices: "popular-services",
  deliveryProcesses: "delivery-processes",
  trackParcel: "track-parcel",
};

export const adminLoginPage = {
  ru: {
    titleText: "Авторизация администратора",
    loginInput: {
      value: "Логин",
      type: "text",
      placeholder: "admin",
      field: "loginInput",
    },
    passwordInput: {
      value: "Пароль",
      type: "text",
      placeholder: "123123",
      field: "passwordInput",
    },
    submitButton: "Войти",
  },
  en: {
    titleText: "Admin login",
    loginInput: {
      value: "Login",
      type: "text",
      placeholder: "admin",
      field: "loginInput",
    },
    passwordInput: {
      value: "Password",
      type: "text",
      placeholder: "123123",
      field: "passwordInput",
    },
    submitButton: "Login",
  },
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
    foundParcelText: "Посылка по номеру: ",
    parcelData: {
      sender: "Отправитель:",
      recipient: "Получатель:",
      sender_country: "Страна отправителя:",
      recipient_country: "Страна получателя:",
      sender_city: "Город отправителя:",
      recipient_city: "Город получателя:",
      delivery_adress: "Адрес доставки:",
    },
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
    foundParcelText: "Parcel by number: ",
    parcelData: {
      sender: "Sender:",
      recipient: "Recipient:",
      sender_country: "Sender country:",
      recipient_country: "Recipient country:",
      sender_city: "Sender city:",
      recipient_city: "Recipient city:",
      delivery_adress: "Delivery address:",
    },
  },
};

export const homePage = {
  trackPackage: {
    ru: {
      labelText: "Отследите посылку за номером",
      trackInput: {
        type: "text",
        placeholder: "123456789",
        field: "parcelNumber",
      },
    },
    en: {
      labelText: "Track your parcel by a number",
      trackInput: {
        type: "text",
        placeholder: "123456789",
        field: "parcelNumber",
      },
    },
  },
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
        article: "вес от 150гм до 300гм",
      },
      amountInput: "Укажите вес документов",
      units: "гм",
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
        article: "weight from 150g to 300g",
      },
      amountInput: "Specify the weight of the documents",
      units: "g",
      buttonSubmit: "Go to details",
    },
  },
  popularServices: {
    ru: {
      titleText: "Популярные отправки",
      chooseText: "Выбрать",
      services: [
        {
          toCountryImg: SlovakFlag,
          fromCountryName: "Россия",
          toCountryName: "Словакия",
          countryToId: 4,
          deliveryTime: "Доставка: 7 дней",
        },
        {
          toCountryImg: ChechFlag,
          toCountryName: "Чехия",
          fromCountryName: "Россия",
          countryToId: 75,
          deliveryTime: "Доставка: 5 дня",
        },
        {
          toCountryImg: SpainFlag,
          toCountryName: "Испания",
          fromCountryName: "Россия",
          countryToId: 95,
          deliveryTime: "Доставка: 6 дней",
        },
        {
          toCountryImg: ItalianFlag,
          toCountryName: "Италия",
          fromCountryName: "Россия",
          countryToId: 89,
          deliveryTime: "Доставка: 4 дня",
        },
        {
          toCountryImg: FranceFlag,
          toCountryName: "Франция",
          fromCountryName: "Россия",
          countryToId: 69,
          deliveryTime: "Доставка: 6 дней",
        },
        {
          toCountryImg: PolandFlag,
          toCountryName: "Польша",
          fromCountryName: "Россия",
          countryToId: 3,
          deliveryTime: "Доставка: 7 дней",
        },
        {
          toCountryImg: SwedenFlag,
          toCountryName: "Швеция",
          fromCountryName: "Россия",
          countryToId: 79,
          deliveryTime: "Доставка: 7 дней",
        },
        {
          toCountryImg: TurkeyFlag,
          toCountryName: "Турция",
          fromCountryName: "Россия",
          countryToId: 59,
          deliveryTime: "Доставка: 7 дней",
        },
      ],
    },
    en: {
      titleText: "Popular shippings",
      chooseText: "Choose",
      services: [
        {
          toCountryImg: SlovakFlag,
          fromCountryName: "Russia",
          toCountryName: "Slovakia",
          countryToId: 4,
          deliveryTime: "Delivery: 7 days",
        },
        {
          toCountryImg: ChechFlag,
          toCountryName: "Chech",
          fromCountryName: "Russia",
          countryToId: 75,
          deliveryTime: "Delivery: 5 days",
        },
        {
          toCountryImg: ItalianFlag,
          toCountryName: "Italy",
          fromCountryName: "Russia",
          countryToId: 89,
          deliveryTime: "Delivery: 4 days",
        },
        {
          toCountryImg: SpainFlag,
          toCountryName: "Spain",
          fromCountryName: "Russia",
          countryToId: 95,
          deliveryTime: "Delivery: 6 days",
        },
        {
          toCountryImg: FranceFlag,
          toCountryName: "France",
          fromCountryName: "Russia",
          countryToId: 69,
          deliveryTime: "Delivery: 6 days",
        },
        {
          toCountryImg: PolandFlag,
          toCountryName: "Poland",
          fromCountryName: "Russia",
          countryToId: 3,
          deliveryTime: "Delivery: 7 days",
        },
        {
          toCountryImg: SwedenFlag,
          toCountryName: "Sweden",
          fromCountryName: "Russia",
          countryToId: 79,
          deliveryTime: "Delivery: 7 days",
        },
        {
          toCountryImg: TurkeyFlag,
          toCountryName: "Turkey",
          fromCountryName: "Russia",
          countryToId: 59,
          deliveryTime: "Delivery: 7 days",
        },
      ],
    },
  },
  Reviews: {
    ru: {
      titleText: "Отзывы клиентов",
      articleText: "Почитайте, что наши клиенты думают о нас!",
      translateBtn: "перевести",
      originalBtn: "показать оригинал",
    },
    en: {
      titleText: "Clients' reviews",
      articleText: "Take a look what our clients say about us!",
      translateBtn: "translate",
      originalBtn: "show original",
    },
    reviews: [
      {
        name: "Виктория",
        originalReview: {
          comment: "Все очень понравилось. Всем рекомендую!",
          lang: "ru",
        },
        translatedReview:
          "Everything was very good. I recommend it to everyone.",
        date: "08.01.2024",
        rating: 5,
      },
      {
        name: "George",
        originalReview: {
          comment:
            "Nice service! Sent a few evelopes to my client and it was delivered in 5 days",
          lang: "en",
        },
        translatedReview:
          "Хороший сервис! Отправил несколько электронных писем к клиенту и его доставили за 5 дней",
        date: "13.02.2024",
        rating: 4.5,
      },
      {
        name: "Алексей",
        originalReview: {
          comment: "Отличная работа! Все было выполнено быстро и качественно.",
          lang: "ru",
        },
        translatedReview:
          "Great job! Everything was done quickly and efficiently.",
        date: "15.03.2023",
        rating: 5,
      },
      {
        name: "Sophia",
        originalReview: {
          comment: "Very professional team and services. Highly recommended.",
          lang: "en",
        },
        translatedReview:
          "Очень профессиональная команда и сервис. Настоятельно рекомендую.",
        date: "22.06.2023",
        rating: 5,
      },
      {
        name: "Игнат",
        originalReview: {
          comment:
            "Быстрее, чем я ожидал! Отправил документы в понедельник, и они были там уже в четверг.",
          lang: "ru",
        },
        translatedReview:
          "Faster than I expected! Sent the documents on Monday, and they were there by Thursday.",
        date: "10.07.2023",
        rating: 4,
      },
      {
        name: "Emily",
        originalReview: {
          comment:
            "I'm impressed with how efficient the service is. Will use again.",
          lang: "en",
        },
        translatedReview:
          "Я впечатлена, насколько эффективен сервис. Буду использовать снова.",
        date: "05.11.2023",
        rating: 4.5,
      },
      {
        name: "Михаил",
        originalReview: {
          comment:
            "Все дошло в целости и сохранности, и главное - вовремя. Спасибо!",
          lang: "ru",
        },
        translatedReview:
          "Everything arrived intact and, most importantly, on time. Thank you!",
        date: "21.12.2023",
        rating: 4,
      },
    ],
  },
  deliveryProcesses: {
    ru: {
      titleText: "Процесс доставки",
      stepText: "Шаг",
      steps: {
        0: {
          image: fullFillForm,
          stepNumber: "Шаг 1",
          title: "Заполнение формы",
          label: "Заполните форму на сайте и оплатите доставку",
          article:
            "Заполните все необходимые данные в форме, после чего оплатите доставку и ожидайте FedEx накладную на указанный email",
        },
        1: {
          image: sendToStock,
          stepNumber: "Шаг 2",
          title: "Отправка на РФ склад",
          label: "Отправляйте нам ваши документь",
          article:
            "После заполнения формы отправляйте нам ваши документы в отдел по адресу: `АДРЕС`. Далее мы проверим документы на валидность и отправим вам документы по указанному адресу.",
        },
        2: {
          image: worldDelivery,
          stepNumber: "Шаг 3",
          title: "Перевоз посылки в ЕС",
          label: "Доставка на склад Словакии",
          article:
            "Затем, мы доставим ваши документы в отдел Словакии. С Братиславы мы отправляем посылку за указаным адресом из вашей формы.",
        },
        3: {
          image: courierDelivery,
          stepNumber: "Шаг 4",
          title: "Доставка курьером",
          label: "Курьер доставит по адресу из формы",
          article:
            "К выбранному вами адресу курьер доставит ваши документы. Как вы встретитесь с курьером, покажите ему FedEx накладную, которая пришла вам на почту.",
        },
        4: {
          image: DeliveryToPerson,
          stepNumber: "Шаг 5",
          title: "Получение",
          label: "Все сложное позади!",
          article:
            "Супер! У вас все получилось. Спасибо за пользование нашим сервисом!",
        },
      },
    },
    en: {
      titleText: "Delivery process",
      stepText: "Step",
      steps: {
        0: {
          image: fullFillForm,
          stepNumber: "Step 1",
          title: "Filling the form",
          label: "Fill in the form on the site and pay for delivery",
          article:
            "Fill in all the necessary information in the form, then pay for delivery and wait for FedEx invoice on the specified email",
        },
        1: {
          image: sendToStock,
          stepNumber: "Step 2",
          title: "Sending to Moskow",
          label: "Send us your documents",
          article:
            "After filling the form, send us your documents to the warehouse address: `ADDRESS`. Then we will check the documents for validity and send them to you.",
        },
        2: {
          image: worldDelivery,
          stepNumber: "Step 3",
          title: "Delivery to Slovakia",
          label: "Delivery to the warehouse of Slovakia",
          article:
            "Then, we will deliver your documents to the Slovakian warehouse. We will send the package to the specified address from your form.",
        },
        3: {
          image: courierDelivery,
          stepNumber: "Step 4",
          title: "Delivery by courier",
          label: "The courier will deliver the address from the form",
          article:
            "At the specified address, the courier will deliver your documents. When you meet the courier, show him the FedEx invoice that was sent to you.",
        },
        4: {
          image: DeliveryToPerson,
          stepNumber: "Step 5",
          title: "Pickup",
          label: "All the complicated ahead!",
          article:
            "Super! You have everything done. Thank you for using our service!",
        },
      },
    },
    numberStages: [
      {
        name: { en: "Fullfilling the form", ru: "Заполнение формы" },
        icon: TbCircleNumber1,
        value: 0,
      },
      {
        name: { en: "Sending to warehouse", ru: "Отправка на склад" },
        icon: TbCircleNumber2,
        value: 1,
      },
      {
        name: { en: "Delivery to the EU", ru: "Доставка в ЕС" },
        icon: TbCircleNumber3,
        value: 2,
      },
      {
        name: { en: "Delivery by a courier", ru: "Доставка курьером" },
        icon: TbCircleNumber4,
        value: 3,
      },
      {
        name: { en: "Receiving", ru: "Получение" },
        icon: TbCircleNumber5,
        value: 4,
      },
    ],
  },
  trackParcel: {
    ru: {
      title: "Отследить посылку",
      input: {
        value: "Номер посылки",
        type: "number",
        placeholder: "123456789",
        field: "parcelNumber",
      },
      buttonSubmit: "Отследить",
      foundParcelText: "Посылка по номеру: ",
      parcelData: {
        sender: "Отправитель:",
        recipient: "Получатель:",
        sender_country: "Страна отправителя:",
        recipient_country: "Страна получателя:",
        sender_city: "Город отправителя:",
        recipient_city: "Город получателя:",
        delivery_adress: "Адрес доставки:",
      },
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
      foundParcelText: "Parcel by number: ",
      parcelData: {
        sender: "Sender:",
        recipient: "Recipient:",
        sender_country: "Sender country:",
        recipient_country: "Recipient country:",
        sender_city: "Sender city:",
        recipient_city: "Recipient city:",
        delivery_adress: "Delivery address:",
      },
    },
  },
  prohibitedGoods: {
    ru: {
      titleText: "Запрещенные грузы",
      goods: [
        {
          name: "Банковские карты",
          image: creditCard,
        },
        {
          name: "Деньги",
          image: money,
        },
        {
          name: "Крипто-ключи",
          image: flashDrive,
        },
        {
          name: "Водительские права",
          image: personalDocuments,
        },
      ],
    },
    en: {
      titleText: "Prohibited goods",
      goods: [
        {
          name: "Bank cards",
          image: creditCard,
        },
        {
          name: "Money",
          image: money,
        },
        {
          name: "Crypto keys",
          image: flashDrive,
        },
        {
          name: "Driver's licenses",
          image: personalDocuments,
        },
      ],
    },
  },
  trackParcel: {
    ru: {
      titleText: "Отследить посылку",
      firstArticleText: "Введите",
      secondArticleText: "номер посылки",
      notFound: "Посылка не найдена",
      packageData: {
        packageData: "Данные посылки",
        packageNumber: "Номер:",
        sender: "Отправитель:",
        recipient: "Получатель:",
        sender_country: "Страна отправителя:",
        recipient_country: "Страна получателя:",
        sender_city: "Город отправителя:",
        recipient_city: "Город получателя:",
        delivery_adress: "Адрес доставки:",
        status: "Статус:",
      },
    },
    en: {
      titleText: "Track your parcel",
      firstArticleText: "Enter then",
      secondArticleText: "parcel number",
      notFound: "Parcel not found",
      packageData: {
        packageData: "Package data",
        packageNumber: "Number:",
        sender: "Sender:",
        recipient: "Recipient:",
        sender_country: "Sender country:",
        recipient_country: "Recipient country:",
        sender_city: "Sender city:",
        recipient_city: "Recipient city:",
        delivery_adress: "Delivery address:",
        status: "Status:",
      },
    },
  },
  allowedGoods: {
    ru: {
      titleText: "Какие грузы мы доставляем?",
      goods: [
        {
          title: "Документы для офисной работы:",
          article: "Приглашения, конверты, корреспонденция",
        },
        {
          title: "Юридические документы:",
          article: "Договоры, контракты, претензии, доверенности",
        },
        {
          title: "Финансовые документы:",
          article:
            "Бухгалтерские и нотариальные документы, счета, отчеты, акты",
        },
        {
          title: " Личные документы:",
          article:
            "Паспорта, визы, свидетельства о разводе, о рождении детей, дипломы",
        },
        {
          title: "Прочие документы:",
          article: "Сертификаты, свидетельства, документы с апостилем",
        },
      ],
    },
    en: {
      titleText: "What do we deliver?",
      goods: [
        {
          title: "Office documents:",
          article: "Invitations, contracts, correspondence",
        },
        {
          title: "Legal documents:",
          article: "Contracts, agreements, complaints, licenses",
        },
        {
          title: "Financial documents:",
          article: "Accounts, invoices, reports, statements",
        },
        {
          title: "Personal documents:",
          article:
            "Passports, visas, birth certificates, certificates of marriage",
        },
        {
          title: "Other documents:",
          article: "Certificates, stamps, documents with apostrophe",
        },
      ],
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

export const footer = {
  ru: {
    emailUs: {
      articleText: "Всегда готовы помочь вам с любым вопросом",
      questionText: "Появились вопросы?",
      contactUs: "Свяжитесь с нами!",
      nameInput: {
        value: "Ваше имя",
        placeholder: "Введите ваше имя",
        type: "text",
        field: "emailName",
      },
      emailInput: {
        value: "Ваш email",
        placeholder: "Введите ваш email",
        type: "email",
        field: "email",
      },
      messageInput: {
        value: "Ваш вопрос",
        placeholder: "Введите ваш вопрос",
        type: "text",
        field: "message",
      },
      submitButton: "Отправить",
    },
    nav: [
      {
        name: "Заполненить форму",
        link: "/#form",
        withinSite: true,
      },
      {
        name: "Популярные доставки",
        link: "/#popular-services",
        withinSite: true,
      },
      {
        name: "Процесс доставки",
        link: "/#delivery-processes",
        withinSite: true,
      },
      {
        name: "Отследить посылку",
        link: "/#track-parcel",
        withinSite: true,
      },
    ],
  },
  en: {
    emailUs: {
      articleText: "Always ready to help you with any question",
      questionText: "Have a question?",
      contactUs: "Contact us!",
      nameInput: {
        value: "Your name",
        placeholder: "Enter your name",
        type: "text",
        field: "emailName",
      },
      emailInput: {
        value: "Your email",
        placeholder: "Enter your email",
        type: "email",
        field: "email",
      },
      messageInput: {
        value: "Your question",
        placeholder: "Enter your question",
        type: "text",
        field: "message",
      },
      submitButton: "Send",
    },
    nav: [
      {
        name: "Fill the form",
        link: "/#form",
        withinSite: true,
      },
      {
        name: "Popular deliveries",
        link: "/#popular-services",
        withinSite: true,
      },
      {
        name: "Delivery process",
        link: "/#delivery-processes",
        withinSite: true,
      },
      {
        name: "Track parcel",
        link: "/#track-parcel",
        withinSite: true,
      },
    ],
  },
};

export const navbar = {
  nav: {
    ru: [
      {
        name: "Заполненить форму",
        link: "/#fullFillForm",
        withinSite: true,
      },
      {
        name: "Популярные доставки",
        link: "/#popularShippings",
        withinSite: true,
      },
      {
        name: "Процесс доставки",
        link: "/#deliveryProcesses",
        withinSite: true,
      },
      {
        name: "Отследить посылку",
        link: "/#trackParcel",
        withinSite: true,
      },
    ],
    en: [
      {
        name: "Fill the form",
        link: "/#fullFillForm",
        withinSite: true,
      },
      {
        name: "Popular deliveries",
        link: "/#popularShippings",
        withinSite: true,
      },
      {
        name: "Delivery process",
        link: "/#deliveryProcesses",
        withinSite: true,
      },
      {
        name: "Track parcel",
        link: "/#trackParcel",
        withinSite: true,
      },
    ],
  },
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
    id: 86,
    ru: {
      name: "Германия",
    },
    en: {
      name: "Germany",
    },
    code: "DE",
    number: "+49",
    flag: "🇩🇪",
    exampleNumber: "01512 xxxxxxx",
  },
  {
    id: 87,
    ru: {
      name: "Греция",
    },
    en: {
      name: "Greece",
    },
    code: "GR",
    number: "+30",
    flag: "🇬🇷",
    exampleNumber: "69x xxx xxxx",
  },
  {
    id: 88,
    ru: {
      name: "Ирландия",
    },
    en: {
      name: "Ireland",
    },
    code: "IE",
    number: "+353",
    flag: "🇮🇪",
    exampleNumber: "08x xxx xxxx",
  },
  {
    id: 95,
    ru: {
      name: "Испания",
    },
    en: {
      name: "Spain",
    },
    code: "ES",
    number: "+34",
    flag: "🇪🇸",
    exampleNumber: "6xx-xxx-xxx",
  },
  {
    id: 89,
    ru: {
      name: "Италия",
    },
    en: {
      name: "Italy",
    },
    code: "IT",
    number: "+39",
    flag: "🇮🇹",
    exampleNumber: "3xx xxx xxxx",
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
    id: 90,
    ru: {
      name: "Латвия",
    },
    en: {
      name: "Latvia",
    },
    code: "LV",
    number: "+371",
    flag: "🇱🇻",
    exampleNumber: "2xxx xxxx",
  },
  {
    id: 84,
    ru: {
      name: "Дания",
    },
    en: {
      name: "Denmark",
    },
    code: "DK",
    number: "+45",
    flag: "🇩🇰",
    exampleNumber: "20-xx-xx-xx",
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
    id: 94,
    ru: {
      name: "Нидерланды",
    },
    en: {
      name: "Netherlands",
    },
    code: "NL",
    number: "+31",
    flag: "🇳🇱",
    exampleNumber: "6 xxxx xxxx",
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
    id: 83,
    ru: {
      name: "Кипр",
    },
    en: {
      name: "Cyprus",
    },
    code: "CY",
    number: "+357",
    flag: "🇨🇾",
    exampleNumber: "99-xxxxxx",
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
  {
    id: 85,
    ru: {
      name: "Эстония",
    },
    en: {
      name: "Estonia",
    },
    code: "EE",
    number: "+372",
    flag: "🇪🇪",
    exampleNumber: "5xxx xxxx",
  },
];
