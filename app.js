document.getElementById('case-plus').addEventListener('click',function(){

    const caseinput=document.getElementById('case-number');

    let caseNumber=caseinput.value ;
    caseinput.value=parseInt(caseNumber)+1;
const caseTotal =document.getElementById('case-total');
caseTotal.innerText=caseinput.value *59;
console.log(caseNumber);
});
document.getElementById('case-minus').addEventListener('click',function(){

    const caseinput=document.getElementById('case-number');

    let caseNumber=caseinput.value ;
    const caseTotal =document.getElementById('case-total');
    if(caseNumber>0){
    caseinput.value=parseInt(caseNumber)-1;
   
caseTotal.innerText=caseinput.value *59;
    }
console.log(caseNumber);
});
document.getElementById('phone-plus').addEventListener('click',function(){

    const caseinput=document.getElementById('phone-number');

    let caseNumber=caseinput.value ;
    caseinput.value=parseInt(caseNumber)+1;
const caseTotal =document.getElementById('phone-total');
caseTotal.innerText=caseinput.value *1219;
console.log(caseNumber);
});
document.getElementById('phone-minus').addEventListener('click',function(){

    const caseinput=document.getElementById('phone-number');

    let caseNumber=caseinput.value ;
    const caseTotal =document.getElementById('phone-total');
    if(caseNumber>0){
    caseinput.value=parseInt(caseNumber)-1;
   
caseTotal.innerText=caseinput.value *1219;
    }
console.log(caseNumber);
});