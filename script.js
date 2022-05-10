var header = document.getElementById("header");
var navigationHeader = document.getElementById("navigation_header");
var content = document.getElementById("content");
var showSideBar = false;

function toggleSideBar() {
  showSideBar = !showSideBar;
  if (showSideBar) {
    navigationHeader.style.marginLeft = "-10vw";
    navigationHeader.style.animationName = "showSidebar";
    content.style.filter = "blur(2px)";
  } else {
    navigationHeader.style.marginLeft = "-100vw";
    navigationHeader.style.animationName = "";
    content.style.filter = "";
  }
}

function toggleSideBar2() {
  showSideBar = !showSideBar;
  if (showSideBar) {
    navigationHeader.style.marginLeft = "-10vw";
    navigationHeader.style.animationName = "showSidebar";
  } else {
    navigationHeader.style.marginLeft = "-100vw";
    navigationHeader.style.animationName = "";
    content.style.filter = "";
  }
}

function closeSideBar() {
  if (showSideBar) {
    toggleSideBar();
  }
}

window.addEventListener("resize", (event) => {
  if (window.innerWidth > 768 && showSideBar) {
    toggleSideBar();
  }
});
