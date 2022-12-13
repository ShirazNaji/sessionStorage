
let inputname = document.querySelector (".name");
let inputemail = document.querySelector (".email");
let inputpassword = document.querySelector (".password");
let selectors = document.querySelector(".selectcolor");
let bodyes = document.querySelector("body");

if(sessionStorage.getItem("bgcolor") ){
         selectors.value = sessionStorage.getItem("bgcolor") ;
         bodyes.style.backgroundColor = sessionStorage.getItem("bgcolor");
    

}

if(sessionStorage.getItem("inputname")){
   
         inputname.value = sessionStorage.getItem("inputname") ;


}

if(sessionStorage.getItem("inputemail")){
   
         inputemail.value = sessionStorage.getItem("inputemail") ;


}

if(sessionStorage.getItem("inputpassword")){
   
         inputpassword.value = sessionStorage.getItem("inputpassword") ;


}





selectors.onchange = function(){
    let v=this.value;
     sessionStorage.setItem("bgcolor",v);
    sessionStorage.setItem("bgcolor",v);
   
    if(sessionStorage.getItem("bgcolor")){
   
         selectors.value = sessionStorage.getItem("bgcolor") ;
         bodyes.style.backgroundColor = sessionStorage.getItem("bgcolor");
    
    
  
}

 
}

inputname.oninput = function(){
    let lname = inputname.value;
    sessionStorage.setItem("inputname",lname);
    
}


inputemail.oninput = function(){
    let lemail = inputemail.value;
    sessionStorage.setItem("inputemail",lemail);
    
}

inputpassword.oninput = function(){
    let lpass = inputpassword.value;
    sessionStorage.setItem("inputpassword",lpass);
    
}

