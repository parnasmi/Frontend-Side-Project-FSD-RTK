type Mod = Record<string, boolean | string>;
export function classNames(classes: string, mods:Mod, additionalClassnames: string[]):string {

    const computedClassNames = [
        classes,
        ...additionalClassnames, 
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className, _]) => className)
        ]
        .join(' ');

    return computedClassNames;
}