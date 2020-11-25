import { englishToFrenchTranslator, frenchToEnglishTranslator } from "./translate.js";

const englishVal = document.querySelector(".engVal");
const englishButton = document.querySelector(".engBtn");
const frenchVal = document.querySelector(".frnchVal");
const frenchButton = document.querySelector(".frnchBtn");

const handleEnglishClick = () => {
    const translation = englishToFrenchTranslator(englishVal.value);
    if (translation == undefined) alert("Not a valid input");
    else if (translation == null) alert("Error - null input detected");
    else frenchVal.value = translation;
}
const handleFrenchClick = () => {
    const translation = frenchToEnglishTranslator(frenchVal.value);
    if (translation == undefined) alert("Not a valid input");
    else if (translation == null) alert("Error - null input detected");
    else englishVal.value = translation;
}

englishButton.addEventListener("click", handleEnglishClick);

frenchButton.addEventListener("click", handleFrenchClick);