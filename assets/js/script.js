/* Author: 

*/
const tabs = document.getElementsByClassName('tab');
const info = document.getElementsByClassName('description');
const addBtn = document.forms['add-info']['submit'];
// let contentIndex;

addBtn.addEventListener("click", addData);
//tabs and content change
for (x in tabs) {
    tabs[x].addEventListener("click", tabSwitch);
}

//tab switch function
function tabSwitch() {
    let activeTabs = document.getElementsByClassName('tab active');;
    activeTabs[0].className = "tab";
    this.className += " active";
    showContent();
}

function showContent() {
    let activeContents = document.getElementsByClassName('description active-content');
    for (x in tabs) {
        if (tabs[x].className == 'tab active') {
            activeContents[0].className = "description";
            info[x].className += " active-content";
        }
    }
}


function addData() {
    let title = document.forms['add-info']['title'].value;
    let content = document.forms['add-info']['content'].value;
    let keyword = document.forms['add-info']['keyword'].value;
    const infoBlock = document.getElementsByClassName("info");
    let data = "<p class=\"description\"><span class=\"title\">${title}</span>${content}<span class=\"keyword\">${keyword}</span> powered navigation.</p>";
    let tab = "<li class=\"tab\"><a href=\"#FIXME\" title=\"${keyword}\">${keyword}</a></li>";
    let para = document.createElement(data);
    let newTab = document.createElement(tab);
    tabs.appendChild(newTab);
    infoBlock.appendChild(para);
}