window.onLoad = fadeIn();

function fadeIn(){
    $(".content").fadeIn(600)
}


$(".about-me").click(() =>{
    $(".content").fadeOut(300, ()=>{
        window.location.href="/oCV#about";
    });
});

$(".download-cv").click(() =>{
    $(".content").fadeOut(300, ()=>{
        window.location.href="/oCV#download";
    });
});

$(".coding-projects").click(() =>{
    $(".content").fadeOut(300, ()=>{
        window.location.href="/oCV#projects";
    });
});

//tooltips
(function () {
    'use strict'
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
      new bootstrap.Tooltip(tooltipTriggerEl)
    })
  })()
  