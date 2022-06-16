function showModal(){
    window.location.href = "index.html";
    // document.querySelector("#s_mainbox").classList.toggle("isactive");
}

document.querySelector("#password-control").innerHTML+='<img id="eye-show" src="./icons/eye.png">';
document.querySelector("#password-control").addEventListener("click",(e)=>{
    console.log(e);
    e.preventDefault();
    let ele=document.querySelector("#pwdlogin");
    let btn=document.querySelector("#password-control");
    if(ele.getAttribute("type")==="password"){
        ele.setAttribute("type","text");
        btn.innerHTML='<img id="eye-hide" src="./icons/eyeslash.png">';
    }else{
        btn.innerHTML='<img id="eye-show" src="./icons/eye.png">';
        ele.setAttribute("type","password");
    }});


    
let regdData = JSON.parse(localStorage.getItem("UserSignCreds"));
let login = (event) =>{
    event.preventDefault();
    enteredEmail = document.getElementById("emaillogin").value;
    enteredPassword = document.getElementById("pwdlogin").value;
    //console.log(userdata);
    if(enteredEmail=="" && enteredPassword==""){
        alert("Invalid Credentials");
    }
    else{
          var check = false;

          for(var i=0; i < regdData.length; i++){
              if(regdData[i].email == enteredEmail &&  regdData[i].password == enteredPassword)
              {
                  check=true;
              }
          }
          if(check){
              alert("Login Successfull");
              localStorage.setItem("sign",JSON.stringify("My Account"))
              window.location.href = "index.html";
          }
          else{
              alert("Login Failed! Invalid Credentials");
              document.querySelector("#emaillogin").value="";
              document.querySelector("#passwordlogin").value=""
          }
    }
};
