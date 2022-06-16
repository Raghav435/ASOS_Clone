document.querySelector("form").addEventListener("submit", myfun)


//let checkout=JSON.parse(localStorage.getItem("addresss"))

function myfun(event) {
    event.preventDefault()
    //console.log("hello")

    let obj1 = {
     firstname : document.querySelector(".firstname").value,
      lastname :document.querySelector(".lastname").value,
      country: document.querySelector(".country").value,
     address1 : document.querySelector(".address1").value,
     address2 : document.querySelector(".address2").value,
     code : document.querySelector(".code").value,
     city: document.querySelector(".city").value,
     mobileno: document.querySelector(".mob").value,
     email : document.querySelector(".email").value,
    }
    console.log(obj1)
   //checkout.push(obj1)

   localStorage.setItem("add",JSON.stringify(obj1))
   window.location.href = "payment.html"

}