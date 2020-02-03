let screenWidth =  $(window).width();
const iframe = $("#ai2html");
const url = "ai2html/tipping-points-";

console.log(screenWidth);

function changeIframeSrc (screenWidth) {

    if (screenWidth > 1333) {

        iframe.attr('src',url + "retina.html");   
    
    } else if ((screenWidth > 1154) && (screenWidth < 1334)) {
    
        iframe.attr('src',url + "desktop.html");   

    } else if ((screenWidth > 570) && (screenWidth < 1155)) {
    
        iframe.attr('src',url + "laptop.html");   

    
    } else {

        iframe.attr('src',url + "tablet.html");   

    }

}

changeIframeSrc(screenWidth);

window.addEventListener('resize', function() {

    screenWidth =  $(window).width();

    changeIframeSrc(screenWidth);

});


