/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById('run').addEventListener("click", () => {
            let pass1 = document.getElementById('pass-one');
            let pass2 = document.getElementById('pass-two');
            let orgstyle = pass1.style;
            if (pass1.value != pass2.value) {
                pass1.classList.add('error') ;
                pass2.classList.add('error') ;
            } else {
                pass1.classList.remove('error');
                pass2.classList.remove('error');
            }

        });

})();
