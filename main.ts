// News-image entry (Node 22, standard library only): the image is the
// entry.png beside this file, and the program copies it to the output
// directory as entry.png. The gate reads the first bytes to tell PNG
// from JPEG, so the name stays entry.png either way.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for
// /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';

const source = new URL('./entry.png', import.meta.url);
if (!existsSync(source)) {
  throw new Error('entry.png is missing from the repository');
}
if (statSync(source).size > 1048576) {
  throw new Error('entry.png is over the 1 MiB limit');
}
copyFileSync(
  source,
  join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'),
);
