const formTriangle = document.querySelector('#formTriangle');
const inputAngles = document.querySelectorAll('.inputAngle');
const outputDiv= document.querySelector('#isTriangle');

let anglesJS=[];


document.addEventListener('submit', checkTriangleHandler);

function checkTriangleHandler(event){
    event.preventDefault();

    for(i=0; i<inputAngles.length; i++){
        anglesJS[i] = Number(inputAngles[i].value);
    }
    
    let sum=0;
    anglesJS.map((angle)=>{
        sum=sum+angle;
    })

    if(sum ===180){
        outputDiv.innerText = "Yay! The angles inserted by you make a Triangle";
    }
    else{
        outputDiv.innerText = "Aw snap! The angles inserted by you do not a Triangle";
    }
}