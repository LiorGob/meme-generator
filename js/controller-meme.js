'use strict';



function onInit() {
    gCanvas = document.getElementById('myCanvas');
    gCtx = gCanvas.getContext('2d');
    clearCanvas()
    renderGalleryImgs()
   
}

function drawImg(currImg) {
    const img = new Image();
    img.src = currImg.url;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
        for (var i = 0; i < gMeme.lines.length; i++) {
            var currline = gMeme.lines[i]
            gCtx.font = `${currline.size}px Impact`;
            gCtx.fillStyle = currline.color;
            gCtx.lineWidth = 2;
            gCtx.fillText(currline.txt, currline.positionX,currline.positionY);
            gCtx.strokeText(currline.txt, currline.positionX, currline.positionY);
        }
    
    }
}



function onAddMemeTxt(text) {
    addMemeTxt(text);
    // drawText('raz', 225, 225)
    drawImg(gImgs[gMeme.selectedImgId]);

}


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
    creatMeme(id) //creates a new meme model
    drawImg(img)
    document.querySelector('.modal-editor').style.display = 'grid';
    document.querySelector('.canvas-container').style.display = 'grid';
    document.querySelector('.gallery').style.display = 'none';
    document.querySelector('.keyword-nav').style.display = 'none';
    document.querySelector('.first-footer').style.display = 'none';
    document.querySelector('.btn').style.display = 'block';


}

function onIncreaseFont() {
    increaseFontSize()
    drawImg(gImgs[gMeme.selectedImgId])
    // drawText(gMeme.line.txt, 225, 225)
}

function onDecreaseFont() {
    decreaseFontSize()
    drawImg(gImgs[gMeme.selectedImgId])
}

function onCloseEditor() {
    document.querySelector('.modal-editor').style.display = 'none';
    document.querySelector('.canvas-container').style.display = 'none';
    document.querySelector('.keyword-nav').style.display = 'grid'
    document.querySelector('.gallery').style.display = 'grid';
    document.querySelector('.first-footer').style.display = 'grid';

}

function onUpLine() {
    setLineUp();
    drawImg(gImgs[gMeme.selectedImgId]);

}

function onDownLine() {
    setLineDown();
    drawImg(gImgs[gMeme.selectedImgId]);
}

function onAddNewLine() {
    addNewLine()
    // saveAndRestoreText(gMeme.line.txt, 90,300)
    // drawText(gMeme.lines[gMeme.selectedLineIdx].txt, 90, 300)
    // gCtx.save();
    drawImg(gImgs[gMeme.selectedImgId])
}


function onSwitchLines() {
    switchLines();
    drawImg(gImgs[gMeme.selectedImgId]);



    // let newLine = gMeme.selectedLineIdx;
    // if (newLine === gMeme.line.length - 1 && newLine > 0) {
    //     newLine = 0
    // }
    // else {
    //     newLine++
    // }

}

function onTxtAlignRight() {
    setTextRight()
    drawImg(gImgs[gMeme.selectedImgId])
}
function onTxtAlignCenter() {
    setTextCenter()
    drawImg(gImgs[gMeme.selectedImgId])
}

function onTxtAlignLeft() {
    setTextLeft();
    drawImg(gImgs[gMeme.selectedImgId]);
}

function clearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
    // You may clear part of the canvas
    // gCtx.clearRect(0, 0, gCanvas.width / 2, gCanvas.height / 2);
}

function onChangeColor() {
    document.querySelector(".btn-color").focus();
    document.querySelector(".btn-color").value = "#FFCC00";
    document.querySelector(".btn-color").click();
}

function onSetTxtColor(color) {
    seColorTxt(color);
    drawImg(gImgs[gMeme.selectedImgId]);
}

function onClearTxt() {
    document.querySelector('.placeholder').value = '';
    clearTxt();
    drawImg(gImgs[gMeme.selectedImgId]);
}


function resizCanvas() {
    const elContainer = document.querySelector('.canvas-container');
    gCanvas.width = elContainer.offsetWidth;
    gCanvas.height = elContainer.offsetHeight;
    drawImg(gImgs[gMeme.selectedImgId])
}

// window.addEventListener('resize', function () {
//     resizCanvas();
// })


// upload & dowmload functions:

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

