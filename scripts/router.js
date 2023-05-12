window.addEventListener("DOMContentLoaded",() => {
  document.querySelectorAll("a.spa-link").forEach(element => {
    element.addEventListener("click",event => {
      event.preventDefault();
      goTo(element.href);
    })
  })
});

// enable browser forward and back buttons
window.addEventListener("popstate",event => {
  renderRoute();
});

function goTo(path,data) {
  history.pushState(data,null,path);
  renderRoute(data);
}

function renderRoute(data) {
  const path=document.location.pathname;
  // hide previous page
  document.querySelectorAll(".page").forEach(e => e.hidden=true);
  // render the new page
  switch(path) {
    case "/":
      document.getElementById("fcHome").hidden=false;
      break;
    case "":
      document.getElementById("fcHome").hidden=false;
      break;
    case "/instructions":
      document.getElementById("fcInstructions").hidden=false;
      break;
    case "/gameboard":
      document.getElementById("fcGameBoard").hidden=false;
      //renderQuestionDetails(data);
      break;
    case "/myquestion":
      document.getElementById("fcQuestion").hidden=false;
      //renderQuestionDetails(data);
      break;
    case "/answer":
      document.getElementById("fcAnswer").hidden=false;
      //renderQuestionDetails(data);
      break;

    // note: startGame button routes to fcGameBoard in app.js

  }
}