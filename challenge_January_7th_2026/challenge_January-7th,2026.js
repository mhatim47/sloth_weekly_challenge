
function removeLastVowel(sentence) {
    const vowel = "aeiou";
    let result = ""
    let words = sentence.split(" ")
    for (let word of words) {
        let reversed = word.split("").reverse()
        for (let i = 0; i < reversed.length; i++) {
            let letter = reversed[i];
            if (vowel.includes(letter.toLowerCase())) {
                reversed.splice(i, 1)
                result += `${reversed.reverse().join("")} `;
                break
            }
        }
    }
    return result.trimEnd();
    
}

console.log(removeLastVowel("Those who dare to fail miserably can achieve greatly."))
console.log(removeLastVowel("Love is a serious mental disease."))
console.log(removeLastVowel("Get busy living or get busy dying."))
console.log(removeLastVowel("If you want to live a happy life, tie it to a goal, not to people."))
