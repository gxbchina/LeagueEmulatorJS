
const slotId = require('../../Constants/slotId');
const {createPacket, sendPacket, sendPacketS} = require("../../Core/PacketUtilities");
const loadingStages = require('../../Constants/loadingStages');
const Summoners = require("../../Game/LeagueData/Summoners");

const { Vector2 } = require("three");

global.Players = global.Players || [];


const EVENT = require("../../Packets/EVENT");
const BaseInterface = require('../../Core/BaseInterface');
const Unit = require('./Unit');
const INetwork = require('../Interfaces/INetwork');
const IDefendable = require('../Interfaces/IDefendable');
const IAttackable = require('../Interfaces/IAttackable');
const IMovable = require('../Interfaces/IMovable');
const IInventory = require('../Interfaces/IInventory');
const IPPlayer = require("./PacketInterfaces/IPPlayer");
const IRespawnable = require("../Interfaces/IRespawnable");


const Players = {
	BLUE: {//ORDER
		0: {position: {x: 25.9, y: 280}, rotation: 0},
		1: {position: {x: 25.9, y: 280}, rotation: 0},
		2: {position: {x: 25.9, y: 280}, rotation: 0},
		3: {position: {x: 25.9, y: 280}, rotation: 0},
		4: {position: {x: 25.9, y: 280}, rotation: 0},
		5: {position: {x: 25.9, y: 280}, rotation: 0},
	},
	RED: {//CHAOS
		0: {position: {x: 13948, y: 14202}, rotation: 0},
		1: {position: {x: 13948, y: 14202}, rotation: 0},
		2: {position: {x: 13948, y: 14202}, rotation: 0},
		3: {position: {x: 13948, y: 14202}, rotation: 0},
		4: {position: {x: 13948, y: 14202}, rotation: 0},
		5: {position: {x: 13948, y: 14202}, rotation: 0},
	},
};

class Player extends BaseInterface(Unit, INetwork, IDefendable, IAttackable, IMovable, IInventory, IPPlayer, IRespawnable) {
	/**
	 * It sends a packet to everyone in the game that the player has died
	 * @param source - The source of the damage.
	 */
	announceDie(source){
		var ANNOUNCE2 = createPacket('ANNOUNCE2');
		ANNOUNCE2.netId = this.netId;
		ANNOUNCE2.id = EVENT.OnChampionDie;
		ANNOUNCE2.EventData = {
			OtherNetId: source.netId
		};
		this.sendTo_everyone(ANNOUNCE2);
	}
	async onDie(source){
		this.announceDie(source);

		if(!this.died)
			return console.log('[weird] died but not died?');

		this.respawnWaiter();
	}

	/**
	 * Kill death counter to calculate bounties
	 */
	KillDeathCounter = 0;

	/**
	 * gold amount to give to enemy player
	 */
	get gold(){
		if(this.KillDeathCounter >= 5)
			return 500;
   
		let gold = 300;
		if(this.KillDeathCounter >= 0){
			for (var i = this.KillDeathCounter; i > 1; --i)
				gold += gold * 0.165;
			return gold;
		}
		for (var i = this.KillDeathCounter; i < -1; ++i)
			gold -= gold * (0.085 + !!i * 0.115);
   
		return gold < 50 ? 50 : gold;
	}


	KillDeathCounter = 0;
	loadingStage = loadingStages.NOT_CONNECTED;

	constructor(...args){
		super(...args);

		this.summonerSpells = new Summoners(this, ['SummonerHeal', 'SummonerFlash']);

		this.spawnPosition = Players[this.teamName][5].position;
		global.Players.push(this);
		this.initialized();
	}
	get PlayerInfo(){
		return Object.assign({}, this.info, {
			SummonorSpell1: this.spellSlots[slotId.D].spellHash,
			SummonorSpell2: this.spellSlots[slotId.F].spellHash,
			TeamId: this.team,
		});
	}
	useSlot(packet){
		this.emit('useSlot', packet.Slot, packet);
		//if(packet.Slot >= 0 && packet.Slot <= 3)
		//	this.character.castSpell(packet);
		//else if(packet.Slot >= 4 && packet.Slot <= 5)
		//	this.summonerSpells.castSpell(packet);
		//else if(packet.Slot >= 6 && packet.Slot <= 12)
		//	this.inventory.castSpell(packet);
	}
	castSpell(packet){
		this.useSlot(packet);
		//if(packet.Slot >= 0 && packet.Slot <= 3)
		//	this.character.castSpell(packet);
		//else if(packet.Slot >= 4 && packet.Slot <= 5)
		//	this.summonerSpells.castSpell(packet);
		//else if(packet.Slot >= 6 && packet.Slot <= 12)
		//	this.inventory.castSpell(packet);
	}

	/**
	 * 
	 * @param {Object} spawnList 
	 * @param {Object} spawnList[team]
	 * @param {Object} spawnList[team][num]
	 * @param {String} spawnList[team][num].character
	 * @param {Vector2} [spawnList[team][num].position=Players[team][num].position] {x, y}
	 * @param {Object} spawnList[team][num].info - player details
	 */
	static spawnAll(spawnList){
		for(let team in spawnList)
			for(let num in spawnList[team])
				new Player({
					team, num,
					character: spawnList[team][num].character,
					spawnPosition: spawnList[team][num].position || Players[team][num].position,
					info: spawnList[team][num].info,
				});
	}
}


module.exports = Player;
