import { engArr, frnchArr } from "./greetings.js";

const englishToFrenchTranslator = (englishValue) => {
    for (let i = 0; i < engArr.length; i++) {
        if (englishValue == engArr[i]) return frnchArr[i];
    } if (englishValue == null || englishValue == undefined) return null;
    else return undefined;
}

const frenchToEnglishTranslator = (frenchValue) => {
    for (let i = 0; i < frnchArr.length; i++) {
        if (frenchValue == frnchArr[i]) return engArr[i];
    } if (frenchValue == null || frenchValue == undefined) return null;
    else return undefined;
}

export { englishToFrenchTranslator, frenchToEnglishTranslator };