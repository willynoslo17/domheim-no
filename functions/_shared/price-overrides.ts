/** Norway market price matching (2026-10-30). Keys are CJ product ids (pid).
 * PRICE_OVERRIDE: regular NOK price aligned to the Norwegian market, never below the profit floor.
 * HIDDEN: profit floor is above the Norwegian market price -> product is hidden (not deleted). */
export const PRICE_OVERRIDE: Record<string, number> = {"735C1BA4-DBD4-4B90-92F7-AA37048DD772": 369, "1646400792989011968": 349};
export const HIDDEN = new Set<string>(["1861322848657625088", "1426392377345576960", "1572186094639263744"]);
