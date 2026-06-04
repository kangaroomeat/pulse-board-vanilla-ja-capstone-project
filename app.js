//do somrhing with content editable

var addTaskBtn = document.querySelector(".add-task-btn");

var toDoCard = document.querySelector(".to-do");

const ulTag = document.createElement("ul");
toDoCard.appendChild(ulTag);

const testBtn = document.getElementById("test-btn");





addTaskBtn.onclick=function() {
    console.log("test");
    liTag = document.createElement("li");
    liTag.innerText = "li tag test";
    ulTag.appendChild(liTag);
    liTag.setAttribute("contentEditable", "true");
    

}

testBtn.onclick=function() {
    const element = document.querySelector("li");
if(element) {
    console.log("element exists");
    element.onclick=function() {
        console.log("clicked");
    }
} else {
    console.log("element not found");
}



}


