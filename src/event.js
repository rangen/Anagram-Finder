const source = document.getElementById('source');
const container = document.getElementById('anagram-container');

source.addEventListener('input', () => {
    let start = Date.now()
    let anagrams = findAnagrams(source.value);
    container.innerHTML = "";
    if (!anagrams.length) {
        anagrams = ["No anagrams found!"]
    }
    
    anagrams.forEach(ana=>{
        const solution = document.createElement('h2');
        solution.innerText = ana;
        container.appendChild(solution)
    })
    document.getElementById('whenInDoubtPoundItOut').innerText = `${Date.now() - start}ms for search`
})


function findAnagrams(source) {
    return words.filter(test=>checkIsAnagram(test, source) && test !== source)
}