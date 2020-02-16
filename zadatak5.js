// На страници постоје 2 дугмета за наручивање (као на страници пицерије, ORDER) И постоје 2 дугмета за наручивање одмах
// Дугмићи за 'наручивање' повећавају бројач
// Дугмићи за 'наручивање одмах' ресетују бројач на нула и исписују додатну поруку
// (Порука у облику: Наручили сте [X] пица,[danasnji datum i vreme])
//  Напомена: X је бројач, проверити да ли је бројач 0, и ако јесте кликом на наручивање одмах избацује одговарајућу поруку за грешку
let container=document.querySelector('#container');
let order=document.createElement('button');
let order1=document.createElement('button');
let orderNow=document.createElement('button');
let orderNow1=document.createElement('button');
let pCount=document.createElement('p');
let message=document.createElement('p');

order.addEventListener('click', addOrder);
order1.addEventListener('click', addOrder);
orderNow.addEventListener('click',finishOrder);
orderNow1.addEventListener('click',finishOrder);




container.appendChild(order);
container.appendChild(order1);
container.appendChild(pCount);
container.appendChild(orderNow);
container.appendChild(orderNow1);
container.appendChild(message);

order1.innerHTML='Narucivanje';
order.innerHTML='Narucivanje';
orderNow.innerHTML='Narucivanje odmah';
orderNow1.innerHTML='Narucivanje odmah';
pCount.innerHTML='0';





var count=0;

function addOrder(){
    count++;
    pCount.innerHTML=count;
}


function finishOrder(){
     if(count==0){
         message.innerHTML='Greska!';
     }
     else{
         message.innerHTML='Narucili ste: '+count+' pica, '+ getDate();
     }


  count=0;
  pCount.innerHTML=count;
  
}

function getDate(){
    let vreme = new Date();
    return `${vreme.getDate()}.${vreme.getMonth() + 1}.${vreme.getFullYear()}.${vreme.getHours()}:${vreme.getMinutes()}:${vreme.getSeconds()}`;

}








