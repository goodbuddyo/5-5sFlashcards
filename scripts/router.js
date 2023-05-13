


window.addEventListener("DOMContentLoaded",() => {
  document.querySelectorAll("a.spa-link").forEach(element => {
    element.addEventListener("click",event => {
      event.preventDefault();
      goTo(element.href);
    })
  })
});
// note: the spa-link <a> tags in the gameboard 
// are not created until after the 5 topics are submitted.
// so a similar forEach() and addEventListner function have been added
// in app.js after loadQuestions() is invoked

// eventListner to enable browser forward and back buttons 
// removed the (data) arg here to address "data not defined" error
window.addEventListener("popstate",event => {
  renderRoute();

});

// add existing page to history, display next page
function goTo(path,data) {
  history.pushState(data,null,path);
  renderRoute(data);
}

// note: in the "data" for goTo was provided through loadEvents "forEach(event => "
// forEach(event => {
// in this project, the "data" will be provided in the 5 slicedArray objects (app.js) 
// slicedArray1.forEach(question => {
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
      break;
    case "/myquestion":
      document.getElementById("fcQuestion").hidden=false;
      renderQuestionDetails(data);
      break;
    case "/answer":
      document.getElementById("fcAnswer").hidden=false;
      break;

    // note: startGame button routes to fcGameBoard in app.js (not router.js)

  }
}