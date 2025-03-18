import { SudokuGrid, SudokuGeneratorOptions } from '../types/SudokuTypes';
import { isValidPlacement, shuffleArray } from '../utils/SudokuUtils';

export class SudokuGenerator {
  private grid: SudokuGrid;

  constructor() {
    this.grid = Array(9).fill(null).map(() => Array(9).fill(0));
  }

  private fillGrid(): boolean {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (this.grid[row][col] === 0) {
          const numbers = shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);

          for (const num of numbers) {
            if (isValidPlacement(this.grid, row, col, num)) {
              this.grid[row][col] = num;

              if (this.fillGrid()) return true; 

              this.grid[row][col] = 0;
            }
          }
          return false; 
        }
      }
    }
    return true;
  }

  private removeNumbers(difficulty: SudokuGeneratorOptions['difficulty']): void {
    const removalCounts = { easy: 30, medium: 40, hard: 50 };
    let count = removalCounts[difficulty];

    while (count > 0) {
      const row = Math.floor(Math.random() * 9);
      const col = Math.floor(Math.random() * 9);

      if (this.grid[row][col] !== 0) {
        this.grid[row][col] = 0;
        count--;
      }
    }
  }

  public generateSudoku(options: SudokuGeneratorOptions): SudokuGrid {
    this.grid = Array(9).fill(null).map(() => Array(9).fill(0));

    this.fillGrid();
    this.removeNumbers(options.difficulty);

    return this.grid;
  }
}
