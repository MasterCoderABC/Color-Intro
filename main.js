document.getElementById("label")

function black(){
    document.getElementById("label").innerHTML = "This is black."
    document.getElementById("label").style.color = "black"
}

function violet(){
    document.getElementById("label").innerHTML = "This is violet."
    document.getElementById("label").style.color = "violet"
}
    
 function indigo(){
        document.getElementById("label").innerHTML = "This is indigo."
        document.getElementById("label").style.color = "indigo"
 }

 function blue(){
    document.getElementById("label").innerHTML = "This is blue."
    document.getElementById("label").style.color = "blue"
}

function green(){
    document.getElementById("label").innerHTML = "This is green."
    document.getElementById("label").style.color = "green"
}

function yellow(){
    document.getElementById("label").innerHTML = "This is yellow."
    document.getElementById("label").style.color = "yellow"
}

function orange(){
    document.getElementById("label").innerHTML = "This is orange."
    document.getElementById("label").style.color = "orange"
}

function red(){
    document.getElementById("label").innerHTML = "This is red."
    document.getElementById("label").style.color = "red"
}

function speak(){
    var msg = new SpeechSynthesisUtterance()
 msg.text = document.getElementById("label").innerHTML
 window.speechSynthesis.speak(msg)
}