
import PositionHelper from '../extensions/Measure/index.js';
import Dummytarget from './Dummytarget.js';
import Missile from './Missile.js';

/**
 * @typedef {import('../../gameobjects/units/Unit.js').default} Unit
 * @typedef {import('three').Vector2} Vector2
 */

class Skillshot extends Missile {

	/**
	 * @todo
	 * @param {import('../GameObjects.js').AttackableUnit} spawner
	 * @param {Vector2} targetPosition
	 * @param {Object} options
	 * @returns 
	 */
	static create(spawner, targetPosition, options = {}) {
		const missile = new Skillshot({ spawner, options });
		missile.callbacks.collision._.options.range = options.radius;

		missile.target = new Dummytarget({
			// idk if `options.range - (options.radius / 2)` is correct here, corners on max range will not hit
			position: PositionHelper.getPositionBetweenRange(spawner.position, targetPosition, options.range - (options.radius / 2))
		});

		return missile;
	}

	callbacks = {
		move: {},
		collision: {
			// defaultly will end on collision
			_: {
				options: {
					range: 10,
				},
				function: (target) => {
					if (this.owner == target)
						return;

					this.owner.combat.attack(target);
					delete this.callbacks.collision._;
					//this.waypoints = [];
					this.destructor();
				}
			}
		},
	};

	/**
	 * 
	 * @param {import('../GameObjects.js').SkillshotOptions} options 
	 */
	constructor(options) {
		super(options);

	}

	doFire() {
		this.fire(this.target);
	}
}


export default Skillshot;
