import { englishToFrenchTranslator, frenchToEnglishTranslator } from "./translate";

it ("Should translate 'Hello!' to 'Bonjour!'", () => {
    const frenchValue = englishToFrenchTranslator("Hello!");
    expect(frenchValue).toBe("Bonjour!");
});
it ("Should translate 'Bonjour!' to 'Hello!'", () => {
    const englishValue = frenchToEnglishTranslator("Bonjour!");
    expect(englishValue).toBe("Hello!");
});

it ("Should return undefined if any invalid input is given", () => {
    const frenchValue = englishToFrenchTranslator("Is this working");
    expect(frenchValue).toBe(undefined);
});
it ("Should return undefined if any invalid input is given", () => {
    const englishValue = frenchToEnglishTranslator("Is this working");
    expect(englishValue).toBe(undefined);
});

it ("Should return null if a null input is given", () => {
    const frenchValue = englishToFrenchTranslator(null);
    expect(frenchValue).toBe(null);
});
it ("Should return null if an undefined input is given", () => {
    const frenchValue = englishToFrenchTranslator(undefined);
    expect(frenchValue).toBe(null);
});

it ("Should return null if a null input is given", () => {
    const englishValue = frenchToEnglishTranslator(null);
    expect(englishValue).toBe(null);
});
it ("Should return null if an undefined input is given", () => {
    const englishValue = frenchToEnglishTranslator(undefined);
    expect(englishValue).toBe(null);
});