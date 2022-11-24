    let twoBtn =document.getElementById("two")
    let threeBtn=document.getElementById("three")
    let fourBtn=document.getElementById("four")
    let imgchange = document.getElementById("imgchange")
    let nextBtn= document.getElementById("NEXT")
    let prevBtn=document.getElementById("PREVIOUS")
    // const inputBtn=document.getElementById("buscar")

    twoBtn.onclick =function(){
        imgchange.src= "HOME/two.webp"
    }

    threeBtn.onclick = function(){
        imgchange.src ="HOME/three.png"
    }

    fourBtn.onclick=function(){
        imgchange.src="HOME/four.jpg"
    }

    let imageArray = ["gucciR/1.webp","gucciR/2.webp","gucciR/3.webp","gucciR/4.webp","gucciR/5.webp","gucciR/6.webp","gucciR/7.webp"
    ,"gucciR/8.webp","gucciR/9.webp","gucciR/10.webp","gucciR/11.webp","gucciR/12.webp","gucciR/13.webp","gucciR/14.webp","gucciR/15.webp"
    ,"gucciR/16.webp","gucciR/17.webp","gucciR/18.webp","gucciR/19.webp","gucciR/20.webp"]
    
    const firstImage = 0;
    const lastImage = imageArray.length -1;
    let currentImage= 0;

    nextBtn.addEventListener('click',() =>
    {
        const imageTag=document.getElementById("slider-img")
        currentImage++;
        if(currentImage >= lastImage){
            currentImage= 19;
        }
        imageTag.src=imageArray[currentImage];
        document.getElementById("info").innerHTML=(currentImage + 1) +'/20'
    
    })

    prevBtn.addEventListener('click',()=>{
        const imageTag=document.getElementById("slider-img")
        currentImage--;
        if(currentImage <= firstImage){
            currentImage= 0;
        }
        imageTag.src=imageArray[currentImage];
        document.getElementById("info").innerHTML=(currentImage + 1) +'/20'
    })

    
    



