/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let templ = document.getElementById('tpl-hero');

    document.getElementById('run').addEventListener('click' ,() => {
        /*----Async function to fetch the data-----*/
        async function getData(){
            let data = await fetch('../../_shared/api.json');
            let jsobj = await data.json();
            return jsobj.heroes;
        }
        /*----Async function to display the data----*/
        async function displayData(){
            let heroes = await getData();
            heroes.forEach(hero => {
                console.log(hero);
                let clone = templ.content.cloneNode(true);
                let name = clone.querySelector('.name');
                let ego = clone.querySelector('.alter-ego');
                let powers = clone.querySelector('.powers');
                let target = document.getElementById('target');
                name.innerText = hero.name;
                ego.innerText = hero.alterEgo;
                powers.innerText = hero.abilities;
                target.appendChild(clone);
            })
        }
        displayData();
    })
})();
