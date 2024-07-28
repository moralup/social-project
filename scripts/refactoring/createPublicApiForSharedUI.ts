import path from 'path';
import { Project } from 'ts-morph';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

const sharedUIPath = path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui');
const sharedUIDirectory = project.getDirectory(sharedUIPath);
const componentsDirs = sharedUIDirectory?.getDirectories();

componentsDirs?.forEach(directory => {
    const indexFilePath = `${directory.getPath()}/index.ts`;
    const indexFile = directory.getSourceFile(indexFilePath);

    if (indexFile) return undefined;

    let componentFileName = '';
    directory.getSourceFiles().forEach(item => {
        const fileName = item.getBaseNameWithoutExtension();
        const endsUnwantedFiles = ['stories', 'index', 'module'];
        const isComponentFile = !endsUnwantedFiles.some(end => {
            return fileName.endsWith(end);
        });
        if (isComponentFile) {
            componentFileName = fileName;
        }
    });

    if (!componentFileName) {
        return undefined;
    }

    // eslint-disable-next-line no-console
    console.log(componentFileName);

    const componentFilePath = `${directory.getPath()}/${componentFileName}.tsx`;
    // prettier-ignore
    const keysExportedDeclarations = directory
        .getSourceFile(componentFilePath)
        ?.getExportedDeclarations()
        .keys() || [];

    const endsUnwantedDeclarations = ['Props'];
    const endsDeclarationTypes = ['I', 'Type'];
    let filesExport = '';

    Array.from(keysExportedDeclarations).forEach(item => {
        const isAddExport = !endsUnwantedDeclarations.some(end => {
            return item.endsWith(end);
        });

        if (!isAddExport) return undefined;

        const isType = endsDeclarationTypes.some(end => {
            return item.endsWith(end);
        });

        let prefix = '';

        if (filesExport) {
            prefix += ', ';
        }

        if (isType) {
            prefix += 'type ';
        }

        filesExport += `${prefix}${item}`;
    });

    const sourceFile = `export { ${filesExport} } from './${componentFileName}';\n`;
    const file = directory.createSourceFile(indexFilePath, sourceFile, {
        overwrite: true,
    });

    file.save();
});

files.forEach(sourceFile => {
    const importDeclarations = sourceFile.getImportDeclarations();
    importDeclarations.forEach(importDeclaration => {
        const value = importDeclaration.getModuleSpecifierValue();
        const valueWithoutAlias = value.replace('@/', '');

        const segments = valueWithoutAlias.split('/');

        const isSharedLayer = segments?.[0] === 'shared';
        const isUISlice = segments?.[1] === 'ui';

        if (isSharedLayer && isUISlice) {
            const result = value.split('/').slice(0, 4).join('/');
            importDeclaration.setModuleSpecifier(result);
        }
    });
});

project.save();
