/* becode/javascript
 *
 * /07-misc/01
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    /* So Many Variables.. If You Don't Understand What I did... You're Not Alone */
    let targetString = document.getElementById('target').innerText;
    let wordByword = targetString.split(' ');
    /*console.log("seperate the words: " + wordByword);*/
    let charinspan = wordByword.map(word => {
        let splitword = word.split('');
        /*console.log("Split to chars: " + splitword );*/
        let charinspan = wrapInSpan(splitword);
        // console.log(charinspan);
        return charinspan;
    })
    function wrapInSpan (splitword){
       let charinspan = splitword.map(char => `<em class="mychar">${char}</em>`);
       return charinspan;
    }
    // console.log(charinspan);
    let spanCharToString = charinspan.map(word => {
        let wordWithCharInSpan = word.join('');
        return wordWithCharInSpan;
    })
    console.log(spanCharToString);
    let childString = spanCharToString.join(' ');
    console.log(childString);
    document.getElementById('target').innerHTML = childString;
    let chars = document.querySelectorAll('.mychar');
    let fontsize = 32;
    console.log(chars);
    let increase = true;
    let dif;
    for (let i= 0; i < chars.length; i ++){
        if (i % 5 === 0){
            increase != increase;
        }
        if (increase){
            dif = i%5 * 3;
        }
        else {
            dif = (5 - i%5) * 3 ;
        }
        chars[i].style.fontSize = fontsize + dif + "px";
    }


})();
