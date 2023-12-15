import _Spell from '../../../datamethods/spells/_Spell.js';


export default class SummonerBarrier extends _Spell {
	summonerSpellKey = 21;
	summonerSpellName = 'Barrier';
	spellHash = 214940034;

	cooldown = 210;
	cost = 0;


	onCast(spellData) {
		super.onCast(spellData);

	}
}
