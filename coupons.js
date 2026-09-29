// Gaweesha VPN Solution - 300 Pre-generated 25% OFF Promotional Coupons
// Universal promo codes included: GAWEESHA25, NOVALINK25, PHONK25, PRIVATE50

const INITIAL_COUPONS = [
  { id: 1, code: "GAWEESHA25", discount: 25, type: "PERCENT", status: "ACTIVE", tag: "Universal" },
  { id: 2, code: "NOVALINK25", discount: 25, type: "PERCENT", status: "ACTIVE", tag: "Universal" },
  { id: 3, code: "PHONK25", discount: 25, type: "PERCENT", status: "ACTIVE", tag: "Universal" },
  { id: 4, code: "PRIVATE50", discount: 50, type: "PERCENT", status: "ACTIVE", tag: "Private Plan" },
  { id: 5, code: "TURBO25", discount: 25, type: "PERCENT", status: "ACTIVE", tag: "Universal" }
];

// Generate 300 unique formatted promo coupon codes
const prefixes = ["GVPN25", "NOVA25", "PHONK25", "CYBER25", "TURBO25", "VIP25", "FAST25", "LK25", "ULTRA25", "SPEED25"];
const seedChars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

function seededRandom(seed) {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  return function() {
    return (s = s * 16807 % 2147483647) / 2147483647;
  };
}

const rng = seededRandom(778899);

for (let i = 6; i <= 305; i++) {
  const prefix = prefixes[(i - 6) % prefixes.length];
  let codeSuffix = "";
  for (let c = 0; c < 5; c++) {
    const idx = Math.floor(rng() * seedChars.length);
    codeSuffix += seedChars[idx];
  }
  INITIAL_COUPONS.push({
    id: i,
    code: `${prefix}-${codeSuffix}`,
    discount: 25,
    type: "PERCENT",
    status: "ACTIVE",
    tag: "Gift / Promo"
  });
}

if (typeof window !== "undefined") {
  window.COUPON_DATABASE = INITIAL_COUPONS;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = INITIAL_COUPONS;
}
