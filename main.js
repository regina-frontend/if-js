const user = 'John Doe';
const student = 'Regina';
// eslint-disable-next-line no-undef
console.log(student);
/*let user = student;*/ //выдает ошибку, так как мы уже задали значение переменной user
// eslint-disable-next-line no-undef
console.log(user);

let test = 1;
test += 1;
test += '1';
test -= 1;
test = false;
// eslint-disable-next-line no-undef
console.log(test);

const arr = [2, 3, 5, 8];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
}
// eslint-disable-next-line no-undef
console.log(sum);

const ar = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < ar.length; i++) {
  if (ar[i] > 5 && ar[i] < 10) {
    // eslint-disable-next-line no-undef
    console.log(ar[i] + ' ');
  }
}

const ar3 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < ar.length; i++) {
  if (ar3[i] % 2 === 0) {
    // eslint-disable-next-line no-undef
    console.log(i);
  }
}
