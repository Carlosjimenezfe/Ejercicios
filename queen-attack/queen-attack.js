export class QueenAttack {
  constructor(positioning = { white : [0, 3], black : [7, 3]}) {
      this.white = positioning["white"];
      this.black = positioning["black"];
      this.bordsize = 8;
      this.board = [];
      if (this.white[0] === this.black[0] && this.white[1] === this.black[1]) throw new Error("Queens cannot share the same space")
  }

  toString() {
      let i = 0;
      while(i < this.bordsize)
      {
          let row = ''
          let j = 0
          while (j < this.bordsize - 1)
          {
              if (this.white[0] == i && this.white[1] == j)
                  row += 'W '
              else if (this.black[0] == i && this.black [1] == j)
                  row += 'B '
              else
                  row += '_ '
              j++;
          }
          if (this.white[0] == i && this.white[1] == this.bordsize - 1)
              row += 'W'
          else if (this.black[0] == i && this.black[1] == this.bordsize - 1)
              row += 'B'
          else
              row += '_'
          this.board.push(row)
          i++
      }
      this.board[this.bordsize - 1] += '\n'
      return this.board.join('\n')
  }

  canAttack() {
      return (Boolean(this.white[0] == this.black[0] || this.white[1] == this.black[1] || Math.abs(this.white[0] - this.black[0]) == Math.abs(this.white[1] - this.black[1])))
  }
}