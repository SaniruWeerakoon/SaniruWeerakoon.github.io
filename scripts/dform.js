
const btndon = document.getElementById("btn");

const closebtn = document.getElementById("pop-btn");
let popup = document.getElementById("popup");


const todayDate = new Date();
let day = todayDate.getDate();
let month = todayDate.getMonth() + 1;
let year = todayDate.getFullYear();
let dateformat = `${year}-${month}-${day}`;
// console.log("here");
let option = document.getElementsByClassName("radbtn");
// console.log(option.length);


let amount = 0;

for (let i = 0; i < option.length; i++) {
    option[i].addEventListener("click", (evt) => {

        let clicked = evt.target;
        let opt = clicked.value;
        // console.log(opt);

        switch (parseInt(opt)) {
            case 100: amount = 100; break;
            case 500: amount = 500; break;
            case 1000: amount = 1000; break;
            case 2000: amount = 2000; break;
            case 5000: amount = 5000; break;
            case 10000: amount = 10000; break;
        }
    })
}

const reset = document.getElementById("reset");




btndon.addEventListener("click", () => {

    const fName = document.getElementById("fname").value;
    const Address = document.getElementById("address").value;
    const Name = document.getElementById("name").value;
    const Cnum = document.getElementById("cnum").value;
    const date = document.getElementById("expiry").value;
    const CVC = document.getElementById("cvc").value;
    
    let status = Validate(fName,Address,Name, date, CVC, Cnum);
    if (status === 1) {
        reset.click();
        /*diplay msg*/
        window.scrollTo(0, 0); /*scroll to the top of page*/
        popup.classList.add("popup-open");
    }
})

function Validate(fName,Address,name, date, cvc, cnum) {
    if(fName===""){
        alert("Enter your Name");
        return;
    }
    else if(Address===""){
        alert("Enter your Address");
        return;
    }
    else if (cnum.length > 16 || cnum.length < 15) {
        alert("Invalid Card Number");
        return;
    }
    else if (date <= dateformat) {
        alert("Enter a Valid Date");
        return;
    }
    else if (cvc.length > 4 || cvc.length < 3) {
        alert("Enter a Valid CVV / CVC");
        return;
    }
    else if (name === "") {
        alert("Card Name is Required");
        return;
    }
    else if (amount === 0) {
        alert('Donation cannot be Zero');
        return;
    }
    return 1;
}

closebtn.addEventListener("click", () => {
    popup.classList.remove("popup-open");

})