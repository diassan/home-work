export function oboi(lenght,width, heightSM, widthRullon ) {
    const heightinM = (heightSM + 10)/100;
    const perimetr = (lenght + width)*2;
    const cloth = perimetr/widthRullon;
    const clothRull = 10/heightinM;
    const rool = cloth/clothRull;
    return rool;
}