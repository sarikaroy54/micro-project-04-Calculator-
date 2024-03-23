const input = document.querySelector('.user-input');
const keys = document.querySelectorAll('.key');
const delete_tab = document.querySelector('.delete-key');
const reset_tab = document.querySelector('.reset-key');
const answer = document.querySelector('.equal-key');


let isDecimal = false;
let islastOperator = false; 

reset_tab.addEventListener('click', () => {
  input.value = " ";
})

answer.addEventListener('click', () => {
  let formattedString = input.value.replace('x', '*');
  let ans = eval(formattedString);
  input.value = ans;
  console.log(ans);
})
delete_tab.addEventListener('click', () => {
  input.value = input.value.substring(0, input.value.length-1); 
})

let arraykey = Array.from(keys);
for(let i=0; i<=arraykey.length-1; i++){
  arraykey[i].addEventListener('click', (event) => {
    let val = event.target.innerHTML;
    console.log(event.target.innerHTML); 
    if(val==='.' && isDecimal===true){  
      console.log("both condtn satsfy, so do nthng");
      return;
    }
    if("+-x/".includes(val)){
      if(islastOperator === true){ 
        console.log("2 oprators contiously")
        let previousval = input.value;
        let newval = previousval.substring(0, input.value.length-1)+val;
        input.value = newval;
        return;
      }
      islastOperator=true;
      isDecimal=false;
    }
    else{
      islastOperator=false;
      if(val==='.'){
        isDecimal=true; 
        console.log(" dot is pressed");
        console.log(" isdecimal true");
      }
    }
      input.value+= val;
    
  }); 
}

