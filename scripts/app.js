
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
  }

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

  startFC.addEventListener("click",(e) => {
    e.preventDefault()
    if(allValuesSet) {
      //missingAlertClassList.add("hidden");
      //let ddobjs=[dropdown01.value,dropdown02.value,dropdown03.value,dropdown04.value,dropdown05.value]
      console.log('all vals are set')
      let resultArray
      let shuffledArray
      //console.log(ddobjs)
      // create an array of json urls for the 5 selected topics
      let all_json_urls=[`json/${dropdown01.value}.json`,`json/${dropdown02.value}.json`,`json/${dropdown03.value}.json`,`json/${dropdown04.value}.json`,`json/${dropdown05.value}.json`]
      //console.log(all_json_urls);
      //console.log(all_json_urls[0]);
      const getDataForSelectVal=async function(n) {
        const response=await fetch(all_json_urls[n]);
        questions=await response.json();
        resultArray=questions.results
        // create a copy of the results array
        shuffledArray=[...resultArray];

        // use a shuffle to get 5 random q's from the fetched json file
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
        }
        shuffledQs=shuffle(shuffledArray);

        // slice out first 5 Qs from the shuffledQs array
        // add qNum and qSrc properties for game board display
        const slicedArray=shuffledQs.slice(0,5);
        let q=1;
        let qSrc;
        for(let i=0;i<slicedArray.length;i++) {
          slicedArray[i].qNum=q; // qs need a num for board
          slicedArray[i].qSrc='';  // future qs will need src
          console.log(slicedArray[i]);
          q++
        }

        function loadQuestions(n) {
          console.log('load qs is called ')
          //document.querySelector("#boardCol01 ul").innerHTML="";
          if(n==0) {
            document.querySelector('#boardCol01 ul').innerHTML="";
          } else if(n==1) {
            document.querySelector('#boardCol02 ul').innerHTML="";
          } else if(n==2) {
            document.querySelector('#boardCol03 ul').innerHTML="";
          } else if(n==3) {
            document.querySelector('#boardCol04 ul').innerHTML="";
          } else {
            document.querySelector('#boardCol05 ul').innerHTML="";
          }


          let q;

          slicedArray.forEach(question => {
            const li=document.createElement("li");
            q=question.qNum
            if(q==1) {

              li.innerHTML=`
              <span class="jepTopic"><h3 class="d-flex align-items-center justify-content-center">${question.category}</h3></span>
            </li>
            <li class="clear">
            <a class="jAnswer btn btn-primary" href="#">${question.qNum}</a>
            `;

            } else {
              li.innerHTML=`
            <a class="jAnswer btn btn-primary" href="#">${question.qNum}</a>
            `;
            }

            //document.querySelector('#boardCol01 ul').appendChild(li);



            if(n==0) {
              document.querySelector('#boardCol01 ul').appendChild(li);
            } else if(n==1) {
              document.querySelector('#boardCol02 ul').appendChild(li);
            } else if(n==2) {
              document.querySelector('#boardCol03 ul').appendChild(li);
            } else if(n==3) {
              document.querySelector('#boardCol04 ul').appendChild(li);
            } else {
              document.querySelector('#boardCol05 ul').appendChild(li);
            }



          })
        }

        loadQuestions();
      }

      getDataForSelectVal(0);
      getDataForSelectVal(1);
      getDataForSelectVal(2);
      getDataForSelectVal(3);
      getDataForSelectVal(4);
    }

  });
  // note: updated all_select_values is out of scope here
});

