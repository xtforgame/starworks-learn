class X {
  constructor(name) {
    this.name = name;
  }
}

function newItem(obj) {
  const item = new X(obj.name);
  return item;
}

const a = new X('rick');
const c = newItem(a);
console.log(a.name);
console.log(c.name);

c.name = 'sing';

console.log(a.name);
console.log(c.name);



// =================

class X {
  constructor(name) {
    this.name = name;
  }
}

function assignRef(obj) {
  const item = obj.name;
  return item;
}

const a = new X('rick');
const c = assignRef(a);
console.log(a.name);
console.log(c.name);

c.name = 'sing';

console.log(a.name);
console.log(c.name);

// ====================


for (let index = 0; index < array.length; index++) {
  const element = array[index];
  console.log('element :', element);
}


// ==================


const array = [0, 1, 4];

array.forEach((value) => {
  console.log('value :', value);
});


function xx(a, b, c) {
  console.log('a, b, c :', a, b, c);
}

xx(1, 2);
xx();
xx(1, 2, 3, 4, 5, 6);

// ===================

const array = [0, 1, 4];

const arrayB = array.map((value, index) => {
  return {
    value,
    index,
    extraValue: value * index,
  };
});

console.log('arrayB :', arrayB);


/// =====================


const a = 1;
const b = 2;

// const str = '(a: ' + a + ', b: ' + b + ')';
const str = `(a: ${a}, b: ${b})`;
console.log('str :', str);

// ======

let a = 1;
console.log(a++);

a = 1;
console.log(++a);
