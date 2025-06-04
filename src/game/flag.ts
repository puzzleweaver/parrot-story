
export class FlagUtil {
    static union(flags1: string[], flags2: string[]): string[] {
        return [...flags1, ...flags2];
    }

    static unnegate(flag: string): string {
        if (flag === "") return "";
        if (flag.charAt(0) === "!") return flag.substring(1);
        return flag;
    }

    static collapse(flags: string[]): string[] {
        return [...new Set(flags.map(FlagUtil.unnegate))];
    }
}