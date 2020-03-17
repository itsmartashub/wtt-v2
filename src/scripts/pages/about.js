import fs from 'fs'

export function render() {
	console.log('ABOUT');
}

export function readFSText() {
	// Read contents as a string
	// const FSstring = fs.readFileSync(__dirname + './../../json/new_watches.json', 'utf8')
	const FSstring = fs.readFileSync(__dirname + './../../test.txt', 'utf8')

	// let JSONPARSE = JSON.parse(FSstring)
	// JSONPARSE = Object.values(JSONPARSE)
	// // console.log(JSONPARSE);

	// JSONPARSE.forEach(watch => {
	// 	console.log(watch.title);
	// });

	document.querySelector('p').innerText = FSstring
}