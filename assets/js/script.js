/* Author: 

*/
const tabs = document.getElementsByClassName('tab');
const info = document.getElementsByClassName('description');
const addBtn = document.forms['add-info']['submit'];
tab.forEach(function() {
    alert("print hello");
});
//taking data from form 
addBtn.addEventListener("click", addData);
//tabs and content change
for (x in tab) {
    tab[x].addEventListener("click", show);
}

function show() {
    for (x in tab) {
        tab[x].className = "tab";
    }
    this.className += " active";
    change();
}

function change() {
    for (x in tab) {
        if (tab[x].className == 'tab active') {
            for (j in info) {
                info[j].className = "description";
            }
            info[x].className += " active-content";
        }
    }
}

// function addData() {
//     let title = document.forms['add-info']['title'].value;
//     let content = document.forms['add-info']['content'].value;
//     let keyword = document.forms['add-info']['keyword'].value;
//     const infoBlock = document.getElementsByClassName("info");
//     const tabs = document.getElementsByClassName("tab");
//     let data = "<p class=\"description\"><span class=\"title\">${title}</span>${content}<span class=\"keyword\">${keyword}</span> powered navigation.</p>";
//     let tab = "<li class=\"tab\"><a href=\"#FIXME\" title=\"${keyword}\">${keyword}</a></li>";
//     tabs.appendChild(tab);
//     infoBlock.appendChild(data);

// }