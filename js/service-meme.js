'use strict';
// var gKeywords = { 'happy': 12, 'funny puk': 1 }
var gNextId = 1;
var gImgs= [{ id: 1, url: 'img/1.jpg', keywords: ['happy'] }, { id: 2, url: 'img/2.jpg', keywords: ['sad'] }];
var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    line: {
        txt: 'I never eat Falafel',
        size: 20,
        align: 'left',
        color: 'red'

    }
}

// createImgsGallery();

function addMemeTxt(text) {
    gMeme.line.txt = text;
    // gMeme.line.txt = ''; clear the placeholder

}


// function createImgsGallery() {
//     gImgs = [];
//     gImgs.push(createImgGallery('img/1.jpg'));
//     gImgs.push(createImgGallery('img/2.jpg'));
//     // gImgs.push(createImgGallery());
//     // gImgs.push(createImgGallery());

// }

function createImgGallery(imgUrl) {
    return {
        id: gNextId,
        imgUrl:imgUrl
    }

}
function getImgs() {
    return gImgs;
}



