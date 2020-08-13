'use strict';
// var gKeywords = { 'happy': 12, 'funny puk': 1 }
// var gNextId = 1;

var gImgs = [
    { id: 0, url: 'img/1.jpg', keywords: ['happy'] },
    { id: 1, url: 'img/2.jpg', keywords: ['dog'] },
    { id: 2, url: 'img/3.jpg', keywords: ['dog'] },
    { id: 3, url: 'img/4.jpg', keywords: ['cat'] },
    { id: 4, url: 'img/5.jpg', keywords: ['win'] },
    { id: 5, url: 'img/6.jpg', keywords: ['tired'] },
    { id: 6, url: 'img/7.jpg', keywords: ['what???!'] },
    { id: 7, url: 'img/8.jpg', keywords: ['happy'] },
];
var gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
    line: {
        txt: 'I never eat Falafel',
        size: 20,
        align: 'left',
        color: 'red'

    }
}


function addMemeTxt(text) {
    gMeme.line.txt = text;
    // gMeme.line.txt = ''; clear the placeholder

}


function getImgById(selectedImgId) {
    var selectedImg = gImgs.find(function (selectedImg) {
        return selectedImgId === selectedImg.id
    })
    console.log(selectedImg);
    // selectedImgId++
    return selectedImg
}

function creatMeme(selectedImgId) {
    gMeme = {
        selectedImgId: selectedImgId
    }
}


function getImgUrl() {
    return getImgById(gMeme.selectedImgId).url
}


function getImgs() {
    return gImgs;
}


function increaseFontSize() {
    gMeme.line.txt.size++;
}

function decreaseFontSize() {
    gMeme.line.txt.size--;
}

