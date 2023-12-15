
// allows you to inspect packets, parses them to readable objects
// bad code and behavior here, but who cares, it's only for testing / developing purposes

// todo: reading .lrf files (for now it has to be unpacked with https://github.com/moonshadow565/LoLReplayUnpacker)
// todo: sending recorded packets to the server, will give more control than in game client and possibility to verify response
// todo: sending recorded packets to the client, with ability to set breakpoints, pause etc.

// run with 'node tools/packet-inspector' then open link in your browser: `http://127.0.0.1/`
// example recordings: https://github.com/Karmel0x/LeagueEmulatorJS/issues/2

let replayDir = '../LeagueEmulatorJS_replays/';


import '../../src/core/init_utilities.js';
import { server, wss } from './init_client-server.js';
import fs from 'fs';

import packetParser from './packetParser.js';
import _replayreaders from '../_replayreaders/index.js';


let replayUnpacked;
let pId = 0;

wss.onMessage = (ws, data) => {

	let res = JSON.parse(data);
	console.log(res);

	if (res.cmd == 'loadpackets') {

		let offset = res.offset || 0;
		let limit = (res.limit || 2000) + offset;
		let packetsearch = res.packetsearch || [];
		for (let i = offset, l = replayUnpacked.length, ll = 0; i < l && ll < limit; i++) {
			let packetData = packetParser(replayUnpacked[i], i);

			if (!packetData)
				continue;

			if (packetsearch && packetsearch.length) {

				packetsearch = packetsearch.map(v => v.toLowerCase());
				let found = packetsearch.some(v =>
					(packetData.cmdName && packetData.cmdName.toLowerCase().includes(v))
					|| (packetData.channelName && packetData.channelName.toLowerCase().includes(v))
					|| (packetData.Parsed && packetData.Parsed.toLowerCase().includes(v))
					|| (packetData.Bytes && packetData.Bytes.toLowerCase().includes(v))
				);

				if (!found)
					continue;
			}

			ws.sendJson({
				cmd: 'newpacket',
				packet: packetData,
			});
			ll++;
		}

		ws.sendJson({
			cmd: 'endloading',
		});
	}
	//else if(res.cmd == 'initialize_client'){
	//	require('./init_client-network')();
	//}
	//else if(res.cmd == 'sendpacket'){
	//	let i = res.Id;
	//	let buffer = replayUnpacked[i].Bytes ? Buffer.from(replayUnpacked[i].Bytes, 'base64') : Buffer.from(replayUnpacked[i].BytesHex.split(' ').join(''), 'hex');
	//	
	//    enet.sendPacket(0, buffer, replayUnpacked[i].Channel);
	//}
	//else if(res.cmd == 'sendpacket_type'){
	//	const packet11 = createPacket(res.name, res.channel);
	//	packet11.partialKey = [ 0x2A, 0x00, 0xFF ];
	//	packet11.clientId = 0;
	//	packet11.playerId = 1;
	//	sendPacket(0, packet11);
	//}
	else if (res.cmd == 'loadreplaylist') {
		let replayList = fs.readdirSync(replayDir).filter((value) => {
			return value.endsWith('.json') || value.endsWith('.lrpkt');
		});
		ws.sendJson({
			cmd: 'loadreplaylist',
			list: replayList,
		});
	}
	else if (res.cmd == 'loadreplayfile') {
		replayUnpacked = _replayreaders(replayDir + res.name);
	}
	else if (res.cmd == 'addpacket' || res.cmd == 'addpacketforall') {
		let bytesHexList = res.data.bytes.split("\n");

		for (let i = 0; i < bytesHexList.length; i++) {
			let channel = res.data.channel;
			let bytesHex = bytesHexList[i];

			bytesHex = bytesHex.replace('sent:', 'S2C:').replace('recv:', 'C2S:');

			if (bytesHex.includes('HANDSHAKE:')) {
				channel = 0;
				bytesHex = bytesHex.replace('HANDSHAKE:', '');
			}
			else if (bytesHex.includes('C2S:')) {
				channel = 1;
				bytesHex = bytesHex.replace('C2S:', '');
			}
			else if (bytesHex.includes('GAMEPLAY:')) {
				channel = 2;
				bytesHex = bytesHex.replace('GAMEPLAY:', '');
			}
			else if (bytesHex.includes('S2C:')) {
				channel = 3;
				bytesHex = bytesHex.replace('S2C:', '');
			}
			else if (bytesHex.includes('LOW_PRIORITY:')) {
				channel = 4;
				bytesHex = bytesHex.replace('LOW_PRIORITY:', '');
			}
			else if (bytesHex.includes('COMMUNICATION:')) {
				channel = 5;
				bytesHex = bytesHex.replace('COMMUNICATION:', '');
			}
			else if (bytesHex.includes('LOADING_SCREEN:')) {
				channel = 7;
				bytesHex = bytesHex.replace('LOADING_SCREEN:', '');
			}

			bytesHex = bytesHex.trim();

			if (!bytesHex)
				continue;

			let packet = {
				Id: pId++,
				Channel: channel,
				BytesHex: bytesHex,
				Time: res.data.time || 1,
				peerNums: res.data.peerNums || [],
			};

			let packetData = packetParser(packet);
			if (!packetData)
				return;

			if (res.cmd == 'addpacketforall')
				wss.sendJsonToAll({
					cmd: 'newpacket',
					packet: packetData,
				});
			else
				ws.sendJson({
					cmd: 'newpacket',
					packet: packetData,
				});
		}
	}

};
