
window.addEventListener("DOMContentLoaded",() => {
  //let all_select_values=[];

  // grab the 5 topic HTML select elements by id
  let dropdown01=document.getElementById("catSelect1");
  let dropdown02=document.getElementById("catSelect2");
  let dropdown03=document.getElementById("catSelect3");
  let dropdown04=document.getElementById("catSelect4");
  let dropdown05=document.getElementById("catSelect5");
  let allValuesSet=false;
  // let filteredQs not filtering so just use slicedArray

  // display an alert to insure all 5 selects have a value
  const checkAllSelectValues=function() {
    if(dropdown01.value==''||dropdown02.value==''||dropdown03.value==''||dropdown04.value==''||dropdown05.value=='') {
      //console.log('somethings missing')
      allValuesSet=false
      missingAlertClassList.remove("hidden");
    } else {
      //console.log('all 5 have values')
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
      //console.log(json_urls);
      //console.log(json_urls[0]);

      let resultArray
      let shuffledArray
      let slicedArray1,slicedArray2,slicedArray3,slicedArray4,slicedArray5

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

        // 



        // slice out first 5 Qs from the shuffledQs array
        // add qNum and qSrc properties for game board display
        const slicedArray=shuffledQs.slice(0,5);
        let q=1;
        let qSrc;
        for(let i=0;i<slicedArray.length;i++) {
          slicedArray[i].qNum=q; // to display q number on board
          slicedArray[i].qSrc='test';  // future qs will need src
          console.log(slicedArray[i]);
          q++
        }
        if(n==0) {
          console.log(n);
          slicedArray1=[...slicedArray]
        } else if(n==1) {
          console.log(n);
          slicedArray2=[...slicedArray]
        } else if(n==2) {
          console.log(n);
          slicedArray3=[...slicedArray]
        } else if(n==3) {
          console.log(n);
          slicedArray4=[...slicedArray]
        } else if(n=4) {
          console.log(n);
          slicedArray5=[...slicedArray]
        }
        else {
          console.log('param for loadQuestions must be 0 - 4')
        }

        function loadQuestions(n) {
          //console.log('load qs is called ')
          //document.querySelector("#boardCol01 ul").innerHTML="";
          if(n==0) {
            console.log(n);
            document.querySelector('#boardCol01 ul').innerHTML="";
          } else if(n==1) {
            console.log(n);
            document.querySelector('#boardCol02 ul').innerHTML="";
          } else if(n==2) {
            console.log(n);
            document.querySelector('#boardCol03 ul').innerHTML="";
          } else if(n==3) {
            console.log(n);
            document.querySelector('#boardCol04 ul').innerHTML="";
          } else if(n==4) {
            console.log(n);
            document.querySelector('#boardCol05 ul').innerHTML="";
          } else {
            console.error('loadQuestions param must be 0 - 4');
          };
          let q;
          if(n==0) {
            //console.log(slicedArray1[0])\

            console.log('slicedArray1 is array?')
            console.log(Array.isArray(slicedArray1));
            slicedArray1.forEach(question => {
              const li=document.createElement("li");
              q=question.qNum
              if(q==1) {
                // set topic li and q 1 li
                li.innerHTML=`
                <span class="jepTopic"><h3 class="d-flex align-items-center justify-content-center">${question.category}</h3></span>
                </li>
                <li class="clear">
                <a class="jAnswer btn btn-primary" href="#">${question.qNum}</a>
                `;
              } else {
                // qs 2 - 4
                li.innerHTML=`
            <a class="jAnswer btn btn-primary" href="#">${question.qNum}</a>
            `;
              };
              document.querySelector('#boardCol01 ul').appendChild(li);
            });
          } else if(n==1) {
            console.log('slicedArray2 is array?')
            console.log(Array.isArray(slicedArray2));
            slicedArray2.forEach(question => {
              const li=document.createElement("li");
              q=question.qNum
              if(q==1) {
                li.innerHTML=`<span class="jepTopic"><h3 class="d-flex align-items-center justify-content-center">${question.category}</h3></span>
                </li>  <li class="clear">
                <a class="jAnswer btn btn-primary" href="#">${question.qNum}</a>`;
              } else {
                li.innerHTML=` <a class="jAnswer btn btn-primary" href="#">${question.qNum}</a>
            `;
              };
              document.querySelector('#boardCol02 ul').appendChild(li);
            });
          } else if(n==2) {
            console.log('slicedArray3 is array?')
            console.log(Array.isArray(slicedArray3));
            console.log(slicedArray3[0])
            slicedArray3.forEach(question => {
              const li=document.createElement("li");
              q=question.qNum
              if(q==1) {
                li.innerHTML=`<span class="jepTopic"><h3 class="d-flex align-items-center justify-content-center">${question.category}</h3></span>
                </li>  <li class="clear">
                <a class="jAnswer btn btn-primary" href="#">${question.qNum}</a>`;
              } else {
                li.innerHTML=` <a class="jAnswer btn btn-primary" href="#">${question.qNum}</a>
            `;
              };
              document.querySelector('#boardCol03 ul').appendChild(li);
            });
          } else if(n==3) {
            console.log('slicedArray4 is array?')
            console.log(Array.isArray(slicedArray4));
            console.log(slicedArray4[0])
            slicedArray4.forEach(question => {
              const li=document.createElement("li");
              q=question.qNum
              if(q==1) {
                li.innerHTML=`<span class="jepTopic"><h3 class="d-flex align-items-center justify-content-center">${question.category}</h3></span>
                </li>  <li class="clear">
                <a class="jAnswer btn btn-primary" href="#">${question.qNum}</a>`;
              } else {
                li.innerHTML=` <a class="jAnswer btn btn-primary" href="#">${question.qNum}</a>
            `;
              };
              document.querySelector('#boardCol04 ul').appendChild(li);
            });
          } else if(n==4) {
            console.log('slicedArray5 is array?')
            console.log(Array.isArray(slicedArray5));
            //console.log(slicedArray5[0])
            slicedArray5.forEach(question => {
              const li=document.createElement("li");
              q=question.qNum
              if(q==1) {
                li.innerHTML=`<span class="jepTopic"><h3 class="d-flex align-items-center justify-content-center">${question.category}</h3></span>
                </li>  <li class="clear">
                <a class="jAnswer btn btn-primary" href="#">${question.qNum}</a>`;
              } else {
                li.innerHTML=` <a class="jAnswer btn btn-primary" href="#">${question.qNum}</a>
            `;
              }
              document.querySelector('#boardCol05 ul').appendChild(li);
            }
            );
          } else {
            console.error('loadQuestions param must be 1 - 5');
          };
        };
        loadQuestions(0);
        loadQuestions(1);
        loadQuestions(2);
        loadQuestions(3);
        loadQuestions(4);
      };

      getDataForSelectVal(0);
      getDataForSelectVal(1);
      getDataForSelectVal(2);
      getDataForSelectVal(3);
      getDataForSelectVal(4);
    };

  });
  // note: updated all_select_values is out of scope here
});

