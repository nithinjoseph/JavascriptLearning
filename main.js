let haveDot = false;
let operationE1= document.querySelectorAll(".operation");
let history = document.getElementById("history");
let firstNum = null;
let operaterEle= null;
let secondNum=null;
let disp =null;
//Displaying
const display=(val)=>{
  if (val==='.'&& !haveDot){
    haveDot=true;
  }else if(val==='.'&& haveDot){
    return;
  }
  document.getElementById("result").value +=val;
  document.getElementById("history").innerHTML+= val;
 }
 //Clearing
const clearCall = () => {
  document.getElementById("result").value="";
  document.getElementById("history").innerHTML="";
 }

 //Operator Detection
 operationE1.forEach(opertaion=>{
  opertaion.addEventListener("click", (e)=>{
    operaterEle= e.target.value;
    firstNum =document.getElementById("result").value.slice(0, -1);
    document.getElementById("result").value="";
    haveDot=false;
  })
 });


 //Calculating
const solve =()=>{
    secondNum = document.getElementById("result").value;
    console.log(`${firstNum} ${operaterEle} ${secondNum} `);

    switch(operaterEle){
        case "+":
          document.getElementById("result").value= firstNum + secondNum;
          alert("addition");
          break;
        case "-":
          document.getElementById("result").value= firstNum - secondNum;
          alert("Substarction");
          break;
        case "*":
          document.getElementById("result").value= firstNum * secondNum;
          alert("Multiplication");
          break;
        case "/":
        document.getElementById("result").value= firstNum / secondNum;
        alert("Division");
        break;  
    }

}



