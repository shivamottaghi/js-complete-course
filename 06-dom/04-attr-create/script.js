/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let imgref = document.getElementById('source').getAttribute('data-image');
    console.log(imgref);
    let imgelem = document.createElement('img');
    imgelem.src = imgref;
    let parentelem = document.getElementById('target');
    parentelem.appendChild(imgelem);
    document.getElementById('source').remove();

})();
