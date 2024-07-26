let color_box = document.getElementById('color-display');

let aqua_button = document.getElementById('aqua');

let teal_button = document.getElementById('teal');

let pink_button = document.getElementById('pink');

let purple_button = document.getElementById('purple');

let colorless_button = document.getElementById('colorless');

let hide_button = document.getElementById ('hide');

aqua_button.onclick = function () {
    color_box.style.backgroundColor = 'aqua';
    color_box.innerHTML = 'aqua';
}

teal_button.onclick = function () {
    color_box.style.backgroundColor = 'teal';
    color_box.innerHTML = 'teal';
}

pink_button.onclick = function () {
    color_box.style.backgroundColor = 'pink';
    color_box.innerHTML = 'pink';
}

purple_button.onclick = function () {
    color_box.style.backgroundColor = 'purple';
    color_box.innerHTML = 'purple';
}
colorless_button.onclick = function () {
    color_box.style.backgroundColor = 'white';
    color_box.innerHTML = 'colorless';
}

hide_button.onclick = function() {
    if (color_box.style.display != 'none') {
        color_box.style.display = 'none';
        hide_button.innerHTML = 'show';
    }

    else {
        color_box.style.display = 'flex';
        hide_button.innerHTML = 'hide'
    }
}

let random_color = document.getElementById('random');
let color_buttons = [aqua_button, teal_button, pink_button, purple_button, colorless_button];

random_color.onclick = function () {
    let randInt = Math.floor(Math.random() * color_buttons.length);
    let selected_button = color_buttons[randInt];

    if (selected_button == 'colorless') {
        color_box.style.backgroundColor = 'white';
    }

    color_box.style.backgroundColor = selected_button.id;
    color_box.innerHTML = selected_button.id;

}