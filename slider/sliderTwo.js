
var slideIndex = 0;
var img =1;
var TIMER = 3000;
var array1 =["../images/ramos8.jpg",
            "../images/ramos10.jpg",
            "../images/ramos11.jpg",
            "../images/ramos3.jpg",
            "../images/ramos14.jpg",
            "../images/Ramos5.jpg",
            "../images/ramos12.jpg",
            "../images/ramos13.jpg"];

setInterval(function(){
    if(img <= array1.length-1){
        showDivs(img++);
    }
    else{
        img=0;
    }
},TIMER);

    function plusDivs(n) {
        showDivs(slideIndex += n);
    }
    function navDiv(a){
        showDivs(a);
    }

    function showDivs(n) {
        var x = document.getElementById("mySlides");
        var left = document.getElementsByClassName("display-left");
        var right = document.getElementsByClassName("display-right");
        //alert(slideIndex);

        x.style.opacity = 0;
        setTimeout(function() {
            slideIndex = n;
            x.src = array1[slideIndex];
            x.style.opacity = 1;
            console.log(array1[slideIndex]);

            //right button
            if(slideIndex < array1.length - 1){
                right[0].style.display = "block";

            } else{
                right[0].style.display = "none";
            }

            //ternaryOperator
            //right = (slideIndex < array1.length - 1)? this.style.display = "block" : this.style.display = "none";

            //left button
            if(slideIndex > 0){
                left[0].style.display = "block";
            } else{
                left[0].style.display = "none";
            }

        },500);
    }
showDivs(slideIndex);

