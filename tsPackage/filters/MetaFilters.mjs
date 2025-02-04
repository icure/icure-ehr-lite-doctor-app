import { InternalFilterOptions } from "../cardinal-sdk-ts.mjs";
export function intersection(a, b, ...others) {
    return InternalFilterOptions.getInstance().intersection(a, b, others);
}
export function union(a, b, ...others) {
    return InternalFilterOptions.getInstance().union(a, b, others);
}
export function difference(of, subtracting) {
    return InternalFilterOptions.getInstance().difference(of, subtracting);
}
//# sourceMappingURL=MetaFilters.mjs.map