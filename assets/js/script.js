/* Author: 

*/
let tabs = document.getElementsByClassName('tab');
let info = document.getElementsByClassName('description');
const addBtn = document.forms['add-info']['submit'];

addBtn.addEventListener("click", addData);
//tabs and content change
function updateListener() {
    for (x in tabs) {
        tabs[x].addEventListener("click", tabSwitch);
    }
}

updateListener();

//tab switch function
function tabSwitch() {
    let activeTabs = document.getElementsByClassName('tab active');
    activeTabs[0].classList.remove("active");
    this.classList.add('active');
    showContent();
}

function showContent() {
    let activeContents = document.getElementsByClassName('description active-content');
    activeContents[0].classList.remove("active-content");
    for (x in tabs) {
        if (tabs[x].className == 'tab active') {
            info[x].classList.add('active-content');
        }
    }
}


function addData(e) {
    e.preventDefault();
    let tabsHolder = document.getElementsByClassName("tabs");
    let lastLi = document.getElementsByClassName("none");
    let titleName = document.forms['add-info']['title'].value;
    let content = document.forms['add-info']['content'].value;
    let keyword = document.forms['add-info']['keyword'].value;
    const infoBlock = document.getElementsByClassName("info");

    //elements created
    let para = document.createElement("P");
    let newTab = document.createElement("li");
    let title = document.createElement("span");
    let highlight = document.createElement("span");
    let anchor = document.createElement("a");

    //text nodes created
    let paraContent = document.createTextNode(content);
    let titleContent = document.createTextNode(titleName);
    let highlightContent = document.createTextNode(keyword);
    let anchorContent = document.createTextNode(keyword);
    //class name given
    para.className = "description";
    newTab.className = "tab";
    title.className = "title";
    highlight.className = "keyword";
    anchor.attributes['href'] = "#FIXME";
    anchor.attributes['title'] = keyword;

    //appending text node to element
    title.appendChild(titleContent);
    highlight.appendChild(highlightContent);
    para.appendChild(title);
    para.appendChild(paraContent);
    para.appendChild(highlight);
    anchor.appendChild(anchorContent);
    newTab.appendChild(anchor);
    tabsHolder[0].insertBefore(newTab, lastLi[0]);
    infoBlock[0].appendChild(para);
    alert("added" + " " + keyword);
    updateListener();
}