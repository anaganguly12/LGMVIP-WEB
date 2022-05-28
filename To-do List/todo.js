const todoItems = document.getElementsByClassName("items-list")[0];
const input = document.getElementById("inp");
const delIcon = document.getElementById("trash");

input.addEventListener("keydown",function(event) {
    if(event.key == "Enter")
        addItem();
})

function addItem() {
    var divParent = document.createElement("div");
    var divChild = document.createElement("div");
    var checkBox = document.createElement("i");
    var trashIcon = document.createElement("i");

    divParent.className = "item";
    divParent.innerHTML = '<div>'+input.value+'</div>';


    checkBox.className = "fas fa-check-square";
    checkBox.style.color = "lightgray";
    checkBox.addEventListener("click",function() {
        checkBox.style.color = "green";
    })

    divChild.appendChild(checkBox);

    trashIcon.className = "fas fa-trash";
    trashIcon.style.color = "darkgray";
    trashIcon.addEventListener("click",function(){
        divParent.remove();
    })

    divChild.appendChild(trashIcon);

    divParent.appendChild(divChild);

    todoItems.appendChild(divParent);
    input.value = "";

}