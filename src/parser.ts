import NameStringExpression from './expressions/NameStringExpression';
import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { MyGrammarLexer } from './ANTLR/src/MyGrammarLexer';
import { MyGrammarParser } from './ANTLR/src/MyGrammarParser';
import Visitor from './Visitor';

class Parser {
  static parse(expression?: string | null): NameStringExpression {
      if (!expression) {
        throw new Error(`
        NameStringExpression -> 'expression' должен быть не пустой строкой.
        Expression = ${expression}.
        Typeof expression = ${typeof expression}.
      `);
      }

      const charStream = CharStreams.fromString(expression);
      const lexer = new MyGrammarLexer(charStream);
      const token = new CommonTokenStream(lexer);
      const parser = new MyGrammarParser(token);

      const tree = parser.expression();
      const visitor = new Visitor();

      return visitor.visit(tree);
    }
}

export default Parser;