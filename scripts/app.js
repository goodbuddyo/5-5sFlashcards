
window.addEventListener("DOMContentLoaded",() => {
    //let all_select_values=[];
    let dropdown01=document.getElementById("catSelect1");
    let dropdown02=document.getElementById("catSelect2");
    let dropdown03=document.getElementById("catSelect3");
    let dropdown04=document.getElementById("catSelect4");
    let dropdown05=document.getElementById("catSelect5");


    // if user reverts to empty select value, alert and clear array
    dropdown01.addEventListener("change",(e) => {
        if(dropdown01.value==''||dropdown02.value==''||dropdown03.value==''||dropdown04.value==''||dropdown05.value=='') {
            missingAlertMsg.remove("hidden");
            //all_select_values=[]
        } else {
            missingAlertMsg.add("hidden");
        }
    });
    dropdown02.addEventListener("change",(e) => {
        if(dropdown01.value==''||dropdown02.value==''||dropdown03.value==''||dropdown04.value==''||dropdown05.value=='') {
            missingAlertMsg.remove("hidden");
            //all_select_values=[]
        } else {
            missingAlertMsg.add("hidden");
        }
    });
    dropdown03.addEventListener("change",(e) => {
        if(dropdown01.value==''||dropdown02.value==''||dropdown03.value==''||dropdown04.value==''||dropdown05.value=='') {
            missingAlertMsg.remove("hidden");
            //all_select_values=[]
        } else {
            missingAlertMsg.add("hidden");
        }
    });
    dropdown04.addEventListener("change",(e) => {
        if(dropdown01.value==''||dropdown02.value==''||dropdown03.value==''||dropdown04.value==''||dropdown05.value=='') {
            missingAlertMsg.remove("hidden");
            //all_select_values=[]
        } else {
            missingAlertMsg.add("hidden");
        }
    });
    dropdown05.addEventListener("change",(e) => {
        if(dropdown01.value==''||dropdown02.value==''||dropdown03.value==''||dropdown04.value==''||dropdown05.value=='') {
            missingAlertMsg.remove("hidden");
            //all_select_values=[]
        } else {
            missingAlertMsg.add("hidden");
        }
    });

    const startFlashCards=document.getElementById("startGame");
    const missingAlert=document.getElementById("needAllAlerts");
    const missingAlertMsg=missingAlert.classList;

    startFlashCards.addEventListener("click",(e) => {
        e.preventDefault()
        if(dropdown01.value==''||dropdown02.value==''||dropdown03.value==''||dropdown04.value==''||dropdown05.value=='') {
            missingAlertMsg.remove("hidden");
        } else {
            missingAlertMsg.add("hidden");
            //all_select_values=[]; // reset array
            let ddobjs=[dropdown01.value,dropdown02.value,dropdown03.value,dropdown04.value,dropdown05.value]
            let resultArray
            let shuffledArray
            //console.log(ddobjs)

            //all_select_values.push('dropdown01.value',dropdown02.value,dropdown03.value,dropdown04.value,dropdown05.value)
            // getting array of json urls got out of control
            let all_json_urls=[`json/${dropdown01.value}.json`,`json/${dropdown02.value}.json`,`json/${dropdown03.value}.json`,`json/${dropdown04.value}.json`,`json/${dropdown05.value}.json`]
            //console.log(all_json_urls);
            //console.log(all_json_urls[0]);
            const getSelectVal01=async function(n) {
                const response=await fetch(all_json_urls[n]);
                questions=await response.json();
                resultArray=questions.results
                shuffledArray=[...resultArray];
                //console.log(resultArray);

                //console.log(questions.results[0]);
                //console.log(questions.results[0].category);
                //console.log(questions.results[0].difficulty);
                //console.log(questions.results[0].question);
                //console.log(questions.results[0].correct_answer);

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
                // Used like so
                //var arr=[2,11,37,42];
                arr=shuffle(shuffledArray);
                //console.log(arr);
                const slicedArray=arr.slice(0,5);
                for(let i=0;i<slicedArray.length;i++) {
                    console.log(slicedArray[i]);
                }
            }
            getSelectVal01(1);

            // use a shuffle to allow conductor 5 q's to be unique
        }
        // look into Fisher-Yates shuffle to randomize the order of the returned questions
        // https://stackoverflow.com/questions/3718282/javascript-shuffling-objects-inside-an-object-randomize
        // https://www.webmound.com/shuffle-javascript-array/
        // https://stackoverflow.com/questions/58307056/how-to-shuffle-array-of-objects



        //console.log(all_json_urls);
        //console.log(all_json_urls[0]);
        //const getSelectVal01=async function(n) {
        //    const response=await fetch(all_json_urls[0]);
        //    questions=await response.json();
        //    console.log(questions.results[0]);
        //    console.log(questions.results[0].category);
        //    console.log(questions.results[0].difficulty);
        //    console.log(questions.results[0].question);
        //    console.log(questions.results[0].correct_answer);

        //(5)['json/gadgets.json','json/film.json','json/computers.json','json/books.json','json/art.json']
        //app.js: 73 json/gadgets.json
        //app.js: 77 {category: 'Science: Gadgets',type: 'multiple',difficulty: 'medium',question: 'What are the base station trackers used for the HTC Vive called?',correct_answer: 'Lighthouse', …}
        //app.js: 78 Science: Gadgets
        //app.js: 79 medium
        //app.js: 80 What are the base station trackers used for the HTC Vive called?
        //    app.js:81 Lighthouse




        // console.log(ddobjs)
        //(5)['gadgets','animals','art','cartoons','computers']

        //  console.log(all_json_urls[0]);
        //app.js: 73 json/gadgets.json


        //console.log(questions.results[2]);
        //{category: 'History',type: 'multiple',difficulty: 'easy',question: 'What was William Frederick Cody better known as?',correct_answer: 'Buffalo Bill', …}



        //  console.log(questions);
        //app.js: 77
        //{response_code: 0,results: Array(10)}
        //response_code
        //:
        //0
        //results
        //:
        //Array(10)
        //0
        //:
        //category
        //:
        //"Science: Gadgets"
        //correct_answer
        //:
        //"Lighthouse"
        //difficulty
        //:
        //"medium"
        //incorrect_answers
        //:
        //(3)['Motion','Constellation ','Trackers']
        //question
        //:
        //"What are the base station trackers used for the HTC Vive called?"
        //type
        //:
        //"multiple"
        //[[Prototype]]
        //:
        //Object
        //1
        //:
        //{category: 'Science: Gadgets',type: 'multiple',difficulty: 'medium',question: 'Which company designed the &quot;Betamax&quot; video cassette format?',correct_answer: 'Sony', …}
        //2
        //:
        //{category: 'Science: Gadgets',type: 'multiple',difficulty: 'hard',question: 'Which of the following is the standard THX subwoofer crossover frequency?',correct_answer: '80 Hz', …}


    });
    // note: updated all_select_values is out of scope here
})

//app.js: 75     GET http://127.0.0.1:5500/json/[object%20HTMLSelectElement].json 404 (Not Found)
//getSelectVal @app.js: 75
//    (anonymous) @app.js: 80
//VM703: 1 Uncaught(in promise) SyntaxError: Unexpected token '<',"<!DOCTYPE "... is not valid JSON

        // note: stack overflow says cannot use forEach with async operation
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#description
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#composition

        // for each selected topic, fetch the appropriate json file
        //fetchurls=[]
        //all_select_values.forEach((element) => {
        //    console.log(element)
        //});

