/* function calculateDistanceToMoveBackground(element) {
    var st = window.getComputedStyle(element);
    var tr = st.getPropertyValue("-webkit-transform") ||
         st.getPropertyValue("-moz-transform") ||
         st.getPropertyValue("-ms-transform") ||
         st.getPropertyValue("-o-transform") ||
         st.getPropertyValue("transform");

    var values = tr.split('(')[1],
    values = values.split(')')[0],
    values = values.split(',');

    var a = values[0]; // 0.866025
    var b = values[1]; // 0.5
    var c = values[2]; // -0.5
    var d = values[3]; // 0.866025

    var angle = Math.asin(b);

    let distanceToMoveY = window.innerHeight * Math.sin(angle) * Math.cos(angle);
    console.log(distanceToMoveY);
    element.style.transform = `translateY(-${distanceToMoveY}px) ` + tr;
}
calculateDistanceToMoveBackground(document.querySelector(".background")); */
window.wunderlistUtils = {};
window.wunderlistUtils.breakpoints = [
    {
        width: 1000,
        name: "desktop"
    },
    {
        width: 768,
        name: "tablet"
    },
    {
        width: 0,
        name: "mobile"
    }
]
window.wunderlistUtils.GetCurrentBreakpoint = function GetCurrentBreakpoint(){
    let screenWidth = window.innerWidth;
    let bp;
    let maxWidth = 0;
    window.wunderlistUtils.breakpoints.forEach(breakpoint => {
        if(screenWidth >= breakpoint.width && breakpoint.width >= maxWidth) {
            bp = breakpoint.name;
            maxWidth = breakpoint.width;
        }
    });
    return bp;
}


// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var scrollKeys = {37: 1, 38: 1, 39: 1, 40: 1};

window.wunderlistUtils.preventDefaultScroll = function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

window.wunderlistUtils.preventDefaultForScrollKeys = function preventDefaultForScrollKeys(e) {
    if (scrollKeys[e.keyCode]) {
        window.wunderlistUtils.preventDefaultScroll(e);
        return false;
    }
}

window.wunderlistUtils.disableScroll = function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', window.wunderlistUtils.preventDefaultScroll, false);
  document.addEventListener('wheel', window.wunderlistUtils.preventDefaultScroll, {passive: false}); // Disable scrolling in Chrome
  window.onwheel = window.wunderlistUtils.preventDefaultScroll; // modern standard
  window.onmousewheel = document.onmousewheel = window.wunderlistUtils.preventDefaultScroll; // older browsers, IE
  window.ontouchmove  = window.wunderlistUtils.preventDefaultScroll; // mobile
  document.onkeydown  = window.wunderlistUtils.preventDefaultForScrollKeys;
}

window.wunderlistUtils.enableScroll = function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', window.wunderlistUtils.preventDefaultScroll, false);
    document.removeEventListener('wheel', window.wunderlistUtils.preventDefaultScroll, {passive: false}); // Enable scrolling in Chrome
    window.onmousewheel = document.onmousewheel = null; 
    window.onwheel = null; 
    window.ontouchmove = null;  
    document.onkeydown = null;  
}