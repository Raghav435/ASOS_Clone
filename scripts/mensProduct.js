// let url = https://mydata12.herokuapp.com/api/MensData;


let quickbtn=(btn)=>{
    
    btn.style.display="block"
}
let btnmove=(btn)=>{

    btn.style.display="none"
}

//--------------set Item in localstorage----------------->

// let myData = JSON.parse(localStorage.getItem("data")) || [];


let data=JSON.parse(localStorage.getItem("cart"))||[];
let setdata=(ele)=>{
  data.push(ele)
//   alert("Item Added to Cart")
    localStorage.setItem("cart",JSON.stringify(data))
    let x=JSON.parse(localStorage.getItem("cart"))||[]
    if(x.length==1){
        window.location.reload()
    }
    document.getElementById("navlen").innerText=x.length;
}


let getData = async () => {

    try{
        let res = await fetch("https://mydata12.herokuapp.com/api/MensData");

        let data = await res.json();
        console.log(data);
        append(data);
    
        // return data;

    }catch(err){
        console.log('err',err)
    }

};
getData();


let append = (data) =>{
    
    data.forEach((ele)=>{

    let container = document.getElementById('mensData');

    let box = document.createElement("div");
    box.setAttribute("class","dataDiv");

    let p = document.createElement("p");
    p.innerText = ele._3J74XsK;

    let img = document.createElement("img");
    img.setAttribute("class","mendataImg")
    img.src = ele._2FC97Nq;

    span=document.createElement("span")
    span.setAttribute("class","span")
    span.innerHTML="<span>&#9825</span>"

    btn = document.createElement("button")
    btn.setAttribute("id","Mcsbtn")
    btn.innerText="QUICK SHOP"


    btn.addEventListener("click",()=>{
        setdata(ele)
    })

    box.addEventListener("mouseover",()=>{
        quickbtn(btn)
    })
    box.addEventListener("mouseout",()=>{
        btnmove(btn)
    })


    let price = document.createElement("p");
    price.innerText = ele._16nzq18;

    box.append(img, span, btn,  p, price);
    container.append(box);

//     ele.price.push(myData);

//     localStorage.setItem('data',JSON.stringify(myData));
});
};

// window.addEventListener("load",function(){
//     append(data)
// })

// ----------------------Sorting-------------------------------------->>


let sorting=()=>{
    let select=document.getElementById("sort").value;
    console.log(select)
    if(select==="LH"){
        data.sort((a,b)=>(+a.price)-(+b.price))
        console.log(data)
        append(data)
    }
    if(select==="HL"){
        data.sort((a,b)=>(+b.price)-(+a.price))
        console.log(data)
        append(data)
    }
    
    }
    document.getElementById("sort").onchange=()=>{sorting()}


// function handlePriceSort() {
//     var selected = document.querySelector("#sort").value;
//     console.log(selected);
//     if (selected == "HL") {
//       data.sort(function (a, b) {
//         return b.price - a.price;
//       });
//       append(data);
      
//     }
//     console.log(data);

//     if (selected == "LH") {
//       data.sort(function (a, b) {
//         return a.price - b.price;
//       });
//       append(data);
//     }
//     console.log(data);
//   }
//   document.getElementById("sort").onchange=()=>{handlePriceSort()}