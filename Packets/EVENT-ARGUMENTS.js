
var EVENT = require('./EVENT');

var Args = {
	Base: {
		OtherNetId: 'uint32',
	},
	Die: {
		OtherNetId: 'uint32',
		GoldGiven: 'float',
		AssistCount: 'int32',
		Assists: ['uint32', 12],
	},
	ChampionKillPre: {
		OtherNetId: 'uint32',
		Bitfield: 'uint8',
	},
	Damage: {
		OtherNetId: 'uint32',
		ScriptNameHash: 'uint32',
		EventSource: 'uint8',
		Unknown: 'uint8',
		SourceObjectNetId: 'uint32',
		PhysicalDamage: 'float',
		MagicalDamage: 'float',
		TrueDamage: 'float',
		ParentScriptNameHash: 'uint32',
		ParentCasterNetId: 'uint32',
		Bitfield: 'uint16',
	},
	GoldSpent: {
		OtherNetId: 'uint32',
		Ammount: 'float',
	},
	GoldEarned: {
		OtherNetId: 'uint32',
		Ammount: 'float',
		Unknown: 'uint64',
	},
	ItemConsumedPurchased: {
		OtherNetId: 'uint32',
		ItemID: 'uint32',
	},
	DamageCriticalStrike: {
		OtherNetId: 'uint32',
		Damage: 'float',
	},
	MinionKill: {
		OtherNetId: 'uint32',
		MinionSkinNameHash: 'uint32',
		MinionSkinID: 'int32',
		MinionMapSideTeamID: 'uint32',
	},
	Heal: {
		OtherNetId: 'uint32',
		ScriptNameHash: 'uint32',
		EventSource: 'uint8',
		Unknown: 'uint8',
		SourceObjectNetId: 'uint32',
		HealAmmount: 'float',
		ParentScriptNameHash: 'uint32',
		ParentCasterNetId: 'uint32',
		Bitfield: 'uint16',
	},
	Buff: {
		OtherNetId: 'uint32',
		ScriptNameHash: 'uint32',
		EventSource: 'uint8',
		Unknown: 'uint8',
		SourceObjectNetId: 'uint32',
		ParentScriptNameHash: 'uint32',
		ParentCasterNetId: 'uint32',
		Bitfield: 'uint16',
	},
	CC: {
		OtherNetId: 'uint32',
		BuffType: 'int32',
		FinalDuration: 'float',
	},
	KillingSpree: {
		OtherNetId: 'uint32',
		Ammount: 'int32',
	},
	Assist: {
		OtherNetId: 'uint32',
		AtTime: 'float',
		PhysicalDamage: 'float',
		MagicalDamage: 'float',
		TrueDamage: 'float',
		PercentageOfAssist: 'float',
		OrginalGoldReward: 'float',
		KillerNetId: 'uint32',
	},
	ItemSoldOrRemoved: {
		OtherNetId: 'uint32',
		ItemID: 'uint32',
	},
	ItemUndo: {
		OtherNetId: 'uint32',
		ItemID: 'uint32',
		UpgradedFromItems: ['uint32', 7],
		GoldGain: 'float',
	},
	ItemCallout: {
		OtherNetId: 'uint32',
		ItemID: 'uint32',
		ItemCount: 'uint32',
		Unknown: ['uint8', 24],
		TeamID: 'uint32',
	},
	ItemChange: {
		OtherNetId: 'uint32',
		ItemID: 'uint32',
	},
	UndoEnabledChange: {
		OtherNetId: 'uint32',
		UndoStackLength: 'int32',
	},
	ShopItemSubstitutionChange: {
		OtherNetId: 'uint32',
		EnableSubstitution: 'uint8',
		OriginalItemId: 'uint32',
		SubstitutedItemId: 'uint32',
	},
	GlobalMessageGeneric: {
		OtherNetId: 'uint32',
		MapNumber: 'int32',
	},
	Alert: {
		OtherNetId: 'uint32',
		Unknown: ['uint8', 4],
		Unknown2: ['uint8', 4],
	},
	CapturePoint: {
		OtherNetId: 'uint32',
		CapturePoint: 'uint32',
	},
};

module.exports = {
	[EVENT.OnDelete]:								Args.Base,
	[EVENT.OnSpawn]:								Args.Die,
	[EVENT.OnDie]:									Args.Die,
	[EVENT.OnKill]:									Args.Base,
	[EVENT.OnChampionDie]:							Args.Die,//DEATH
	[EVENT.OnChampionKillPre]:						Args.ChampionKillPre,
	[EVENT.OnChampionKill]:							Args.ChampionKillPre,
	[EVENT.OnChampionKillPost]:						Args.ChampionKillPre,
	[EVENT.OnChampionSingleKill]:					Args.ChampionKillPre,
	[EVENT.OnChampionDoubleKill]:					Args.ChampionKillPre,
	[EVENT.OnChampionTripleKill]:					Args.ChampionKillPre,
	[EVENT.OnChampionQuadraKill]:					Args.ChampionKillPre,
	[EVENT.OnChampionPentaKill]:					Args.ChampionKillPre,
	[EVENT.OnChampionUnrealKill]:					Args.ChampionKillPre,
	[EVENT.OnFirstBlood]:							Args.Base,
	[EVENT.OnDamageTaken]:							Args.Damage,
	[EVENT.OnDamageGiven]:							Args.Damage,
	[EVENT.OnSpellCast1]:							Args.Base,
	[EVENT.OnSpellCast2]:							Args.Base,
	[EVENT.OnSpellCast3]:							Args.Base,
	[EVENT.OnSpellCast4]:							Args.Base,
	[EVENT.OnSpellAvatarCast1]:						Args.Base,
	[EVENT.OnSpellAvatarCast2]:						Args.Base,
	[EVENT.OnGoldSpent]:							Args.GoldSpent,
	[EVENT.OnGoldEarned]:							Args.GoldEarned,
	[EVENT.OnItemConsumeablePurchased]:				Args.ItemConsumedPurchased,
	[EVENT.OnCriticalStrike]:						Args.DamageCriticalStrike,
	[EVENT.OnAce]:									Args.Base,
	[EVENT.OnReincarnate]:							Args.Base,
	[EVENT.OnChangeChampion]:						Args.Base,
	[EVENT.OnDampenerKill]:							Args.Base,
	[EVENT.OnDampenerDie]:							Args.Die,//INHIBITOR_DESTROYED
	[EVENT.OnDampenerRespawnSoon]:					Args.Base,//INHIBITOR_ABOUT_TO_SPAWN
	[EVENT.OnDampenerRespawn]:						Args.Base,//INHIBITOR_SPAWNED
	[EVENT.OnDampenerDamage]:						Args.Base,
	[EVENT.OnTurretKill]:							Args.Base,
	[EVENT.OnTurretDie]:							Args.Die,//TURRET_DESTROYED
	[EVENT.OnTurretDamage]:							Args.Die,
	[EVENT.OnMinionKill]:							Args.Die,
	[EVENT.OnMinionDenied]:							Args.Base,
	[EVENT.OnNeutralMinionKill]:					Args.MinionKill,
	[EVENT.OnSuperMonsterKill]:						Args.Base,
	[EVENT.OnAcquireRedBuffFromNeutral]:			Args.Base,
	[EVENT.OnAcquireBlueBuffFromNeutral]:			Args.Base,
	[EVENT.OnHQKill]:								Args.Base,
	[EVENT.OnHQDie]:								Args.Base,
	[EVENT.OnHeal]:									Args.Heal,
	[EVENT.OnCastHeal]:								Args.Heal,
	[EVENT.OnBuff]:									Args.Buff,
	[EVENT.OnCrowdControlDealt]:					Args.CC,
	[EVENT.OnKillingSpree]:							Args.KillingSpree,
	[EVENT.OnKillingSpreeSet1]:						Args.Base,
	[EVENT.OnKillingSpreeSet2]:						Args.Base,
	[EVENT.OnKillingSpreeSet3]:						Args.Base,
	[EVENT.OnKillingSpreeSet4]:						Args.Base,
	[EVENT.OnKillingSpreeSet5]:						Args.Base,
	[EVENT.OnKillingSpreeSet6]:						Args.Base,
	[EVENT.OnKilledUnitOnKillingSpree]:				Args.ChampionKillPre,
	[EVENT.OnKilledUnitOnKillingSpreeSet1]:			Args.ChampionKillPre,
	[EVENT.OnKilledUnitOnKillingSpreeSet2]:			Args.ChampionKillPre,
	[EVENT.OnKilledUnitOnKillingSpreeSet3]:			Args.ChampionKillPre,
	[EVENT.OnKilledUnitOnKillingSpreeSet4]:			Args.ChampionKillPre,
	[EVENT.OnKilledUnitOnKillingSpreeSet5]:			Args.ChampionKillPre,
	[EVENT.OnKilledUnitOnKillingSpreeSet6]:			Args.ChampionKillPre,
	[EVENT.OnKilledUnitOnKillingSpreeDoubleKill]:	Args.ChampionKillPre,
	[EVENT.OnKilledUnitOnKillingSpreeTripleKill]:	Args.ChampionKillPre,
	[EVENT.OnKilledUnitOnKillingSpreeQuadraKill]:	Args.ChampionKillPre,
	[EVENT.OnKilledUnitOnKillingSpreePentaKill]:	Args.ChampionKillPre,
	[EVENT.OnKilledUnitOnKillingSpreeUnrealKill]:	Args.ChampionKillPre,
	[EVENT.OnDeathAssist]:							Args.Assist,
	[EVENT.OnQuit]:									Args.Base,
	[EVENT.OnLeave]:								Args.Base,//SUMMONER_DISCONNECTED
	[EVENT.OnReconnect]:							Args.Base,//SUMMONER_RECONNECTED
	[EVENT.OnGameStart]:							Args.Base,
	[EVENT.OnAssistingSpreeSet1]:					Args.Base,
	[EVENT.OnAssistingSpreeSet2]:					Args.Base,
	[EVENT.OnChampionTripleAssist]:					Args.Base,
	[EVENT.OnChampionPentaAssist]:					Args.Base,
	[EVENT.OnPing]:									Args.Base,
	[EVENT.OnPingPlayer]:							Args.Base,
	[EVENT.OnPingBuilding]:							Args.Base,
	[EVENT.OnPingOther]:							Args.Base,
	[EVENT.OnEndGame]:								Args.Base,
	[EVENT.OnSpellLevelup1]:						Args.Base,
	[EVENT.OnSpellLevelup2]:						Args.Base,
	[EVENT.OnSpellLevelup3]:						Args.Base,
	[EVENT.OnSpellLevelup4]:						Args.Base,
	[EVENT.OnSpellEvolve1]:							Args.Base,
	[EVENT.OnSpellEvolve2]:							Args.Base,
	[EVENT.OnSpellEvolve3]:							Args.Base,
	[EVENT.OnSpellEvolve4]:							Args.Base,
	[EVENT.OnItemPurchased]:						Args.ItemConsumedPurchased,
	[EVENT.OnItemSold]:								Args.ItemSoldOrRemoved,
	[EVENT.OnItemRemoved]:							Args.ItemSoldOrRemoved,
	[EVENT.OnItemUndo]:								Args.ItemUndo,
	[EVENT.OnItemCallout]:							Args.ItemCallout,
	[EVENT.OnItemChange]:							Args.ItemChange,
	[EVENT.OnUndoEnabledChange]:					Args.UndoEnabledChange,
	[EVENT.OnShopItemSubstitutionChange]:			Args.ShopItemSubstitutionChange,
	[EVENT.OnSurrenderVoteStart]:					Args.Base,
	[EVENT.OnSurrenderVote]:						Args.Base,
	[EVENT.OnSurrenderVoteAlready]:					Args.Base,
	[EVENT.OnSurrenderFailedVotes]:					Args.Base,
	[EVENT.OnSurrenderTooEarly]:					Args.Base,
	[EVENT.OnSurrenderAgreed]:						Args.Base,
	[EVENT.OnSurrenderSpam]:						Args.Base,
	[EVENT.OnSurrenderEarlyAllowed]:				Args.Base,
	[EVENT.OnEqualizeVoteStart]:					Args.Base,
	[EVENT.OnEqualizeVote]:							Args.Base,
	[EVENT.OnEqualizeVoteAlready]:					Args.Base,
	[EVENT.OnEqualizeFailedVotes]:					Args.Base,
	[EVENT.OnEqualizeTooEarly]:						Args.Base,
	[EVENT.OnEqualizeNotEnoughGold]:				Args.Base,
	[EVENT.OnEqualizeNotEnoughLevels]:				Args.Base,
	[EVENT.OnEqualizeAgreed]:						Args.Base,
	[EVENT.OnEqualizeSpam]:							Args.Base,
	[EVENT.OnPause]:								Args.Base,
	[EVENT.OnPauseResume]:							Args.Base,
	[EVENT.OnMinionsSpawn]:							Args.Base,
	[EVENT.OnStartGameMessage1]:					Args.GlobalMessageGeneric,
	[EVENT.OnStartGameMessage2]:					Args.GlobalMessageGeneric,
	[EVENT.OnStartGameMessage3]:					Args.GlobalMessageGeneric,
	[EVENT.OnStartGameMessage4]:					Args.GlobalMessageGeneric,
	[EVENT.OnStartGameMessage5]:					Args.GlobalMessageGeneric,
	[EVENT.OnAlert]:								Args.Alert,
	[EVENT.OnScoreboardOpen]:						Args.Base,
	[EVENT.OnAudioEventFinished]:					Args.Base,
	[EVENT.OnNexusCrystalStart]:					Args.Base,
	[EVENT.OnCapturePointNeutralized_A]:			Args.Base,
	[EVENT.OnCapturePointNeutralized_B]:			Args.Base,
	[EVENT.OnCapturePointNeutralized_C]:			Args.Base,
	[EVENT.OnCapturePointNeutralized_D]:			Args.Base,
	[EVENT.OnCapturePointNeutralized_E]:			Args.Base,
	[EVENT.OnCapturePointCaptured_A]:				Args.Base,
	[EVENT.OnCapturePointCaptured_B]:				Args.Base,
	[EVENT.OnCapturePointCaptured_C]:				Args.Base,
	[EVENT.OnCapturePointCaptured_D]:				Args.Base,
	[EVENT.OnCapturePointCaptured_E]:				Args.Base,
	[EVENT.OnCapturePointFiveCap]:					Args.Base,
	[EVENT.OnVictoryPointThreshold1]:				Args.Base,
	[EVENT.OnVictoryPointThreshold2]:				Args.Base,
	[EVENT.OnVictoryPointThreshold3]:				Args.Base,
	[EVENT.OnVictoryPointThreshold4]:				Args.Base,
	[EVENT.OnMinionKillVictoryThreshold1]:			Args.Base,
	[EVENT.OnMinionKillVictoryThreshold2]:			Args.Base,
	[EVENT.OnTurretKillVictoryThreshold1]:			Args.Base,
	[EVENT.OnTurretKillVictoryThreshold2]:			Args.Base,
	[EVENT.OnReplayFastForwardStart]:				Args.Base,
	[EVENT.OnReplayFastForwardEnd]:					Args.Base,
	[EVENT.OnReplayOnKeyframeFinished]:				Args.Base,
	[EVENT.OnReplayDestroyAllObjects]:				Args.Base,
	[EVENT.OnKillDragon]:							Args.MinionKill,
	[EVENT.OnKillDragon_Spectator]:					Args.MinionKill,
	[EVENT.OnKillDragonSteal]:						Args.MinionKill,
	[EVENT.OnKillWorm]:								Args.MinionKill,
	[EVENT.OnKillWorm_Spectator]:					Args.MinionKill,
	[EVENT.OnKillWormSteal]:						Args.MinionKill,
	[EVENT.OnKillSpiderBoss]:						Args.MinionKill,
	[EVENT.OnKillSpiderBoss_Spectator]:				Args.MinionKill,
	[EVENT.OnCaptureAltar]:							Args.CapturePoint,
	[EVENT.OnCaptureAltar_Spectator]:				Args.CapturePoint,
	[EVENT.OnPlaceWard]:							Args.Base,
	[EVENT.OnKillWard]:								Args.Base,
	[EVENT.OnMinionAscended]:						Args.Base,
	[EVENT.OnChampionAscended]:						Args.Base,
	[EVENT.OnClearAscended]:						Args.Base,
	[EVENT.OnGameStatEvent]:						Args.Base,
};
