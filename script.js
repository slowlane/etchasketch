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

                if(e.target.style.backgroundColor === ""){
                    e.target.style.backgroundColor = "rgba(" + Math.random() * 255 + ", " + Math.random() * 255 + ", "  + Math.random() * 255 + ", 0.1)";
                    e.target.style.filter = "brightness(50%)";
                } else{
                    
                    const bGroundColor = e.target.style.backgroundColor;
                    const opacityValue = bGroundColor.substr(-2, 2);
                    let mergeString = bGroundColor.substring(0, bGroundColor.length - 2);   
                    let opacityNumber = parseInt(opacityValue.slice(0, 1));
                    let brightness = 50;
                    //Increment opacitynumber to make a point of comparison
                    opacityNumber++;

                    //Tone down brightness
                    brightness = brightness - (opacityNumber * 5);

                    
                    if(opacityNumber >= 9 || opacityNumber === 1){
                        e.target.style.filter = "brightness(0%)";
                    }else{                   
                        e.target.style.filter = "brightness(" + brightness + "%)";
                        e.target.style.backgroundColor = mergeString + opacityNumber + ")";   
                    }
                }
                
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