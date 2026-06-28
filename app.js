//do somrhing with content editable

var addTaskBtn = document.querySelector(".add-task-btn");

var toDoCard = document.querySelector(".to-do");

var inProgressCard = document.querySelector(".in-progress");

const ulTag = document.createElement("ul");
toDoCard.appendChild(ulTag);

const testBtn = document.getElementById("test-btn");
const popUpBox = document.querySelector(".pop-up");





addTaskBtn.onclick=function() {
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
        inProgressCard.appendChild(pTag);
        console.log(liTag);
        //inProgressCard.innerHTML = liTag;


      
    }
    
    
    
    
}

function transferFromToDoToInProgress() {



}



