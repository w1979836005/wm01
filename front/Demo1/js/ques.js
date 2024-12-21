function testOne() {
    var a = 1;
    var b = 2;
    var c = 3;
    a = b + c;
    b = c - a;
    c = a * b;
    console.log(a);
    console.log(b);
    console.log(c);
//a 5 b -2 c -10
}

function testTwo() {
    var a = 1;
    var b = 2;
    var c = 3; // 1     2     3
    a = a + b; // 3     2     3
    b = b + a; // 3     5     3
    c = c + b; // 3     5     8
    console.log(a); // 3
    console.log(b); // 5
    console.log(c); // 8

    // a 3 b 5 c 8
}

function testThree() {
    //a       b
    var a = '1';
    var b = 2; // "1"     2
    a = a + b; // "12"    2
    b = b + a; // "12"    "212"
    console.log(a); // 输出12
    console.log(b); // 输出212

    //a string:12  b string:212
}

function testFour() {
    //a         b
    var a = '1';
    var b = 2;
    a = b + a; //"21"       2
    b = b + a; //"21"       "221"
    console.log(a); //21
    console.log(b); //221
}

function testFive() {
    var a = '3';
    var b = 2;
    console.log(a - b);

    //1
}