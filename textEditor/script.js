//basic
let getEl = x => document.querySelector(x);
let getEls = x => document.querySelectorAll(x);
let getId = x => document.getElementById(x);
//window
getEl('#result').innerHTML = `${getEl('#textarea').value}`;
//header buttons 
getEl('#edit-button').addEventListener('click', function() {
    getEl('#result').style.display = 'none';
    getEl('#word').style.display = 'none';
    getEl('#textarea').style.display = 'block';
    getEl('#editorium').style.display = 'flex';

})
getEl('#bold').addEventListener('click', function() {
    getEl('#result').classList.toggle('bold');
})
getEl('#italic').addEventListener('click', function() {
    getEl('#result').classList.toggle('italic');
})
let decorCheck = true;
getEl('#underline').addEventListener('click', function() {
    if (decorCheck) {
        getEl('#result').style.textDecoration = 'underline';
        decorCheck = false;
    }
    else if (!decorCheck) {
        getEl('#result').style.textDecoration = 'none';
        decorCheck = true;
    }
})
getEl('#deleted').addEventListener('click', function() {
    if (decorCheck) {
        getEl('#result').style.textDecoration = 'line-through';
        decorCheck = false;
    }
    else if (!decorCheck) {
        getEl('#result').style.textDecoration = 'none';
        decorCheck = true;
    }
})
getEl('#left').addEventListener('click', function() {
    getEl('#result').style.textAlign = 'left';
    getEl('#result').style.alignItems= 'flex-start';
})
getEl('#center').addEventListener('click', function() {
    getEl('#result').style.textAlign = 'center';
    getEl('#result').style.alignItems= 'center';
})
getEl('#right').addEventListener('click', function() {
    getEl('#result').style.textAlign = 'right';
    getEl('#result').style.alignItems= 'flex-end';
})
let li = getEls('#dropdown-menu1 li');
for(let i = 0; i<li.length; i++) {
    li[i].style.fontFamily = `${li[i].innerText}`;
    li[i].addEventListener('click', function() {
        getEl('#result').style.fontFamily = `${li[i].innerText}`;
    })
}
let li2 = getEls('#dropdown-menu2 li');
for(let i = 0; i<li2.length; i++) {
    li2[i].addEventListener('click', function() {
        getEl('#result').style.fontSize = `${li2[i].innerText}`;
    })
}
getEl('#save').addEventListener('click', function() {
    getEl('#result').style.display = 'flex';
    getEl('#word').style.display = 'flex';
    getEl('#textarea').style.display = 'none';
    getEl('#editorium').style.display = 'none';
    getEl('#result').innerHTML = `${getEl('#textarea').value}`;
})
getEl('#lock').addEventListener('click', function() {
    this.style.backgroundImage = 'url("images/padlock.png")';
    getEl('#signIN').setAttribute('data-backdrop', 'static');
    getEl('#sign-in').removeAttribute('data-dismiss', 'modal');
})
//modals
//sign in
getEl('#sign-in').addEventListener('click', function() {
    if (getEl('#login').value == 'admin' && getEl('#password').value == 'admin') {
        getEl('#sign-in').setAttribute('data-dismiss', 'modal');
        getEl('#login').value = '';
        getEl('#password').value = '';
    }  
})
//palette
let colors = ['aqua', 'black', 'blue', 'brown', 'crimson', 'darkcyan', 'forestgreen', 
              'gold', 'grey', 'hotpink', 'indigo', 'white', 'olive', 'red',
               'tomato', 'orange', 'purple', 'yellow', 'yellowgreen', 'mediumorchid', 'khaki'];
for (let i = 0; i<colors.length; i++) {
    getEl('.palette').innerHTML += `<div></div>`;
}
let colorCheck;
getEl('#background-color').addEventListener('click', function() {
    colorCheck = true;
})
getEl('#background-image').addEventListener('click', function() {
    colorCheck = false;
})
let paletteDiv = getEls('.palette div' );
for (let i = 0; i<paletteDiv.length; i++) {
    paletteDiv[i].style.background = `${colors[i]}`;
    paletteDiv[i].addEventListener('click', function() {
        if (colorCheck) getEl('#result').style.color = `${colors[i]}`;
        else if (!colorCheck) getEl('#result').style.background = `${colors[i]}`; 
    })
}
//images palette
for (let i = 0; i<9; i++) {
    getEl('.images-palette').innerHTML += `<div></div>`;
}
let paletteImages = getEls('.images-palette div' );
for (let i = 0; i<paletteImages.length; i++) {
    paletteImages[i].style.background = `url(images/img${i + 1}.jpg)`;
    paletteImages[i].style.backgroundSize = 'cover';
    paletteImages[i].addEventListener('click', function() {
        getEl('#result').style.background = `${paletteImages[i].style.background}`; 
    })
}
//add file
getId('file').addEventListener('change', function(event) {
    console.log(event.target.files[0]);
    let file = event.target.files[0];
    getEl('#result').style.background = 
    `url(${URL.createObjectURL(file)})`;
    getEl('#result').style.backgroundSize = 'cover';
})
//createOL
let addOl = document.forms['add_olist'];
getEl('#create-olist').addEventListener('click', function() {
    if (addOl.countLi.value == +addOl.countLi.value) {
        let container = document.createElement('div');
        let list = document.createElement('ol');
        let li;
        for(let i = 0; i<addOl.countLi.value; i++) {
            li = document.createElement('li');
            list.appendChild(li);
            li.innerText = 'list';
        }
        list.style.listStyleType = `${addOl.typeLi.value}`;
        container.appendChild(list);
        getEl('#textarea').innerText = `${getEl('#textarea').value} ${container.innerHTML}`;
        this.setAttribute('data-dismiss', 'modal');
        addOl.reset();
    }
    else alert('enter NUMBER of li')
})
getEl('#reset-olist').addEventListener('click', function() {
    addOl.reset();
})
//createUL
let addUl = document.forms['add_ulist'];
getEl('#create-ulist').addEventListener('click', function() {
    if (addUl.countLi.value == +addUl.countLi.value) {
        let container = document.createElement('div');
        let list = document.createElement('ul');
        let li;
        for(let i = 0; i<addUl.countLi.value; i++) {
            li = document.createElement('li');
            list.appendChild(li);
            li.innerText = 'list';
        }
        list.style.listStyleType = `${addUl.typeLi.value}`;
        container.appendChild(list);
        getEl('#textarea').innerText = `${getEl('#textarea').value} ${container.innerHTML}`;
        this.setAttribute('data-dismiss', 'modal');
        addUl.reset();
    }
    else alert('enter NUMBER of li')
})
getEl('#reset-ulist').addEventListener('click', function() {
    addUl.reset();
})
//create table 
let addTable = document.forms['add_table'];
getEl('#create-table').addEventListener('click', function() {
    if (addTable.countTR.value == +addTable.countTR.value
        && addTable.countTD.value == +addTable.countTD.value
        && addTable.widthTD.value == +addTable.widthTD.value 
        && addTable.heightTD.value == +addTable.heightTD.value
        && addTable.widthBorder.value == +addTable.widthBorder.value) {
        let container = document.createElement('div');
        let table = document.createElement('table');
        let tbody = document.createElement('tbody');
        for(let i = 1; i<=addTable.countTR.value; i++) { 
            let tr = document.createElement('tr');
            for(let j = 1; j<=addTable.countTD.value; j++) {
                let td = document.createElement('td');
                let text = document.createTextNode('TD');
                td.style.width = `${addTable.widthTD.value}px`;
                td.style.height = `${addTable.heightTD.value}px`;
                td.style.border = `${addTable.widthBorder.value}px ${addTable.typeBorder.value} ${addTable.colorBorder.value}`;
                td.style.textAlign = 'center';
                td.appendChild(text);
                tr.appendChild(td);
            }
            tbody.appendChild(tr);  
        }
        table.appendChild(tbody); 
        container.appendChild(table);
        getEl('#textarea').innerText = `${getEl('#textarea').value} ${container.innerHTML}`;
        this.setAttribute('data-dismiss', 'modal');
        addTable.reset();
    } 
    else {
        let num = getEls('#create-table-mod input[type="text"]');
        for(let i = 0; i<num.length; i++) {
            addTable.elements[i].value = 'number';
        }
        alert('write a NUMBER')
    }
})
getEl('#reset-table').addEventListener('click', function() {
    addTable.reset();
})
