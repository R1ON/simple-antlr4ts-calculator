import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { MyGrammarVisitor } from './ANTLR/src/MyGrammarVisitor';
import {
  AddSubExpressionContext,
  NumberExpressionContext,
  StringExpressionContext,
  MyGrammarParser,
} from './ANTLR/src/MyGrammarParser';

import NameStringExpression from './expressions/NameStringExpression';
import ConstantExpression from './expressions/ConstantExpression';
import AddExpression from './expressions/AddExpression';
import SubExpression from './expressions/SubExpression';

export default class MyANLTRVisitor extends AbstractParseTreeVisitor<NameStringExpression> implements MyGrammarVisitor<NameStringExpression> {
  protected defaultResult() {
    return new NameStringExpression();
  }

  visitAddSubExpression(ctx: AddSubExpressionContext) {
    if (ctx.childCount !== 3) {
      throw new Error(`
      MyANLTRVisitor -> количество 'children' должно быть равно 3.
      Children count = ${ctx.childCount}.
    `);
    }

    const left = this.visit(ctx.getChild(0));
    const right = this.visit(ctx.getChild(ctx.childCount - 1));

    switch (ctx._op.type) {
      case MyGrammarParser.PLUS:
        return new AddExpression(left, right);

      case MyGrammarParser.MINUS:
        return new SubExpression(left, right);

      default:
        throw new Error(`
            MyANLTRVisitor -> операция не является сложением или вычитанием.
            Operation = ${ctx._op.text}.
          `);
    }
  }

  visitNumberExpression(ctx: NumberExpressionContext) {
    return new ConstantExpression(parseFloat(ctx.text));
  }
  
  visitStringExpression(ctx: StringExpressionContext) {
    const text = ctx.text.substring(1, ctx.text.length - 1);
    return new ConstantExpression(text);
  }
}
