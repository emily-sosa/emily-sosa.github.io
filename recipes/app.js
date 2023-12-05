function openNav(){
document.getElementById("myNav").style.width="100%";
}
function closeNav(){
document.getElementById("myNav").style.width="0%";
}

function splitScroll(){
    const controller = new ScrollMagic.Controller();
    
    new ScrollMagic.Scene({
        duration: 'auto',
        triggerElement: '.dessert img',
        triggerHook: 0,
    })
    .setPin('.dessert img')
    .addIndicators()
    .addTo(controller)
}

splitScroll();
openNav();
closeNav();