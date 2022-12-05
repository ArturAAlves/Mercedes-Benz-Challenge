function stringToArray(val) {
	console.log(val)
	cy.log(val)
	let reg = /\d+\.*\d*/g
	let replaced = val.replace(/,/g, '.')

	let evaluate = replaced
		.match(reg)
		.map(e => {
			return parseFloat(e).toPrecision(5)
		})
		.sort()
	return getSmallAndHigher(evaluate)
}

//get smaller and bigger number
function getSmallAndHigher(arr) {
	let smallAndHigher = {}
	smallAndHigher.lower = `£${arr[0]}`
	smallAndHigher.higher = `£${arr[arr.length - 1]}`

	/* 	smallAndHigher.push()
	smallAndHigher.push() */
	return smallAndHigher
}

class Helper {
	getCarValueResults(evaluate) {
		let result = stringToArray(evaluate)
		return result
	}
}

export default new Helper()
