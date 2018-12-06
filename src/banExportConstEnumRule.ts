import * as ts from "typescript";
import * as Lint from "tslint";
import { isExportDeclaration } from "tsutils";

// tslint:disable object-literal-sort-keys

export class Rule extends Lint.Rules.TypedRule {
    public static metadata: Lint.IRuleMetadata = {
        ruleName: "strict-boolean-conditions",
        description: Lint.Utils.dedent``,
        optionsDescription: Lint.Utils.dedent`
    `,
        options: {},
        optionExamples: [],
        type: "functionality",
        typescriptOnly: true,
        requiresTypeInfo: false,
    };

    public applyWithProgram(sourceFile: ts.SourceFile, program: ts.Program): Lint.RuleFailure[] {
        const options = {};
        return this.applyWithFunction(sourceFile, walk, options, program.getTypeChecker());
    }
}

function walk(ctx: Lint.WalkContext<any>, checker: ts.TypeChecker): void {
    const { sourceFile } = ctx;
    // sourceFile.statements.forEach(node => {
    //     if (isExportDeclaration(node)) {
    //         ts.forEachChild(node, child => {
    //             if (child.kind === ts.SyntaxKind.EnumDeclaration) {
    //                 console.log(node);
    //             }
    //         });
    //     }
    // });
    ts.forEachChild(sourceFile, function cb(node: ts.Node): void {
        if (node.kind === ts.SyntaxKind.EnumDeclaration && node.modifiers) {
            const isConst = node.modifiers.some(a => a.kind === ts.SyntaxKind.ConstKeyword);
            const isExport = node.modifiers.some(a => a.kind === ts.SyntaxKind.ExportKeyword);
            if (isConst && isExport) {
                ctx.addFailureAtNode(node, 'exported const enums are not allowed');
            }
        }
        return ts.forEachChild(node, cb);
    });
}


declare module "typescript" {
    // No other way to distinguish boolean literal true from boolean literal false
    export interface IntrinsicType extends ts.Type {
        intrinsicName: string;
    }
}
