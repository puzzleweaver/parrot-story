
export class FlagUtil {
    static union(flags1: string[], flags2: string[]): string[] {
        return [...flags1, ...flags2];
    }

    static unnegate(flag: string): string {
        if (flag === "") return "";
        if (flag.charAt(0) === "!") return flag.substring(1);
        return flag;
    }

    static isNegative(flag: string): boolean {
        return flag !== "" && flag.charAt(0) === "!";
    }

    static matches(requirements: string[] = [], flags: string[]): boolean {
        for (const requirement of requirements) {
            const isNegative = FlagUtil.isNegative(requirement);
            const flag = FlagUtil.unnegate(requirement);
            if (isNegative === flags.includes(flag)) return false;
        }
        return true;
    }

    static collapse(flags: string[]): string[] {
        return [...new Set(flags.map(FlagUtil.unnegate))];
    }
}