const button = document.getElementById("button");
const pic_1 = document.getElementById("image one");
const pic_2= document.getElementById("image two");
const attribute_changer = document.getElementById("results");
button.addEventListener("click",function(){
    let randomi=Math.floor(Math.random(1)*6 +1);
    let str=String(randomi);

    let randomii=Math.floor(Math.random(1)*6 +1);
    let str1=String(randomii);

    pic_1.setAttribute("src",str+".jpeg");
    pic_2.setAttribute("src",str1+".jpeg");

    if(Number(pic_1.getAttribute("src").slice(0,1))>Number(pic_2.getAttribute("src").slice(0,1))){
        attribute_changer.textContent="Player 1 Wins !";
    }
    else if (Number(pic_1.getAttribute("src").slice(0,1))===Number(pic_2.getAttribute("src").slice(0,1))){
        attribute_changer.textContent="it's a Draw !";
    }
    else{
        attribute_changer.textContent="Player 2 Wins !";
    }
    
})

