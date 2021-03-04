// <3 all platforms!
const { readdir } = require('fs').promises;
const { spawn  } = require('child_process');
const ngBin = './node_modules/@angular/cli/bin/ng';
const action = process.argv[2];
const params = process.argv.slice(3);
const ng = (project) => () => new Promise((resolve, reject) => {
	console.log(`========== ${project} ==========`);
	console.log(`ng ${action} ${project} ${params.join(' ')}`);
	const proc = spawn('node', [ngBin, action, project, ...params]);
	proc.stdout.pipe(process.stdout, { end: false });
	proc.stderr.pipe(process.stderr, { end: false });
	proc.on('error', (error) => {
		console.error(`error: ${error.message}`);
	});
	proc.on('close', code => {
		console.log(`ng exited with code ${code}`);
		resolve();
	});
});
const chainPromises = (arr, continueOnError = false) => {
  let results = [];
  return arr.reduce((current, next, i) =>
    current
      .then(accumulatedResults => {
        results = accumulatedResults;
        return next();
      })
      .then(nextResult => [...results, nextResult])
      .catch(err => {
        if (continueOnError) return [...results, null];
        throw err;
      }),
    Promise.resolve(results)
  );
};
readdir('projects', { withFileTypes: true })
	.then(dirent  => 
		dirent
			.filter(d => d.isDirectory)
			.map(d => d.name)
	)
	.then(projects => 
		chainPromises(projects.map(ng), true)
	)
	.then(() => 
		console.log('done')
	)
	.catch(console.error.bind(console))
	;