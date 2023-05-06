
window.addEventListener("DOMContentLoaded",() => {
    let all_select_values=[];
    let dropdown01=document.getElementById("catSelect1");
    let dropdown02=document.getElementById("catSelect2");
    let dropdown03=document.getElementById("catSelect3");
    let dropdown04=document.getElementById("catSelect4");
    let dropdown05=document.getElementById("catSelect5");
    //dropdown01.addEventListener("change",(e) => {
    //    //console.log(e.target.value);
    //});

    const startFlashCards=document.getElementById("startGame");
    const missingAlert=document.getElementById("needAllAlerts");
    const missingAlertMsg=missingAlert.classList;

    startFlashCards.addEventListener("click",() => {
        if(dropdown01.value==''||dropdown02.value==''||dropdown03.value==''||dropdown04.value==''||dropdown05.value=='') {
            //console.log('please add values for all 5 topics');
            missingAlertMsg.remove("hidden");
        } else {
            missingAlertMsg.add("hidden");
            all_select_values=[]
            all_select_values.push(dropdown01.value,dropdown02.value,dropdown03.value,dropdown04.value,dropdown05.value)
            console.log(all_select_values);
        }
    });

})