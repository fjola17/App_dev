const data = require('../resources/data');

module.exports.getAllBoards = () => data.boards;

module.exports.createBoard = (boards, newb) => [...boards, newb];
