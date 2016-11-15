var a = 'hi';

function test() {
	console.log(a);
}
test();

let num = 1;
for (var i = 0; i < 2; i++) {
	let num = 2;
	console.log(num);
}
console.log(num);
