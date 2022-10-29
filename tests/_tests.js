const colors = require("./_colors");

class _tests {

	static expectedIterationTime = 1;

	/**
	 * function to prepare test
	 * for example, functionality that will run one time on program start
	 * @abstract
	 * @returns {Boolean}
	 */
	static async prepareTest(){
		return true;
	}

	/**
	 * the actual functionality of the test
	 * should return true to pass
	 * @abstract
	 * @returns {Boolean|String}
	 */
	static async processTest(){
		return false;
	}

	// --------------------------------------------------------------------------

	static _iterations = 1;

	/**
	 * measuring method
	 * @param {Number} iterations 
	 */
	static async test(iterations = 1){
		this._iterations = iterations;
		var expectedTime = this.expectedIterationTime * iterations;

		process.stdout.write(`testing ${this.name}`);
		if(!global.processingAllTests && iterations > 1)
			process.stdout.write(` (${iterations} iterations)`);
		if(expectedTime > 0)
			process.stdout.write(` (expecting ${colors.fgYellow}${expectedTime}${colors.reset} ms)`);
		process.stdout.write(` :: `);
		
		var prepared = await this.prepareTest();
		if(!prepared){
			process.stdout.write(colors.fgRed);
			process.stdout.write(`failed preparing test`);
			console.log(colors.reset);
			return;
		}

		var passed = false;
		var i = 1, l = iterations;
		var timeBefore = performance.now();

		for(; i <= l; i++){
			var result = await this.processTest();

			if(result !== true){
				passed = false;
				process.stdout.write(colors.fgRed);
				process.stdout.write(`failed (at iteration: ${i}/${iterations} :: returned '${result}')`);
				break;
			}
			if(expectedTime > 0 && performance.now() - timeBefore > expectedTime){
				passed = false;
				process.stdout.write(colors.fgRed);
				process.stdout.write(`failed (at iteration: ${i}/${iterations} :: running too long)`);
				break;
			}
			passed = true;
		}
		
		var timeAfter = performance.now();
		var timeElapsed = Math.round((timeAfter - timeBefore) * 1000) / 1000;

		if(passed){
			process.stdout.write(colors.fgGreen,);
			process.stdout.write('passed');
		}
		process.stdout.write(colors.reset);
		process.stdout.write(` :: `);
		process.stdout.write(`${colors.fgYellow}${timeElapsed}${colors.reset} ms`);
		console.log('');

	}

	static singleTestMaybe(){
		if(!global.processingAllTests){
			this.test(process.argv[2] ?? 1);
		}
	}
	
};

module.exports = _tests;