
const Packets = require("../Packets");
const {createPacket, sendPacket} = require("../PacketUtilities");


module.exports = function(q, obj1){
    console.log('handle: C2S.AUTO_ATTACK_OPTION');
	console.log(obj1);

};
