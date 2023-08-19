let string = "";
const inputField = document.querySelector('input');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.innerHTML;

        if (buttonText === '=') {
            try {
                const result = eval(string);
                inputField.value = result;
                string = String(result);
            } catch (error) {
                inputField.value = 'Error';
                string = "";
            }
        } else if (buttonText === 'C') {
            string = "";
            inputField.value = string;
        } else {
            string += buttonText;
            inputField.value = string;
        }
    });
});
