import { db } from "../../db.js";
export async function getAccount(user) {
    const queryResult = await db.query(/* surrealql */ `
        LET $user = fn::getUserOrCreate( type::thing("user", $id) , $name , $email );
        RETURN (SELECT meta::id(id) as id, name, email FROM $user)[0];
    `, user);
    return queryResult[1].result;
}
