type Mod = Record<string, boolean | string>;
export function classNames(classes: string, mods:Mod = {}, addClses: string[] = []):string {
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
