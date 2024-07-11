

//funtion to include html popup code

function includePopupHTML(){

    let html = ' <div id="vis-popup"><span id="close"><img id="npop" src="lightbox/images/close.jpg" alt=""></span><img id="leftarrow" src="images/button-arrow-left-1.png" alt=""><img id="rightarrow" src="lightbox/images/button-arrow-right-1.png" alt="right"><img id="mainPopImage" src="lightbox/images/mac.jpg" alt=""></div>'

    let popdiv = document.createElement("div");
    popdiv.innerHTML = html;
    document.body.insertBefore(popdiv, document.body.firstChild);
}

includePopupHTML();

//array where all images are stored
let img;


//function init plugin

function imagePopupInit(target){

    //select all images with class gievn in the parameter  target
    img = document.getElementsByClassName(target);

    //add event listeners to all the selected images
    for(let i = 0; i < img.length; i++){
        //add pointer
        img[i].style.cursor = 'pointer';

        //add event
        img[i].addEventListener('click', function(){
            document.getElementById('mainPopImage').src = this.src;
            document.getElementById('vis-popup').style.display = 'block';
            checkArrow();
        })
    }

    //next btn
    document.getElementById("rightarrow").addEventListener('click', function(){
        rightarrow();
    })

    //prev btn
    document.getElementById("leftarrow").addEventListener('click', function(){
        leftarrow();
    })
}

//close btn
let close = document.getElementById('close');
close.addEventListener('click', function(){
    document.getElementById('mainPopImage').src = "";
    document.getElementById('vis-popup').style.display = 'none';
});

//get the index of the current image of the array 
let current;
function getCurrentImage(){
    for(let i = 0; i < img.length; i++){
        if(img[i].src == document.getElementById('mainPopImage').src){  
            current = i;
        }
    }
}

//next image
function rightarrow(){
    getCurrentImage();
    current++;
    document.getElementById("mainPopImage").src = img[current].src;
    checkArrow();
}

//prev image
function leftarrow(){
    getCurrentImage();
    current--;
    document.getElementById("mainPopImage").src = img[current].src;
    checkArrow();
}

//remove arrow at first and last index
function checkArrow(){
    getCurrentImage();
    if(current == '0'){
        document.getElementById('leftarrow').style.display = 'none';
        document.getElementById('rightarrow').style.display = 'block';
    }
    else if(current == img.length-1){
        document.getElementById('rightarrow').style.display = 'none';
        document.getElementById('leftarrow').style.display = 'block';
    }
    else{
        document.getElementById('leftarrow').style.display = 'block';
        document.getElementById('rightarrow').style.display = 'block';
    }
}