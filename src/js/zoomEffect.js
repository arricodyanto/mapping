const zoomElement = document.querySelector("svg");
let zoom = 1;
const ZOOM_SPEED = 0.1;

document.addEventListener("wheel", function(e) {  
    
    if(e.deltaY > 0){    
        if (zoomElement.style.transform >= `scale(5)`) {
            return false;
        }
        zoomElement.style.transform = `scale(${zoom += ZOOM_SPEED})`;  

    }else{    
        if (zoomElement.style.transform == `scale(0.1)`) {
            // console.log("minus");
            return false;
        }
        zoomElement.style.transform = `scale(${zoom -= ZOOM_SPEED})`;  }

});
