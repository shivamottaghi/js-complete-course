/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let pass = document.getElementById('pass-one');
    let valid = document.getElementById('validity');
    pass.addEventListener('input', () =>{
        if (pass.value.length>=8){
            let passarr = pass.value.split('');
            let numcount = 0;
            console.log(passarr);
            for (let i = 0 ; i < passarr.length ; i ++ ){
                if (!isNaN(parseFloat(passarr[i]))){
                    numcount ++;
                }
            }
            console.log(numcount);
            if (numcount >= 2){
                valid.innerHTML = 'ok';
            }else {
                valid.innerHTML = 'Not ok';
            }
        }
    });

})();
