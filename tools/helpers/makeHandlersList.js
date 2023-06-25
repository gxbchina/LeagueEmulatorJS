
const fs = require('fs');

var handlers = {};

var packetDir = __dirname + '/../handlers/';
fs.readdirSync(packetDir).forEach(function (file) {
	if (file.endsWith('.js') && file !== 'index.js')
		handlers['0x' + file.between('0x', '-')] = `./${file.replace('.js', '')}`;
});

handlers = Object.keys(handlers).sort((a, b) => parseInt(a, 16) - parseInt(b, 16)).reduce(
	(obj, key) => {
		obj[key] = handlers[key];
		return obj;
	}, {}
);

console.log(`module.exports = {`);
for (var packetId in handlers) {
	console.log(`\t${packetId}: require('${handlers[packetId]}'),`);
}
console.log(`};\n`);
