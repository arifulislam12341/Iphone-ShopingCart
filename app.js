document.getElementById('case-plus').addEventListener('click',function(){

    const caseinput=document.getElementById('case-number');

    let caseNumber=caseinput.value ;
    caseinput.value=parseInt(caseNumber)+1;
const caseTotal =document.getElementById('case-total');
caseTotal.innerText=caseinput.value *59;
calculateTotal()
console.log(caseNumber);
});
document.getElementById('case-minus').addEventListener('click',function(){

    const caseinput=document.getElementById('case-number');

    let caseNumber=caseinput.value ;
    const caseTotal =document.getElementById('case-total');
    if(caseNumber>0){
    caseinput.value=parseInt(caseNumber)-1;
   
caseTotal.innerText=caseinput.value *59;
calculateTotal()
    }
console.log(caseNumber);
});
document.getElementById('phone-plus').addEventListener('click',function(){

    const caseinput=document.getElementById('phone-number');

    let caseNumber=caseinput.value ;
    caseinput.value=parseInt(caseNumber)+1;
const caseTotal =document.getElementById('phone-total');
caseTotal.innerText=caseinput.value *1219;
calculateTotal()
console.log(caseNumber);
});
document.getElementById('phone-minus').addEventListener('click',function(){

    const caseinput=document.getElementById('phone-number');

    let caseNumber=caseinput.value ;
    const caseTotal =document.getElementById('phone-total');
    if(caseNumber>0){
    caseinput.value=parseInt(caseNumber)-1;
   
caseTotal.innerText=caseinput.value *1219;
calculateTotal()
    }
console.log(caseNumber);
});

function getInputValue(product){
    const phoneInput=document.getElementById(product+'-number');
    const phoneNumber=parseInt(phoneInput.value);
    return phoneNumber;
}

function calculateTotal(){
const phoneTotal=getInputValue('phone')*1219;
const caseTotal=getInputValue('case')*59;
const subTotal=phoneTotal+caseTotal;
const tax=subTotal/10;
document.getElementById('sub-total').innerText=subTotal;

document.getElementById('tax-amount').innerText=tax;

const total=subTotal+tax;

document.getElementById('total').innerText=total;


}