import { Request, Response, RequestHandler } from 'express';
import { SudokuGenerator } from '../services/SudokuGenerator';
import { SudokuGeneratorOptions } from '../types/SudokuTypes';

const generator = new SudokuGenerator();

export const generateSudoku: RequestHandler = (req: Request, res: Response): void => {
  const { difficulty } = req.query as { difficulty: string };

  if (!['easy', 'medium', 'hard'].includes(difficulty)) {
    res.status(400).json({ error: 'Dificuldade inválida.' });
    return;
  }

  const sudoku = generator.generateSudoku({
    difficulty: difficulty as SudokuGeneratorOptions['difficulty']
  });

  res.json(sudoku);
};
