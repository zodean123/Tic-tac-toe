let boxcontainer = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let turnO = true; //playerX,playerO;

const winPattern =[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,3,8],[0,4,8],[2,4,6]];
 let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container")





const resetGame =()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
boxcontainer.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box");
        // box.innerText ="abc";

        if(turnO){  //if the turn is of player O
            box.innerText="O";
            turnO=false;

        }
        else{  //if the turn is of player X
            box.innerText="X";
            turnO=true;
        }
        box.disabled = true;
        checkWinner();
    });
    
});
const enableBoxes = ()=>{
    for(let box of boxcontainer){
        box.disabled=false;
        box.innerText="";
    }
}
const disabledboxes = ()=>{
    for(let box of boxcontainer){
        box.disabled=true;
    }
}
const showWinner =(winner)=>{
msg.innerText =`Congralutions,Winner is ${winner}`;
msgContainer.classList.remove("hide");
disabledboxes();
}
const checkWinner = () => {
    for (let pattern of winPattern) {
      let pos1Val = boxcontainer[pattern[0]].innerText;
      let pos2Val = boxcontainer[pattern[1]].innerText;
      let pos3Val = boxcontainer[pattern[2]].innerText;
  
      if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if (pos1Val === pos2Val && pos2Val === pos3Val) {
          showWinner(pos1Val);
          return true;
        }
      }
    }
  };
  
 
newBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
