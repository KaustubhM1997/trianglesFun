const areaCalBlock = document.querySelectorAll(".areaCalBlock");
const areaShowHere = document.querySelectorAll(".areaShowHere");

const inputInOption1 = document.querySelectorAll(".inputInOption1");
const inputInOption2 = document.querySelectorAll(".inputInOption2");

const errorDiv= document.querySelector(".error");

const radios = document.forms[0].elements;

radios[0].addEventListener('change', ()=>{
    showOrHideBlock(areaCalBlock, 0, 1, 2);
})
radios[1].addEventListener('change', ()=>{
    showOrHideBlock(areaCalBlock, 1, 0, 2);
})

function showOrHideBlock(blockDivs, showDivIndex, hideDivIndex1, hideDivIndex2){
    blockDivs[showDivIndex].style.display = "block";
    blockDivs[hideDivIndex1].style.display = "none";
    blockDivs[hideDivIndex2].style.display = "none";
}


document.forms[1].addEventListener('submit', (e)=>{
    e.preventDefault();
    const b= Number(inputInOption1[0].value)
    const h= Number(inputInOption1[1].value)
    areaShowHere[0].innerText = ((b*h)/2).toFixed(2)

}, false)

document.forms[2].addEventListener('submit',(e)=>{
    e.preventDefault();
    errorDiv.style.display = "none";
    const a= Number(inputInOption2[0].value)
    const b= Number(inputInOption2[1].value)
    const c= Number(inputInOption2[2].value)

    if((a+b)>c && (b+c)>a && (a+c)>b){
    const s=(a+b+c)/2;
    areaShowHere[1].innerText = Math.sqrt(s*(s-a)*(s-b)*(s-c)).toFixed(2);
    }
    else{
        errorDiv.style.display = "block";
    }  
}, false )
