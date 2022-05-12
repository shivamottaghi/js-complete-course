/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
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
            document.getElementById('run').addEventListener('click' ,()=>{
                let name = document.getElementById('hero-name').value;
                let alterego = document.getElementById('hero-alter-ego').value;
                let powers = document.getElementById('hero-powers').value.split(', ');
                let myid = heroes.length + 1;
                let myhero = {id: myid, name: `${name}`, alerEgo: `${alterego}`, abilities: powers};
                heroes.push(myhero);
                console.log(heroes);
            } )


        })

   /* document.getElementById('run').addEventListener('click', ()=>{
        let name = document.getElementById('hero-name').value;
        let alterego = document.getElementById('hero-alter-ego').value;
        let powers = document.getElementById('hero-powers').value.split(', ');
        console.log(powers);
        async function getData(){
            let data = await fetch('../../_shared/api.json');
            let jsobj = await data.json();
            return jsobj.heroes;
        }
        async function addHero(){
            let heroes = await getData();
            let myid = heroes.length + 1;
            let myhero = {id: myid, name: `${name}`, alerEgo: `${alterego}`, abilities: powers};
            heroes.push(myhero);
            return heroes;
        }

        async function displayHeroes(){
            let heroes = await addHero();
            console.log(heroes);
        }

        displayHeroes();
    })*/
})();
