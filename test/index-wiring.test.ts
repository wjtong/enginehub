import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const entrypoint = readFileSync(new URL("../src/index.ts", import.meta.url), "utf8");

test("production server receives custom provider persistence dependencies", () => {
  assert.match(entrypoint, /customProviders:\s*built\.customProviders/);
  assert.match(entrypoint, /refreshCustomProviders:\s*built\.refreshCustomProviders/);
});
