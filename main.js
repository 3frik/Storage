function sessionSave(){
    var sessionKey = document.getElementById("sessionSaveKey").value; //find the element with the name of the variable and save it
    var sessionValue = document.getElementById("sessionSaveValue").value; //find the element with the value os the variable and save it
    console.log("Session Save. Key: "+sessionKey+" and value: "+sessionValue); //for testing and control
    sessionStorage.setItem(sessionKey,sessionValue); //save the variable in the computer
}

function sessionRead(){
    var sessionKey = document.getElementById("sessionReadKey").value; //find the element with the name of the variable and save it
    var sessionValue = sessionStorage.getItem(sessionKey); //with the name, find the value of the variable
    console.log("Session Read. Key: "+sessionKey+" and value: "+sessionValue); //for testing and control
    document.getElementById("sessionReadValue").innerText=sessionValue; //Show the value on screen
}

function localSave(){
    var localKey = document.getElementById("localSaveKey").value; //find the element with the name of the variable and save it
    var localValue = document.getElementById("localSaveValue").value; //find the element with the value os the variable and save it
    console.log("local Save. Key: "+localKey+" and value: "+localValue); //for testing and control
    localStorage.setItem(localKey,localValue); //save the variable in the computer
}

function localRead(){
    var localKey = document.getElementById("localReadKey").value; //find the element with the name of the variable and save it
    var localValue = localStorage.getItem(localKey); //with the name, find the value of the variable
    console.log("Local Read. Key: "+localKey+" and value: "+localValue); //for testing and control
    document.getElementById("localReadValue").innerText=localValue; //Show the value on screen
}

function cookieSave(){
    var cookieKey = document.getElementById("cookieSaveKey").value; //find the element with the name of the variable and save it
    var cookieValue = document.getElementById("cookieSaveValue").value; //find the element with the value os the variable and save it
    console.log("Cookie Save. Key: "+cookieKey+" and value: "+cookieValue); //for testing and control
    document.cookie= cookieKey+"="+cookieValue+";"+";path=/"; //save the variable in the computer
}

function cookieRead(){
    var cookieKey = document.getElementById("cookieReadKey").value; //find the element with the name of the variable and save it
    var cookieValue = document.cookie.cookieKey; //with the name, find the value of the variable
    console.log("Cookie Read. Key: "+cookieKey+" and value: "+cookieValue); //for testing and control
    document.getElementById("CookieReadValue").innerText=cookieValue; //Show the value on screen
}

function loaded(){  //this code starts after the website is loaded. It shows automatically the vale of a certain stored local variable
    var objectiveElement = document.getElementById("showValue"); //find where to write the value
    var testValue = localStorage.getItem("test"); //find the value to show
    objectiveElement.innerText="The value of the variable 'test' is '"+testValue+"'. This value is automatically loaded and used."; //
    alert("The value will be shown when this alert message is closed.");
}