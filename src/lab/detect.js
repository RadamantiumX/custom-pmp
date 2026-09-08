// import { resolveCommand } from 'package-manager-detector/commands'
// import { detect } from 'package-manager-detector/detect'
import fs from 'node:fs'
import path from 'node:path'

function detectMonorepo(rootdir = process.cwd()) {
  const pkgPath = path.join(rootdir, 'package.json');
  
  // Check package.json workspaces
  if (fs.existsSync(pkgPath)) {
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
    if (pkg.workspaces) 
      {
        console.log('Is Monorepo')
        return 

      }
      console.log('Is normal project')
      return
  }
  
  // Check pnpm
  if (fs.existsSync(path.join(rootdir, 'pnpm-workspace.yaml'))) {
    console.log('pnpm monorepo')
    return;
  }
  console.log('Nothing to say')
  // Check turbo / nx / lerna
  // if (fs.existsSync(path.join(rootdir, 'turbo.json'))) return 'turbopack/turborepo';
  // if (fs.existsSync(path.join(rootdir, 'nx.json'))) return 'nx';
  // if (fs.existsSync(path.join(rootdir, 'lerna.json'))) return 'lerna';
  
  return;
}
detectMonorepo('*')
// const pm = await detect()
// if (!pm)
//   throw new Error('Could not detect package manager')

// console.log(pm.agent)
// const { command, args } = resolveCommand(pm.agent, 'add', ['@antfu/ni']) // { command: 'pnpm', args: ['add', '@antfu/ni'] }
// console.log(`Detected the ${pm.agent} package manager. You can run a install with ${command} ${args.join(' ')}`)