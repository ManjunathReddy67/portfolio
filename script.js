var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");
// var sidemenu =document.getElementsById("sidemenu");
var side=document.querySelector("#sidemenu")
// function onclick(onclick("tablinks),{

// })

function opentab(tabname){
        
    for(var tablink of tablinks){
    tablink.classList.remove("active-link");
    }
    for(var tabcintent of tabcontents){
        tabcintent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    console.log(document.getElementById(tabname));
    document.getElementById(tabname).classList.add("active-tab");
}

console.log(side);
function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}

  const scriptURL = 'https://script.google.com/macros/s/AKfycbwD3DfIOPs1RJO8RhxxuELsWGGwuBZprdCohxHRpjAl_l4yovXuRwN1mvrCNn3oEtzf8w/exec';
  const form = document.forms['submit-to-google-sheet']
    const msg=document.getElementById("msg")
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {msg.innerText="Your response have been recorded successfully"
        setTimeout(function(){
            msg.innerText=""},5000)
            form.reset();
        })
      
      .catch(error => console.error('Error!', error.message))
  })




// function opentab(tabname){
    
//     Event.currentTarget.classList.remove("tab-contents");
// }






