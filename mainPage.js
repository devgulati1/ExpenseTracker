let expenseButton=document.querySelector(".add-expense-btn");
let nameInput=document.querySelector(".name");
let amountInput=document.querySelector(".amount");
let dateInput=document.querySelector(".date");
let enterTotalAmount=document.querySelector(".totalCashInput");
let enterTotalAmountBtn=document.querySelector(".total-cash-input-btn");
let totalCash=document.querySelector(".totalCash");
let balance=document.querySelector(".balance");
let balancep=document.querySelector(".balancep");
let totalCashp=document.querySelector(".totalCashp");



let addExpense=()=>{
    
    let expenseTable=document.querySelector("table");
    console.log(expenseTable);
    var i;

    let row=expenseTable.insertRow(i);
    i++;
    console.log("row"+row);
    
    let name=row.insertCell(0);
   
    let amount=row.insertCell(1);
    let date=row.insertCell(2);
    
    name.innerHTML=nameInput.value;
    amount.innerHTML=amountInput.value;
    date.innerHTML=dateInput.value;
   
let val=balanceFn(amountInput.value);
// calling balance show  here
console.log("final val "+val);
balanceShow(val);
    



    nameInput.value="";
    amountInput.value="";
    dateInput.value ="";

    
}
// TOTAL CASH FUNCTION 
let totalCashFn=()=>{
    console.log("click");
    
    totalCashp.innerHTML=enterTotalAmount.value;
    console.log("total cash inner html "+totalCashp.innerHTML)
    
}
// BALANCE FUN
let balanceFn=(balanceVal)=>{
    // console.log("total cash "+totalCashInBalance)
    
    
    enterTotalAmount.value=enterTotalAmount.value-balanceVal;
    console.log(enterTotalAmount.value);
    
    


return enterTotalAmount.value;



}
// BALANCE SHOW FUNCTION
let balanceShow=(val)=>{
    
    balancep.innerHTML=val;
    
}
// CALLING TOTALCASH FUNCTION WITHOUT SHOWING IT
let totalCashFnWithoutShow=()=>{
    console.log("click");
    // totalCashp=document.createElement("p");
    // totalCash.appendChild(totalCashp);
    totalCashpText=enterTotalAmount.value;
    console.log("total cash text"+totalCashpText);
    
    return totalCashpText;

}



// ADDING EVENT LISTNERS
enterTotalAmountBtn.addEventListener("click",totalCashFn)

expenseButton.addEventListener("click",addExpense);
