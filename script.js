let container = document.getElementById("container");

let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

let left = 0;

for (let i of alphabet){
  let box = document.createElement("div");
      box.setAttribute("class", "box");
      box.setAttribute("draggable", "true");
      box.style.left = `${left}px`;
      left += 55;
      box.innerHTML = i.toUpperCase();
      container.appendChild(box);

      box.addEventListener("dragend", function (event) {
        let x = event.clientX;
        let y = event.clientY;
        box.style.left = `${x-box.clientWidth/2}px`;
        box.style.top = `${y-box.clientHeight/2}px`;
  // console.log(`XcoordinateEnd: ${x}, YcoordinateEnd: ${y}`);
      })

}