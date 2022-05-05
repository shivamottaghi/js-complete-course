/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("run").addEventListener("click", () =>
    {
        let day = document.getElementById("dob-day").value ;
        let month = document.getElementById("dob-month").value - 1;
        let year = document.getElementById("dob-year").value;

        let d = new Date();
        /*let today= d.getTime()*/
        let today = d.getDate();
        let thisMonth = d.getMonth();
        console.log(d.getMonth())
        let thisYear = d.getFullYear();
        let ageYear = thisYear - year;
        let ageMonth = thisMonth - month;
        if (ageMonth < 0){
            ageYear --;
            ageMonth = 12 + ageMonth;
        }
        let ageDay = today - day ;
        if (ageDay < 0 ){
            ageMonth --;
            ageDay = 30 + ageDay ;
        }
        let message =
            "Yor Age is : " + ageYear + " Years and " + ageMonth + " Months and " + ageDay + " Days\n But it doesn't work completely right!";
        window.alert(message);
    })

})();
