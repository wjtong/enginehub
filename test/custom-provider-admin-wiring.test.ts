import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const adminPage = readFileSync(new URL("../plugins/admin/public/index.html", import.meta.url), "utf8");

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
