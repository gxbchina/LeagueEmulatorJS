
import slotId from '../../../../constants/slotId.js';
import _Champion from '../../../datamethods/characters/_Champion.js';
import package1 from './package.js';

import EzrealMysticShot from './spells/EzrealMysticShot.js';
import EzrealEssenceFlux from './spells/EzrealEssenceFlux.js';
import EzrealArcaneShift from './spells/EzrealArcaneShift.js';
import EzrealTrueshotBarrage from './spells/EzrealTrueshotBarrage.js';

import EzrealBasicAttack from './spells/EzrealBasicAttack.js';


export default class Ezreal extends _Champion {
	static package = package1;

	static stats = {
		health: {
			baseValue: 350,
			perLevel: 80,
		},
		healthRegen: {
			baseValue: 5.5,
			perLevel: 0.55,
		},
		mana: {
			baseValue: 235,
			perLevel: 45,
		},
		manaRegen: {
			baseValue: 7,
			perLevel: 0.65,
		},
		attackDamage: {
			baseValue: 47.2,
			perLevel: 3,
		},
		abilityPower: 0,
		attackSpeed: {
			baseValue: 0.625,
			perLevel: 0,//2.8%
		},
		attackSpeedOffset: 0,
		crit: 0,
		attackRange: 550,
		armor: {
			baseValue: 16,
			perLevel: 3.5,
		},
		resist: 30,
		moveSpeed: 325,
	};

	static spells = {
		EzrealMysticShot,
		EzrealEssenceFlux,
		EzrealArcaneShift,
		EzrealTrueshotBarrage,

		EzrealBasicAttack,
	};

	constructor(parent) {
		super(parent);

		this.createOnSlots({
			[slotId.Q]: this.constructor.spells.EzrealMysticShot,
			[slotId.W]: this.constructor.spells.EzrealEssenceFlux,
			[slotId.E]: this.constructor.spells.EzrealArcaneShift,
			[slotId.R]: this.constructor.spells.EzrealTrueshotBarrage,

			[slotId.A]: this.constructor.spells.EzrealBasicAttack,
		});
	}
}
