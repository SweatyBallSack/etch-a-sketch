let container = document.querySelector("#container");



for(let i = 1; i <= 16; i++) {
    let horizontalContainer = document.createElement('div');
    horizontalContainer.classList.add("horizontal-container" + i);
    horizontalContainer.setAttribute('style', 'display:flex; ');
    container.appendChild(horizontalContainer);

    for(let j = 1; j <= 16; j++) {
        let newDiv = document.createElement('div');
        newDiv.classList.add("grid-box" + j);
        newDiv.setAttribute('style', 'border: solid black; width: 500px; height: 5%; width: 5%; ');
        newDiv.textContent = i + " : " + j;
        let row = document.querySelector(".horizontal-container" + i);
        row.appendChild(newDiv);
        
    }  
    console.log("Row " + i + " finished.");
}

// let div1 = document.createElement('div');
// div1.setAttribute('style', 'border: solid black;');
// div1.textContent = "div1";
// let div2 = document.createElement('div');
// div2.setAttribute('style', 'border: solid black;');
// div2.textContent = "div2";
// let div3 = document.createElement('div');
// div3.setAttribute('style', 'border: solid black;');
// div3.textContent = "div3";

// container.appendChild(div1);
// container.appendChild(div2);
// container.appendChild(div3);






