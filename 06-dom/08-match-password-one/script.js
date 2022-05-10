/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementById('run').addEventListener("click",()=>{
        let warning = false;
        let pass1 = document.getElementById('pass-one');
        let pass2 = document.getElementById('pass-two');
        let orgstyle = pass1.style;
        if ( pass1.value != pass2.value ){
            pass1.style.border = '3px solid red';
            pass2.style.border = '3px solid red';
        }else {
            pass1.style = orgstyle;
            pass2.style = orgstyle;
        }

    });


})();
