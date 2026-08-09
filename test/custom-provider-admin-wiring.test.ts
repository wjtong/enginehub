import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const entrypoint = readFileSync(new URL("../src/index.ts", import.meta.url), "utf8");
const adminPage = readFileSync(new URL("../plugins/admin/public/index.html", import.meta.url), "utf8");

test("production server receives custom provider persistence dependencies", () => {
  assert.match(entrypoint, /customProviders:\s*built\.customProviders/);
  assert.match(entrypoint, /refreshCustomProviders:\s*built\.refreshCustomProviders/);
});

test("onboarding loads custom providers with its initial status and focus refresh", () => {
  assert.match(
    adminPage,
    /if \(view === "onboarding"\) \{\s*void loadOnboarding\(\);\s*void loadCustomProviders\(\);\s*return;\s*\}/,
  );
  assert.match(
    adminPage,
    /if \(view === "onboarding"\) \{\s*loadOnboarding\(\);\s*loadCustomProviders\(\);\s*return;\s*\}/,
  );
});
