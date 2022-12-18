
let plus = document.getElementsByClassName('next');
let minus = document.getElementsByClassName('prev');

let OrderOut = document.getElementsByClassName("orderOut");

//global variables

let totalCost = 0;


let gCost1 = 0;
let gCost2 = 0;
let gCost3 = 0;
let gCost4 = 0;
let gCost5 = 0;
let gCost = 0;
let extra = 0;

let total = 0;

let duration = "3 Hours ";
let Timechnge = document.getElementById("timechng");

let num1 = parseInt(document.getElementById("out1").innerText);
let num3 = parseInt(document.getElementById("out3").innerText);
let num2 = parseInt(document.getElementById("out2").innerText);
let num4 = parseInt(document.getElementById("out4").innerText);
let num5 = parseInt(document.getElementById("out5").innerText);

const btnAdd = document.getElementById("add");
const btnPlace = document.getElementById("place");
const TempOut = document.getElementById("tempOut");
const PermOut = document.getElementById("permOut");
const OverallOrder = document.getElementById("finalOrder");
const OverallCost = document.getElementById("finalCost");

let LP = 0;
//end

window.addEventListener('load', function () {
    totalCost = 0;
    gCost = 0;

})

//increment function
//reason for adding button instead of text field is to minimise entry errors(user will enter text).This way can only enter number though user need to click everytime
for (let i = 0; i < plus.length; i++) {

    plus[i].addEventListener('click', function (evt) {
        let plusClicked = evt.target;
        // console.log(plusClicked);
        let input = plusClicked.parentElement.children[1];
        // console.log(input);
        let value = input.innerText;
        // console.log(value);
        let newValue = parseInt(value) + 1;
        // console.log(newValue);
        input.innerText = "0" + newValue;

        OrderOut[i].innerText = "0" + newValue;

        Times.value = "3";



        CostCalc(i, newValue);

        gCost = gCost1 + gCost2 + gCost3 + gCost4 + gCost5;
        TempOut.innerText = `Cost is : ${gCost.toFixed(2)} LKR`;

    })
}


// calculate costs 
function CostCalc(i, newValue) {
    switch (i) {
        case 0: gCost1 = newValue * (1200 + 0); break;

        case 1: gCost2 = newValue * (700 + 0); break;

        case 2: gCost3 = newValue * (5500 + 0); break;

        case 3: gCost4 = newValue * (2700 + 0); break;

        case 4: gCost5 = 0; break;

    }

}

const Times = document.getElementById("times");
Times.addEventListener("change", TimeChange);


function TimeChange() {

    gCost -= extra;
    num1 = parseInt(document.getElementById("out1").innerText);
    num3 = parseInt(document.getElementById("out3").innerText);
    num2 = parseInt(document.getElementById("out2").innerText);
    num4 = parseInt(document.getElementById("out4").innerText);

    // if (num1 === 0 && num2 === 0 && num3 === 0 && num4 === 0) {
    //     Times.value = "3";
    //     alert('Local Adults and Foreign cannot both be Zero');
    //     return;
    // }
    switch (Times.value) {
        case "3":
            extra = 0;
            duration = "3 Hours";
            break;
        case "12":
            extra = (num1 * 350) + (num2 * 350) + (num3 * 450) + (num4 * 450);
            duration = "Half-Day";
            break;
        case "24":
            extra = (num1 * 600) + (num2 * 600) + (num3 * 800) + (num4 * 800);
            // console.log(extra);
            duration = "Full-Day";
            break;
    }
    Timechnge.innerText = `${duration}`;
    gCost += extra;
    TempOut.innerText = `Cost is : ${gCost.toFixed(2)} LKR`;
}

//decrement function and cal costs
for (let i = 0; i < minus.length; i++) {


    minus[i].addEventListener('click', function (evt) {
        let minusClicked = evt.target;
        // console.log(plusClicked);
        let input = minusClicked.parentElement.children[1];
        // console.log(input);
        let value = input.innerText;
        // console.log(value);
        let newValue = parseInt(value) - 1;
        Times.value = "3";
        // console.log(newValue);
        if (newValue >= 0) {
            input.innerText = "0" + newValue;

            CostCalc(i, newValue);
            OrderOut[i].innerText = "0" + newValue;


            gCost = gCost1 + gCost2 + gCost3 + gCost4 + gCost5;
            TempOut.innerText = `Cost is : ${gCost.toFixed(2)} LKR`;
        }
        else {
            // input.innerText="00";
            alert("Cannot be negative");
        }
    })
}





const todayDate = new Date();
let day = todayDate.getDate();
let month = todayDate.getMonth() + 1;//+1 bcz it starts from 0
let year = todayDate.getFullYear();
// console.log(day, month, year);
let dateformat = `${year}-${month}-${day}`;





// console.log(fullName,Email,mobileNum,ConfE,Gender);

btnAdd.addEventListener('click', () => {

    const fullName = document.getElementById("fname").value;
    const Email = document.getElementById("email").value;
    const mobileNum = document.getElementById("mobNum").value;
    const ConfE = document.getElementById("confE").value;
    const Gender = document.getElementById("gender").value;
    const Date = document.getElementById("date").value; //the value of this will be "" if not selected and in the form Eg:2022-12-22


    num1 = parseInt(document.getElementById("out1").innerText);
    num2 = parseInt(document.getElementById("out2").innerText);
    num3 = parseInt(document.getElementById("out3").innerText);
    num4 = parseInt(document.getElementById("out4").innerText);
    num5 = parseInt(document.getElementById("out5").innerText);

    // num1,num2,num3,num4,num5


    let status = Validate(fullName, Email, mobileNum, ConfE, Date, num1, num3, num2, num4, num5);

    if (status === 1) {
        DisplayOrder(fullName, Email, mobileNum, Gender, Date, num1, num2, num3, num4, num5);

    }
})

function Validate(fullName, Email, mobileNum, ConfE, Date, num1, num3, num2, num4, num5) {



    // console.log(dateformat);

    // console.log(fullName);
    if (fullName === "") {
        alert("Name is Required");
        return;
    }
    else if (Email === "" || Email.indexOf("@") == -1) {
        alert("Valid Email is Required");
        return;
    }
    else if (ConfE === "" || Email.indexOf("@") == -1 || ConfE !== Email) {
        ; alert("Confirmation Email doesnt match the Email");
        return;
    }
    else if (mobileNum.length !== 10) {
        alert("Valid Mobile Number is Required");
        return;
    }

    else if (num1 < 1 && num2 < 1 && num3 < 1 && num4 < 1 && num5 < 1) {

        alert('All ticket fields cannot be Zero');
        return;
    }

    else if (Date === "") {
        alert("Please Enter a Date ");
        return;
    }
    //validate date with current date 
    if (Date < dateformat) {
        alert("Enter a Valid Date");
        return;
    }

    return 1;
}
let PersonalDetails;
let ticketDetails;

function DisplayOrder(fullName, Email, mobileNum, Gender, Date, num1, num2, num3, num4, num5) {

    PersonalDetails = { Name: fullName, Email: Email, mNum: mobileNum, Gender: Gender };
    ticketDetails = { Duration: Times.value, LAticket: num1, LCticket: num2, FAticket: num3, FCticket: num4, Iticket: num5 };

    total += num1 + num2 + num3 + num4 + num5;

    let msg = `Name is : ${fullName} <br>  Email is : ${Email}  <br> Mobile Number is : ${mobileNum} <br> Gender is : ${Gender} <br>
                Date is : ${Date} <br> Duration of ticket is : ${duration} <br> Local Adult Tickets : ${num1} <br>  Local Children Tickets : 
                ${num2} <br> Foreign Adult Tickets : ${num3} <br> Foreign Children Tickets : ${num4} <br>Infant Tickets : ${num5} `;
    // let msg = `Name is : <span>${fullName} <br> </span> Email is : <span>${Email} </span> <br> Mobile Number is :<span> ${mobileNum}</span> <br> Gender is :
    //              <span>${Gender}</span> <br>
    //                         Date is : <span>${Date}</span> <br> Duration of ticket is : <span>${duration}</span> <br> Local Adult Tickets : <span>${num1}</span> <br>
    //                          Local Children Tickets : 
    //                         <span>${num2}</span> <br> Foreign Adult Tickets : <span>${num3}</span> <br> Foreign Children Tickets :<span> ${num4} </span><br>
    //                          Infant Tickets :<span> ${num5}</span> `;

    PermOut.innerHTML = `Current Order : <br>
        <br> Duration :                 <span id="timechng"> 3 Hours</span>
        <br> Local Adult Tickets :      <span class="orderOut">00</span>
        <br> Local Children Tickets :   <span class="orderOut">00</span>
        <br> Foreign Adult Tickets :    <span class="orderOut">00</span>
        <br> Foreign Children Tickets : <span class="orderOut">00</span>
        <br> Infant Tickets :           <span class="orderOut">00</span>`;
    //PermOut.innerHTML = `Current Order : <br><br>Date is : ${Date} <br> Duration of ticket is : ${duration} <br> Local Adult Tickets : ${num1} <br> Local Children Tickets : 
    //     ${num2} <br> Foreign Adult Tickets : ${num3} <br> Foreign Children Tickets : ${num4} <br> Infant Tickets : ${num5}`;
    OverallOrder.innerHTML += msg + `<br><br>`;
    Timechnge = document.getElementById("timechng");
    totalCost += gCost;
    OverallCost.innerHTML = `Total Cost is : ${totalCost.toFixed(2)} LKR`
    Clear();

}


const btnClear = document.getElementById("clear");
btnClear.addEventListener("click", () => {
    Clear();
    PermOut.innerHTML = `Current Order : <br>
    <br> Duration :                 <span id="timechng"> 3 Hours</span>
     Local Adult Tickets :      <span class="orderOut">00</span>
     Local Children Tickets :   <span class="orderOut">00</span>
     Foreign Adult Tickets :    <span class="orderOut">00</span>
     Foreign Children Tickets : <span class="orderOut">00</span>
     Infant Tickets :           <span class="orderOut">00</span>`;
    Timechnge = document.getElementById("timechng");
});


function Clear() {
    document.getElementById("out1").innerText = "00";
    document.getElementById("out2").innerText = "00";
    document.getElementById("out3").innerText = "00";
    document.getElementById("out4").innerText = "00";
    document.getElementById("out5").innerText = "00";
    Times.value = "3";
    gCost = 0;
    gCost1 = 0; gCost2 = 0; gCost3 = 0; gCost4 = 0; gCost5 = 0; extra = 0;
    TempOut.innerText = `Cost is : ${gCost.toFixed(2)} LKR`;
}

const btnFav = document.getElementById("favourite");
btnFav.addEventListener("click", () => {

    num1 = parseInt(document.getElementById("out1").innerText);
    num2 = parseInt(document.getElementById("out2").innerText);
    num3 = parseInt(document.getElementById("out3").innerText);
    num4 = parseInt(document.getElementById("out4").innerText);
    num5 = parseInt(document.getElementById("out5").innerText);


    if (num1 < 1 && num2 < 1 && num3 < 1 && num4 < 1 && num5 < 1) {

        alert('All ticket fields cannot be Zero');
        return;
    }

    let ticket = { Duration: Times.value, LAticket: num1, LCticket: num2, FAticket: num3, FCticket: num4, Iticket: num5 };
    let tick = JSON.stringify(ticket);;

    // console.log(ticket);
    // console.log(tick);

    localStorage.setItem("Favourites", tick);

})

const btnOrderfav = document.getElementById("OrderFav");

btnOrderfav.addEventListener("click", () => {
    Clear();

    let tick = localStorage.getItem("Favourites");
    let ticket = JSON.parse(tick);

    // console.log(ticket);
    // console.log(tick);
    // console.log(ticket.FAticket);
    document.getElementById("out1").innerText = ticket.LAticket;
    document.getElementById("out2").innerText = ticket.LCticket;
    document.getElementById("out3").innerText = ticket.FAticket;
    document.getElementById("out4").innerText = ticket.FCticket;
    document.getElementById("out5").innerText = ticket.Iticket;
    Times.value = ticket.Duration;
    switch (Times.value) {
        case 3: duration = "3 Hours"; break;
        case 12: duration = "Half-Day"; break;
        case 24: duration = "Full-Day"; break;
    }
    PermOut.innerHTML = `Current Order : <br>
    <br> Duration :                 <span id="timechng">${duration}</span>
     Local Adult Tickets :      <span class="orderOut">${ticket.LAticket}</span>
     Local Children Tickets :   <span class="orderOut">${ticket.LCticket}</span>
     Foreign Adult Tickets :    <span class="orderOut">${ticket.FAticket}</span>
     Foreign Children Tickets : <span class="orderOut">${ticket.FCticket}</span>
     Infant Tickets :           <span class="orderOut">${ticket.Iticket}</span>`;
    Timechnge = document.getElementById("timechng");
    gCost1 = ticket.LAticket * (1200 + 0);
    gCost2 = ticket.LCticket * (700 + 0);
    gCost3 = ticket.FAticket * (5500 + 0);
    gCost4 = ticket.FCticket * (2700 + 0);
    gCost5 = 0;
    gCost = gCost1 + gCost2 + gCost3 + gCost4 + gCost5;
    TempOut.innerText = `Cost is : ${gCost.toFixed(2)} LKR`;
    TimeChange();

})

function setLoyalty(tot) {
    if (tot > 3) {
        LP += tot * 15;
        localStorage.setItem("LP", LP);
    }
}

const btnchkpoints = document.getElementById("chkLoyalty")

btnchkpoints.addEventListener("click", chkLoyalty)
function chkLoyalty() {

    let points = localStorage.getItem("LP");
    // console.log(points);
    /***display themsg */
    poph2.innerText = `Loyalty Points`;
    popp.innerText = `You have ${points} points.`
    window.scrollTo(0, 0);
    popup.classList.add("popup-open");

}


btnPlace.addEventListener("click", (evt) => {
    evt.preventDefault();
    if (PersonalDetails === undefined || ticketDetails === undefined) {
        alert('There is no Overall Order');
        return;
    }
    setLoyalty(total);
    totalCost = 0;
    gCost = 0;

    OverallOrder.innerHTML = `Overall Order : `;
    OverallCost.innerHTML = `Total Cost is : 0.00 LKR`
    btnreset.click();
    window.scrollTo(0, 0); /*scroll to the top of page*/
    poph2.innerText = `Success!`;
    popp.innerHTML = `Thank You for your Custom Reservation ! <br> You earned ${(total * 15)} Points`
    Clear();
    /**display the msg */
    popup.classList.add("popup-open");
})

const closebtn = document.getElementById("pop-btn");
let popup = document.getElementById("popup");
let poph2 = document.getElementById("pop-h2");
let popp = document.getElementById("pop-p");
const btnreset = document.getElementById("reset");

closebtn.addEventListener("click", () => {
    popup.classList.remove("popup-open");

})
