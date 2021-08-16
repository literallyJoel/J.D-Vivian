$(function () {
	loadContent();

	window.onhashchange = () => {
		loadContent();
	};
});


function loadContent() {
   

    
    if(window.location.hash=="#about"){
        loadAbout();
        return;
    }else if(window.location.hash=="#projects"){
        loadDankins();
        return;
    }else if(window.location.hash=="#download"){
        loadDownload();
        return;
    }

    loadAbout();
}



function loadAbout(){
  
    $(".active").removeClass("active");
    $(".about-me").addClass("active");
    document.title = "J.D Vivian - About Me"
    $(".content").fadeOut(300, function(){
        $(this).css("background-color", "white");
        $(this).load("/pages/CV/about.html", function(){
            $(this).fadeIn(300);
        });
    })
  

 
}


function loadDankins(){


    $(".active").removeClass("active");
    $(".coding-projects").addClass("active");
    document.title = "J.D Vivian - Coding Projects"

    $(".content").fadeOut(300, function(){
        $(this).css("background-color", "#0E2431");
        $(this).load("/pages/CV/dankins.html", function(){
            $(this).fadeIn(300);
        });
    })
}

function loadDownload(){
    $(".active").removeClass("active");
    $(".download-cv").addClass("active");
    document.title = "J.D Vivian - Download My CV"

    $(".content").fadeOut(300, function(){
        $(this).css("background-color", "white");
        $(this).load("/pages/CV/download.html", function(){
            $(this).fadeIn(300);
        });
    })

}
$(".my-cv").click(function(){
    $(".active").removeClass("active");
    $(".my-cv").addClass("active");
    document.title = "J.D Vivian - My CV";

    $(".content").fadeOut(300, function(){
        window.location.href ="cv"
    })
  
});

$(".about-me").click(function(){
    window.location.href="#about"
  
});


$(".coding-projects").click(function(){
    window.location.href="#projects"
  
});

$(".download-cv").click(function(){
    window.location.href="#download"
  
});

//tooltips
(function () {
    'use strict'
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
      new bootstrap.Tooltip(tooltipTriggerEl)
    })
  })()
  