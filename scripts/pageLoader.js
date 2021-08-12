$(function () {
	loadContent();

	window.onhashchange = () => {
		loadContent();
	};
	$(".dropdown-toggle").click((event) => {
		$(".dropdown-menu").addClass("show");
		event.preventDefault();
		event.stopPropagation();
	});
	$(document).click(() => {
		$(".dropdown-menu").removeClass("show");
	});
});

function clearPage(){
$("#content").html("");
}

function loadContent() {
if (window.location.hash == "#cv") {
loadOnlineCV();
return;
}
loadHome();
}

function loadHome(){
clearPage
document.title = "J.D Vivian - Home";
$("#content").load("pages/home.html");
$("li.active").removeClass("active");
$("li.homeBttn").addClass("active");
window.location.href = "#home";
}

function loadOnlineCV(){
clearPage
document.title = "J.D Vivian - Online CV";
$("#content").load("pages/OnlineCV.html");
$("li.active").removeClass("active");
$("li.CVBttn").addClass("active");
window.location.href="#cv";
}
