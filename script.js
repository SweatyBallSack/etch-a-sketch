let container = document.querySelector("#container");

let grid = document.querySelector('#grid');

function getRandomColor() {
    let colorValues = "0123456789ABCDEF";
    let color = "";
    for(let i = 0; i < 6; i++) {
        color += colorValues[Math.floor(Math.random() * 16)];
    }
    return color; //(For RGB values)

    // return Math.floor(Math.random * 360);
    //(For HSL values)

}


let promptButton = document.createElement('button');
promptButton.textContent = "Enter grid dimensions"
promptButton.addEventListener('click', () => {
    let aNumber = Number(window.prompt("Enter a number between 1-100."));

    while(aNumber > 100) {
        aNumber = Number(window.prompt("Enter a number between 1-100"));
    }
    
    for(let i = 1; i <= aNumber; i++) {
        let horizontalContainer = document.createElement('div');
        horizontalContainer.classList.add("horizontal-container" + i);
        horizontalContainer.setAttribute('style', 'display:flex; ');
        grid.appendChild(horizontalContainer);
        for(let j = 1; j <= aNumber; j++) {
            let newDiv = document.createElement('div');
            newDiv.classList.add("grid-box-" + i + "-" + j); //ex: grid-box-10-2

            newDiv.setAttribute('style', 'border: 1px solid black;'); //
            let newDivDimensions = Math.round(800 / aNumber);
            newDiv.style.width = newDivDimensions + 'px';
            newDiv.style.height = newDivDimensions + 'px';

            // newDiv.style.width = String(k + 'px');
            // newDiv.style.length = String(k + 'px');
            //newDiv.textContent = i + " : " + j;
            let row = document.querySelector(".horizontal-container" + i);
            row.appendChild(newDiv);
        }  
        //console.log("Row " + i + " finished.");
    }
    container.addEventListener('mouseover', (event) => {
        let target = event.target;

        for(let i = 1; i <= aNumber; i++) {
            //console.log(i);
            for(let j = 1; j <= aNumber; j++) {
                if(target.className == "grid-box-" + i + "-" + j) {
                    let lightness = 0;
                    target.style['background-color'] = '#' + getRandomColor();
                    //target.classList.toggle('active');
                    //console.log(i + "-" + j + " grid-box reached.");

                    setTimeout(() => {
                        target.style['background-color'] = "#FFFFFF";
                        //target.classList.toggle('active');
                    }, 500);
                }
            }
        }
    })
}, {once: true})

container.appendChild(promptButton);

