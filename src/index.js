
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (  matrix === 0 || matrix === undefined)
  {
    return [];
  }
 for (let i = 0; i < matrix.length; i++){
   if (i % 2 != 0){
     matrix[i].reverse();
   }
 }
 return matrix.flat();
}
