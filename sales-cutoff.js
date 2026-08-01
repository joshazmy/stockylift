export const SALES_TIME_ZONE = "America/New_York";
export const SALES_CUTOFF_ISO = "2026-08-18T00:00:00-04:00";
export const SALES_CUTOFF_MS = Date.parse(SALES_CUTOFF_ISO);

export function isSalesClosed(now = Date.now()) {
  const timestamp = now instanceof Date ? now.getTime() : Number(now);
  return !Number.isFinite(timestamp) || timestamp >= SALES_CUTOFF_MS;
}

export function applySalesCutoff(documentRef = document, now = Date.now()) {
  const closed = isSalesClosed(now);

  for (const link of documentRef.querySelectorAll("[data-purchase-link]")) {
    const openLabel = link.dataset.openLabel || link.textContent;
    link.dataset.openLabel = openLabel;

    if (closed) {
      link.removeAttribute("href");
      link.setAttribute("aria-disabled", "true");
      link.textContent = link.dataset.closedLabel || "New purchases closed";
    } else {
      link.setAttribute("href", link.dataset.purchaseLink);
      link.removeAttribute("aria-disabled");
      link.textContent = openLabel;
    }
  }

  for (const message of documentRef.querySelectorAll("[data-sales-closed-message]")) {
    message.hidden = !closed;
  }

  documentRef.documentElement.dataset.sales = closed ? "closed" : "open";
  return closed;
}

if (typeof document !== "undefined") {
  applySalesCutoff(document);
}
