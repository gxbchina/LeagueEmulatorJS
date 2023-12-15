import ExtendedPacket from '../ExtendedPacket.js';
import SVector3 from '../sharedstruct/SVector3.js';


export default class SpawnMarker extends ExtendedPacket {
	static struct = {
		netObjId: 'uint32',
		netNodeId: 'uint8',
		position: SVector3,
		visibilitySize: 'float',
	};
}
