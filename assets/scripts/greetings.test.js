import { engArr, frnchArr } from "./greetings";

it ("Should have an array of English phrases that has a length of 11", () => {
    expect(engArr.length).toBe(11);
});

it ("Should have an array of French phrases that has a length of 11", () => {
    expect(frnchArr.length).toBe(11);
});