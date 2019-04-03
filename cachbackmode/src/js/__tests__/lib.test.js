import {calculateCachback} from "../lib.js";

test('calculate Cachback', () => {
    const usual = 10000;
    const elevated = 5000;
    const special = 1000;
    const expected = 650;

    const result = calculateCachback(usual, elevated, special);

    expect(result).toBe(expected);
});

