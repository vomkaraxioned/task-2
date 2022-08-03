/* Author: 

*/
let index;
const tab = document.getElementsByClassName('tab');
const info = document.getElementsByClassName('description');
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