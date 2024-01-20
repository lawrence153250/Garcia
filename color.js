const myButton = document.getElementById('myButton')
const container = document.getElementById('container')

    myButton.addEventListener('click', function onclick(event) {
        const backgroundColor = container.style.backgroundColor;

        if (backgroundColor === 'cyan'){
            container.style.backgroundColor = 'white';
            container.style.color = 'black';
        } else {
            container.style.backgroundColor = 'cyan';
            container.style.color = 'salmon';
        }
    });