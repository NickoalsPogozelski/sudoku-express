import { Router } from 'express';
import { generateSudoku } from '../controllers/SudokuController';

const router = Router();

router.get('/generate', generateSudoku);

export { router as sudokuRoutes };
