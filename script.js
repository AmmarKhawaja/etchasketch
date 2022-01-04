const container = document.querySelector("#container");
const box = document.createElement("div");
box.setAttribute("id","box");
box.classList.add("box");
box.textContent = "Hi";
container.appendChild(box);
for (let i = 0; i < 10; i++) {
    var copy = box.cloneNode(true);
    container.appendChild(copy);
}

const a = document.querySelectorAll("#box");
a.forEach((elem) => {
    elem.addEventListener("mouseover",function(e) {
        e.target.style.backgroundColor = ("gray");
    })
})
