let flag = true;
function on(){
  let test2 = document.getElementsByClassName('button'); 
  let test6 = document.getElementsByClassName('container');
  if(flag){
             
  for (let i = 0; i < test2.length; i++){     
  test2[i].classList.add("on");
  }
  test6[0].setAttribute('class','container');
    flag = false;          
}else{
  
  for (let i = 0; i < test2.length; i++){     
  test2[i].classList.remove("on");
  
}           
  test6[0].setAttribute('class', 'container conacc');
   flag = true;
}
}

function off(){
let test = document.getElementsByClassName('planet');   
let test2 = document.getElementsByClassName('button');
let test3 = document.getElementsByClassName('info');
let test4 = document.getElementsByClassName('start');
let test5 = document.getElementsByClassName('uni'); 
let test6 = document.getElementsByClassName('container'); 
  
for (let i = 0; i < test.length; i++){

 test[i].classList.remove("active");
}
for (let i = 0; i < test2.length; i++){     
  test2[i].classList.remove("act")
  
}
for (let i = 0; i < test3.length; i++){     
  test3[i].classList.remove("show")
  
}
for (let i = 0; i < test5.length; i++){     
  test5[i].classList.remove("acc")
}
test4[0].setAttribute('class','start');
test6[0].setAttribute('class','container');
}

function call(e){
let test = document.getElementsByClassName('planet');   
let test2 = document.getElementsByClassName('button');
let test3 = document.getElementsByClassName('info');
let test4 = document.getElementsByClassName('start');
let test5 = document.getElementsByClassName('uni');
let test6 = document.getElementsByClassName('container'); 

test4[0].setAttribute('class', 'start cover');        
test6[0].setAttribute('class', 'container conacc');       
test3[e].setAttribute('class', 'info show');  
  
if(e != 4 && e != 8){             
test[e].classList.add("active");
test2[e].classList.add("act");
   test5[e].classList.add("acc"); 

}else{
test[e].classList.add("active");
test2[e].classList.add("act");
   test5[e].classList.add("acc");  
     test5[e-1].classList.add("acc"); 
  }
}