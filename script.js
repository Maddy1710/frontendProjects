score=0;
cross=true;
gameoverMusic=new Audio('gameover.wav');
gameMusic=new Audio('mario.wav');

setTimeout(() => {
    gameMusic.play();
}, 100);
document.onkeydown=function(e){
    if (e.keyCode==38) {
        image=document.querySelector(".image");
        image.classList.add('animateimage');
        setTimeout(() => {
            image.classList.remove('animateimage');
        }, 700);     
    }
    if (e.keyCode==39) {
        image=document.querySelector(".image");
        imagex=parseInt(window.getComputedStyle(image,null).getPropertyValue('left'));
        image.style.left=imagex+150+"px";   
    }
    if (e.keyCode==37) {
        image=document.querySelector(".image");
        imagex=parseInt(window.getComputedStyle(image,null).getPropertyValue('left'));
        image.style.left=imagex-150+"px";   
    }
}

setInterval(() => {
    let image=document.querySelector('.image');
    let dragon=document.querySelector('.dragon');
    let gameOver=document.querySelector('.gameOver');

    dx=parseInt(window.getComputedStyle(image,null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(image,null).getPropertyValue('top'))

    ox=parseInt(window.getComputedStyle(dragon,null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(dragon,null).getPropertyValue('top'))

    offsetX=Math.abs(dx-ox);
    offsetY=Math.abs(dy-oy)
    if(offsetX<80 && offsetY<52)
    {
        gameOver.style.visibility='visible';
        dragon.classList.remove('dragonAni');
        gameMusic.pause();

        gameoverMusic.play();

        setTimeout(() => {
            gameoverMusic.pause();

            
        }, 5000);
    }
    else if(offsetX<80 && cross){
        score+=1;
        scoreupdate(score);
        console.log("Score"+score)
        cross=false
        setTimeout(() => {
            cross=true;
        }, 1000);
        anidur=parseFloat(window.getComputedStyle(dragon,null).getPropertyValue('animation-duration'));
        newdur= anidur-0.4;
        dragon.style.animationDuration = newdur +'s';
        console.log(newdur);
    }
}, 10);

function scoreupdate(score){
    scoreCount.innerHTML="Your Score: "+score;
    
}