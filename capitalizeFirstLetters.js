    une chaîne avec plusieurs mots

    une chaîne avec un seul mot (voire une seule lettre)

    une chaîne vide
    
    // capitalizeFirst.js

const assert = require('assert');


// WRITE THE ACTUAL FUNCTION HERE


// Check that it works with several words

assert.strictEqual(capitalizeFirst("i am learning TDD"), "I Am Learning TDD)

// Check that it works with one word

assert.strictEqual(capitalizeFirst("javascript, 'Javascript');

// Check that it works with one letter

assert.strictEqual(capitalizeFirst("m", 'M');

// Check that it works with an empty string

assert.strictEqual(capitalizeFirst(" "), " ");
