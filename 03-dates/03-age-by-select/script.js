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
        let bday = document.getElementById("dob-day").value ;
        let bmonth = document.getElementById("dob-month").value;
        let byear = document.getElementById("dob-year").value;

        let date = new Date();
        let today = date.getDate();
        let thisMonth = date.getMonth() + 1;
        let thisYear = date.getFullYear();

        let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];






        /*-------------This part calculated the years old corectly------------*/
        /*let bstring = month + "/" + day + "/" + year;

        let now = Date.now();
        let birthday = new Date(bstring);

        let age = now - birthday;
        console.log(age);

        let yearage = Math.floor(age/1000/60/60/24/365);
        window.alert(yearage);*/

        /*---------Oldest version of my code which was very wrong----------*/
        /*let d = new Date();
        /!*let today= d.getTime()*!/
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
        window.alert(message);*/
    })

})();
