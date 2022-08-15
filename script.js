/* 
creare un finto login e valutare se la password inserita è corretta, una volta entrato nel programma
avviare il gioco dei dadi e nscondere il form del login.

Sia il pc che il computer tirano casualmente un numero da 1 a 6, chi fa il punto maggiore vince.
Mostrare i risultati prima in console poi a schermo
*/

const placeholder = document.querySelector('p');
const button = document.querySelector('button');
const card = document.querySelector('.card');

/* const emails = ['marco@libero.it', 'francesco@libero.it', 'luca@libero.it', 'salvo@libero.it', 'fabio@libero.it', 'matteo@libero.it'];
 */

const emails = [
    { name: 'Marco', email: 'marco@libero.it' },
    { name: 'Francesco', email: 'francesco@libero.it' },
    { name: 'Luca', email: 'luca@libero.it' },
    { name: 'Salvo', email: 'salvo@libero.it' },
    { name: 'Fabio', email: 'fabio@libero' },
    { name: 'Matteo', email: 'matteo@libero' }
]




button.addEventListener('click', function () {

    ////////// LOGIN //////////

    const inputEmail = document.getElementById('email').value;
    const formInput = document.getElementById('form');
    const subtitile = document.getElementById('subtitle');

    //se la mail non esiste nascondo la card
    if (!inputEmail) {
        placeholder.innerHTML = ''; A
        card.classList.add('d-none');
        return
    }


    let message = 'non sei registrato';

    for (let i = 0; i < emails.length; i++) {
        const user = emails[i];

        for (let mail in user) {

            //se l'email è registrata mostro il messaggio di benvenuto, nascondi il form, l'il sottotitolo e mostro la card per tirare i dadi
            if (user[mail].includes(inputEmail)) {
                message = `Benvenuto ${user['name']}, puoi tirare i dadi <i class="fa-solid fa-face-grin-wink"></i>`;
                card.classList.remove('d-none');
                formInput.classList.add('d-none');
                subtitile.classList.add('d-none');
            }
        }
    }

    placeholder.innerHTML = message;

    ///////// GAME ///////////

    const goButton = document.getElementById('go');


    goButton.addEventListener('click', function () {

        const cpu = document.getElementById('cpu');
        const user = document.getElementById('user');
        const placeholderResult = document.getElementById('placeholder-result');

        const imgs = {
            1: '1.svg',
            2: '2.svg',
            3: '3.svg',
            4: '4.svg',
            5: '5.svg',
            6: '6.svg'
        };

        function getImage(num) {
            return `<img src="imgs/${num}.svg" alt="${num}">`;
        }

        function randomNumber() {
            return Math.floor(Math.random() * 6 + 1);
        }

        const cpuNumber = randomNumber();
        const userNumber = randomNumber();

        cpu.innerHTML = getImage(cpuNumber);
        user.innerHTML = getImage(userNumber);

        let result = 'Avete pareggiato ';

        if (cpuNumber < userNumber) {
            result = 'Hai vinto <i class="fa-solid fa-face-grin-wide me-1"></i> <i class="fa-solid fa-trophy"></i>';
            confetti({
                particleCount: 300,
                spread: 100
            });
        } else if (cpuNumber > userNumber) {
            result = 'Hai perso <i class="fa-solid fa-face-frown"></i>';
        }

        placeholderResult.innerHTML = result;
    });


})