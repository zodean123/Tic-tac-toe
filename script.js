let boxcontainer = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let turnO = true; //playerX,playerO;

let winPattern =[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,3,8],[0,4,8],[2,4,6]];
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
const shoWinner =(winner)=>{
msg.innerText =`Congralutions,Winner is ${winner}`;
msgContainer.classList.remove("hide");
disabledboxes();
}
const checkWinner = ()=>{
    for(let pattern of winPattern){
        // console.log(pattern[0],pattern[1],pattern[2]); //bascially,traversing the entire winpattern array on each click
        let pos1 = boxcontainer[pattern[0]].innerText; //we get the value at the respective  button
       let pos2 = boxcontainer[pattern[1]].innerText;
       let pos3 = boxcontainer[pattern[2]].innerText;
    //    console.log(pos1);
    //    console.log(pos2);

    if(pos1!="" && pos2!="" && pos3!=""){
        if(pos1==pos2 && pos2==pos3)
        console.log("winner",pos1);
shoWinner(pos1);

    }
   
    }
}

newBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
