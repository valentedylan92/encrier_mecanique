
var leftArrow = document.getElementById('arrow-l');
var rightArrow = document.getElementById('arrow-r');
var arrows = document.getElementsByClassName("arrow");
var arrArrows = Array.from(arrows);

var elementControl = document.getElementsByClassName('control');
var arrControl = Array.from(elementControl);

arrControl.forEach(element => {
    element.onclick = function() {
        console.log(element.dataset.arrow)
        arrControl.forEach(elementClass => {
            elementClass.classList.remove("is-active");
        }); 
        element.classList.add("is-active");  
    }; 
});

arrArrows.forEach(element => {
    element.addEventListener('click', e => {
        anime({
            targets: element,
            duration: '80',
            direction: 'alternate',
            scale: .8
          });
      });
    var direction = element.dataset.arrow;
    clickSlider(direction);

});

var positionEncreElement = 0;
var positionHautElement = 0;
var positionMilieuElement = 0;
var positionBasElement = 0;
var positionChapeauElement = 0;
var positionAccessoireElement = 0;
var positionFondElement = 0;

function clickSlider(directionSlider){
var targetAnimation;
var limiteData;
var position;
var control;
var limiteSlide;
arrControl.forEach(element => {
    if (element.classList.contains('is-active')) {
        control = element.dataset.control
    }
});

switch (control) {
    case 'chapeau':
        targetAnimation = '#img_chapeau';
        limiteData= document.getElementById("img_chapeau").dataset.container;
        position = positionChapeauElement;
        break;
    case 'accessoire':
        targetAnimation = '#img_accessoire';
        limiteData= document.getElementById("img_accessoire").dataset.container;
        position = positionAccessoireElement;
        break;
    case 'haut':
        targetAnimation = '#img_haut';
        limiteData= document.getElementById("img_haut").dataset.container;
        position = positionHautElement;
        break;
    case 'milieu':
        targetAnimation = '#img_milieu';
        limiteData= document.getElementById("img_milieu").dataset.container;
        position = positionMilieuElement;
        break;
    case 'bas':
        targetAnimation = '#img_bas';
        limiteData= document.getElementById("img_bas").dataset.container;
        position = positionBasElement;
        break;
    case 'encre':
        targetAnimation = '#img_encre';
        limiteData= document.getElementById("img_encre").dataset.container;
        position = positionEncreElement;
        break;
    case 'fond':
        targetAnimation = '#img_fond';
        limiteData= document.getElementById("img_fond").dataset.container;
        position = positionFondElement;
        break;
    default:
    console.log('on est dans la merde');
    }

    if(directionSlider == "right"){
        limiteSlide = -limite +500;
        if(position != limiteSlide) {
            newPosition = position - 500; 
            anime({
                targets: targetAnimation,        
                duration: '0',
                easing: 'easeOutExpo',
                translateX: newPosition
            });
            positionHautElement = newPosition;
        }
    }else{
        if(position < 0){
            newPosition = position /*Dyn*/ + 500;
            anime({
                targets: target, /*Dyn DONE*/           
                duration: '0',
                easing: 'easeOutExpo',
                translateX: newPosition
            });
            positionHautElement = newPosition; /*Dyn*/
        } 
    }
}
