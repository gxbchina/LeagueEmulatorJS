import BasePacket, { BasePacketModel } from '@repo/network/packets/base-packet';

export type SwitchNexusesToOnIdleParticlesModel = BasePacketModel;

/**
 * spawning crystal above nexus
 * @todo send it on game start/client load
 */
export default class SwitchNexusesToOnIdleParticles extends BasePacket {

}
