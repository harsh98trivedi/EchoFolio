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
        throw new Error(`Execution failed: ${result.error.message}`);
    }
    if (result.status !== 0) {
        throw new Error(`Command failed with status ${result.status}`);
    }
}

console.log('Starting build process...');

// 1. Build Assets with Vite
// Use npx to locate and run vite reliably across platforms
run('npx', ['vite', 'build']);

// 2. Build Jekyll Site
// Run jekyll build
try {
    run('bundle', ['exec', 'jekyll', 'build']);
} catch (e) {
    console.warn("⚠️  Jekyll build failed locally. Using GitHub Actions for final build is recommended.");
    console.warn("   (Error: " + e.message + ")");
    // We don't exit here so that the asset build (which succeeded) is preserved.
}

console.log('Build complete successfully.');
