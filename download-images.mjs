// Downloads the AI-generated site images into public/images/ (skips existing).
// Runs automatically before `astro build` — see the "build" script in package.json.
import { mkdir, writeFile, access } from 'node:fs/promises';

const base = 'https://d8j0ntlcm91z4.cloudfront.net/user_3613UOAFRnMDgu543w3Xc2287n8';
const images = {
  'logo.webp':          'hf_20260714_211405_a23df8f2-8687-4927-a9c4-11e34f24e8ae_min.webp',
  'hero.webp':          'hf_20260714_202714_15ddff71-9fb9-4bd8-81e1-092b94f9d302_min.webp',
  'squat.webp':         'hf_20260714_202716_dde755e3-4bff-457e-8f0b-298224351096_min.webp',
  'machines.webp':      'hf_20260714_202717_5c8db27c-d491-4f65-b18d-16f76cc21e31_min.webp',
  'sled.webp':          'hf_20260714_202727_e9dc49c1-921f-4d95-9349-3dd71680e263_min.webp',
  'dumbbells.webp':     'hf_20260714_202728_a81836fe-3e86-4526-a425-f3b626d9e08b_min.webp',
  'training.webp':      'hf_20260714_202731_865ed5af-4042-4eef-b54d-7db8a7b6f438_min.webp',
  'facility-wide.webp': 'hf_20260714_202733_bba6f16b-dfa5-4d16-bd52-6a36dffb123f_min.webp',
  'chalk.webp':         'hf_20260714_202735_310acc3f-1d89-4f61-937b-0e48df8463f9_min.webp',
};

await mkdir('public/images', { recursive: true });
for (const [name, path] of Object.entries(images)) {
  const dest = `public/images/${name}`;
  try { await access(dest); console.log(`skip ${name} (exists)`); continue; } catch {}
  const res = await fetch(`${base}/${path}`);
  if (!res.ok) throw new Error(`Failed ${name}: HTTP ${res.status}`);
  await writeFile(dest, Buffer.from(await res.arrayBuffer()));
  console.log(`ok   ${name}`);
}
console.log('Images ready.');
