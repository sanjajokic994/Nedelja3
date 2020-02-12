// Написати функцију која враћа максимум од 3 броја (Параметри функције су 3 броја)
function maximum(broj1, broj2, broj3){
   max= broj1+broj2+broj3;
   return max;
}
function biggestboi(x1,x2,x3){
    bigboi=x1;
    if(x1<x2)bigboi=x2;
    if(x2<x3)bigboi=x3;
    return bigboi;
}

console.log(maximum(11,22,33));
console.log(biggestboi(11,44,33));
// Nisam bila sigurna da li se trazi najveci od tri broja ili njihov maximum