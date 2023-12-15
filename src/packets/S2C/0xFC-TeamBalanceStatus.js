import BasePacket from '../BasePacket.js';

export default class TeamBalanceStatus extends BasePacket {
	static struct = {
		surrenderReason: 'uint8',
		forVote: 'uint8',
		againstVote: 'uint8',
		team: 'uint32',
		goldGranted: 'float',
		experienceGranted: 'int32',
		towersGranted: 'int32',
	};
}
