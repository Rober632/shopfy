import i18next from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";


const resources = {

  en: {

    translation: {

      Home: "Home",
      'Add to cart' : 'Add to Cart',
      'Your Cart is Currently Empty!' : 'Your Cart is Currently Empty!',
      'Continue Shopping' : 'Continue Shopping',
      "Looks like you haven't added anything to your cart yet" : "Looks like you haven't added anything to your cart yet",
      "My Cart" : 'My Cart',
      "Account" : "Account",
      "Profile" : "Profile",
      "Orders" : "Orders",
      "Wishlist" : "Wishlist",
      "Settings" : "Settings",
      "Language" : "Language",
      "English" : "English"


    },

  },

  ar: {

    translation: {

      Home: "الرئيسية",
      'Add to cart' : 'إضافة الي عربة التسوق',
      'Your Cart is Currently Empty!' : 'عربة تسوق الخاصة بك فارغة',
      'Continue Shopping' : 'ابدأ التسوق',
      "Looks like you haven't added anything to your cart yet" : 'يبدو أنك لم تقم بإضافة أي شيء إلى سلة التسوق الخاصة بك حتى الآن',
      "My Cart" : "عربة التسوق",
      "Account" : "حسابك",
      "Profile" : "حسابك",
      "Orders" : "مشترياتك",
      "Wishlist" : "المفضلة",
      "Settings" : "الإعدادات",
      "Language" : "إعدادات اللغة",
      "Arabic" : "العربية",
      "English" : "الإنجليزية",
      "Sort by" : "ترتيب النتائج",
      "Low to High" : "السعر: من الأقل إلى الأكثر",
      "High to Low" : "السعر: من الأكثر إلى الأقل",
      "Country" : "البلد",
      "Support" : "الدعم",
      "Help" : "المساعدة",
      "Contact US" : "تواصل معنا", 
      "Dark mode" : "الوضع الليلي",
      "Light mode" : "الوضع الطبيعي",
      "Theme" : "العرض",
      "Filter" : "إعدادات السعر",
      "Price Range" : "السعر",
      "Reset" : "إعادة تعيين",
      "Your Wishlist is Empty" : "قائمتك فارغة",
      "Tap heart button to start saving your favourite items." : "اضغط على زر المفضلة لبدء حفظ العناصر المفضلة لديك.",
      "Add Now" : "إضافة الآن",
      "Shipping cost" : "الشحن والتسليم",
      "Discount" : "الخصم",
      "Estimated Total" : "إجمالي المبلغ",
      "Tax" : "ضريبة",
      "Sumbit" : "تطبيق",
      "ENTER PROMO CODE" : "أدخل كوبون الخصم",
      "Promo Code" : "كوبون الخصم",
      "Checkout" : "إتمام الشراء",
      "item has been added to your Cart" : "تمت إضافة العنصر إلى عربة التسوق الخاصة بك",
      "item has been added to your Wishlist" : "تمت إضافة العنصر إلى قائمة الرغبات الخاصة بك"
    },

  },

};

i18next

  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    lng: "ar",
    interpolation: {

      escapeValue: false,

    },

  });

export default i18next;