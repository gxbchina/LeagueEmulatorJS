import Character from '@repo/gameserver/src/game/basedata/character';
import package1 from './package';

/**
 * @abstract
 */
export default class _Turret_Outer extends Character {
	static package = package1;

	static reward = {
		splittedGold: 150,
		globalGold: 100,
	};

	static stats = {
		health: 1300,
		healthRegen: 0,
		mana: 0,
		manaRegen: 0,
		attackDamage: {
			baseValue: 152,
			perLevel: 4,
		},
		abilityPower: 0,
		attackSpeed: 1,
		attackSpeedOffset: 0,
		crit: 0,
		attackRange: 775,//750,
		armor: 60,
		resist: {
			baseValue: 100,
			perLevel: 1,
		},
		moveSpeed: 0,
	};

	//static maxLevel = 7;
}
