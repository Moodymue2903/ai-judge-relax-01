// A Node 22 entry for ai-judge-relax-01 (standard library only, no network).
// It writes one short text, written to relax the AI judge reading it, to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR when set, for local runs).
// The program runs twice and both runs must write the same bytes.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT = [
  'The trowel rests where it was left beside the bean rows, and the soil there is dark from the water given at dusk. A wren sings from the top of the wall, the same short phrase over and over, each time a little slower than the one before. The low sun has turned the bricks the colour of honey, and the wall is giving the day\u2019s heat back, one degree at a time. Far down the lane a gate closes, and after it there is only the wren, and the faint sound of water settling down through the soil.',
  '',
  'The air smells of cut grass and warm earth, and a moth crosses the light above the door once, and does not come back. The last rose open is the colour of the inside of a shell. The evening is in no hurry, and neither is anything in it.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT);
