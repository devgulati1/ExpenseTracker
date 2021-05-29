let expenseButton=document.querySelector(".add-expense-btn");
let nameInput=document.querySelector(".name");
let amountInput=document.querySelector(".amount");
let dateInput=document.querySelector(".date");


let addExpense=()=>{
    console.log("click");
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
    nameInput.value="";
    amountInput.value="";
    dateInput.value ="";

    
}
expenseButton.addEventListener("click",addExpense);
