




window.addEventListener("DOMContentLoaded",() => {
  document.querySelectorAll("a.spa-link").forEach(element => {
    element.addEventListener("click",event => {
      event.preventDefault();
      goTo(element.href);
    })
  })
});
// note: the spa-link a tags in the gameboard 
// are not created until after the 5 topics are submitted.
// so a similar forEach() and addEventListner function are added
// in app.js after loadQuestions() is invoked

// enable browser forward and back buttons
window.addEventListener("popstate",event => {
  renderRoute(data);
});

// add existing page to history, display next page
function goTo(path,data) {
  history.pushState(data,null,path);
  console.log(path);
  // note: getting undefined error for data 
  //console.log(data);
  renderRoute(data);
}

// note: in tutorial "data" for goTo is provided through loadEvents "forEach(event => "
//filteredEvents.forEach(event => {
//  const tr=document.createElement("tr");
//  tr.innerHTML=` <td class="event-image"> .... ${event.image}
// .... goTo("/details", event);x1
1
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
      renderQuestionDetails(data);
      break;
    case "/answer":
      document.getElementById("fcAnswer").hidden=false;
      //renderQuestionDetails(data);
      break;

    // note: startGame button routes to fcGameBoard in app.js

  }
}