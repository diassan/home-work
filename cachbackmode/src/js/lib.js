export function calculateCachback(usual, elevated, special) {
const usualCach = usual*1/100;
const elevatedCach = elevated*5/100;
const specialCach = special*30/100;
const summaCach = usualCach+elevatedCach+specialCach;
return summaCach;
}
