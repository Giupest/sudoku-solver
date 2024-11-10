const chai = require('chai');
const assert = chai.assert;

const Solver = require('../controllers/sudoku-solver.js');
const SudokuSolver = require('../controllers/sudoku-solver.js');
const puzzlesAndSolutions = require('../controllers/puzzle-strings.js').puzzlesAndSolutions;
const solver = new SudokuSolver();

suite('Unit Tests', () => {

    test('handles a valid puzzle string of 81 characters', () => {
        assert.deepEqual(solver.validate(puzzlesAndSolutions[0][0]), { valid: true });
    });

    test('handles a puzzle string with invalid characters (not 1-9 or .)', () => {
        const invalidPuzzle = puzzlesAndSolutions[0][0].replaceAll('.', 'a');
        assert.deepEqual(solver.validate(invalidPuzzle), { valid: false, "error": "Puzzle cannot be solved"});
    });

    test('handles a puzzle string that is not 81 characters in length', () => {
        const invalidPuzzle = puzzlesAndSolutions[0][0].slice(0, 60);
        assert.deepEqual(solver.validate(invalidPuzzle), { valid: false, "error": "Expected puzzle to be 81 characters long"});
    });

    test('handles a valid row placement', () => {
        assert.deepEqual(solver.checkRowPlacement(puzzlesAndSolutions[0][0], 'b', 3, 1), { valid: true });
    });

});
