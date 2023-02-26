let obj1 = {
	name: 'Dima',
	age: 41,
}

console.log(addLength(obj1));

function addLength(obj) {
	let resObj = {};
	let userLength = 0;

	resObj = obj;

	for (let key in resObj) {
		userLength++;
	}

	resObj.length = userLength;

	return resObj;
}