var calculatSeize = function () {

    var BASE_FONT_SIZE = 100;
    var docEl = document.documentElement;
    var clientWidth = docEl.clientWidth;

    if (!clientWidth) return;
    docEl.style.fontSize = BASE_FONT_SIZE * (clientWidth / 720) + 'px';
};

// Abort if browser does not support addEventListener

if (document.addEventListener) {
    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    window.addEventListener(resizeEvt, calculatSeize, false);
    document.addEventListener('DOMContentLoaded', calculatSeize, false);
    calculatSeize();
}

