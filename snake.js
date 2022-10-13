let inputDir = {x:0,y:0};
// const snakehead= new Image(`snakeyes.gif`)
const foodsound=new Audio(`snake_food.WAV`);
const outsound=new Audio("snake_out.WAV");
const movesound=new Audio("snake_move.WAV");
const musicsound=new Audio("music.WAV");
const speed=8;
let score=0;
let lastPaintTime=0;
let snakearr=[{x:7,y:15}];          //snake head location
let food={x:13,y:15} ;   //snake food location


// game function
function main(ctime){
    window.requestAnimationFrame(main);
    if((ctime-lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime=ctime;
    // console.log(ctime)
    gameEngine();
}
function isColide(snake){
    for(i=1;i<snakearr.length;i++){
        if(snake[i].x=== snake[0].x && snake[i].y===snake[0].y)
        return true;
    }
    if(snake[0].x >18 || snake[0].x <=0 || snake[0].y >18 || snake[0].y <=0){
        return true;
    }
}
function gameEngine(){
    // update the snake array & food
    if(isColide(snakearr)){
        outsound.play();
        musicsound.pause();
        inputDir = {x:0,y:0};
        
    let text = "Want to play again! Press OK \n Want to exit the game! press Cancel.";
    musicsound.play();
  if (confirm(text) == true) {
    // text = "You pressed OK!";
    location.reload();
  } else {
    window.close();
  }
        snakearr={x:7,y:15};
        score=0;
        
    }
    // if snake have eaten the food
    if(snakearr[0].x===food.x && snakearr[0].y===food.y){
        foodsound.play();
        // snakehead.play();
        // document.querySelector(`.opensnake`).style.
    //     var img = document.createElement("img");
    // img.src = "snakeyes.gif";
        score+=1;
        if(score> hiscoreval){
            hiscoreval = score;
            localStorage.setItem("hiscore", JSON.stringify(hiscoreval));
            hi_score.innerHTML = "HiScore: " + hiscoreval;
        }
        your_score.innerHTML="score:" + score;
        snakearr.unshift({x:snakearr[0].x + inputDir.x, y:snakearr[0].y + inputDir.y})
        let a= 2;
        let b= 16;
        food={x:Math.round(a+(b-a)*Math.random()),y:Math.round(a+(b-a)*Math.random())}
        console.assert.log(food)
    }
    // moving the snake
    for(let i=snakearr.length-2;i>=0;i--){
        // const element=array[i];
        snakearr[i+1]={...snakearr[i]}
    }
    snakearr[0].x +=inputDir.x;
    snakearr[0].y +=inputDir.y;
    
    //display the snake & food
//    board= document.getElementById=("board").innerHTML="";
//display the snake here
board.innerHTML="";
snakearr.forEach((e,index)=>{
    snakeElement=document.createElement("div");
    snakeElement.style.gridRowStart=e.y;
    snakeElement.style.gridColumnStart=e.x;
    if(index===0)
    {
        snakeElement.classList.add("snake_head");
    }
    else{
       snakeElement.classList.add("snake_body") 
    }
    board.appendChild(snakeElement);
})
//display the food here
    foodElement=document.createElement("div");
        foodElement.style.gridRowStart=food.y;
        foodElement.style.gridColumnStart=food.x;
        foodElement.classList.add("snake_food");
        board.appendChild(foodElement);
}

// Main logic Start 
// musicsound.play();
let hiscore = localStorage.getItem("hiscore")
if(hiscore===null){
    hiscoreval=0;
    localStorage.setItem("hiscore",JSON.stringify(hiscoreval))
}
else{
    hiscoreval=JSON.parse(hiscore);
    hi_score.innerHTML="Hi-Score: "+hiscore;
}
window.requestAnimationFrame(main);
window.addEventListener("keydown",e=>{
    inputDir={x:0,y:1}        //start the game
// musicsound.play();
// function down(a){
//    let down= document.querySelector(`.snake_head`)
//     down.style.transform= rotate(45deg);
//     down.style.rotate(45deg);                                want to rotate my snake head
// }
    movesound.play();
    switch (e.key) {
        case "ArrowUp":
            // console.log("ArrowUp")
            inputDir.x=0;
            inputDir.y=-1;
            break;
        case "ArrowDown":
            inputDir.x=0;
            inputDir.y=1;
            // console.log("ArrowDown")
            
            break;
        case "ArrowLeft":
            inputDir.x=-1;
            inputDir.y=0;
            // console.log("ArrowLeft")
            break;
        case "ArrowRight":
            inputDir.x=1;
            inputDir.y=0;
            // console.log("ArrowRight")
            break;
    
        default:
            break;
    }
});
