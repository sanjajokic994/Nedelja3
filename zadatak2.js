// Написати функцију која израчунава цену пице по квадратном центиметру (параметри функције су полупречник у цм, и цена пице)
function cenaPizze(poluprecnik, cena){
    povrsina=poluprecnik**2*Math.PI;
    poCm=cena/povrsina;
    return poCm;
}
console.log(cenaPizze('9','1000'));