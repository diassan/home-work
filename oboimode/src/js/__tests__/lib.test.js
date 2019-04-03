import {oboi} from "../lib.js";

test('calculate oboi', ()=>{
const lenght = 4;
const width = 2;
const heightSM = 250;
const widthRullon =1;
const expected = 3;

const result = oboi(lenght,width,heightSM,widthRullon);
expect(result).toBeCloseTo(expected,0);
});
