const containerDiv = document.querySelector(".container");
console.log(containerDiv);


function makeGrid(){
    for(let i = 0; i < 16; i++){
        const temp = document.createElement("div");
        temp.classList.add("gridItem", "gridHead");


        containerDiv.appendChild(temp);

        for(let j = 0; j < 16; j++){
            const tempChild = document.createElement("div");
            tempChild.classList.add("gridItem");
            temp.appendChild(tempChild);
            tempChild.addEventListener("mouseover", e => {
                e.target.classList.add("blue");
            })
        }

    }
}


makeGrid();

const resetButton = document.querySelector(".resetButton");
resetButton.addEventListener("click", e => {
    
    const gridItemList = containerDiv.getElementsByClassName("gridItem");
    const gridItemArray= Array.from(gridItemList);

    gridItemArray.forEach(gridItem => {
        gridItem.classList.remove("blue");
    });
})