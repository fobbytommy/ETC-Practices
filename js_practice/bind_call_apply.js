function sayName(label, label2) {
	console.log(`${label}: ${this.name}`);
	console.log(label2)
}

var person1 = {
	name: "Tommy"
}

var person2 = {
	name: "Justin"
}

sayName.call(person1, "person1", "label2 check");
sayName.call(person2, "person2", "label2 check");

sayName.apply(person1, ['person1', 'label check']);
sayName.apply(person2, ['person2', 'label check']);

var sayPerson1 = sayName.bind(person1, 'person1');
sayPerson1('hi');
