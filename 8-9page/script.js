document.addEventListener('DOMContentLoaded', () => {
    
    const optionButtons = document.querySelectorAll('.option-button');

    optionButtons.forEach(button => {
        button.addEventListener('click', () => {
             
            button.classList.toggle('selected');
        });
    });

    
    const findNearMeButton = document.querySelector('.find-near-me-button');
    if (findNearMeButton) {
        findNearMeButton.addEventListener('click', () => {
            alert('กำลังค้นหาร้านอาหารใกล้คุณ...');
           
        });
    }
});