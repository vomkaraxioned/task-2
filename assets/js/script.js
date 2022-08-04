/* Author: 

*/
const tabs = document.getElementsByClassName('tab');
const info = document.getElementsByClassName('description');
const addBtn = document.forms['add-info']['submit'];

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
    tabsHolder.insertBefore(newTab, lastLi[0]);
    alert(paraContent);
    console.log("working");
    infoBlock[0].appendChild(para);

}