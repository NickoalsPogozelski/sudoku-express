import express, { Request, Response } from 'express';
import { sudokuRoutes } from './routes/SudokuRoutes';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api/sudoku', sudokuRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
