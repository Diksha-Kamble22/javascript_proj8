console.log('Hello World!');


//BODMAS

var bodmas = 34 * 78 / 5 - 888;
console.log(bodmas);

var numerical = (22 * 35.5 / 5 + 10 * (3 - 4)) + (10 + 448 / 4 * (10 + 9));
console.log(numerical);


// break & continue

for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 5; j++) {

    if (j == i) {
      continue;
    }
    console.log(i + " " + j);
  }
}

console.log(" // Break ")

for (var i = 1; i <= 3; i++) {
  for (var j = 1; j < 4; j++) {

    if (j == 3) {
      break;
    }
    console.log(i + " " + j);
  }
}

// do while

var i = 60;

do {
  console.log(i);
  i++;
  if (i < 64) {
    continue;
  }
} while (i < 70);

console.log("// .. ")

var jk = 51;

do {
  console.log(jk);
  jk++;
  if (jk == 57) {
    break;
  }
} while (jk < 70);


console.log("for In & off loop !");

const array = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

for (var x in array) {
  console.log(array[x]);

  if (array < 20) {
    break;
  }
}

console.log("while loop ");

// use case 

var num = 10;

while (num < 21) {
  console.log(num);
  num++;

  if (num < 15) {
    continue;
  }
  console.log(i + "   " + 3);
}

console.log("//....");

for (var i = 1; i < 10; i++) {
  console.log(i * 8);

  if (i < 5) {
    continue;
  }
  console.log(i + " " + 2);
}