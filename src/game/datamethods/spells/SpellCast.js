import UnitList from '../../../app/UnitList.js';

/**
 * Creates Spell Cast Info for _Spell.
 * After it has been created, spell shouldn't be cancelled
 */
export default class SpellCast {


	get spell() {
		return this.spellData.spell;
	}
	get owner() {
		return this.spellData.spell.owner;
	}
	get missile() {
		return this.spellData.missile;
	}

	_CastInfo = {};
	get castInfo() {
		const castInfo = {};
		castInfo.targetPosition = this.missile?.target?.position || this.spellData.position || this.owner?.position;
		castInfo.targetPositionEnd = this.missile?.target?.position || this.spellData.position || this.owner?.position;

		castInfo.spellHash = this.spell.spellHash;
		castInfo.spellCastNetId = this.netId;
		castInfo.spellLevel = this.spell.spellLevel || 0;
		castInfo.attackSpeedModifier = 1;
		castInfo.casterNetId = this.owner?.netId || 0;
		castInfo.spellChainOwnerNetId = this.owner.netId || 0;
		castInfo.packageHash = this.spell.packageHash;
		castInfo.missileNetId = this.missile?.netId || 0;
		castInfo.target = [{
			unit: this.missile?.target?.netId ?? this.target?.netId ?? this.owner.netId,
			hitResult: this.missile?.target?.netId ? 1 : 0,//todo
		}];

		castInfo.designerCastTime = -1;
		castInfo.extraCastTime = 0;
		castInfo.designerTotalTime = 0.70;
		castInfo.cooldown = this.spell.cooldown || 0;
		castInfo.startCastTime = 0;

		castInfo.bitfield = {
			isAutoAttack: false,
			isSecondAutoAttack: false,
			isForceCastingOrChannel: false,
			isOverrideCastPosition: false,
			isClickCasted: false,
		};

		castInfo.spellSlot = this.spell.spellSlot;
		castInfo.manaCost = this.spell.manaCost;
		castInfo.spellCastLaunchPosition = this.owner?.position;
		castInfo.ammoUsed = 1;
		castInfo.ammoRechargeTime = 0;

		Object.assign(castInfo, this.spell.castInfo, this._CastInfo);
		return castInfo;
	}

	/**
	 *
	 * @param {Object} options
	 * @param {import("../../../gameobjects/GameObjects.js").SpellData} options.spellData
	 */
	constructor(options) {

		this.netId = ++UnitList.lastNetId;
		this.spellData = options.spellData;

	}
}
