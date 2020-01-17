//Squash the bugs
//https://www.codewars.com/kata/56f173a35b91399a05000cb7

function findLongest(str) {
  return Math.max.apply(null, str.split(' ').map(i=> i.length));
}