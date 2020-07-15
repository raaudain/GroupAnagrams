var groupAnagrams = function(strs) {
    const table = {};
    
    for (let word of strs){
        // Sort the letters in the words.
        // When sorted, all anagrams will be the same
        const key = word.split("").sort().join("");
        
        // Creates key in table
        if (!table[key]) table[key] = [];

        // Each word pushed to associated key's array
        table[key].push(word);
    }
    
    return Object.values(table);
};