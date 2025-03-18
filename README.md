
# Sudoku Generator API

This project is an API built with Node.js, Express, and TypeScript that generates solvable Sudoku puzzles. The API allows you to generate Sudoku puzzles with different difficulty levels and retrieve them in a JSON format.

## Features

- Generate a Sudoku puzzle with varying difficulty levels.
- API endpoint to retrieve the generated puzzle in JSON format.
- Built using Node.js, Express, and TypeScript for type safety and scalability.

## Requirements

Before you begin, ensure you have the following installed:

- Node.js (version 16 or above)
- npm (Node Package Manager)
- TypeScript (for development)

## Installation

Follow the steps below to set up the project locally:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/sudoku-generator-api.git
   cd sudoku-generator-api
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Compile TypeScript**:

   You can compile TypeScript to JavaScript using the following command:

   ```bash
   npx tsc
   ```

   Alternatively, you can use `ts-node` to run the application directly in TypeScript without compiling manually:

   ```bash
   npx ts-node src/app.ts
   ```

## Configuration

The API doesn't require much configuration. You can specify the Sudoku difficulty level in the API request.

- **Difficulty Levels**: `easy`, `medium`, `hard`

## API Endpoints

### 1. **Generate Sudoku**

Generate a solvable Sudoku puzzle.

- **Endpoint**: `/api/sudoku/generate`
- **Method**: `GET`
- **Query Parameters**:
  - `difficulty` (required): The difficulty level of the Sudoku puzzle (`easy`, `medium`, or `hard`).

#### Example Request:

```bash
GET http://localhost:3000/api/sudoku/generate?difficulty=medium
```

#### Example Response:

```json
{
  "grid": [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
  ],
  "difficulty": "medium"
}
```

## Development

To contribute to the project, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b my-feature-branch
   ```
3. Make your changes and commit them:
   ```bash
   git commit -am 'Add new feature'
   ```
4. Push to your forked repository:
   ```bash
   git push origin my-feature-branch
   ```
5. Open a pull request from your forked repository to the original repository.

## Testing

For testing purposes, you can use tools like [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/) to test the API endpoints by sending requests and reviewing responses.

---
