import { SudokuGenerator } from './services/SudokuGenerator';

const generator = new SudokuGenerator();
const sudoku = generator.generateSudoku({ difficulty: 'medium' });

console.log(sudoku.map(row => row.join(' ')).join('\n'));
