export function dateArrayToDate(dateArray: number[]): Date {
    if (dateArray.length !== 7)
        throw Error("Invalid date array")
    try {
        const date = new Date()
        date.setFullYear(dateArray[0], dateArray[1], dateArray[2])
        date.setHours(dateArray[3], dateArray[4], dateArray[5], dateArray[6])
        return date
    } catch (e) {
        return new Date(0);
    }
}