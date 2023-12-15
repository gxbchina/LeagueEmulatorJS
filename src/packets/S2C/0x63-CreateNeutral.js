import BasePacket from '../BasePacket.js';
import SVector3 from '../sharedstruct/SVector3.js';

export default class CreateNeutral extends BasePacket {
	static struct = {
		netObjId: 'uint32',
		netNodeId: 'uint8',
		position: SVector3,
		groupPosition: SVector3,
		faceDirectionPosition: SVector3,
		objectName: ['char', 64],
		skinName: ['char', 64],
		uniqueName: ['char', 64],
		spawnAnimationName: ['char', 64],
		team: 'uint32',
		damageBonus: 'int32',
		healthBonus: 'int32',
		minionRoamState: 'uint32',
		groupNumber: 'int32',
		buffSideTeamId: 'uint32',
		revealEvent: 'int32',
		initialLevel: 'int32',
		spawnDuration: 'float',
		spawnTime: 'float',
		behaviorTree: 'uint8',
		aiScript: 'string0',//32
	};
}
