let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');

let screenVal = '';
for(item of buttons) {

    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        switch(buttonText) {
            case 'AC':
                screenVal = '';
                screen.value = screenVal;
                break;
             case 'C':
                screenVal = screen.value.slice(0,-1);
                screen.value = screenVal;
                break;
            case '=':
                try{
                screen.value = eval(screenVal);
                }catch {
                    screen.value = 'SYNTAX ERROR!';
                }
                break;
            default:
                screenVal += buttonText;
                screen.value = screenVal;
        }
    });
}