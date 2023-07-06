const todos = new Array(0)
  .fill(1)
  .map((_, i) => ({
    id: '1',
    todo: `Note ${i}`,
    completed: false
  }))

module.exports = todos