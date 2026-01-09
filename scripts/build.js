import { spawnSync } from 'child_process';
import process from 'process';
import path from 'path';

const isWin = process.platform === 'win32';

function run(command, args) {
    console.log(`Running: ${command} ${args.join(' ')}`);
    const result = spawnSync(command, args, { 
        stdio: 'inherit',
        shell: isWin ? true : false // Only use shell on Windows to resolve bat/cmd files
    });
    if (result.error) {
        console.error(`Execution failed: ${result.error.message}`);
        process.exit(1);
    }
    if (result.status !== 0) {
        console.error(`Command failed with status ${result.status}`);
        process.exit(result.status || 1);
    }
}

console.log('Starting build process...');

// 1. Build Assets with Vite
// Use npx to locate and run vite reliably across platforms
run('npx', ['vite', 'build']);

// 2. Build Jekyll Site
// Run jekyll build
run('bundle', ['exec', 'jekyll', 'build']);

console.log('Build complete successfully.');
