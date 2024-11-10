class SudokuSolver {

  rows = { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9 };

  validate(puzzleString) {
    if (puzzleString?.length !== 81) return { valid: false, error: 'Expected puzzle to be 81 characters long' };
    if (!!puzzleString.match(/[^0-9\.]/)) return { valid: false, error: 'Puzzle cannot be solved'};
    return { valid: true };
  }

  validateCoordinates({ row, column }) {
    const invalidRow = !row 
      || typeof row !== 'string' 
      || row.length !== 1 
      || row.match(/[^a-iA-I]/);
    const invalidColumn = !column 
      || Number.isNaN(Number(column)) 
      || String(column).length != 1 
      || String(column).match(/[^0-9]/);

    if (invalidColumn || invalidRow) {
      return { "error": "Invalid coordinate" }
    }

    return { valid: true };
  }

  validateValue(value){
    if (!value || Number.isNaN(Number(value)) || String(value).length != 1 || String(value).match(/[^0-9]/)) {
      return { error: "Invalid value" };
    }
    return { valid: true }
  }

  validateInput(puzzleString, row, column, value) {
    const validPuzzle = this.validate(puzzleString);
    if (!validPuzzle.valid) return validPuzzle.error;
    const validateValue = this.validateValue(value);
    if (!validateValue.valid) return validateValue.value;
    const validCoordinates = this.validateCoordinates({ row, column });
    if (!validCoordinates.valid) return validCoordinates.error;
    return { valid: true }
  }

  checkRowPlacement(puzzleString, row, column, value) {
    const validInput = this.validateInput(puzzleString, row, column, value);
    if (!validInput.valid) return validInput.error;

    const rowNumber = this.rows[row];
    console.log(row, ':', rowNumber);

    return { valid: true }
  }

  checkColPlacement(puzzleString, row, column, value) {

  }

  checkRegionPlacement(puzzleString, row, column, value) {

  }

  solve(puzzleString) {
    
  }
}

module.exports = SudokuSolver;