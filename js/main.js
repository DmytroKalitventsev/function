let obj1 = {
	name: 'Dima',
	age: 41,
}

console.log(obj1);
console.log(addLength(obj1));

function addLength(obj) {
	let resObj = {...obj};
	let userLength = 0;
	
	for (let key in resObj) {
		userLength++;
	}

	resObj.length = userLength;

	return resObj;
}