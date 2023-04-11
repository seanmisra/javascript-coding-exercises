let vals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

vals.filter(x => x < 6).map(y => "VALUE: " + y).forEach(z => console.log(z));

// VALUE: 1
// VALUE: 2
// VALUE: 3
// VALUE: 4
// VALUE: 5