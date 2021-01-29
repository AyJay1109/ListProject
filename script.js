class User{
    constructor(firstName, lastName, id,  DoB, departureCity, arrivingCity, leaving, returning, bags, meals, extras, Age, Away){
        this.firstName = firstName
        this.lastName = lastName
        this.id = id
        this.DoB = DoB
        this.departureCity = departureCity
        this.arrivingCity = arrivingCity
        this.leaving = leaving
        this.returning = returning
        this.bags = bags
        this.meals = meals
        this.extras = extras
        this.Age = Age
        this.Away = Away
    }
}

let userList = [];
let userId = 01;

function addToList(){
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let DoB = document.getElementById("DoB").value;
    let departureCity = document.getElementById("departureCity").value;
    let arrivingCity = document.getElementById("arrivingCity").value;
    let leaving = document.getElementById("leaving").value;
    let returning = document.getElementById("returning").value;
    let bags = document.getElementById("bags").value;
    let meals = document.getElementById("meals").value;
    let extras = document.getElementById("extras").value;
    let Age = document.getElementById("Age").value;
    let Away = document.getElementById("Away").value;

    if(firstName != "" && lastName != "" && DoB != "" && departureCity != "" && arrivingCity != "" && leaving != "" && returning != "" && bags != "" && meals != "" && extras != "" && Age != "" && Away != ""){
        let user = new User (firstName, lastName, userId, DoB, departureCity, arrivingCity, leaving, returning, bags, meals, extras, Age, Away);
        userId++;
        userList.push(user);
        document.getElementById("firstName").value="";
        document.getElementById("lastName").value="";
        document.getElementById("DoB").value="";
        document.getElementById("departureCity").value="";
        document.getElementById("arrivingCity").value="";
        document.getElementById("leaving").value="";
        document.getElementById("returning").value="";
        document.getElementById("bags").value="";
        document.getElementById("meeals").value="";
        document.getElementById("extras").value="";
        document.getElementById("Age").value="";
        document.getElementById("Away").value="";
    }
}

function print(){
    printSpace = document.getElementById("printSpace");

    printSpace.innerHTML = "";
    for(let i = 0; i < userList.length; i ++){
        printSpace.innerHTML += `<div>${userList[i].id} ${userList[i].firstName} ${userList[i].lastName} ${userList[i].DoB} ${userList[i].departureCity} ${userList[i].arrivingCity} ${userList[i].leaving} ${userList[i].returning} ${userList[i].bags} ${userList[i].meals} ${userList[i].extras} ${userList[i].Age} ${userList[i].Away}</div>`
    }
}

for(let i = 0; i < radio.length; i++){
    if(radio[i].type === `radio` && radio[i].checked){
        meal.push(radio[i].value);
    }
}
this.meeals = meeal.push;

let checkbox = document.getElementsByTagName("input")
let checkboxamount = 0;
for (let i = 0; i < checkbox.length; i++) {
    if (checkbox[i].type === `checkbox` && checkbox[i].checked) {
        extra.push(checkbox[i].value);
        checkboxamount++;
    }
}
this.extras = extra.push;
returnObjecrtDate= new Date(returning);
    leavingObject = new Date(leaving);
    let dayDiff = returnObjecrtDate.getTime() - leavingObject.getTime();
    dayDiff = dayDiff / (1000 * 3600 * 24);