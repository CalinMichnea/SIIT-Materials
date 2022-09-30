
function GettingData() {
    var fName = document.getElementById("firstName").value;
    if (fName) {
        console.log("First name is -" + fName);
    }
    if (fName == "") {
        fNameStyle = document.getElementById("firstName").classList;
        fNameStyle.remove("Names");
        fNameStyle.add("NamesAfter");
     } else {
        fNameStyle = document.getElementById("firstName").classList;
        fNameStyle.remove("NamesAfter");
        fNameStyle.add("Names");
     }
   
    var lName = document.getElementById("lastName").value;
    if (lName) {
        console.log("Last name is -" + lName);
    }
    if (lName == "") {
        lNameStyle = document.getElementById("lastName").classList;
        lNameStyle.remove("Names");
        lNameStyle.add("NamesAfter");
    } else {
        lNameStyle = document.getElementById("lastName").classList;
        lNameStyle.remove("NamesAfter");
        lNameStyle.add("Names");
    }
    
    if(document.getElementById("r1").checked === true) {
        gender = document.getElementById("r1").value;
        console.log("Gender is -" + gender);
    }
    if (document.getElementById("r2").checked === true) {
        gender = document.getElementById("r2").value;
        console.log("Gender is -" + gender);
       }
    
    var textMessage = document.getElementById("text").value;
    if (textMessage) {
         console.log("Message is - " + textMessage);
    }
    if (textMessage == "") {
        textMessageStyle = document.getElementById("text").classList;
        textMessageStyle.add("textArea");
    } else {
        textMessageStyle = document.getElementById("text").classList;
        textMessageStyle.remove("textArea");
    }
    
    if (fName && lName && textMessage) {
        const formContainer = document.getElementById("formWrapper");
        const vDiv = document.createElement("div");
        vDiv.classList.add('divConfirmation');
        formContainer.appendChild(vDiv);
        const newP = document.createElement("p");
        const newP2 = document.createElement("p");
        vDiv.appendChild(newP);
        vDiv.appendChild(newP2);
        newP.innerHTML = "Thank you for contacting us, " + fName;
        newP2.innerHTML = "X";
        newP.classList.add('divP');
        newP2.classList.add('divP');
    }
    }