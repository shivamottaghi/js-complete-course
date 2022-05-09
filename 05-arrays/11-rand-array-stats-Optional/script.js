/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click" , () =>{
        let randarr = Array(10).fill().map(()=> Math.floor(Math.random()* 99 + 1));
        randarr.forEach( (number, index) => {
            let i = index + 1 ;
            console.log(i);
            console.log(number);
            document.getElementById(`n-${i}`).innerHTML = number ;
        });
        /*---- Min number ----*/
        document.getElementById('min').innerHTML = randarr.reduce((a , b) => Math.min(a,b));
        /*----Max number ----*/
        document.getElementById('max').innerHTML = randarr.reduce((a,b) => Math.max(a,b));
        /*----- sum ---------*/
        document.getElementById('sum').innerHTML = randarr.reduce((sum , num) => sum+= num , 0);
        /*----- avg ---------*/
        document.getElementById('average').innerHTML = randarr.reduce((sum , num) => sum+= num , 0)/10;
        console.log(randarr);
    });

})();
