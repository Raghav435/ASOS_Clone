let paydata = JSON.parse(localStorage.getItem("add"))
console.log(paydata)


    let div = document.createElement("div")
    div.setAttribute("class", "div1")

    let name1 = document.createElement("h4")
    name1.innerText = paydata.firstname
    let surname = document.createElement("h4")
    surname.innerText = paydata.lastname

    let div2 = document.createElement("div")
    div2.setAttribute("class", "div2")
    let address1 = document.createElement("p")
    address1.innerText = `${paydata.address1},`
    // address1.setAttribute("class","address")
    let address2 = document.createElement("p")
    address2.innerText = paydata.address2

    let div3 = document.createElement("div")
    div3.setAttribute("class", "div3")
    let city = document.createElement("p")
    city.innerText = ` ${paydata.city} ,`
    let code = document.createElement("p")
    code.innerText = paydata.code

    let div4 = document.createElement("div")
    div4.setAttribute("class", "div4")
    let country = document.createElement("p")
    country.innerText = paydata.country
    // country.setAttribute("class","country")

    // let maindiv = document.createElement(div)


    div.append(name1, surname)
    div2.append(address1, address2)
    div3.append(city, code)
    div4.append(country)

    // maindiv.append(div,div2,div3,div4)

    document.querySelector(".container").append(div, div2, div3, div4)

document.querySelector("form").addEventListener("submit", paymentfun)

function paymentfun() {
    event.preventDefault()
    console.log("hello")

    // let cardno = 1234567891234567;
    // let expiry = "December 2022"
    // let cvv = 123;
    // let name2 = "Prem Jadhav"


    let enteredcardnumber = document.querySelector("#cardno").value
    let enteredcvv = document.querySelector("#cvv").value
    let enteredexpiry = document.querySelector("#start").value
    let enteredname1 = document.querySelector("#name").value

    // credentials.push(obj)
    // // console.log(credentials)
    // localStorage.setItem("creds",JSON.stringify(credentials))
    // console.log(credentials)
    if (enteredcardnumber.length == 16 && enteredcvv.length == 3 && enteredname1.length >0) {
        alert("Payment Successful");
        alert("Order Placed")
        let x=[];
        localStorage.setItem("cart",JSON.stringify(x))
        window.location.href = "index.html"
    }
    else {
        alert("error")
    }

}
