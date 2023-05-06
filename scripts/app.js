
window.addEventListener("DOMContentLoaded",() => {
    let all_select_values=[];
    let dropdown01=document.getElementById("catSelect1");
    let dropdown02=document.getElementById("catSelect2");
    let dropdown03=document.getElementById("catSelect3");
    let dropdown04=document.getElementById("catSelect4");
    let dropdown05=document.getElementById("catSelect5");
    // if user reverts to empty select value, alert and clear array
    dropdown01.addEventListener("change",(e) => {
        if(dropdown01.value==''||dropdown02.value==''||dropdown03.value==''||dropdown04.value==''||dropdown05.value=='') {
            missingAlertMsg.remove("hidden");
            all_select_values=[]
        } else {
            missingAlertMsg.add("hidden");
        }
    });
    dropdown02.addEventListener("change",(e) => {
        if(dropdown01.value==''||dropdown02.value==''||dropdown03.value==''||dropdown04.value==''||dropdown05.value=='') {
            missingAlertMsg.remove("hidden");
            all_select_values=[]
        } else {
            missingAlertMsg.add("hidden");
        }
    });
    dropdown03.addEventListener("change",(e) => {
        if(dropdown01.value==''||dropdown02.value==''||dropdown03.value==''||dropdown04.value==''||dropdown05.value=='') {
            missingAlertMsg.remove("hidden");
            all_select_values=[]
        } else {
            missingAlertMsg.add("hidden");
        }
    });
    dropdown04.addEventListener("change",(e) => {
        if(dropdown01.value==''||dropdown02.value==''||dropdown03.value==''||dropdown04.value==''||dropdown05.value=='') {
            missingAlertMsg.remove("hidden");
            all_select_values=[]
        } else {
            missingAlertMsg.add("hidden");
        }
    });
    dropdown05.addEventListener("change",(e) => {
        if(dropdown01.value==''||dropdown02.value==''||dropdown03.value==''||dropdown04.value==''||dropdown05.value=='') {
            missingAlertMsg.remove("hidden");
            all_select_values=[]
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
            all_select_values=[]; // reset array
            all_select_values.push(dropdown01.value,dropdown02.value,dropdown03.value,dropdown04.value,dropdown05.value)
            console.log(all_select_values);
        }
    });

})