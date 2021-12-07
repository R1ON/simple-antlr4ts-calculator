// Generated from ./src/MyGrammar.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { AddSubExpressionContext } from "./MyGrammarParser";
import { NumberExpressionContext } from "./MyGrammarParser";
import { StringExpressionContext } from "./MyGrammarParser";
import { CompilationUnitContext } from "./MyGrammarParser";
import { ExpressionContext } from "./MyGrammarParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `MyGrammarParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface MyGrammarVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `addSubExpression`
	 * labeled alternative in `MyGrammarParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddSubExpression?: (ctx: AddSubExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `numberExpression`
	 * labeled alternative in `MyGrammarParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumberExpression?: (ctx: NumberExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `stringExpression`
	 * labeled alternative in `MyGrammarParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringExpression?: (ctx: StringExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `MyGrammarParser.compilationUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompilationUnit?: (ctx: CompilationUnitContext) => Result;

	/**
	 * Visit a parse tree produced by `MyGrammarParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;
}

