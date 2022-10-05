

const userp=document.querySelector(".cmt-p");
const commshow=document.querySelector(".commentshow");





 function handlesubmit (){

    const field=document.querySelector(".cmtsss");
const userinput=document.querySelector(".cmt-input");
const inputvalue=userinput.value;
const usertext=document.querySelector("#textareas");
const descvalue=usertext.value;
const indiv=document.createElement("div");
indiv.classList.add("cmtshow");
indiv.classList.add("animate");


indiv.innerHTML=`<h3>${inputvalue}</h3>
<p>${descvalue}</p>
`
commshow.appendChild(indiv);
 }




