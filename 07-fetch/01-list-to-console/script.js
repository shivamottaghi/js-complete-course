/* becode/javascript
 *
 * /09-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    /*Dimi helped me with this one cause I had no idea what was going on, then I did it my own way*/
    /*async function getData()
    {
        let data = await fetch(
            '../../_shared/api.json');
        let main = await data.json();
        console.log(main);
    }
    getData();*/

    document.getElementById('run').addEventListener('click', () => {

        fetch('../../_shared/api.json')
            .then(response => response.json())
            .then(data => console.log(data))
    })




})();
