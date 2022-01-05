const container = document.querySelector("#container");
const box = document.createElement("div");
box.setAttribute("id","box");
box.classList.add("box");
//box.textContent = "Hi";
container.appendChild(box);

const row = document.createElement("div");
row.setAttribute("id","row");
row.classList.add("row");

function createBoxes(length) {
    for (let i = 0; i < length; i++) {
        box.style.backgroundColor = ("white");
        var copy = box.cloneNode(true);
        row.appendChild(copy);
    }
    for (let i = 0; i < length; i++) {
        var cropy = row.cloneNode(true);
        container.appendChild(cropy)
    }
    const rows = document.querySelectorAll("#row");  
    //Code below fixed the error (deletes boxes when theres too many)
    rows.forEach((elem) => {
        console.log(elem.childElementCount)
        while(elem.childElementCount > length) {
            elem.removeChild(elem.firstChild);
        }
    })
    console.log(row.childElementCount)
}
function addBoxListeners() {
    const a = document.querySelectorAll("#box");
    console.log(a);
    a.forEach((elem) => {
    elem.addEventListener("mouseover",function(e) {
        e.target.style.backgroundColor = ("gray");
        })
    })
}
function buttonClicked() {  
    //Deletes boxes
    const rows = document.querySelectorAll("#row");   
    rows.forEach((elem) => {
        elem.remove();
    })
    const input = prompt("Enter side length.")
    createBoxes(input);
    addBoxListeners();
}