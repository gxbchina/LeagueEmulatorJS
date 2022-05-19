var BattleUnit = require('../Unit/Battle');
const { createPacket } = require('../../../Core/PacketUtilities');
const EVENT = require("../../../Packets/EVENT");


class BattleTurret extends BattleUnit {

	announceDie(source){
		var ANNOUNCE2 = createPacket('ANNOUNCE2');
		ANNOUNCE2.netId = this.parent.netId;
		ANNOUNCE2.id = EVENT.OnTurretDie;
		ANNOUNCE2.EventData = {
			OtherNetId: source.parent.netId
		};
		this.parent.packetController.sendTo_everyone(ANNOUNCE2);
	}
	async onDie(source){
		this.announceDie(source);
	}

}


module.exports = BattleTurret;
