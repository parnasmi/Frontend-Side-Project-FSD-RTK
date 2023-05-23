import { Project } from 'ts-morph';
import path from 'path';

const project = new Project({});
project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();
const indexFilename = 'index.ts';
const layer = process.argv[2] || 'shared';
const slice = 'ui';
const dest = project.getDirectory(path.resolve(__dirname, '..', '..', 'src', layer, slice));
const directories = dest?.getDirectories();

function isAbsolute(value: string) {
    const layers = ['app', 'shared', 'entities', 'features', 'widgets', 'pages'];
    return layers.some((layer) => value.startsWith(layer));
}
directories?.forEach((directory) => {
    const folderNamePath = directory.getPath();
    const isIndexFileExist = directory.getSourceFile(`${folderNamePath}/${indexFilename}`);

    if (!isIndexFileExist) {
        const filesInFolder = directory.getSourceFiles([
            '**/*.tsx',
            '!**/*.stories.tsx',
            '!**/*.test.tsx',
        ]);

        let content = '';

        filesInFolder?.forEach((component) => {
            const folderLen = folderNamePath.length;
            const filePathName = component.getFilePath();
            const moduleName = component.getBaseNameWithoutExtension();
            const modulePath = `.${filePathName.slice(folderLen, -4)}`;
            content += `export {${moduleName}} from "${modulePath}"\n`;
        });

        console.log(content);

        const file = directory.createSourceFile(
            `${folderNamePath}/${indexFilename}`,
            content,
            { overwrite: true },
        );

        // eslint-disable-next-line no-console
        file.save().then(() => console.log(`${folderNamePath} --> index.ts created!`));
    }
});

files.forEach((sourceFile) => {
    const importDeclarations = sourceFile.getImportDeclarations();
    importDeclarations.forEach((importDeclaration) => {
        const value = importDeclaration.getModuleSpecifierValue();
        const valueWithoutAlias = value.replace('@/', '');

        const segments = valueWithoutAlias.split('/');

        // console.log('segments', segments);

        const isSharedLayer = segments?.[0] === 'shared';
        const isUiSlice = segments?.[1] === 'ui';

        if (isAbsolute(valueWithoutAlias) && isSharedLayer && isUiSlice) {
            const result = valueWithoutAlias.split('/').slice(0, 3).join('/');
            importDeclaration.setModuleSpecifier(`@/${result}`);
        }
    });
});

project.save().then(() => console.log('Done!'));
