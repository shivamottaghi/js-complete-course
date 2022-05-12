/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    fetch('../../_shared/api.json')
        .then(data => data.json())
        .then(jsobj => {
            let heroes = jsobj.heroes;
            console.log(heroes);
            document.getElementById('run').addEventListener('click', () =>{
                let delid = document.getElementById('hero-id').value;
                let found = heroes.find(hero => hero.id == delid );
                heroes.splice(heroes.indexOf(found) , 1);
                console.log(heroes);
            })
        })
})();
