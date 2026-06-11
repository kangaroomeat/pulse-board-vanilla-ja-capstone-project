//do somrhing with content editable

var addTaskBtn = document.querySelector(".add-task-btn");

var toDoCard = document.querySelector(".to-do");

const ulTag = document.createElement("ul");
toDoCard.appendChild(ulTag);

const testBtn = document.getElementById("test-btn");
const popUpBox = document.querySelector(".pop-up");





addTaskBtn.onclick=function() {
    createLiElement();
    liTag.onmouseenter=function(){
        setTimeout(() => {
            console.log("hi");
            popUpBox.style.display = "block";

        }, 2000);
        

    }

    liTag.onmouseleave=function() {
        
        popUpBox.style.display = "none";
    }
}

function createLiElement() {
    liTag = document.createElement("li");
    liTag.innerText = "li tag";
    ulTag.appendChild(liTag);
    liTag.setAttribute("contentEditable", "true");

}



