/* 
function {
    if(translateX > 8550px){
        translateX += -570px
    }
}
*/

document.addEventListener('DOMContentLoaded', () => {
    const slideContainer = document.querySelector('.featured')
    const rightButton = document.querySelector('.right')
    const leftButton = document.querySelector('.left')
    let count = 0;
    let pixals = 0;

    rightButton.addEventListener('click', e => {
        moveRight();
    });
    leftButton.addEventListener('click', e => {
        moveLeft();
    });

    function moveRight() {
        if(count < 4) {
            count++;
            pixals -= 1635;
            slideContainer.style.transform = `translate(${pixals}px)`
            console.log(count)
        } else {
            count = 0;
            pixals = 0;
            slideContainer.style.transform = `translate(${pixals}px)`
        }
    }

    function moveLeft() {
        if( count === 0) {
            return
        }else(count <= 4) 
            console.log(count)
            count--;
            pixals += 1635;
            slideContainer.style.transform = `translate(${pixals}px)`
            console.log(count)
        } 
    
    
    // const xValue = getComputedStyle(choiceContainer).transform
    
    
    // console.log(xValue)
});