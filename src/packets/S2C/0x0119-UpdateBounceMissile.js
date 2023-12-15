import ExtendedPacket from '../ExtendedPacket.js';
import SVector3 from '../sharedstruct/SVector3.js';

export default class UpdateBounceMissile extends ExtendedPacket {
	static struct = {
		targetNetId: 'uint32',
		casterPosition: SVector3,
	};
}
