let container = document.querySelector("#container");

for(let i = 1; i <= 16; i++) {
    let horizontalContainer = document.createElement('div');
    horizontalContainer.classList.add("horizontal-container" + i);
    horizontalContainer.setAttribute('style', 'display:flex; ');
    container.appendChild(horizontalContainer);
    for(let j = 1; j <= 16; j++) {
        let newDiv = document.createElement('div');
        newDiv.classList.add("grid-box-" + i + "-" + j); //ex: grid-box-10-2
        newDiv.setAttribute('style', 'border: 1px solid black; width: 50px; height: 50px;');
        newDiv.textContent = i + " : " + j;
        let row = document.querySelector(".horizontal-container" + i);
        row.appendChild(newDiv);
    }  
    //console.log("Row " + i + " finished.");
}

container.addEventListener('mouseover', (event) => {
    let target = event.target;

    for(let i = 1; i <= 16; i++) {
        // console.log(i);
        for(let j = 1; j <= 16; j++) {
            if(target.class == "grid-box-" + i + "-" + j) {
                target.classList.toggle('active');
                console.log(i + "-" + j + " grid-box reached.");

                setTimeout(() => {
                    target.classList.toggle('active');
                }, 500);
            }
        }
    }
})





