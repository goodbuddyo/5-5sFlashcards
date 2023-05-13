

// credit Maximiliano Firtman and Corey House for help with many features

window.addEventListener("DOMContentLoaded",() => {
  //let all_select_values=[];

  // grab the 5 topic HTML select elements by id
  let dropdown01=document.getElementById("catSelect1");
  let dropdown02=document.getElementById("catSelect2");
  let dropdown03=document.getElementById("catSelect3");
  let dropdown04=document.getElementById("catSelect4");
  let dropdown05=document.getElementById("catSelect5");
  let allValuesSet=false;

  // display an alert to insure all 5 selects have a value
  const checkAllSelectValues=function() {
    if(dropdown01.value==''||dropdown02.value==''||dropdown03.value==''||dropdown04.value==''||dropdown05.value=='') {
      allValuesSet=false
      missingAlertClassList.remove("hidden");
    } else {
      allValuesSet=true
      missingAlertClassList.add("hidden");
    }
  };

  dropdown01.addEventListener("change",(e) => {
    checkAllSelectValues();
  });
  dropdown02.addEventListener("change",(e) => {
    checkAllSelectValues();
  });
  dropdown03.addEventListener("change",(e) => {
    checkAllSelectValues();
  });
  dropdown04.addEventListener("change",(e) => {
    checkAllSelectValues();
  });
  dropdown05.addEventListener("change",(e) => {
    checkAllSelectValues();
  });

  const startFC=document.getElementById("startGame");
  const missingAlert=document.getElementById("missingSelectValue");
  const missingAlertClassList=missingAlert.classList;

  //////////////////////////
  // use the select values to create 5 json urls
  startFC.addEventListener("click",(e) => {
    e.preventDefault()
    if(allValuesSet) {
      // create an array of json urls for the 5 selected topics
      let json_urls=[`json/${dropdown01.value}.json`,`json/${dropdown02.value}.json`,`json/${dropdown03.value}.json`,`json/${dropdown04.value}.json`,`json/${dropdown05.value}.json`]
      let resultArray
      let shuffledArray
      let slicedArray1=[],slicedArray2=[],slicedArray3=[],slicedArray4=[],slicedArray5=[]

      // fetch the qs for topic n
      const getDataForSelectVal=async function(n) {
        const response=await fetch(json_urls[n]);
        questions=await response.json();
        resultArray=questions.results
        // create a copy of the results array
        shuffledArray=[...resultArray];

        // shuffle results from the fetched json file
        function shuffle(array) {
          var currentIndex=array.length,temporaryValue,randomIndex;
          // While there remain elements to shuffle...
          while(0!==currentIndex) {
            // Pick a remaining element...
            randomIndex=Math.floor(Math.random()*currentIndex);
            currentIndex-=1;
            // And swap it with the current element.
            temporaryValue=array[currentIndex];
            array[currentIndex]=array[randomIndex];
            array[randomIndex]=temporaryValue;
          }
          return array;
        };
        shuffledQs=shuffle(shuffledArray);

        // slice out 5 Qs from shuffled array
        // add q_num and q_source properties for game board display
        const slicedArray=shuffledQs.slice(0,5);
        let q=1;
        let q_source;
        for(let i=0;i<slicedArray.length;i++) {
          slicedArray[i].q_num=q; // to display q number on board
          if(slicedArray[i].q_source==undefined) {
            slicedArray[i].q_source='opentdb.com';
          }
          // future qs will need src
          q++
        }
        if(n==0) {
          slicedArray1=[...slicedArray]
        } else if(n==1) {
          slicedArray2=[...slicedArray]
        } else if(n==2) {
          slicedArray3=[...slicedArray]
        } else if(n==3) {
          slicedArray4=[...slicedArray]
        } else if(n=4) {
          slicedArray5=[...slicedArray]
        }
        else {
          console.log('Param for loadQuestions must be 0 - 4')
        }



        function loadQuestions(num) {
          if(num==0) {
            document.querySelector('#boardCol01 ul').innerHTML="";
          } else if(num==1) {
            document.querySelector('#boardCol02 ul').innerHTML="";
          } else if(num==2) {
            document.querySelector('#boardCol03 ul').innerHTML="";
          } else if(num==3) {
            document.querySelector('#boardCol04 ul').innerHTML="";
          } else if(num==4) {
            document.querySelector('#boardCol05 ul').innerHTML="";
          } else {
            console.error('loadQuestions param must be 0 - 4');
          };
          let questionData=[];
          let q;
          if(num==0) {
            slicedArray1.forEach(questionData => {
              const li=document.createElement("li");
              // note: since loadQuestions is invoked for each topic 
              // we need an addEventListener that sends the correct data for each topic
              // for goTo() to work in the gameboard li item clicks
              li.addEventListener("click",() => {
                goTo("/myquestion",questionData);

              });
              q=questionData.q_num
              if(q==1) {
                // for the first q create both topic li and Q1 li
                li.innerHTML=`
                <span class="jepTopic"><h3 class="d-flex align-items-center justify-content-center">${questionData.category}</h3></span>
                </li>
                <li class="clear">
                <a class="jAnswer li-spa-link btn btn-primary" id="col${num}Q${q}" href="/myquestion">${q}</a>
                `;
              } else {
                // qs 2 - 4 innerHTML the number and href
                li.innerHTML=`
                <a class="jAnswer li-spa-link btn btn-primary" id="col${num}Q${q}" href="/myquestion">${q}</a>
                `;
              };
              document.querySelector('#boardCol01 ul').appendChild(li);
              // document.getElementById(`#col${num}Q${q}`).style.color="yellow";
            });

          } else if(num==1) {
            slicedArray2.forEach(questionData => {
              const li=document.createElement("li");
              li.addEventListener("click",() => {
                goTo("/myquestion",questionData);
              });
              q=questionData.q_num;
              if(q==1) {
                li.innerHTML=`<span class="jepTopic"><h3 class="d-flex align-items-center justify-content-center">${questionData.category}</h3></span>
                </li>  <li class="clear">
                <a class="jAnswer li-spa-link btn btn-primary" id="col${num}Q${q}" href="/myquestion">${q}</a>`;
              } else {
                li.innerHTML=`<a class="jAnswer li-spa-link btn btn-primary" id="col${num}Q${q}" href="/myquestion">${q}</a>
            `;
              };
              document.querySelector('#boardCol02 ul').appendChild(li);
              // document.getElementById(`#col${num}Q${q}`).style.color="yellow";
            });

          } else if(num==2) {
            slicedArray3.forEach(questionData => {
              const li=document.createElement("li");
              li.addEventListener("click",() => {
                goTo("/myquestion",questionData);

              });
              q=questionData.q_num
              if(q==1) {
                li.innerHTML=`<span class="jepTopic"><h3 class="d-flex align-items-center justify-content-center">${questionData.category}</h3></span>
                </li>  <li class="clear">
                <a class="jAnswer li-spa-link btn btn-primary" id="col${num}Q${q}" href="/myquestion">${q}</a>`;
              } else {
                li.innerHTML=`<a class="jAnswer li-spa-link btn btn-primary" id="col${num}Q${q}" href="/myquestion">${q}</a>
            `;
              };
              document.querySelector('#boardCol03 ul').appendChild(li);
              // document.getElementById(`#col${num}Q${q}`).style.color="yellow";
            });
          } else if(num==3) {
            slicedArray4.forEach(questionData => {
              const li=document.createElement("li");
              li.addEventListener("click",() => {
                goTo("/myquestion",questionData);

              });
              q=questionData.q_num
              if(q==1) {
                li.innerHTML=`<span class="jepTopic"><h3 class="d-flex align-items-center justify-content-center">${questionData.category}</h3></span>
                </li>  <li class="clear">
                <a class="jAnswer li-spa-link btn btn-primary" id="col${num}Q${q}" href="/myquestion">${q}</a>`;
              } else {
                li.innerHTML=`<a class="jAnswer li-spa-link btn btn-primary" id="col${num}Q${q}" href="/myquestion">${q}</a>
            `;
              };
              document.querySelector('#boardCol04 ul').appendChild(li);
              // document.getElementById(`#col${num}Q${q}`).style.color="yellow";
            });
          } else if(num==4) {
            slicedArray5.forEach(questionData => {
              const li=document.createElement("li");
              li.addEventListener("click",() => {
                goTo("/myquestion",questionData)

              });
              q=questionData.q_num
              if(q==1) {
                li.innerHTML=`<span class="jepTopic"><h3 class="d-flex align-items-center justify-content-center">${questionData.category}</h3></span>
                </li>  <li class="clear">
                <a class="jAnswer li-spa-link btn btn-primary" id="col${num}Q${q}" href="/myquestion">${q}</a>`;
              } else {
                li.innerHTML=`<a class="jAnswer li-spa-link btn btn-primary" id="col${num}Q${q}" href="/myquestion">${q}</a>
            `;
              }
              document.querySelector('#boardCol05 ul').appendChild(li);
              // document.getElementById(`#col${num}Q${q}`).style.color="yellow";
            }
            );

          } else {
            console.error('loadQuestions param must be 0 - 4');
          };




        };
        // end function declaration loadQuestions

        loadQuestions(0);
        loadQuestions(1);
        loadQuestions(2);
        loadQuestions(3);
        loadQuestions(4);

        // note: <a> tags for the above li's are not in the DOM 
        // until after all loadQuestions finish loading
        // so we need an addEventListner for the a.li-spa-link clicks
        // for goTo() to work 
        document.querySelectorAll("a.li-spa-link").forEach(element => {
          element.addEventListener("click",event => {
            event.preventDefault();
            goTo(element.href);


          })
        })

        // hide all class .page elements
        document.querySelectorAll(".page").forEach(e => e.hidden=true);
        //  display game board page element
        document.getElementById("fcGameBoard").hidden=false;
      };

      getDataForSelectVal(0);
      getDataForSelectVal(1);
      getDataForSelectVal(2);
      getDataForSelectVal(3);
      getDataForSelectVal(4);
    } else {
      console.log('Please select all 5 topics')
    };




  }); // end startFC event listener

});  // end DOMContentLoaded


function renderQuestionDetails(questionData) {
  // must add if(questionData) here to avoid - Cannot read properties of undefined
  // may be a bubbling issue ??
  if(questionData) {
    document.querySelector(".question_category").textContent=questionData.category;
    document.querySelector(".question_question").textContent=questionData.question;
    document.querySelector(".question_difficulty").textContent=questionData.difficulty;
    document.querySelector(".question_q_num").textContent=questionData.q_num.toString();

    document.querySelector(".answer-category").textContent=questionData.category;
    document.querySelector(".answer-answer").textContent=questionData.correct_answer;
    document.querySelector(".answer-num").textContent=questionData.q_num.toString();
    document.querySelector(".q_source").textContent=questionData.q_source;
  }





}
