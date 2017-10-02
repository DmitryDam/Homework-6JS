// 1

document.getElementById('one').onmousemove = onMove;

function onMove(e) {

    document.getElementById('out-coordX').innerHTML = "Координата Х - "+e.offsetX + ' px';
    document.getElementById('out-coordY').innerHTML = "Координата Y - "+e.offsetY + ' px';
}

// 2

document.getElementById('folder').ondblclick = onDblclick;

function onDblclick() {
    if (this.id == 'folder') {

        this.src = 'img/1.png';
        this.id = 'folder-open';
    } else {
        this.src = 'img/3.png';
        this.id = 'folder';
    }
}

// 3

function sqr300() {
    var div = '<div class="sqr"></div>';
    for (var i = 0; i < 324; i++) {
        document.getElementById('out').innerHTML += div;
    }
}

sqr300();

var sqr = document.getElementsByClassName('sqr');
for (var i = 0; i < sqr.length; i++) {
    sqr[i].onmouseover = function(event) {
        this.style.borderRadius = 100 + '%';
        this.style.background = 'green';
        this.style.border = '5px solid red';
        this.style.width = 35+'px';
        this.style.height = 35+'px';
    }
    sqr[i].onmouseleave = function(event) {
        this.style.borderRadius = 0;
        this.style.background = '';
        this.style.border ='';
        this.style.width = '';
        this.style.height = '';
    }
}

// 4
document.onclick = function(event6) {

    if (event6.target.className == 'm-img') {

        document.getElementById('out_cats').style.background = 'url(' + event6.target.currentSrc + ')';
        document.getElementById('out_cats').style.backgroundSize = 'contain';
    }
}

// document.onclick = function(event) {
//     if (event.target.className == 'm-img') {
//         changeImage(event.target);
//     }
//     if (event.target.id == 'main') {
//         kruchu(event.target);
//     }
// }
// function changeImage(t) {
//     document.querySelector('#main').src = t.src;
// }
// function kruchu(t) {
//     t.style.transform = 'rotate(7200deg)';
// } 
// 5
    var x = 0;
document.getElementById('out5').onclick = function() {
    x = x + 100;
    
    this.style.marginTop = x + 'px';
}
// out5();
// 6
var s = document.querySelector('.s');
document.querySelector('#b6').onclick = b6;

function b6 () {
    if (s.classList.contains('left')) {
        s.classList.remove('left');
        s.classList.add('center');
        console.log ('Вкл - 1');
    }
    else if (s.classList.contains('center')) {
        s.classList.remove('center');
        s.classList.add('right');
           console.log ('Вкл - 2');
    }
    else {
        s.classList.remove('right');
        s.classList.add('left');
           console.log ('Вкл - 0');
    }
}
