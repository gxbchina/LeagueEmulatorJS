var BasePacket = require('../BasePacket');


module.exports = class extends BasePacket {//S2C.
	struct = {
		Source: 'uint8',
		Destination: 'uint8',
	}
};