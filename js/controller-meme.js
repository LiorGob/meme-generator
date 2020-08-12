'use strict';

var gCanvas;
var gCtx;

function onInit() {
    gCanvas = document.getElementById('myCanvas');
    gCtx = gCanvas.getContext('2d');
    drawImg()
    clearCanvas()
    // renderImgs()

}
// To do:
// . Create a Canvas with a single image – the image shall be taken from
// gMeme (managed by a memeService)

// function drawImg() {
//     const elImg = document.querySelector('img');
//     gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height);
// }

function drawImg() {
    // let currImg = gImgs;
    const img = new Image();
    img.src = gImgs[0].url;
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
    gCtx.font = '40px Impact';
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

// function renderImgs() {
//     var imgs = getImgs();
//     console.log(imgs);
//     var strHTMLs = imgs.map(function (img) {
//         return `<img src="${img.imgUrl}" onclick="drawImg()">`
//     });
//     document.querySelector('.gallery').innerHTML = strHTMLs.join('');
// }


// i. Make sure you can access your project in gitPages




function clearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
}
