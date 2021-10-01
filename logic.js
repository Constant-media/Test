var scrollContainer;
var st = setTimeout;

// ISI Mouse Over-----------------
var ovrscrolpos = 0;
var mouseOutBln = false;
var mouseOverInterval = 0;
var isAnimationCompleted = false;
var tl;
// ISI Mouse Over-----------------

function $(id) { return document.getElementById(id); }

// Properties
var objDiv, autoScroll;


var creative = {};

/**
 * Window onload handler.
 */
function preInit() {
    setupDom();
    init();
}

/**
 * Initializes the ad components
 */
function setupDom() {
    creative.dom = {};
    creative.dom.wrapperExit = document.getElementById('wrapper');
    creative.dom.hiddenEnablerExit = document.getElementById('hiddenEnabler');
    creative.dom.bannerExit = document.getElementById('bannerExit');
    creative.dom.medwatchExit = document.getElementById('medwatchExit-btn');
    creative.dom.footerMgExit = document.getElementById('footerMgExit');
    creative.dom.footerPIExit = document.getElementById('footerPIExit');
    creative.dom.footerLogoExit = document.getElementById('footerLogo-btn');
    creative.dom.ctaExit = document.getElementById('cta');

    creative.dom.isiOver = document.getElementById('infoCont');

    // ISI Mouse Over-----------------
    //---------------------Arrow Functioanlity-----------------------
}

//----------------AKD---------------------
var shdShowOverBtn = setInterval(function() {
    //console.log("shdShowOverBtn");
    creative.dom.isiOver.style.zIndex = "1";
    clearInterval(shdShowOverBtn);
    isAnimationCompleted = true;
}, 10000);
//----------------AKD---------------------

/**
 * Ad initialisation.
 */
function init() {
    addListeners();
    show();
}

/**
 * Adds appropriate listeners at initialization time
 */
function addListeners() {

    creative.dom.hiddenEnablerExit.addEventListener('click', hiddenEnablerExitClickHandler);
    creative.dom.bannerExit.addEventListener('click', bannerExitClickHandler);
    creative.dom.medwatchExit.addEventListener('click', medwatchExitClickHandler);
    creative.dom.footerMgExit.addEventListener('click', footerMgExitClickHandler);
    creative.dom.footerPIExit.addEventListener('click', footerPIExitClickHandler);
    creative.dom.footerLogoExit.addEventListener('click', footerLogoExitClickHandler);
    creative.dom.ctaExit.addEventListener('click', ctaExitClickHandler);
}

/***  Shows the ad.  */
function show() {
    tl = gsap.timeline({
        onStart: onStartHandler,
        onComplete: onCompleteHandler,
        paused: false
    });

    tl.addLabel("f2", 1);

    tl.to("#frame2", { autoAlpha: 1, duration: 0.5 }, 'f2');
   

    tl.addLabel("f3", 3);
    tl.to("#frame2", { autoAlpha: 0, duration: 0.5 }, 'f3');  
    tl.to("#frame-3_4_5", { autoAlpha: 1, duration: 0.5 }, 'f3');
    // tl.to("#frame3_copy", { autoAlpha: 1, duration: 0.5 }, 'f3');

    tl.addLabel("f4", 6);
    tl.to("#footnote-1, #frame3_copy", { autoAlpha: 0, duration: 0.5 }, 'f4');
    tl.to("#frame5_copy", { autoAlpha: 1, duration: 0.5 }, 'f4');
    tl.to("#frame4_copy", {top: 452, duration: 0.5 }, 'f4');
    
    tl.addLabel("f5", 12);
    tl.to("#frame-3_4_5", { autoAlpha: 0, duration: 0.5 }, 'f5');
    tl.to("#frame6", { autoAlpha: 1, duration: 0.5 }, 'f5');
    tl.to("#cta", { autoAlpha: 1, duration: 0.5 }, 'f5');


    console.log(tl.duration());
}

function onStartHandler() {
    console.log('onStartHandler');

}

function onCompleteHandler() {
    console.log('onCompleteHandler');

    /* UNCOMMENT FOR DEBUGGING */
    // gsap.delayedCall(3 , onWallboardIdleSlideTimerStop, ["param1", "param2"]);

}

/***** WALLBAORD FUNCTIONS *****/
function onWallboardIdleSlideDisplay() {
    tl.resume();
}


function onWallboardIdleSlideTimerStop(p1, p2) {
    creative.dom.isiOver.scrollTop = 0;
    tl.seek(0)
    tl.pause();

    /* UNCOMMENT FOR DEBUGGING */
    // gsap.delayedCall(3 , onWallboardIdleSlideDisplay()); 
}

// ---------------------------------------------------------------------------------
// MAIN
// ---------------------------------------------------------------------------------
function hiddenEnablerExitClickHandler() {
    Enabler.exit('click', '');

}

function bannerExitClickHandler() {
    clickthroughFunBanner();
}

function medwatchExitClickHandler() {
    clickthroughFunMedwatch();

}

function footerMgExitClickHandler() {
    clickthroughFunfooterMg();

}

function footerPIExitClickHandler() {
    clickthroughFunfooterPI();

}


function footerLogoExitClickHandler() {
    clickthroughFunGene();

}

function ctaExitClickHandler() {
    clickthroughFunBanner();

}


/**
 *  Main onload handler
 */
window.addEventListener('load', preInit);