import { db } from "../../db.js";
export async function getSixDegreeAccount(user, lang) {
    const langFallback = lang == "en" ? `[lang:en]` : `[lang:${lang},lang:en]`;
    const queryResult = await db.query(/* surrealql */ `
        LET $user = fn::getUserOrCreate( $id , $name , $email );
        LET $all_achievement = SELECT VALUE fn::langFallback(->achievement_content, ${langFallback}) FROM achievement WHERE game_tag == game_tag:six_degree;
        LET $user_achievement = SELECT title, description, meta::id(out) as lang, meta::id(in) as id, (SELECT VALUE date FROM $uid->achieve WHERE out = $parent.in)[0] as achieved FROM $all_achievement;
        RETURN (SELECT meta::id(id) as id, name, email, six_degree, $user_achievement as six_degree.achievements FROM $user)[0];
    `, user);
    return queryResult[3].result;
}
