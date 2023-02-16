export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0
    let hi = haystack.length

    do {
        const m = Math.floor(lo + (hi - lo) / 2) // Handle negative numbers
        const v = haystack[m]

        if (v === needle) {
            return true
        } else if (v > needle) {
            hi = m
        } else {
            // lo is inclusive, hi is exclusive.
            // +1 to not look at middle point again
            lo = m + 1
        }
    } while (lo < hi)

    return false
}
