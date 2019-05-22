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
    window.wunderlistUtils.breakpoints.forEach(breakpoint => {
        if(screenWidth >= breakpoint.width) {
            bp = breakpoint.name;
        }
    });
    return bp;
}