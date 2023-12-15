import BasePacket from '../BasePacket.js';


export default class SetPARState extends BasePacket {
	static struct = {
		unitNetId: 'uint32',
		PARState: 'uint32',
	};
}
