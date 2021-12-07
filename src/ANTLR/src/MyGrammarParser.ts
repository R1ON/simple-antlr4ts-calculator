// Generated from ./src/MyGrammar.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { MyGrammarListener } from "./MyGrammarListener";
import { MyGrammarVisitor } from "./MyGrammarVisitor";


export class MyGrammarParser extends Parser {
	public static readonly PLUS = 1;
	public static readonly MINUS = 2;
	public static readonly NUMBER = 3;
	public static readonly STRING = 4;
	public static readonly WhiteSpace = 5;
	public static readonly RULE_compilationUnit = 0;
	public static readonly RULE_expression = 1;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"compilationUnit", "expression",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'+'", "'-'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "PLUS", "MINUS", "NUMBER", "STRING", "WhiteSpace",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(MyGrammarParser._LITERAL_NAMES, MyGrammarParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return MyGrammarParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "MyGrammar.g4"; }

	// @Override
	public get ruleNames(): string[] { return MyGrammarParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return MyGrammarParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(MyGrammarParser._ATN, this);
	}
	// @RuleVersion(0)
	public compilationUnit(): CompilationUnitContext {
		let _localctx: CompilationUnitContext = new CompilationUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, MyGrammarParser.RULE_compilationUnit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 4;
			this.expression(0);
			this.state = 5;
			this.match(MyGrammarParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 2;
		this.enterRecursionRule(_localctx, 2, MyGrammarParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 10;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MyGrammarParser.NUMBER:
				{
				_localctx = new NumberExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 8;
				this.match(MyGrammarParser.NUMBER);
				}
				break;
			case MyGrammarParser.STRING:
				{
				_localctx = new StringExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 9;
				this.match(MyGrammarParser.STRING);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 17;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new AddSubExpressionContext(new ExpressionContext(_parentctx, _parentState));
					this.pushNewRecursionContext(_localctx, _startState, MyGrammarParser.RULE_expression);
					this.state = 12;
					if (!(this.precpred(this._ctx, 3))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
					}
					this.state = 13;
					(_localctx as AddSubExpressionContext)._op = this._input.LT(1);
					_la = this._input.LA(1);
					if (!(_la === MyGrammarParser.PLUS || _la === MyGrammarParser.MINUS)) {
						(_localctx as AddSubExpressionContext)._op = this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 14;
					this.expression(4);
					}
					}
				}
				this.state = 19;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 1:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x07\x17\x04\x02" +
		"\t\x02\x04\x03\t\x03\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x05" +
		"\x03\r\n\x03\x03\x03\x03\x03\x03\x03\x07\x03\x12\n\x03\f\x03\x0E\x03\x15" +
		"\v\x03\x03\x03\x02\x02\x03\x04\x04\x02\x02\x04\x02\x02\x03\x03\x02\x03" +
		"\x04\x02\x16\x02\x06\x03\x02\x02\x02\x04\f\x03\x02\x02\x02\x06\x07\x05" +
		"\x04\x03\x02\x07\b\x07\x02\x02\x03\b\x03\x03\x02\x02\x02\t\n\b\x03\x01" +
		"\x02\n\r\x07\x05\x02\x02\v\r\x07\x06\x02\x02\f\t\x03\x02\x02\x02\f\v\x03" +
		"\x02\x02\x02\r\x13\x03\x02\x02\x02\x0E\x0F\f\x05\x02\x02\x0F\x10\t\x02" +
		"\x02\x02\x10\x12\x05\x04\x03\x06\x11\x0E\x03\x02\x02\x02\x12\x15\x03\x02" +
		"\x02\x02\x13\x11\x03\x02\x02\x02\x13\x14\x03\x02\x02\x02\x14\x05\x03\x02" +
		"\x02\x02\x15\x13\x03\x02\x02\x02\x04\f\x13";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MyGrammarParser.__ATN) {
			MyGrammarParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(MyGrammarParser._serializedATN));
		}

		return MyGrammarParser.__ATN;
	}

}

export class CompilationUnitContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public EOF(): TerminalNode { return this.getToken(MyGrammarParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MyGrammarParser.RULE_compilationUnit; }
	// @Override
	public enterRule(listener: MyGrammarListener): void {
		if (listener.enterCompilationUnit) {
			listener.enterCompilationUnit(this);
		}
	}
	// @Override
	public exitRule(listener: MyGrammarListener): void {
		if (listener.exitCompilationUnit) {
			listener.exitCompilationUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyGrammarVisitor<Result>): Result {
		if (visitor.visitCompilationUnit) {
			return visitor.visitCompilationUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MyGrammarParser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class AddSubExpressionContext extends ExpressionContext {
	public _op!: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(MyGrammarParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(MyGrammarParser.MINUS, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MyGrammarListener): void {
		if (listener.enterAddSubExpression) {
			listener.enterAddSubExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MyGrammarListener): void {
		if (listener.exitAddSubExpression) {
			listener.exitAddSubExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyGrammarVisitor<Result>): Result {
		if (visitor.visitAddSubExpression) {
			return visitor.visitAddSubExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NumberExpressionContext extends ExpressionContext {
	public NUMBER(): TerminalNode { return this.getToken(MyGrammarParser.NUMBER, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MyGrammarListener): void {
		if (listener.enterNumberExpression) {
			listener.enterNumberExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MyGrammarListener): void {
		if (listener.exitNumberExpression) {
			listener.exitNumberExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyGrammarVisitor<Result>): Result {
		if (visitor.visitNumberExpression) {
			return visitor.visitNumberExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringExpressionContext extends ExpressionContext {
	public STRING(): TerminalNode { return this.getToken(MyGrammarParser.STRING, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MyGrammarListener): void {
		if (listener.enterStringExpression) {
			listener.enterStringExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MyGrammarListener): void {
		if (listener.exitStringExpression) {
			listener.exitStringExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyGrammarVisitor<Result>): Result {
		if (visitor.visitStringExpression) {
			return visitor.visitStringExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


