
const Packets = require("../Packets");
const {createPacket, sendPacket} = require("../PacketUtilities");


module.exports = function(q){
    console.log('handle: C2S.VIEW_REQ');


	var obj1 = q.packet.readobj(Packets.C2S.VIEW_REQ.packet);
	q.packet.off = 0;
	//console.log(obj1);

    var VIEW_ANS = createPacket('VIEW_ANS');
	VIEW_ANS.packet.SyncID = obj1.SyncID;
    var isSent = sendPacket(VIEW_ANS);
    
};