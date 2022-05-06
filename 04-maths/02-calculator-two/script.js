/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
   let op1 = +document.getElementById("op-one").value;
   let op2 = +document.getElementById("op-two").value;

    var performOperation = function(operation) {
        // perform the operation
        console.log(operation);
        let output = 0 ;
        switch (operation) {
            case 'addition' :
                output = op1 + op2 ;
                break;
            case 'substraction' :
                output = op1 - op2;
                break;
            case 'multiplication':
                output = op1 * op2;
                break;
            case 'division':
                output = op1 / op2;
                break;

        }
        window.alert(output);
    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);
        });
    });
})();
