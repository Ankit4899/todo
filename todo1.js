let button = document.querySelector('button');
let ul = document.querySelector('ul');
let input = document.querySelector('input');

button.addEventListener('click', (event) => {
    let listitem = document.createElement('li');
    listitem.innerText = input.value;

    let delbutton = document.createElement('button');
    delbutton.innerText = 'Delete';
    delbutton.classList.add('delete');
    listitem.appendChild(delbutton);
    // let task = input.value;
    input.value = "";// to clear input
    ul.append(listitem);
})




ul.addEventListener('click', function (event) {
    // console.log(event.target.nodeName);
    if (event.target.nodeName == 'BUTTON') {
        let dellist = event.target.parentElement;
        dellist.remove();
    }
})

// let delbtns = document.querySelectorAll('.delete');
// for (btn of delbtns) {
//     btn.addEventListener('click', function () {
//         let parEl = this.parentElement;
//         // console.log(parEl);
//         parEl.remove();
//     });
// }