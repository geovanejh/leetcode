function isValidSudoku(board: string[][]): boolean {
  const gridSet: Set<string>[][] = Array.from({ length: 3 }, () =>
    Array.from({ length: 3 }, () => new Set<string>()),
  );

  for (let i = 0; i <= 8; i++) {
    const rowSet = new Set<string>();
    const colSet = new Set<string>();
    for (let j = 0; j <= 8; j++) {
      const cell = board[i][j];
      const colCell = board[j][i];
      const box = gridSet[Math.floor(i / 3)][Math.floor(j / 3)];

      if (cell !== ".") {
        if (box.has(cell) || rowSet.has(cell)) return false;
        box.add(cell);
        rowSet.add(cell);
      }

      if (colCell !== ".") {
        if (colSet.has(colCell)) return false;
        colSet.add(colCell);
      }
    }
  }

  return true;
}
