const btn = document.getElementById('calculate') ;


btn.addEventListener('click',function(){
    let height=document.querySelector('#height').value;
    let weight=document.querySelector('#weight').value;
const result = document.getElementById('output');


if(height==' '|| weight==' '){
alert('please fill out the input space');
return;
}

height = height / 100
let BMI = (weight/ (height*height));
BMI = BMI.toFixed(2);
document.querySelector('#result').innerHTML = BMI;

});
