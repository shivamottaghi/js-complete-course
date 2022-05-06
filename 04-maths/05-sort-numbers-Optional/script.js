/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {

        let numarr = document.getElementById("numbers").value.split(', ');
        numarr.sort(function (a,b){return a-b});
        console.log(numarr);
        window.alert(numarr);

        /*Here I wanted to turn the whole array into integer, Then I realized there is no need!*/
        /*for (let i = 0; i < numarr.length ; i ++){
            let numint = parseInt(numarr[i]);

        }
        console.log(numarr);*/

    });

})();
