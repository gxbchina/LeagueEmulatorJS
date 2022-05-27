
const { HashString } = require("../../../../../Functions/HashString");
const PositionHelper = require("../../../../../Functions/PositionHelper");
const Skillshot = require("../../../../../GameObjects/Missiles/Skillshot");
const _Spell = require("../../../../DataMethods/Spells/_Spell");
const EzrealMysticShotMissile = require("./EzrealMysticShotMissile");

const package1 = require('../package');
const slotId = require("../../../../../Constants/slotId");


module.exports = class EzrealMysticShot extends _Spell {
	PackageHash = package1.PackageHash;
	SpellSlot = slotId.Q;

	CastInfo = {
		target: [],
		DesignerCastTime: 0.25,
		DesignerTotalTime: 1,
		//Cooldown: 6,
		//manaCost: 28,
	};

	constructor(options){
		super(options);

		this.childSpells.push(new EzrealMysticShotMissile({...options, parentSpell: this}));
	}

	preCast(spellData){
		spellData.maxRangePosition = PositionHelper.getMaxRangePosition(this.owner, spellData.packet, this.castRange);
		
		var skillshot = Skillshot.create(this.owner, spellData.maxRangePosition, {
			speed: 2000, range: 1150, radius: 60
		});

		spellData.missile = skillshot;
		return super.preCast(spellData);
	}

	onCast(spellData){
		super.onCast(spellData);

		this.owner.AddParticleTarget(this.PackageHash, HashString('ezreal_bow.troy'), HashString('L_HAND'));

	}
};
