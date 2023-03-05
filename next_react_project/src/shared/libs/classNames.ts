export type Mod = Record<string, boolean | string | undefined>;
export function classNames(classes: string, mods:Mod = {}, addClses: Array<string | undefined> = []):string {
    const computedClassNames = [
        classes,
        ...addClses,
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className, _]) => className),
    ]
        .join(' ');

    return computedClassNames;
}
