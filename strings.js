function Click(){
    document.getElementById("demo").innerHTML = "Congratulations!"
alert("Congratulations! You can read directions!");
}

function Ignore(){
    document.getElementById("demo").innerHTML = "You Fail!"
    alert("You Fail!");
}
function Submit(){
    var enteredName = document.getElementById("nameEntered").value; 
    document.getElementById("name").innerHTML = enteredName;
}
