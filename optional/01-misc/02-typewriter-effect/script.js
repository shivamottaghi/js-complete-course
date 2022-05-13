/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let target = document.getElementById('target');
    let textstring = target.innerText;
    let textarr = textstring.split('');
    console.log(textarr);
    target.innerText = '';
    textarr.forEach((char,i) =>{
        setTimeout(()=> {
            target.innerHTML = target.innerHTML + char;
        }, 500 * i);
    })


})();
