export type SudokuGrid = number[][];

export type SudokuCell = {
   row: number;
   col: number;
   value: number | null;
}