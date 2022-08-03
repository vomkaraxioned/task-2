/* Author: 

*/

const tab = document.getElementsByClassName('tab');
for (x in tab) {
    tab[x].addEventListener("click", show);
}

function show() {
    for (x in tab) {
        tab[x].className = "tab";
    }
    this.className += " active";
    alert(this.className);
}