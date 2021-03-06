import { convertIfInRange } from "../../utils/convertIfInRange";
import {
    CUBMETREMIN,
    CUBMETREMAX,
    cubicMetreToCubicFoot,
} from "./cubicMetre";

const CUBFOOTMIN: number = cubicMetreToCubicFoot(CUBMETREMIN);
const CUBFOOTMAX: number = cubicMetreToCubicFoot(CUBMETREMAX);

function cubicFootToCubicMetre(foot3: number): number {
    return convertIfInRange(
        foot3,
        (f3: number): number => f3 * 0.028316846592,
        CUBFOOTMIN,
        CUBFOOTMAX
    );
}

export { cubicFootToCubicMetre };
