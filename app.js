//do something with content editable

//var addTaskBtn = document.querySelector(".add-task-btn");
var addTaskBtn = document.querySelector("#task-btn");

var toDoCard = document.querySelector(".to-do");

var inProgressCard = document.querySelector(".in-progress");

var doneCard = document.querySelector(".done");

const ulTag = document.createElement("ul");
toDoCard.appendChild(ulTag);

const testBtn = document.getElementById("test-btn");
const popUpBox = document.querySelector(".pop-up");

const popUpBoxTwo = document.querySelector(".pop-up-two");


const allCheckboxes = document.querySelectorAll("input[name='option']");

const completeTaskConfirmBtn = document.getElementById("complete-task-confirm-button");

//only one checkbox can be checked at a time
allCheckboxes.forEach(checkbox=> {
    checkbox.addEventListener('change', function() {
        if(this.checked) {
            //uncheck all other checkboxes
            allCheckboxes.forEach(cb=> {
                if(cb !== this) {
                    cb.checked = false;
                }
            })
        }
    })
})




addTaskBtn.onclick=function() {
    /*console.log("button pressed");*/
    createLiElement();
    
    /*var timeOutId;

    liTag.onmouseenter=function(){
           timeOutId =  setTimeout(() => {
            console.log("hi");
            popUpBox.style.display = "block";

        }, 2000);

        console.log("timeout id: " + timeOutId);
        

    }

    liTag.onmouseleave=function() {
        
        clearTimeout(timeOutId);
        popUpBox.style.display = "none";
    }*/

   liTag.ondblclick=function(){
        console.log("double click works");
        popUpBox.style.display="block";

       

   }
}

function createLiElement() {
    liTag = document.createElement("li");
    liTag.innerText = "li tag";
    ulTag.appendChild(liTag);
    liTag.setAttribute("contentEditable", "true");

}

const checkbox = document.querySelector("#addToProgress")

function checkCheckbox() {
    if(checkbox.checked) {
        console.log("is checked");
        return true;
    } else {
        console.log("is not checked");
    }
}

testBtn.onclick=function(){

    
    if(checkCheckbox()) {
        console.log("checkbox value is: " + checkCheckbox());
        pTag = document.createElement("p");
        pTag.innerText = liTag.innerText;
        liTag.style.display = "none";
        inProgressCard.appendChild(pTag);
        console.log(liTag);
        
        //inProgressCard.innerHTML = liTag;


      
    }

    //remove li tag from DOM
    if(deleteTask()) {
        console.log("it works!");
        liTag.remove();
    }

    /*inProgressCard.onclick=function(){
        console.log("it works");
    }*/

    pTag.onclick=function(){
        console.log("task completed");
        popUpBoxTwo.style.display = "block";

       
    }

     



    
    checkbox.checked = false;
    deleteTaskCheckbox.checked = false;
    popUpBox.dispatchEvent(new Event("change"));
    popUpBox.style.display = "none";
    testBtn.style.display = "none";
   
    
    
    
    
}

var addToCompletedBox = document.getElementById("addToCompleted");

addToCompletedBox.onclick=function(){
    console.log("p2 selected");
    
    /*doneCard.appendChild(pTag);
    popUpBoxTwo.style.display = "none";
    this.checked = false;*/
    completeTaskConfirmBtn.style.display = "block";

    completeTaskConfirmBtn.onclick=function(){
        doneCard.appendChild(pTag);
        popUpBoxTwo.style.display = "none";
        addToCompletedBox.checked = false;
        completeTaskConfirmBtn.style.display = "none";

    }
}


const deleteTaskCheckbox = document.getElementById("delete");

function deleteTask() {
    if(deleteTaskCheckbox.checked) {
        console.log("delete task is checked");
        return true;
    }
}
/*if()
deleteTask.onclick=function() {
    console.log("delete task works");
}

function transferFromToDoToInProgress() {



}*/

checkbox.onclick=function() {
    console.log("clicked");
    testBtn.style.display="block";
}

deleteTaskCheckbox.onclick=function(){
    console.log("delete clicked");
    testBtn.style.display="block";
}


var radio1 = document.getElementById("radio1");
var radio2 = document.getElementById("radio2");
var confirmBtn = document.getElementById("confirm-button");
//const selected = document.querySelector('input[name="options"]:checked');

function checkSelection() {
    var selected = document.querySelector('input[name="options"]:checked');
    if(selected){
        console.log(`${selected.value} is selected.`);
        if(`${selected.value}` === "add to in progress") {
            console.log("one");
            return true;
        } else if(`${selected.value}` === "delete") {
            console.log("two");
            return false;
        }
    } else {
        console.log("nothing is selected");
    }
}

confirmBtn.onclick=function(){
    console.log(checkSelection());

    if(checkSelection()) {
        console.log("happy");
    } else {
        console.log("sad");
    }
    //checkSelection();
}


//console.log(inProgressCard.innerHTML);
var textbox = document.getElementById("textbox");
var enterButton = document.getElementById("enter-button");

enterButton.onclick=function(){
    console.log(textbox.value);
    if(textbox.value === "ernie") {
        console.log("correct");
    } else {
        console.log("wrong");
    }
}