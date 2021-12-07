// Generated from ./src/MyGrammar.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { AddSubExpressionContext } from "./MyGrammarParser";
import { NumberExpressionContext } from "./MyGrammarParser";
import { StringExpressionContext } from "./MyGrammarParser";
import { CompilationUnitContext } from "./MyGrammarParser";
import { ExpressionContext } from "./MyGrammarParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `MyGrammarParser`.
 */
export interface MyGrammarListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `addSubExpression`
	 * labeled alternative in `MyGrammarParser.expression`.
	 * @param ctx the parse tree
	 */
	enterAddSubExpression?: (ctx: AddSubExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `addSubExpression`
	 * labeled alternative in `MyGrammarParser.expression`.
	 * @param ctx the parse tree
	 */
	exitAddSubExpression?: (ctx: AddSubExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `numberExpression`
	 * labeled alternative in `MyGrammarParser.expression`.
	 * @param ctx the parse tree
	 */
	enterNumberExpression?: (ctx: NumberExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `numberExpression`
	 * labeled alternative in `MyGrammarParser.expression`.
	 * @param ctx the parse tree
	 */
	exitNumberExpression?: (ctx: NumberExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `stringExpression`
	 * labeled alternative in `MyGrammarParser.expression`.
	 * @param ctx the parse tree
	 */
	enterStringExpression?: (ctx: StringExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `stringExpression`
	 * labeled alternative in `MyGrammarParser.expression`.
	 * @param ctx the parse tree
	 */
	exitStringExpression?: (ctx: StringExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `MyGrammarParser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	enterCompilationUnit?: (ctx: CompilationUnitContext) => void;
	/**
	 * Exit a parse tree produced by `MyGrammarParser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	exitCompilationUnit?: (ctx: CompilationUnitContext) => void;

	/**
	 * Enter a parse tree produced by `MyGrammarParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `MyGrammarParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;
}

