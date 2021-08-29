module.exports = {
	OnDelete: 0x00,
	OnSpawn: 0x01,
	OnDie: 0x02,
	OnKill: 0x03,
	OnChampionDie: 0x04,
	OnChampionKillPre: 0x05,
	OnChampionKill: 0x06,
	OnChampionKillPost: 0x07,
	OnChampionSingleKill: 0x08,
	OnChampionDoubleKill: 0x09,
	OnChampionTripleKill: 0x0A,
	OnChampionQuadraKill: 0x0B,
	OnChampionPentaKill: 0x0C,
	OnChampionUnrealKill: 0x0D,
	OnFirstBlood: 0x0E,
	OnDamageTaken: 0x0F,
	OnDamageGiven: 0x10,
	OnSpellCast1: 0x11,
	OnSpellCast2: 0x12,
	OnSpellCast3: 0x13,
	OnSpellCast4: 0x14,
	OnSpellAvatarCast1: 0x15,
	OnSpellAvatarCast2: 0x16,
	OnGoldSpent: 0x17,
	OnGoldEarned: 0x18,
	OnItemConsumeablePurchased: 0x19,
	OnCriticalStrike: 0x1A,
	OnAce: 0x1B,
	OnReincarnate: 0x1C,
	OnChangeChampion: 0x1D,
	OnDampenerKill: 0x1E,
	OnDampenerDie: 0x1F,
	OnDampenerRespawnSoon: 0x20,
	OnDampenerRespawn: 0x21,
	OnDampenerDamage: 0x22,
	OnTurretKill: 0x23,
	OnTurretDie: 0x24,
	OnTurretDamage: 0x25,
	OnMinionKill: 0x26,
	OnMinionDenied: 0x27,
	OnNeutralMinionKill: 0x28,
	OnSuperMonsterKill: 0x29,
	OnAcquireRedBuffFromNeutral: 0x2A,
	OnAcquireBlueBuffFromNeutral: 0x2B,
	OnHQKill: 0x2C,
	OnHQDie: 0x2D,
	OnHeal: 0x2E,
	OnCastHeal: 0x2F,
	OnBuff: 0x30,
	OnCrowdControlDealt: 0x31,
	OnKillingSpree: 0x32,
	OnKillingSpreeSet1: 0x33,
	OnKillingSpreeSet2: 0x34,
	OnKillingSpreeSet3: 0x35,
	OnKillingSpreeSet4: 0x36,
	OnKillingSpreeSet5: 0x37,
	OnKillingSpreeSet6: 0x38,
	OnKilledUnitOnKillingSpree: 0x39,
	OnKilledUnitOnKillingSpreeSet1: 0x3A,
	OnKilledUnitOnKillingSpreeSet2: 0x3B,
	OnKilledUnitOnKillingSpreeSet3: 0x3C,
	OnKilledUnitOnKillingSpreeSet4: 0x3D,
	OnKilledUnitOnKillingSpreeSet5: 0x3E,
	OnKilledUnitOnKillingSpreeSet6: 0x3F,
	OnKilledUnitOnKillingSpreeDoubleKill: 0x40,
	OnKilledUnitOnKillingSpreeTripleKill: 0x41,
	OnKilledUnitOnKillingSpreeQuadraKill: 0x42,
	OnKilledUnitOnKillingSpreePentaKill: 0x43,
	OnKilledUnitOnKillingSpreeUnrealKill: 0x44,
	OnDeathAssist: 0x45,
	OnQuit: 0x46,
	OnLeave: 0x47,
	OnReconnect: 0x48,
	OnGameStart: 0x49,
	OnAssistingSpreeSet1: 0x4A,
	OnAssistingSpreeSet2: 0x4B,
	OnChampionTripleAssist: 0x4C,
	OnChampionPentaAssist: 0x4D,
	OnPing: 0x4E,
	OnPingPlayer: 0x4F,
	OnPingBuilding: 0x50,
	OnPingOther: 0x51,
	OnEndGame: 0x52,
	OnSpellLevelup1: 0x53,
	OnSpellLevelup2: 0x54,
	OnSpellLevelup3: 0x55,
	OnSpellLevelup4: 0x56,
	OnSpellEvolve1: 0x57,
	OnSpellEvolve2: 0x58,
	OnSpellEvolve3: 0x59,
	OnSpellEvolve4: 0x5A,
	OnItemPurchased: 0x5B,
	OnItemSold: 0x5C,
	OnItemRemoved: 0x5D,
	OnItemUndo: 0x5E,
	OnItemCallout: 0x5F,
	OnItemChange: 0x60,
	OnUndoEnabledChange: 0x61,
	OnShopItemSubstitutionChange: 0x62,
	OnSurrenderVoteStart: 0x63,
	OnSurrenderVote: 0x64,
	OnSurrenderVoteAlready: 0x65,
	OnSurrenderFailedVotes: 0x66,
	OnSurrenderTooEarly: 0x67,
	OnSurrenderAgreed: 0x68,
	OnSurrenderSpam: 0x69,
	OnSurrenderEarlyAllowed: 0x6A,
	OnEqualizeVoteStart: 0x6B,
	OnEqualizeVote: 0x6C,
	OnEqualizeVoteAlready: 0x6D,
	OnEqualizeFailedVotes: 0x6E,
	OnEqualizeTooEarly: 0x6F,
	OnEqualizeNotEnoughGold: 0x70,
	OnEqualizeNotEnoughLevels: 0x71,
	OnEqualizeAgreed: 0x72,
	OnEqualizeSpam: 0x73,
	OnPause: 0x74,
	OnPauseResume: 0x75,
	OnMinionsSpawn: 0x76,
	OnStartGameMessage1: 0x77,
	OnStartGameMessage2: 0x78,
	OnStartGameMessage3: 0x79,
	OnStartGameMessage4: 0x7A,
	OnStartGameMessage5: 0x7B,
	OnAlert: 0x7C,
	OnScoreboardOpen: 0x7D,
	OnAudioEventFinished: 0x7E,
	OnNexusCrystalStart: 0x7F,
	OnCapturePointNeutralized_A: 0x80,
	OnCapturePointNeutralized_B: 0x81,
	OnCapturePointNeutralized_C: 0x82,
	OnCapturePointNeutralized_D: 0x83,
	OnCapturePointNeutralized_E: 0x84,
	OnCapturePointCaptured_A: 0x85,
	OnCapturePointCaptured_B: 0x86,
	OnCapturePointCaptured_C: 0x87,
	OnCapturePointCaptured_D: 0x88,
	OnCapturePointCaptured_E: 0x89,
	OnCapturePointFiveCap: 0x8A,
	OnVictoryPointThreshold1: 0x8B,
	OnVictoryPointThreshold2: 0x8C,
	OnVictoryPointThreshold3: 0x8D,
	OnVictoryPointThreshold4: 0x8E,
	OnMinionKillVictoryThreshold1: 0x8F,
	OnMinionKillVictoryThreshold2: 0x90,
	OnTurretKillVictoryThreshold1: 0x91,
	OnTurretKillVictoryThreshold2: 0x92,
	OnReplayFastForwardStart: 0x93,
	OnReplayFastForwardEnd: 0x94,
	OnReplayOnKeyframeFinished: 0x95,
	OnReplayDestroyAllObjects: 0x96,
	OnKillDragon: 0x97,
	OnKillDragon_Spectator: 0x98,
	OnKillDragonSteal: 0x99,
	OnKillWorm: 0x9A,
	OnKillWorm_Spectator: 0x9B,
	OnKillWormSteal: 0x9C,
	OnKillSpiderBoss: 0x9D,
	OnKillSpiderBoss_Spectator: 0x9E,
	OnCaptureAltar: 0x9F,
	OnCaptureAltar_Spectator: 0xA0,
	OnPlaceWard: 0xA1,
	OnKillWard: 0xA2,
	OnMinionAscended: 0xA3,
	OnChampionAscended: 0xA4,
	OnClearAscended: 0xA5,
	OnGameStatEvent: 0xA6,
};
