import BasePacket, { BasePacketModel } from '@repo/network/packets/base-packet';
import type RelativeDataView from '@repo/network/relative-data-view';

export type HeroStatsModel = BasePacketModel & {
	assists: number;
	barracksKilled: number;
	championsKilled: number;
	consumablesPurchased: number;
	doubleKills: number;
	exp: number;
	friendlyDampenLost: number;
	friendlyHqLost: number;
	friendlyTurretLost: number;
	goldEarned: number;
	goldSpent: number;
	hqKilled: number;
	id: number;
	item0: number;
	item1: number;
	item2: number;
	item3: number;
	item4: number;
	item5: number;
	itemsPurchased: number;
	killingSprees: number;
	largestCriticalStrike: number;
	largestKillingSpree: number;
	largestMultiKill: number;
	level: number;
	longestTimeSpentLiving: number;
	magicDamageDealtPlayer: number;
	magicDamageTaken: number;
	minionsKilled: number;
	name: string;
	neutralMinionsKilled: number;
	numDeaths: number;
	pentaKills: number;
	physicalDamageDealtPlayer: number;
	physicalDamageTaken: number;
	quadraKills: number;
	skin: number;
	spell1Cast: number;
	spell2Cast: number;
	spell3Cast: number;
	spell4Cast: number;
	summonSpell1Cast: number;
	summonSpell2Cast: number;
	superMonsterKilled: number;
	team: number;
	timeOfFromLastDisconnect: number;
	timePlayed: number;
	timeSpentDisconnected: number;
	totalDamageDealt: number;
	totalDamageTaken: number;
	totalHeal: number;
	totalTimeSpentDead: number;
	totalUnitsHealed: number;
	tripleKills: number;
	turretsKilled: number;
	unrealKills: number;
	wasAfk: number;
	win: string;
};

export default class HeroStats extends BasePacket {
	static create(payload: Partial<HeroStatsModel>) {
		return super.create(payload);
	}

	static reader(dvr: RelativeDataView, payload: HeroStatsModel) {
		super.reader(dvr, payload);

		let size = dvr.readUint32();

		payload.assists = dvr.readInt32();
		payload.barracksKilled = dvr.readInt32();
		payload.championsKilled = dvr.readInt32();
		payload.consumablesPurchased = dvr.readInt32();
		payload.doubleKills = dvr.readInt32();
		payload.exp = dvr.readFloat();
		payload.friendlyDampenLost = dvr.readInt32();
		payload.friendlyHqLost = dvr.readInt32();
		payload.friendlyTurretLost = dvr.readInt32();
		payload.goldEarned = dvr.readFloat();
		payload.goldSpent = dvr.readFloat();
		payload.hqKilled = dvr.readInt32();
		payload.id = dvr.readUint64();
		payload.item0 = dvr.readInt32();
		payload.item1 = dvr.readInt32();
		payload.item2 = dvr.readInt32();
		payload.item3 = dvr.readInt32();
		payload.item4 = dvr.readInt32();
		payload.item5 = dvr.readInt32();
		payload.itemsPurchased = dvr.readInt32();
		payload.killingSprees = dvr.readInt32();
		payload.largestCriticalStrike = dvr.readFloat();
		payload.largestKillingSpree = dvr.readInt32();
		payload.largestMultiKill = dvr.readInt32();
		payload.level = dvr.readInt32();
		payload.longestTimeSpentLiving = dvr.readFloat();
		payload.magicDamageDealtPlayer = dvr.readFloat();
		payload.magicDamageTaken = dvr.readFloat();
		payload.minionsKilled = dvr.readInt32();
		payload.name = dvr.readString();
		payload.neutralMinionsKilled = dvr.readInt32();
		payload.numDeaths = dvr.readInt32();
		payload.pentaKills = dvr.readInt32();
		payload.physicalDamageDealtPlayer = dvr.readFloat();
		payload.physicalDamageTaken = dvr.readFloat();
		payload.quadraKills = dvr.readInt32();
		payload.skin = dvr.readInt32();
		payload.spell1Cast = dvr.readInt32();
		payload.spell2Cast = dvr.readInt32();
		payload.spell3Cast = dvr.readInt32();
		payload.spell4Cast = dvr.readInt32();
		payload.summonSpell1Cast = dvr.readInt32();
		payload.summonSpell2Cast = dvr.readInt32();
		payload.superMonsterKilled = dvr.readInt32();
		payload.team = dvr.readInt32();
		payload.timeOfFromLastDisconnect = dvr.readFloat();
		payload.timePlayed = dvr.readFloat();
		payload.timeSpentDisconnected = dvr.readFloat();
		payload.totalDamageDealt = dvr.readFloat();
		payload.totalDamageTaken = dvr.readFloat();
		payload.totalHeal = dvr.readInt32();
		payload.totalTimeSpentDead = dvr.readFloat();
		payload.totalUnitsHealed = dvr.readInt32();
		payload.tripleKills = dvr.readInt32();
		payload.turretsKilled = dvr.readInt32();
		payload.unrealKills = dvr.readInt32();
		payload.wasAfk = dvr.readInt32();
		payload.win = dvr.readString();
	}

	static writer(dvr: RelativeDataView, payload: HeroStatsModel) {
		super.writer(dvr, payload);

		let size = 0;
		dvr.writeUint32(size);

		dvr.writeInt32(payload.assists);
		dvr.writeInt32(payload.barracksKilled);
		dvr.writeInt32(payload.championsKilled);
		dvr.writeInt32(payload.consumablesPurchased);
		dvr.writeInt32(payload.doubleKills);
		dvr.writeFloat(payload.exp);
		dvr.writeInt32(payload.friendlyDampenLost);
		dvr.writeInt32(payload.friendlyHqLost);
		dvr.writeInt32(payload.friendlyTurretLost);
		dvr.writeFloat(payload.goldEarned);
		dvr.writeFloat(payload.goldSpent);
		dvr.writeInt32(payload.hqKilled);
		dvr.writeUint64(payload.id);
		dvr.writeInt32(payload.item0);
		dvr.writeInt32(payload.item1);
		dvr.writeInt32(payload.item2);
		dvr.writeInt32(payload.item3);
		dvr.writeInt32(payload.item4);
		dvr.writeInt32(payload.item5);
		dvr.writeInt32(payload.itemsPurchased);
		dvr.writeInt32(payload.killingSprees);
		dvr.writeFloat(payload.largestCriticalStrike);
		dvr.writeInt32(payload.largestKillingSpree);
		dvr.writeInt32(payload.largestMultiKill);
		dvr.writeInt32(payload.level);
		dvr.writeFloat(payload.longestTimeSpentLiving);
		dvr.writeFloat(payload.magicDamageDealtPlayer);
		dvr.writeFloat(payload.magicDamageTaken);
		dvr.writeInt32(payload.minionsKilled);
		dvr.writeString(payload.name);
		dvr.writeInt32(payload.neutralMinionsKilled);
		dvr.writeInt32(payload.numDeaths);
		dvr.writeInt32(payload.pentaKills);
		dvr.writeFloat(payload.physicalDamageDealtPlayer);
		dvr.writeFloat(payload.physicalDamageTaken);
		dvr.writeInt32(payload.quadraKills);
		dvr.writeInt32(payload.skin);
		dvr.writeInt32(payload.spell1Cast);
		dvr.writeInt32(payload.spell2Cast);
		dvr.writeInt32(payload.spell3Cast);
		dvr.writeInt32(payload.spell4Cast);
		dvr.writeInt32(payload.summonSpell1Cast);
		dvr.writeInt32(payload.summonSpell2Cast);
		dvr.writeInt32(payload.superMonsterKilled);
		dvr.writeInt32(payload.team);
		dvr.writeFloat(payload.timeOfFromLastDisconnect);
		dvr.writeFloat(payload.timePlayed);
		dvr.writeFloat(payload.timeSpentDisconnected);
		dvr.writeFloat(payload.totalDamageDealt);
		dvr.writeFloat(payload.totalDamageTaken);
		dvr.writeInt32(payload.totalHeal);
		dvr.writeFloat(payload.totalTimeSpentDead);
		dvr.writeInt32(payload.totalUnitsHealed);
		dvr.writeInt32(payload.tripleKills);
		dvr.writeInt32(payload.turretsKilled);
		dvr.writeInt32(payload.unrealKills);
		dvr.writeInt32(payload.wasAfk);
		dvr.writeString(payload.win);

		size = dvr.offset - 4;
		dvr.dv.setUint32(0, size, dvr.littleEndian);
	}
}
