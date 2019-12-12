// eslint-disable-next-line class-methods-use-this
const sortIcelandicAlphabeticOrder = (a, b) => {
  const ord = [
    ['A', 0],
    ['Á', 1],
    ['B', 2],
    ['D', 3],
    ['Ð', 4],
    ['E', 5],
    ['É', 6],
    ['F', 7],
    ['G', 8],
    ['H', 9],
    ['I', 10],
    ['Í', 11],
    ['J', 12],
    ['K', 13],
    ['L', 14],
    ['M', 15],
    ['N', 16],
    ['O', 17],
    ['Ó', 18],
    ['P', 19],
    ['Q', 20],
    ['R', 21],
    ['S', 22],
    ['T', 23],
    ['U', 24],
    ['Ú', 25],
    ['V', 26],
    ['W', 27],
    ['X', 28],
    ['Y', 29],
    ['Ý', 30],
    ['Z', 31],
    ['Þ', 32],
    ['Æ', 33],
    ['Ö', 34]];
  const atoi = new Map(ord);
  const A = a.toUpperCase().replace(/[^A-ZÁÐÉÍÓÚÝÞÆÖ]/g, '').split('').map((c) => atoi.get(c));
  const B = b.toUpperCase().replace(/[^A-ZÁÐÉÍÓÚÝÞÆÖ]/g, '').split('').map((c) => atoi.get(c));

  for (let i = 0; i < A.length && i < B.length; i += 1) {
    if (A[i] - B[i] < 0) {
      return -1;
    }
    if (A[i] - B[i] > 0) {
      return 1;
    }
  }
  if (A.length === B.length) {
    return 0;
  }
  return A.length - B.length;
};

export default sortIcelandicAlphabeticOrder;
