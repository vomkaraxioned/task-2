/* Author: 

*/
const tabs = document.getElementsByClassName('tab');
const info = document.getElementsByClassName('description');
// let activeContent = document.getElementsByClassName('description active-content');

//tabs and content change
for (x in tabs) {
    tabs[x].addEventListener("click", show);
}

function show() {
    let activeTab = document.getElementsByClassName('tab active');
    alert(activeTab);
    activeTab[0].className = "tab";
    this.className += " active";
    change();
}

function change() {
    for (x in tabs) {
        if (tabs[x].className == 'tab active') {
            for (j in info) {
                info[j].className = "description";
            }
            info[x].className += " active-content";
        }
    }
}

/*
function addData() {
    let title = document.forms['add-info']['title'].value;
    let content = document.forms['add-info']['content'].value;
    let keyword = document.forms['add-info']['keyword'].value;
    const infoBlock = document.getElementsByClassName("info");
    const tabs = document.getElementsByClassName("tab");
    let data = "<p class=\"description\"><span class=\"title\">${title}</span>${content}<span class=\"keyword\">${keyword}</span> powered navigation.</p>";
    let tab = "<li class=\"tab\"><a href=\"#FIXME\" title=\"${keyword}\">${keyword}</a></li>";
    tabs.appendChild(tab);
    infoBlock.appendChild(data);

}
*/
// addBtn.addEventListener("click", addData);
// const addBtn = document.forms['add-info']['submit'];