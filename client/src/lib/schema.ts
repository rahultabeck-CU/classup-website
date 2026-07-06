/** Stable @id for the canonical ClassUp Organization declared on the homepage. */
export const ORGANIZATION_ID = "https://classup.com.au/#organization";

/** Reference for publisher / provider fields on other pages — do not re-declare the org inline. */
export const ORGANIZATION_REF = { "@id": ORGANIZATION_ID } as const;
