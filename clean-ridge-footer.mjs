import fs from "node:fs";
import postcss from "postcss";

const file = "src/index.css";
const backup = "src/index.css.backup";

if (!fs.existsSync(backup)) {
  throw new Error("Backup not found. Stopping without changes.");
}

const css = fs.readFileSync(file, "utf8");
const root = postcss.parse(css, { from: file });

const footerClasses = [
  "site-footer",
  "footer-main",
  "footer-brand",
  "footer-link",
  "footer-column",
  "footer-contact",
  "footer-bottom",
  "footer-copy",
  "back-to-top",
  "rotate-arrow",
];

function isFooterSelector(selector) {
  return footerClasses.some((name) =>
    new RegExp("\\." + name + "(?![\\w-])").test(selector)
  );
}

function cleanRules(container) {
  container.each((node) => {
    if (node.type === "rule") {
      const selectors = node.selectors ?? node.selector.split(",");
      const kept = selectors.filter(
        (selector) => !isFooterSelector(selector)
      );

      if (kept.length === 0) {
        node.remove();
      } else if (kept.length !== selectors.length) {
        node.selector = kept.join(", ");
      }
    } else if (node.type === "atrule" && node.nodes) {
      cleanRules(node);

      if (node.nodes.length === 0) {
        node.remove();
      }
    }
  });
}

cleanRules(root);

root.append(postcss.parse(`
/* THE RIDGE — consolidated footer */
.site-footer {
  width: 100%;
  margin-top: 80px;
  padding-top: 60px;
  background: var(--surface);
  color: var(--text);
}

.site-footer .footer-main {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(130px, 0.6fr) minmax(0, 1fr);
  align-items: start;
  gap: clamp(28px, 5vw, 76px);
  padding-bottom: 48px;
}

.site-footer .footer-brand {
  width: 100%;
  max-width: 370px;
  min-width: 0;
}

.site-footer .footer-brand > p {
  max-width: 350px;
  margin: 22px 0;
  font-size: 14px;
  line-height: 1.85;
  color: var(--text);
  opacity: 0.72;
}

.site-footer .footer-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #f26a21;
  font-size: 14px;
  text-decoration: none;
}

.site-footer .footer-column {
  display: flex;
  min-width: 0;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
}

.site-footer .footer-column h4 {
  margin: 3px 0 8px;
  font-size: 14px;
}

.site-footer .footer-column > a,
.site-footer .footer-contact p,
.site-footer .footer-contact a {
  color: var(--text);
  font-size: 13px;
  line-height: 1.7;
  text-decoration: none;
  opacity: 0.75;
}

.site-footer .footer-column > a:hover,
.site-footer .footer-contact a:hover {
  color: #f26a21;
  opacity: 1;
}

.site-footer .footer-contact p {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin: 0 0 8px;
}

.site-footer .footer-contact p svg {
  flex-shrink: 0;
  margin-top: 3px;
  color: #f26a21;
}

.site-footer .footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px 24px;
  width: 100%;
  padding: 22px 0 26px;
  border-top: 1px solid var(--border);
  color: var(--text);
  font-size: 12px;
  line-height: 1.7;
  opacity: 0.7;
}

@media (max-width: 900px) {
  .site-footer .footer-main {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 36px;
  }

  .site-footer .footer-brand {
    grid-column: 1 / -1;
    max-width: 520px;
  }
}

@media (max-width: 560px) {
  .site-footer {
    margin-top: 55px;
    padding-top: 40px;
  }

  .site-footer .footer-main {
    grid-template-columns: minmax(0, 1fr);
    gap: 32px;
    padding-bottom: 34px;
  }

  .site-footer .footer-brand {
    grid-column: auto;
  }

  .site-footer .footer-bottom {
    align-items: flex-start;
    flex-direction: column;
    gap: 6px;
    padding: 18px 0 22px;
  }
}
`));

fs.writeFileSync(file, root.toString() + "\n");
console.log("Footer CSS consolidated successfully.");
console.log("Original backup remains at src/index.css.backup");
