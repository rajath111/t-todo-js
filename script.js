
let addTodo = function(){
    let text = document.getElementById("entry").value;
    console.log(text);
    if(text == "" || text == "Error!, Enter a Value"){
        document.getElementById("entry").value="Error!, Enter a Value"
    }else{
        text = document.createTextNode(text);
        var ol = document.querySelector("ol");

        var li = document.createElement("li");
        li.setAttribute("class", "mycheck")
        var label = document.createElement("label");
        label.setAttribute("for", "check")

        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.setAttribute("id", "check")
        

        li.appendChild(checkbox);
        li.appendChild(label);
        label.appendChild(text);
        ol.insertBefore(li, ol.childNodes[0]);
        console.log("list of lables",label);
    }
}

ol = document.querySelector("ol")

function removeTodo(){
    var checks = document.querySelectorAll("#check")
    console.log(checks[0].value)
    for(var check of checks){
        console.log(check.value + "Raji")
    }
}
