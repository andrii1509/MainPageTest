let items = document.getElementsByClassName('slideItem');
let rightButton = document.getElementById('right');
let leftButton = document.getElementById('left');
items[0].classList.add('active');
let counter = 0;
rightButton.onclick = function () {
    items[counter].classList.remove('active');
    counter ++;
    if (counter >2){
        counter = 0;
        items[counter].classList.add('active');
    }else{
        items[counter].classList.add('active');
    }
};
leftButton.onclick = function () {
    items[counter].classList.remove('active');
    counter --;
    if (counter <0){
        counter = 2;
        items[counter].classList.add('active');
    }else{
        items[counter].classList.add('active');
    }

};