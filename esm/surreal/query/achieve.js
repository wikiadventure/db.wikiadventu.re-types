import { db } from "../db.js";
export async function achieve(user, achievement) {
    const queryResult = await db.query(/* surrealql */ `
        RELATE type::thing("user", $id)->achieve->type::thing("achievement", $achievement)
    `, { id: user.id, achievement });
    return queryResult[1];
}
