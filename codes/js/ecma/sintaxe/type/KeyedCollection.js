// Keyed collections
var obj = {name: 'fulano'};
var map = new Map();
map.set(0, 1);
// map.set(1, 2);
map.set(2, 3);
map.set(1, 2);
map.set(obj, 10);
console.log(map);
var map = new Map([[0, 1],[2, 3], [1, 3]]);
console.log(map);

for(let [key, value] of map.entries()){
  console.log(`${key} => ${value}`);
}
console.log(map.get(2));
console.log(map.get(obj));

var set = new Set();
set.add(1);
set.add(1);
set.add(5);
set.add(2);
set.add(4);
for(let value of set){
  console.log(value);
}


// Indexed collections
var array = [];
array[0] = 1;
// array[1] = 2;
array[2] = 3;
array[1] = 2;
// array[obj] = 10;
console.log(array);

for(let [key, value] of array.entries()){
  console.log(`${key} => ${value}`);
}
