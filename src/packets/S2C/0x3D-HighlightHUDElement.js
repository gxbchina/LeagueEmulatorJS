import BasePacket from '../BasePacket.js';


export default class HighlightHUDElement extends BasePacket {
	static struct = {
		elementPart: 'uint8',
		elementType: 'uint8',
		elementNumber: 'uint8',
		elementSubCategory: 'uint8',
	};
}
