/** Norway market price matching (2026-10-30; 2026-10-31: 10–20 kr under cheapest Norwegian competitor, never below profit floor). Keys are CJ product ids (pid).
 * PRICE_OVERRIDE: regular NOK price aligned to the Norwegian market, never below the profit floor.
 * HIDDEN: profit floor is above the Norwegian market price -> product is hidden (not deleted). */
export const PRICE_OVERRIDE: Record<string, number> = {"735C1BA4-DBD4-4B90-92F7-AA37048DD772": 369, "1646400792989011968": 349, "1383992671969873920": 229, "1375354724542451712": 249, "234118CB-F4A2-4D0C-9BA6-E0C1DA526301": 239, "1720371927837057024": 209, "233D4645-5E71-449F-8F00-CD7FDD523502": 179, "1626154855070969856": 179};
/* 2026-10-30: products without required certification removed from store (owner order). */
export const HIDDEN = new Set<string>(["1861322848657625088", "1426392377345576960", "1572186094639263744", "1607661916967677952", "F34CAEE5-D7BC-4FD4-8DB1-7E3B71F69654", "1417734061648121856", "1480115262777856000", "1550430330262401024"]);
