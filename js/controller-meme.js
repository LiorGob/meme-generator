'use strict';

var gImg;


function onInit() {
    gCanvas = document.getElementById('myCanvas');
    gCtx = gCanvas.getContext('2d');
    renderGalleryImgs()
}

// Renders:

function renderGalleryImgs() {
    var imgs = getImgs();
    // console.log(imgs);
    var strHTMLs = imgs.map(function (img) {
        return `<img onclick="onSelectImg(${img.id})" src="${img.url}" ${img.keywords}>`
    });
    document.querySelector('.gallery').innerHTML = strHTMLs.join('');
}

function renderImg(currImg) {
    gImg = new Image();
    gImg.src = currImg.url;
    gImg.onload = drawImg(currImg);
    // console.log(currImg);
}

function drawImg() {
    gCtx.drawImage(gImg, 0, 0, gCanvas.width, gCanvas.height);
    for (var i = 0; i < gMeme.lines.length; i++) {
        var currline = gMeme.lines[i]
        gCtx.font = `${currline.size}px Impact`;
        gCtx.fillStyle = currline.color;
        gCtx.lineWidth = 2;
        gCtx.fillText(currline.txt, currline.positionX, currline.positionY);
        gCtx.strokeText(currline.txt, currline.positionX, currline.positionY);
    }


}

// function drawImg(currImg) {
//     const img = new Image();
//     img.src = currImg.url;
//     img.onload = () => {

//         gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
//         for (var i = 0; i < gMeme.lines.length; i++) {
//             var currline = gMeme.lines[i]
//             gCtx.font = `${currline.size}px Impact`;
//             gCtx.fillStyle = currline.color;
//             gCtx.lineWidth = 2;
//             gCtx.fillText(currline.txt, currline.positionX, currline.positionY);
//             gCtx.strokeText(currline.txt, currline.positionX, currline.positionY);
//         }

//     }
// }

function onAddMemeTxt(text) {
    addMemeTxt(text);
    let currImg = getCurrImg();
    drawImg(currImg);
}




// Modals:
function onSelectImg(id) {
    creatMeme(id);//creates a new meme model
    var img = getCurrImg();
    renderImg(img)
    // drawImg(img)
    document.querySelector('.modal-editor').style.display = 'grid';
    document.querySelector('.canvas-container').style.display = 'block';
    document.querySelector('.gallery').style.display = 'none';
    document.querySelector('.keyword-nav').style.display = 'none';
    document.querySelector('.first-footer').style.display = 'none';
    document.querySelector('.btn').style.display = 'block';


}

function onCloseEditor() {
    document.querySelector('.modal-editor').style.display = 'none';
    document.querySelector('.canvas-container').style.display = 'none';
    document.querySelector('.keyword-nav').style.display = 'grid'
    document.querySelector('.gallery').style.display = 'grid';
    document.querySelector('.first-footer').style.display = 'grid';

}

// Edit-Text-Lines:

function onIncreaseFont() {
    increaseFontSize()
    drawImg()
}

function onDecreaseFont() {
    decreaseFontSize()
    drawImg()
}

function onUpLine() {
    setLineUp();
    drawImg();

}

function onDownLine() {
    setLineDown();
    drawImg();
}

function onAddNewLine() {
    addNewLine();
    document.querySelector('.placeholder').value = '';
    drawImg();
}

function onSwitchLines() {
    switchLines();
    document.querySelector('.placeholder').value = getMemeText();
    // console.log( getMemeText(),'currline')
    drawImg();
}

function onTxtAlignRight() {
    setTextRight();
    drawImg();
}
function onTxtAlignCenter() {
    setTextCenter();
    drawImg();
}

function onTxtAlignLeft() {
    setTextLeft();
    drawImg();
}

function onChangeColor() {
    // document.querySelector('.btn-color').focus();
    document.querySelector('.btn-color').value = "#FFCC00";
    document.querySelector('.btn-color').click();
}


function onSetTxtColor(color) {
    seColorTxt(color);
    drawImg();
}

function onClearTxt() {
    document.querySelector('.placeholder').value = '';
    clearTxt();
    drawImg();
}


// Upload & Dowmload functions:

function downloadImg(elLink) {
    var imgContent = gCanvas.toDataURL(`${gImgs[gMeme.selectedImgId]}`);
    elLink.href = imgContent
}

function uploadImg(elForm, ev) {
    ev.preventDefault();
    document.getElementById('share').value = gCanvas.toDataURL(`${gImgs[gMeme.selectedImgId].url}`);

    function onSuccess(uploadedImgUrl) {
        uploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        document.querySelector('.share-upload-download').innerHTML = `
        <a class="btn" href="https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}" title="Share on Facebook" target="_blank" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}'); return false;">
           Share   
        </a>`
    }

    doUploadImg(elForm, onSuccess);
}

function doUploadImg(elForm, onSuccess) {
    var formData = new FormData(elForm);
    fetch('http://ca-upload.com/here/upload.php', {
        method: 'POST',
        body: formData
    })
        .then(function (res) {
            return res.text()
        })
        .then(onSuccess)
        .catch(function (err) {
            console.error(err)
        })
}




// comments
// function onToggleMenu() {
//     document.querySelector('.mobile-menu-close').hidden = !document.querySelector('.mobile-menu-close').hidden;
//     document.querySelector('.mobile-menu-btn').hidden = !document.querySelector('.mobile-menu-btn').hidden
//     document.body.classList.toggle('menu-open');
// }

// function onCloseModalNav() {
//     document.querySelector('main-nav').hidden = true;
//     document.body.classList.toggle('modal-open');

// }

// function blur()-remove focus

// function resizCanvas() {
//     const elContainer = document.querySelector('.canvas-container');
//     gCanvas.width = elContainer.offsetWidth;
//     gCanvas.height = elContainer.offsetHeight;
//     drawImg(gImgs[gMeme.selectedImgId])
// }

// window.addEventListener('resize', function () {
//     resizCanvas();
// })
