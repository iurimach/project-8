var karusel1=  document.querySelector('#karusel1')
var karusel2=  document.querySelector('#karusel2')
var karusel3=  document.querySelector('#karusel3')


var btt1 =document.querySelector('#btt1')
var btt2 =document.querySelector('#btt2')
var btt3 =document.querySelector('#btt3')
var btt4 =document.querySelector('#btt4')


var price= document.querySelector('#price')
var size = document.querySelector('#size')
var btmore = document.querySelector('#btmore')
var boxwraper2 = document.querySelector('#boxwraper2') 
var boxwraper3 = document.querySelector('#boxwraper3') 
var boxwraper4 = document.querySelector('#boxwraper4') 
var boxwraper5 = document.querySelector('#boxwraper5') 
var btmorediv= document.querySelector('#btmorediv')
var animation2=document.querySelector("#animation2")
var nav=document.querySelector("#ullia")
  var nav2=document.querySelector("#ulli2")
  var nav3=document.querySelector("#ulli3")
  var boxwraperh2=document.querySelector("#boxwraperh2")
  var anim=document.querySelector("#anim")

  var root=document.querySelector("#root")
  root.style.display="none";

  function openpage(){
    
    root.style.display="block";
    var rootheader=document.querySelector("#rootheader").style.marginTop = "0px";
    var openbox=document.querySelector("#openbox")
    openbox.style.display="none"
    var checkbox=document.querySelector("#checkbox").style.display="none"
    let label1=document.querySelector("#label1").style.display="none"
 

  }
  
   
var checkbox =document.querySelector("#checkbox")
  checkbox.addEventListener('change', (event) =>{
        if (event.target.checked){
          openbox.style.display="inline-block"
          openbox.disabled = false
          openbox.style.opacity= 1;
          console.log("cheked")
       
         }
        else{
          openbox.disabled = true                      
        }
    })
 
 

var openbox=document.querySelector("#openbox")

function darck(){
  
  if (document.body.style.backgroundColor = "black"){
    document.body.style.color ="white"
  }
  
  
  var boxwraperh2=document.querySelector("#boxwraperh2")
  
  

  var nav=document.querySelector("#ullia")
  var nav2=document.querySelector("#ulli2")
  var nav3=document.querySelector("#ulli3")
  var anim=document.querySelector("#anim")

  boxwraperh2.style.color="white"
  nav.style.color="white"
  nav2.style.color="white"
  nav3.style.color="white"
  anim.style.color="white"

  
  

}
function white(){
  
  if (document.body.style.backgroundColor = "white"){
    document.body.style.color = "black"
    nav.style.color="black"
    nav2.style.color="black"
    nav3.style.color="black"
    anim.style.color="black"
    boxwraperh2.style.color="black"
  }
  

}


function bt5() {
    boxwraper2.style.display= "flex"
    boxwraper3.style.display= "flex"
    boxwraper4.style.display= "flex"
    boxwraper5.style.display= "flex"
    animation2.style.display = "none"
    var btt5= document.getElementById("btt5").style.display = "none"
}


function bt1(){
    
     karusel1.style.visibility = "visible"
     karusel2.style.visibility = "hidden"
     karusel3.style.visibility = "hidden"
     karusel4.style.visibility = "hidden"

  btt1.style.display="none"
  btt2.style.display= "block"
  btt3.style.display="none"
  btt4.style.display="none"

  price.textContent = "130$"
  size.textContent= " Large 2L"
}


function bt2(){
    karusel2.style.visibility = "visible"
    karusel1.style.visibility = "hidden"
    karusel3.style.visibility = "hidden"
    karusel4.style.visibility = "hidden"

    btt2.style.display="none"
    btt3.style.display= "block"
    btt4.style.display="none"
    btt1.style.display="none"
    price.textContent = "150$"
    size.textContent= " Large 3L"
  }
function bt3(){
    karusel4.style.visibility = "hidden"
    karusel2.style.visibility = "hidden"
  karusel1.style.visibility = "hidden"
  karusel3.style.visibility = "visible"


  btt4.style.display= "block"
  btt1.style.display="none"
  btt2.style.display="none"
  btt3.style.display="none"
  price.textContent = "300$"
  size.textContent= " Large XL"
}

function bt4(){
    karusel2.style.visibility = "hidden"
  karusel1.style.visibility = "hidden"
  karusel3.style.visibility = "hidden"
  karusel4.style.visibility = "visible"


  btt1.style.display= "block"
  btt2.style.display="none"
  btt3.style.display="none"
  btt4.style.display="none"
  price.textContent = "230$"
  size.textContent= "Large mine"
}

