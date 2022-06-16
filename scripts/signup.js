
function showModal(){
    // document.querySelector("#s_mainbox").classList.toggle("isactive");
   
    window.location.href = "index.html";
}
document.getElementById("closebtn").addEventListener("click",showModal)



document.querySelector("#password-control").innerHTML+='<img id="eye-show" src="./icons/eye.png">';
document.querySelector("#password-control").addEventListener("click",(e)=>{
    console.log(e);
    e.preventDefault();
    let ele=document.querySelector("#pwd");
    let btn=document.querySelector("#password-control");
    if(ele.getAttribute("type")==="password"){
        ele.setAttribute("type","text");
        btn.innerHTML='<img id="eye-hide" src="./icons/eyeslash.png">';
    }else{
        btn.innerHTML='<img id="eye-show" src="./icons/eye.png">';
        ele.setAttribute("type","password");
    }});



let userData = JSON.parse(localStorage.getItem("UserSignCreds")) || [];

let register = (event) =>{
    event.preventDefault();

    let form_data ={
        email: document.getElementById("email").value,
        password:document.getElementById("pwd").value,
        country:document.getElementById("country").value,

    };
    
    userData.push(form_data);
    console.log(userData);
    alert(`Registered sucessfully as ${form_data.email}`);

    localStorage.setItem("UserSignCreds",JSON.stringify(userData));

    localStorage.setItem("sign",JSON.stringify("My Account"))
    
    
    window.location.href = "index.html";
};