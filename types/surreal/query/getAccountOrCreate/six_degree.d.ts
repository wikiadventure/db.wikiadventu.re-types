import type { OryUser } from "../../../guard/orySession.js";
import { Lang } from "../../../utils/lang.js";
import { Account } from "./index.js";
export declare function getSixDegreeAccount(user: OryUser, lang: Lang): Promise<SixDegreeAccount>;
export declare const six_degree_achivements_id: readonly ["Godwin", "AbsoluteZero", "Hot", "OverHeat", "Over9000"];
export type SixDegreeAchievementId = typeof six_degree_achivements_id[number];
export type SixDegreeAccount = Account & {
    six_degree: {
        highest_degree?: number;
        query_count: number;
        highest_path_count?: number;
        achievements: {
            id: SixDegreeAchievementId;
            date: string;
        }[];
    };
};
