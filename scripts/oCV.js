//When you load the page it'll runb load content
$(function () {
	loadContent();

    //if you change the page hash (ie 'jdvivian.co.uk/oCV#about to jdvivian.co.uk/oCV#download) it'll run loadContent();
	window.onhashchange = () => {
		loadContent();
	};
});


function loadContent() {
   
    //This checks the hash and loads the appropriate page
    
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


//Sets the background colour correctly, fades the content div out, loads the new content, and then fades it back in
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

//all the loadX(); methods work the same
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

//This one works differently and actually changes the entie page
//rather than just loading content into a div
//This is because loading into a div with the EJS would have been difficult.
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

//Makes the sidebar tooltips work (thanks to the bootstrap toolbar exampels for this one)
(function () {
    'use strict'
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
      new bootstrap.Tooltip(tooltipTriggerEl)
    })
  })()
  