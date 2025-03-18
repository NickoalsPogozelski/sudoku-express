export type SudokuGrid = number[][]; // Uma matriz 9x9 de números

export interface SudokuGeneratorOptions {
  difficulty: 'easy' | 'medium' | 'hard';
}
