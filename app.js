let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newGmaeButton=document.querySelector("#newButton");
let msgContainer=document.querySelector(".msgcontainer");
let msg=document.querySelector("#msg");

let draw=0;


let turno=true;

const winPatterns=[ 
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


const resetGame=()=>{
    turno=true;
    enableBoxes();
    msgContainer.classList.add("hide");
    draw=0;
    
}

boxes.forEach((box)=>{
    
    box.addEventListener("click",()=>{
        console.log("boxes was clicked");
        if(turno===true)
        {
            box.innerText="O";
            box.style.color="blue";
            turno=false;
            draw++;
            console.log(draw);
        }else{
            box.innerText="X";
            turno=true;
            draw++;
            console.log(draw);
        }
        if(draw===9)
        {
            console.log("drawn")
            draw=0;
            msg.innerText="match is drawn try again";
            msgContainer.classList.remove("hide");
            

        }
        box.disabled=true;
        checkWinner();
    });
});

const disableBoxes=()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
   
    msg.innerText=`congratulations ${winner} is the winner`;
    msgContainer.classList.remove("hide");
    disableBoxes();

}

const checkWinner=()=>{
    for (let pattern of winPatterns)
    {

    let pos1Val=boxes[pattern[0]].innerText;
    let pos2Val=boxes[pattern[1]].innerText;
    let pos3Val=boxes[pattern[2]].innerText;
    if(pos1Val!=""&&pos2Val!=""&&pos3Val!=""){
        if(pos1Val===pos2Val&&pos2Val===pos3Val)
        {
            console.log("winner",pos1Val);

            showWinner(pos1Val);
        }
    }    
    
    }
   
}
newGmaeButton.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);


