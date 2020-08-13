'use strict';

var gCanvas;
var gCtx;

function onInit() {
    gCanvas = document.getElementById('myCanvas');
    gCtx = gCanvas.getContext('2d');
    // drawImg()
    clearCanvas()
    renderGalleryImgs()

}
// To do:
// . Create a Canvas with a single image – the image shall be taken from
// gMeme (managed by a memeService)

function drawImg() {
    // var currImg = getImgById(gImgs.id)
    // var currImg = getImgs()
    const img = new Image();
    img.src = getImgUrl();
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
        drawText(gMeme.line.txt, 225, 225)
    }
}

// f. Draw a text line on it with IMPACT font at the top of the image. The text
// shall be taken from gMeme


function drawText(text, x, y) {
    gCtx.lineWidth = '2';
    gCtx.strokeStyle = 'black';
    gCtx.fillStyle = 'white';
    gCtx.font = `${gMeme.line.size}px Impact`
    // '40px Impact';
    gCtx.textAlign = 'center';
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
}

// g. Add text input to the HTML and dynamically take the text line value from
// the input to gMeme and from it to the Canvas

function onAddMemeTxt(text) {
    addMemeTxt(text)
    drawImg()

}

// h. Make a simple image-gallery with 2 images. Click an image to update
// gMeme and present it onto the Canvas. Note that to start with – locate
// the Editor above the Image-Gallery.

function renderGalleryImgs() {
    var imgs = getImgs();
    console.log(imgs);
    var strHTMLs = imgs.map(function (img) {
        return `<img onclick="onSelectImg(${img.id})" src="${img.url}" ${img.keywords}>`
    });
    document.querySelector('.gallery').innerHTML = strHTMLs.join('');
}


function onSelectImg(id) {
    // gMeme.selectedImgId = gImgs.id;
    var img = getImgById(id);
    drawImg(img)
    document.querySelector('.modal-editor').style.display = 'block';
    document.querySelector('.gallery').style.display = 'none';
    document.querySelector('.keyword-nav').style.display = 'none';
}

function onIncreaseFont() {
    increaseFontSize()
    drawImg()
    // drawText(gMeme.line.txt, 225, 225)
}

function onDecreaseFont() {
    decreaseFontSize()
    drawImg()
}


// to-do
// function onUpLine(){}

// function onDownLine(){}

// function onSwitchLines(){}


function clearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
}

