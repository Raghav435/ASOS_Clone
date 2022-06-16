import navbar from "../components/navbar.js"

document.getElementById('Navbody').innerHTML = navbar();

let gotoindex=()=>{
    window.location.href="index.html"

}
document.getElementById("navimg").addEventListener("click",gotoindex);


let mySale=()=>{
    let x=document.getElementById("sale")
    // x.style.display="block"
    x.style.display="flex"

    document.getElementById("newIn").style.display="none"
    document.getElementById("clothing").style.display="none"
    document.getElementById("dress").style.display="none"
    document.getElementById("shoes").style.display="none"
    document.getElementById("Sportswear").style.display="none"
    document.getElementById("accessories").style.display="none"
    document.getElementById("summer").style.display="none"
    document.getElementById("trendingnow").style.display="none"
    document.getElementById("topshow").style.display="none"
    document.getElementById("facebody").style.display="none"
    document.getElementById("brands").style.display="none"
    document.getElementById("outlet").style.display="none"
}
let hideSale=()=>{
   
    let x=document.getElementById("sale")
    x.style.display="none"
}

let mynewIn= ()=>{

    document.getElementById("clothing").style.display="none"
    document.getElementById("sale").style.display="none"
    document.getElementById("dress").style.display="none"
    document.getElementById("shoes").style.display="none"
    document.getElementById("Sportswear").style.display="none"
    document.getElementById("accessories").style.display="none"
    document.getElementById("summer").style.display="none"
    document.getElementById("trendingnow").style.display="none"
    document.getElementById("topshow").style.display="none"
    document.getElementById("facebody").style.display="none"
    document.getElementById("brands").style.display="none"
    document.getElementById("outlet").style.display="none"
    let x=document.getElementById("newIn")
    // x.style.display="block"
    x.style.display="flex"
}

let hidenewIn=()=>{
    let x=document.getElementById("newIn")
    x.style.display="none"
}

let myclothing= ()=>{
    document.getElementById("sale").style.display="none"
    document.getElementById("newIn").style.display="none"
    document.getElementById("dress").style.display="none"
    document.getElementById("shoes").style.display="none"
    document.getElementById("Sportswear").style.display="none"
    document.getElementById("accessories").style.display="none"
    document.getElementById("summer").style.display="none"
    document.getElementById("trendingnow").style.display="none"
    document.getElementById("topshow").style.display="none"
    document.getElementById("facebody").style.display="none"
    document.getElementById("brands").style.display="none"
    document.getElementById("outlet").style.display="none"


    let x=document.getElementById("clothing")
    // x.style.display="block"
    x.style.display="flex"
}

let hideclothing=()=>{
    let x=document.getElementById("clothing")
    x.style.display="none"
}

let mydress= ()=>{
    document.getElementById("sale").style.display="none"
    document.getElementById("clothing").style.display="none"
    document.getElementById("shoes").style.display="none"
    document.getElementById("Sportswear").style.display="none"
    document.getElementById("accessories").style.display="none"
    document.getElementById("summer").style.display="none"
    document.getElementById("trendingnow").style.display="none"
    document.getElementById("topshow").style.display="none"
    document.getElementById("facebody").style.display="none"
    document.getElementById("brands").style.display="none"
    document.getElementById("outlet").style.display="none"


    let x=document.getElementById("dress")
    // x.style.display="block"
    x.style.display="flex"
}

let hidedress=()=>{
        let x=document.getElementById("dress")
        x.style.display="none"
}

let myshoe=()=>{

    document.getElementById("sale").style.display="none"
    document.getElementById("newIn").style.display="none"
    document.getElementById("clothing").style.display="none"
    document.getElementById("dress").style.display="none"
    document.getElementById("Sportswear").style.display="none"
    document.getElementById("accessories").style.display="none"
    document.getElementById("summer").style.display="none"
    document.getElementById("trendingnow").style.display="none"
    document.getElementById("topshow").style.display="none"
    document.getElementById("facebody").style.display="none"
    document.getElementById("brands").style.display="none"
    document.getElementById("outlet").style.display="none"

    let x=document.getElementById("shoes")
    // x.style.display="block"
    x.style.display="flex"
}
let hideshoe=()=>{
   
    let x=document.getElementById("shoes")
    x.style.display="none"
}

let mysportswear=()=>{
    document.getElementById("sale").style.display="none"
    document.getElementById("newIn").style.display="none"
    document.getElementById("clothing").style.display="none"
    document.getElementById("dress").style.display="none"
    document.getElementById("shoes").style.display="none"
    document.getElementById("accessories").style.display="none"
    document.getElementById("summer").style.display="none"
    document.getElementById("trendingnow").style.display="none"
    document.getElementById("topshow").style.display="none"
    document.getElementById("facebody").style.display="none"
    document.getElementById("brands").style.display="none"
    document.getElementById("outlet").style.display="none"

    let x=document.getElementById("Sportswear")
    // x.style.display="block"
    x.style.display="flex"
}
let hidesportwear=()=>{
   
    let x=document.getElementById("Sportswear")
    x.style.display="none"
}

let myaccessories=()=>{

    document.getElementById("sale").style.display="none"
    document.getElementById("newIn").style.display="none"
    document.getElementById("clothing").style.display="none"
    document.getElementById("dress").style.display="none"
    document.getElementById("shoes").style.display="none"
    document.getElementById("Sportswear").style.display="none"
    document.getElementById("summer").style.display="none"
    document.getElementById("trendingnow").style.display="none"
    document.getElementById("topshow").style.display="none"
    document.getElementById("facebody").style.display="none"
    document.getElementById("brands").style.display="none"
    document.getElementById("outlet").style.display="none"

    let x=document.getElementById("accessories")
    // x.style.display="block"
    x.style.display="flex"
}
let hideaccessories=()=>{
   
    let x=document.getElementById("accessories")
    x.style.display="none"
}

let mysummer=()=>{

    document.getElementById("sale").style.display="none"
    document.getElementById("newIn").style.display="none"
    document.getElementById("clothing").style.display="none"
    document.getElementById("dress").style.display="none"
    document.getElementById("shoes").style.display="none"
    document.getElementById("Sportswear").style.display="none"
    document.getElementById("accessories").style.display="none"
    document.getElementById("trendingnow").style.display="none"
    document.getElementById("topshow").style.display="none"
    document.getElementById("facebody").style.display="none"
    document.getElementById("brands").style.display="none"
    document.getElementById("outlet").style.display="none"

    let x=document.getElementById("summer")
    // x.style.display="block"
    x.style.display="flex"
}
let hidesummer=()=>{
   
    let x=document.getElementById("summer")
    x.style.display="none"
}

let mytrendingnow=()=>{

    document.getElementById("sale").style.display="none"
    document.getElementById("newIn").style.display="none"
    document.getElementById("clothing").style.display="none"
    document.getElementById("dress").style.display="none"
    document.getElementById("shoes").style.display="none"
    document.getElementById("Sportswear").style.display="none"
    document.getElementById("accessories").style.display="none"
    document.getElementById("summer").style.display="none"
    document.getElementById("topshow").style.display="none"
    document.getElementById("facebody").style.display="none"
    document.getElementById("brands").style.display="none"
    document.getElementById("outlet").style.display="none"

    let x=document.getElementById("trendingnow")
    // x.style.display="block"
    x.style.display="flex"
}
let hidetrendingnow=()=>{
   
    let x=document.getElementById("trendingnow")
    x.style.display="none"
}

let mytopshop=()=>{

    document.getElementById("sale").style.display="none"
    document.getElementById("newIn").style.display="none"
    document.getElementById("clothing").style.display="none"
    document.getElementById("dress").style.display="none"
    document.getElementById("shoes").style.display="none"
    document.getElementById("Sportswear").style.display="none"
    document.getElementById("accessories").style.display="none"
    document.getElementById("summer").style.display="none"
    document.getElementById("trendingnow").style.display="none"
    document.getElementById("facebody").style.display="none"
    document.getElementById("brands").style.display="none"
    document.getElementById("outlet").style.display="none"

    let x=document.getElementById("topshow")
    // x.style.display="block"
    x.style.display="flex"
}
let hidetopshop=()=>{
   
    let x=document.getElementById("topshow")
    x.style.display="none"
}

let myfacebody=()=>{

    document.getElementById("sale").style.display="none"
    document.getElementById("newIn").style.display="none"
    document.getElementById("clothing").style.display="none"
    document.getElementById("dress").style.display="none"
    document.getElementById("shoes").style.display="none"
    document.getElementById("Sportswear").style.display="none"
    document.getElementById("accessories").style.display="none"
    document.getElementById("summer").style.display="none"
    document.getElementById("trendingnow").style.display="none"
    document.getElementById("topshow").style.display="none"
    document.getElementById("brands").style.display="none"
    document.getElementById("outlet").style.display="none"

    let x=document.getElementById("facebody")
    // x.style.display="block"
    x.style.display="flex"
}
let hidefacebody=()=>{
   
    let x=document.getElementById("facebody")
    x.style.display="none"
}

let mybrands=()=>{

    document.getElementById("sale").style.display="none"
    document.getElementById("newIn").style.display="none"
    document.getElementById("clothing").style.display="none"
    document.getElementById("dress").style.display="none"
    document.getElementById("shoes").style.display="none"
    document.getElementById("Sportswear").style.display="none"
    document.getElementById("accessories").style.display="none"
    document.getElementById("summer").style.display="none"
    document.getElementById("trendingnow").style.display="none"
    document.getElementById("topshow").style.display="none"
    document.getElementById("facebody").style.display="none"
    document.getElementById("outlet").style.display="none"

    let x=document.getElementById("brands")
    // x.style.display="block"
    x.style.display="flex"
}
let hidebrands=()=>{
   
    let x=document.getElementById("brands")
    x.style.display="none"
}

let myoutlets=()=>{

    document.getElementById("sale").style.display="none"
    document.getElementById("newIn").style.display="none"
    document.getElementById("clothing").style.display="none"
    document.getElementById("dress").style.display="none"
    document.getElementById("shoes").style.display="none"
    document.getElementById("Sportswear").style.display="none"
    document.getElementById("accessories").style.display="none"
    document.getElementById("summer").style.display="none"
    document.getElementById("trendingnow").style.display="none"
    document.getElementById("topshow").style.display="none"
    document.getElementById("facebody").style.display="none"
    document.getElementById("brands").style.display="none"

    let x=document.getElementById("outlet")
    // x.style.display="block"
    x.style.display="flex"
}
let hideoutlets=()=>{
   
    let x=document.getElementById("outlet")
    x.style.display="none"
}

let myacc=()=>{

    document.getElementById("sale").style.display="none"
    document.getElementById("newIn").style.display="none"
    document.getElementById("clothing").style.display="none"
    document.getElementById("dress").style.display="none"
    document.getElementById("shoes").style.display="none"
    document.getElementById("Sportswear").style.display="none"
    document.getElementById("accessories").style.display="none"
    document.getElementById("summer").style.display="none"
    document.getElementById("trendingnow").style.display="none"
    document.getElementById("topshow").style.display="none"
    document.getElementById("facebody").style.display="none"
    document.getElementById("brands").style.display="none"
    document.getElementById("outlet").style.display="none"

    let x=document.getElementById("acc")
    // x.style.display="block"
    x.style.display="flex"

}
let hideacc =()=>{
    let x=document.getElementById("acc")
    x.style.display="none"

}

let hidediv = () =>{

    document.getElementById("sale").style.display="none"
    document.getElementById("newIn").style.display="none"
    document.getElementById("clothing").style.display="none"
    document.getElementById("dress").style.display="none"
    document.getElementById("shoes").style.display="none"
    document.getElementById("Sportswear").style.display="none"
    document.getElementById("accessories").style.display="none"
    document.getElementById("summer").style.display="none"
    document.getElementById("trendingnow").style.display="none"
    document.getElementById("topshow").style.display="none"
    document.getElementById("facebody").style.display="none"
    document.getElementById("brands").style.display="none"
    document.getElementById("outlet").style.display="none"
    document.getElementById("acc").style.display="none"
}


document.getElementById("navSale").addEventListener("mouseover",mySale);
document.getElementById("sale").addEventListener("mouseleave",hideSale);

document.getElementById("navNewIn").addEventListener("mouseover",mynewIn);
document.getElementById("newIn").addEventListener("mouseleave",hidenewIn);

document.getElementById("navClothing").addEventListener("mouseover",myclothing);
document.getElementById("clothing").addEventListener("mouseleave",hideclothing);

document.getElementById("navDressing").addEventListener("mouseover",mydress);
document.getElementById("dress").addEventListener("mouseleave",hidedress);

document.getElementById("navShoes").addEventListener("mouseover",myshoe);
document.getElementById("shoes").addEventListener("mouseleave",hideshoe);

document.getElementById("navSportwear").addEventListener("mouseover",mysportswear);
document.getElementById("Sportswear").addEventListener("mouseleave",hidesportwear);

document.getElementById("navAccessories").addEventListener("mouseover",myaccessories);
document.getElementById("accessories").addEventListener("mouseleave",hideaccessories);

document.getElementById("navSummer").addEventListener("mouseover",mysummer);
document.getElementById("summer").addEventListener("mouseleave",hidesummer);

document.getElementById("navTrendingnow").addEventListener("mouseover",mytrendingnow);
document.getElementById("trendingnow").addEventListener("mouseleave",hidetrendingnow);

document.getElementById("navTopshow").addEventListener("mouseover",mytopshop);
document.getElementById("topshow").addEventListener("mouseleave",hidetopshop);

document.getElementById("navFacebody").addEventListener("mouseover",myfacebody);
document.getElementById("facebody").addEventListener("mouseleave",hidefacebody);

document.getElementById("navBrands").addEventListener("mouseover",mybrands);
document.getElementById("brands").addEventListener("mouseleave",hidebrands);

document.getElementById("navOutlets").addEventListener("mouseover",myoutlets);
document.getElementById("outlet").addEventListener("mouseleave",hideoutlets);






