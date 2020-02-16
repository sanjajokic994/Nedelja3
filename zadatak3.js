// Написати функцију која исписује све елементе низа који су дељиви са 5
function deljiviSa5(array){
    let deljiv = [];
    for( i=0; i< array.length; i++){
        if(array[i]%5==0) {
           deljiv.push(array[i]);
          
          
        }        
}
console.log(deljiv);
}

deljiviSa5([5,12,15,20,25,13]);