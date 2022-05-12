/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById('run').addEventListener('click',()=>{
        let inpId = document.getElementById('hero-id').value;
        async function getData(){
            let data = await fetch('../../_shared/api.json');
            let jsobj = await data.json();
            console.log(jsobj);
            let heroes = jsobj.heroes;
            return heroes;
        }
        async function displayData (){
            let heroes = await getData();
            let found = heroes.find(hero => hero.id == inpId)
            console.log(found);
            let templ = document.getElementById('tpl-hero');
            let clone = templ.content.cloneNode(true);
            let nametag = clone.querySelector('.name');
            let egotag = clone.querySelector('.alter-ego');
            let powertag = clone.querySelector(".powers");

            nametag.innerText = found.name;
            egotag.innerText = found.alterEgo;
            powertag.innerText = found.abilities;

            document.getElementById('target').appendChild(clone);
        }
        displayData();

        /*--------Same code but with then() method--------*/
        /*fetch('../../_shared/api.json')
            .then(response => response.json())
            .then(data => {
                let found = data.heroes.find(hero => hero.id == inpId)
                console.log(found);
                let templ = document.getElementById('tpl-hero');
                let clone = templ.content.cloneNode(true);
                let nametag = clone.querySelector('.name');
                let egotag = clone.querySelector('.alter-ego');
                let powertag = clone.querySelector(".powers");

                nametag.innerText = found.name;
                egotag.innerText = found.alterEgo;
                powertag.innerText = found.abilities;

                document.getElementById('target').appendChild(clone);
            })*/

    })
})();
