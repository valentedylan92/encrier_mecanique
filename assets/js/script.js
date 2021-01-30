// VAR CAPTURE
var buttonCapture = document.getElementById('capture');
// VAR RANDOM
var buttonRandom = document.getElementById('random');
// VAR ARROW
var leftArrow = document.getElementById('arrow-l');
var rightArrow = document.getElementById('arrow-r');
var arrows = document.getElementsByClassName("arrow");
var arrArrows = Array.from(arrows);
// VAR MODAL
var modal = document.getElementById("modal");
var span = document.getElementsByClassName("close")[0];
// VAR CONTAINER-IMG
var container = document.getElementsByClassName("image_container");
var arrContainer = Array.from(container);
var elementShadow = document.getElementsByClassName('imgShadow');
var arrShadow = Array.from(elementShadow);

var elementChapeau = document.getElementsByClassName('imgChapeau');
var arrChapeau = Array.from(elementChapeau);

var elementAccessoire = document.getElementsByClassName('imgAccessoire');
var arrAccessoire = Array.from(elementAccessoire);

var elementFond = document.getElementsByClassName('imgFond');
var arrFond = Array.from(elementFond);

var elementHaut = document.getElementsByClassName('imgHaut');
var arrHaut = Array.from(elementHaut);

var elementMilieu = document.getElementsByClassName('imgMilieu');
var arrMilieu = Array.from(elementMilieu);

var elementBas = document.getElementsByClassName('imgBas');
var arrBas = Array.from(elementBas);

// VAR HAIR ON/OFF
var hairControl = document.getElementById("control_hair");

function randomize(el){
    var random = Math.floor(Math.random() * 16) + 1;
    el.style.order = random;
}

buttonRandom.onclick = function() {
    arrShadow.forEach(element => {
        randomize(element);
    });
    arrChapeau.forEach(element => {
        randomize(element);
    });
    arrAccessoire.forEach(element => {
        randomize(element);
    });
    arrFond.forEach(element => {
        randomize(element);
    });

    arrHaut.forEach(element => {
        randomize(element);
    });

    arrMilieu.forEach(element => {
        randomize(element);
    });
    
    arrBas.forEach(element => {
        randomize(element);
    });

    // var random = Math.floor(Math.random() * 3) + 1;

    // for(var i= 0; i<random; i++){
    //     console.log(random + 'a');
    //     rightArrow.click();
    // }
    // random = Math.floor(Math.random() * 3) + 1;

    // for(var i= 0; i<random; i++){
    //     console.log(random + 'b');
    //     leftArrow.click();
    // }

    
    // document.getElementById("control_chapeau").click();

    // var random = Math.floor(Math.random() * 3) + 1;

    // for(var i= 0; i<random; i++){
    //     console.log(random + 'a');
    //     rightArrow.click();
    // }
    // random = Math.floor(Math.random() * 3) + 1;

    // for(var i= 0; i<random; i++){
    //     console.log(random + 'b');
    //     leftArrow.click();
    // }

    // document.getElementById("control_accessoire").click();

    // var random = Math.floor(Math.random() * 3) + 1;

    // for(var i= 0; i<random; i++){
    //     console.log(random + 'a');
    //     rightArrow.click();
    // }
    // random = Math.floor(Math.random() * 3) + 1;

    // for(var i= 0; i<random; i++){
    //     console.log(random + 'b');
    //     leftArrow.click();
    // }

    // document.getElementById("control_shadow").click();
}; 

var elementControl = document.getElementsByClassName('control');
var arrControl = Array.from(elementControl);

arrControl.forEach(element => {
    element.onclick = function() {
        arrControl.forEach(elementClass => {
            elementClass.classList.remove("is-active");
        }); 
        element.classList.add("is-active");  

        if(element.dataset.control == "chapeau"){
            document.getElementById("control_hair").classList.add("is-active");
        }else{
            document.getElementById("control_hair").classList.remove("is-active");
        }
    }; 
});

var hairElement = Array.from(document.getElementsByClassName('hair'));

hairControl.onclick = function() {
    if(hairControl.classList.contains('off')){
        hairControl.classList.remove("off");
        hairElement.forEach(element => {
            element.classList.remove("is-active");  
        });
    }else{
        hairControl.classList.add("off");  
        hairElement.forEach(element => {
            element.classList.add("is-active");  
        });
    }
}


arrContainer.forEach(element => {
    var count = element.childElementCount;
    element.style.width = `${count * 500}px`;
    element.dataset.container = count * 500;
});

arrArrows.forEach(element => {
    element.addEventListener('click', e => {
        anime({
            targets: element,
            duration: '80',
            direction: 'alternate',
            scale: .8
          });
          var direction = element.dataset.arrow;
          clickSlider(direction);
      });

});

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
            container= document.getElementById("img_chapeau");
            limiteData= container.dataset.container;
            position = container.dataset.position;
            break;
        case 'accessoire':
            targetAnimation = '#img_accessoire';
            container = document.getElementById("img_accessoire");
            limiteData= container.dataset.container;
            position = container.dataset.position;
            break;
        case 'haut':
            targetAnimation = '#img_haut';
            container= document.getElementById("img_haut");
            limiteData= container.dataset.container;
            position = container.dataset.position;
            break;
        case 'milieu':
            targetAnimation = '#img_milieu';
            container= document.getElementById("img_milieu");
            limiteData= container.dataset.container;
            position = container.dataset.position;
            break;
        case 'bas':
            targetAnimation = '#img_bas';
            container= document.getElementById("img_bas");
            limiteData= container.dataset.container;
            position = container.dataset.position;
            break;
        case 'shadow':
            targetAnimation = '#img_shadow';
            container= document.getElementById("img_shadow");
            limiteData= container.dataset.container;
            position = container.dataset.position;
            break;
        case 'fond':
            targetAnimation = '#img_fond';
            container= document.getElementById("img_fond");
            limiteData= container.dataset.container;
            position = container.dataset.position;
            break;
        default:
            console.log('on est dans la merde');
        }

    if(directionSlider == "right"){
        limiteSlide = -limiteData +500;
        if(position != limiteSlide) {
            newPosition = parseInt(position) - 500; 
            anime({
                targets: targetAnimation,        
                duration: '0',
                easing: 'easeOutExpo',
                translateX: newPosition
            });
            container.dataset.position = newPosition;
        }
    }else{
        if(position < 0){
            newPosition = parseInt(position) + 500;
            anime({
                targets: targetAnimation, /*Dyn DONE*/           
                duration: '0',
                easing: 'easeOutExpo',
                translateX: newPosition
            });
            container.dataset.position = newPosition; /*Dyn*/
        } 
    }
}

buttonCapture.onclick = function() {
    document.getElementById('downloadImg').innerHTML = ""
    var canvasPromise  = html2canvas(document.querySelector("#portrait_container"), {
        useCORS: true
    });
    canvasPromise.then(canvas => {
            canvas.setAttribute('id','canvas');
            document.getElementById('downloadImg').appendChild(canvas);
            let pnGImage = convertCanvasToImage();
            document.getElementById('downloadImg').appendChild(pnGImage);
          
    });
    modal.style.display = "flex";
}; 


function convertCanvasToImage() {
    let canvas = document.getElementById("canvas");
    let image = new Image();
    image.src = canvas.toDataURL();
    return image;
  }
  
  var downloadImg = document.getElementById("downloadImg");

  downloadImg.onclick = function() {
      var image = document.getElementById("canvas").toDataURL("image/jpeg");
      downloadImg.setAttribute("href", image);
  }; 

span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var theInput = document.getElementById("input_color");
var theColor = theInput.value;
theInput.addEventListener("input", function() {
document.getElementById("fond_color").style.background = theInput.value;
document.getElementById("fond_color").style.animation = "initial";


}, false);