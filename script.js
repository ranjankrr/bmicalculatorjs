let outBtn = document.getElementById("out-btn");
let btn = document.getElementById("btn");
  btn.addEventListener("click", ()=>{
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    let bmiCalculate =(weight/(height/100)**2).toFixed(2);

    if(bmiCalculate < 18.9){
        outBtn.textContent =`Your BMI is ${bmiCalculate} UnderWidth`;
     }
     else if(bmiCalculate >= 18.9 && bmiCalculate < 25.9){
        outBtn.textContent =`Your BMI is ${bmiCalculate} Normal`;
     }
     else if(bmiCalculate >= 25.9 && bmiCalculate < 35.9){
        outBtn.textContent =`Your BMI is ${bmiCalculate} Overweight`;
     }
     else{
        outBtn.textContent =`Your BMI is ${bmiCalculate} Obese`; 
     }
    document.getElementById("height").value="";
    document.getElementById("weight").value="";
  })
