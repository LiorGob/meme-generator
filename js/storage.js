'use strict';
function saveToStorage(key, val) {
    localStorage.setItem(key, JSON.stringify(val))
}

function loadFromStorage(key) {
    var val = localStorage.getItem(key)
    return JSON.parse(val)
}




// 1. Save created Memes to the “Memes” TAB (using local storage)
// ???
// 2. Support “Drag&Drop” of the text lines
// 3. Add “search” to the Image-Gallery Page
// 4. Add stickers (emojies, sunglasses, hats, etc)
// 5. Drag and drop stickers


// 6. Share on Facebook (use the sample code provided)     check wht it doesent work.

// 7. Support using various aspect-ratio of images
// 8. Allow using an image from your computer
// 9. Add “search by keywords” to Image-Gallery Page
// 10. Inline (on Canvas) text editing
// 11. Resize sticker
// 12. Website theme: celeb-meme, politic-meme, ani-meme, kid-meme,
// Mondial-meme
// 13. Use the new Web Share API to share your meme
// 14. i18n for Hebrew 