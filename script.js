const containerDiv = document.querySelector(".container");
console.log(containerDiv);


function makeGrid(gridItems = 16){
    for(let i = 0; i < gridItems; i++){
        const temp = document.createElement("div");
        temp.classList.add("gridItem", "gridHead");


        containerDiv.appendChild(temp);

        for(let j = 0; j < gridItems; j++){
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

    let userReply = 0;

    do{
        userReply = +prompt("What should the number of grids be? It has to be a number and below 100!");
        console.log(typeof userReply + userReply);
    }
    while(typeof userReply != "number" || userReply > 100);
        
    

    gridItemArray.forEach(gridItem => {
        gridItem.classList.remove("blue");
    });

    containerDiv.innerHTML = "";

    makeGrid(userReply);
})