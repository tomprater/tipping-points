let screenWidth =  $(window).width();
const iframe = $("#ai2html");
const url = "ai2html/tipping-points-";

console.log(screenWidth);

function changeIframeSrc (screenWidth) {

    if (screenWidth > 1440) {

        iframe.attr('src',url + "retina.html");   
    
    } else if ((screenWidth >= 768) && (screenWidth <= 1440)) {
    
        iframe.attr('src',url + "laptop.html");   

    } else if ((screenWidth > 570) && (screenWidth < 768)) {
    
        iframe.attr('src',url + "tablet.html");   

    
    } else {

        iframe.attr('src',url + "mobile.html");   

    }

}

changeIframeSrc(screenWidth);

window.addEventListener('resize', function() {

    screenWidth =  $(window).width();

    changeIframeSrc(screenWidth);

});


