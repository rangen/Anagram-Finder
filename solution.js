//Write your solution in the function below
//assume both word and baseline are valid strings
//return true if the words are anagrams of each other
//return false if they are not
function checkIsAnagram(word, baseline) {
    const counts = {}
    if (baseline.length !== word.length) {
        return false
    }

    [...word].forEach(char=>counts[char] = (counts[char]||0) + 1);
    
    [...baseline].forEach(char=> {
        if (counts[char] <= 0) {
            return false
        } else {
            counts[char]--
        }
    });
    if (Object.values(counts).every(val=>val === 0)) {
        return true
    }
    return false
}