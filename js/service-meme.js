'use strict';

var gCanvas;
var gCtx;

var gImgs = [
    { id: 0, url: 'img/1.jpg', keywords: ['happy'] },
    { id: 1, url: 'img/2.jpg', keywords: ['dog'] },
    { id: 2, url: 'img/3.jpg', keywords: ['dog'] },
    { id: 3, url: 'img/4.jpg', keywords: ['cat'] },
    { id: 4, url: 'img/5.jpg', keywords: ['win'] },
    { id: 5, url: 'img/6.jpg', keywords: ['tired'] },
    { id: 6, url: 'img/7.jpg', keywords: ['what???!'] },
    { id: 7, url: 'img/8.jpg', keywords: ['happy'] },
    { id: 8, url: 'img/9.jpg', keywords: ['happy'] },
    { id: 9, url: 'img/10.jpg', keywords: ['happy'] },
    { id: 10, url: 'img/11.jpg', keywords: ['who is the man'] },
    { id: 11, url: 'img/12.jpg', keywords: ['you can do it'] },
    { id: 12, url: 'img/13.jpg', keywords: ['cheers'] },
    { id: 13, url: 'img/14.jpg', keywords: ['mean'] },
    { id: 14, url: 'img/15.jpg', keywords: ['wait..'] },
    { id: 15, url: 'img/16.jpg', keywords: ['happy'] },
    { id: 16, url: 'img/17.jpg', keywords: ['wait..'] },
    { id: 17, url: 'img/18.jpg', keywords: ['don\'t be afraid'] }
];

var gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
    lines: [
        {
            txt: '',
            size: 40,
            align: 'center',
            color: 'white',
            positionX: 90,
            positionY: 70
        }

    ]
}

function creatMeme(selectedImgId) {
    gMeme.selectedImgId = selectedImgId;
    gMeme.selectedLineIdx = 0;
    gMeme.lines[gMeme.selectedLineIdx].txt = '';
    gMeme.lines[gMeme.selectedLineIdx].size = 40;
    gMeme.lines[gMeme.selectedLineIdx].align = 'center';
    gMeme.lines[gMeme.selectedLineIdx].color = 'white';
    gMeme.lines[gMeme.selectedLineIdx].positionX = 90;
    gMeme.lines[gMeme.selectedLineIdx].positionY = 70;

}

function getCurrImg() {
    return gImgs[gMeme.selectedImgId];
}


function getImgs() {
    return gImgs;
}


function addMemeTxt(text) {
    gMeme.lines[gMeme.selectedLineIdx].txt = text;
}


function addNewLine() {
    gMeme.lines.push({
        txt: '',
        size: 40,
        align: 'center',
        color: 'white',
        positionX: 90,
        positionY: 450
    });
    gMeme.selectedLineIdx++

    console.log('positionX', gMeme.lines.positionX, 'positionY', gMeme.lines.positionY);
    console.log(gMeme.lines.length);
}

function switchLines() {
    if (gMeme.selectedLineIdx + 1 === gMeme.lines.length) gMeme.selectedLineIdx = 0;
    else gMeme.selectedLineIdx++
}


function increaseFontSize() {
    gMeme.lines[gMeme.selectedLineIdx].size += 2;
}

function decreaseFontSize() {
    gMeme.lines[gMeme.selectedLineIdx].size -= 2;
}

function setLineDown() {
    gMeme.lines[gMeme.selectedLineIdx].positionY += 4;
}

function setLineUp() {
    gMeme.lines[gMeme.selectedLineIdx].positionY -= 4;
}

function setTextRight() {
    let currLine = gMeme.lines[gMeme.selectedLineIdx];
    currLine.align = 'right';
    currLine.positionX = gCanvas.width - gCtx.measureText(currLine.txt).width;
}

function setTextCenter() {
    let currLine = gMeme.lines[gMeme.selectedLineIdx];
    currLine.align = 'center';
    currLine.positionX = (gCanvas.width - gCtx.measureText(currLine.txt).width) / 2;
}

function setTextLeft() {
    let currLine = gMeme.lines[gMeme.selectedLineIdx];
    currLine.align = 'left';
    currLine.positionX = 10;
}

function seColorTxt(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color;
}

function clearTxt() {
    gMeme.lines[gMeme.selectedLineIdx].txt = '';
}


function getMemeText() {
    return gMeme.lines[gMeme.selectedLineIdx].txt;
}


// function getImgById(selectedImgId) {
//     var selectedImg = gImgs.find(function (selectedImg) {
//         return selectedImgId === selectedImg.id
//     });
//     return selectedImg;
// }


