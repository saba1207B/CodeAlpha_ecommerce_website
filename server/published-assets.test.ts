import { describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";

const projectRoot = path.resolve(import.meta.dirname, "..");

function readProjectFile(relativePath: string) {
  return fs.readFileSync(path.join(projectRoot, relativePath), "utf8");
}

describe("published storefront delivery", () => {
  it("includes a lightweight standalone 404 HTML document", () => {
    const filePath = path.join(projectRoot, "client", "public", "404.html");
    expect(fs.existsSync(filePath)).toBe(true);
    expect(readProjectFile("client/public/404.html")).toContain("Atelier / 404");
    expect(readProjectFile("client/public/404.html")).toContain('href="/"');
  });

  it("keeps production static serving configured for SPA deep links", () => {
    const source = readProjectFile("server/_core/vite.ts");
    expect(source).toContain('express.static(distPath, { index: false, redirect: false, fallthrough: true })');
    expect(source).toContain('app.use("*", (req, res, next)');
    expect(source).toContain('res.sendFile(indexFile');
  });
});
