// Generated from ./src/MyGrammar.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class MyGrammarLexer extends Lexer {
	public static readonly PLUS = 1;
	public static readonly MINUS = 2;
	public static readonly NUMBER = 3;
	public static readonly STRING = 4;
	public static readonly WhiteSpace = 5;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"PLUS", "MINUS", "NUMBER", "STRING", "WhiteSpace",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'+'", "'-'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "PLUS", "MINUS", "NUMBER", "STRING", "WhiteSpace",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(MyGrammarLexer._LITERAL_NAMES, MyGrammarLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return MyGrammarLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(MyGrammarLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "MyGrammar.g4"; }

	// @Override
	public get ruleNames(): string[] { return MyGrammarLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return MyGrammarLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return MyGrammarLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return MyGrammarLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x07/\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x03" +
		"\x02\x03\x02\x03\x03\x03\x03\x03\x04\x06\x04\x13\n\x04\r\x04\x0E\x04\x14" +
		"\x03\x05\x03\x05\x07\x05\x19\n\x05\f\x05\x0E\x05\x1C\v\x05\x03\x05\x03" +
		"\x05\x03\x05\x07\x05!\n\x05\f\x05\x0E\x05$\v\x05\x03\x05\x05\x05\'\n\x05" +
		"\x03\x06\x03\x06\x03\x06\x05\x06,\n\x06\x03\x06\x03\x06\x04\x1A\"\x02" +
		"\x02\x07\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\x03\x02" +
		"\x04\x03\x022;\x05\x02\f\f\x0F\x0F\"\"\x023\x02\x03\x03\x02\x02\x02\x02" +
		"\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02" +
		"\v\x03\x02\x02\x02\x03\r\x03\x02\x02\x02\x05\x0F\x03\x02\x02\x02\x07\x12" +
		"\x03\x02\x02\x02\t&\x03\x02\x02\x02\v+\x03\x02\x02\x02\r\x0E\x07-\x02" +
		"\x02\x0E\x04\x03\x02\x02\x02\x0F\x10\x07/\x02\x02\x10\x06\x03\x02\x02" +
		"\x02\x11\x13\t\x02\x02\x02\x12\x11\x03\x02\x02\x02\x13\x14\x03\x02\x02" +
		"\x02\x14\x12\x03\x02\x02\x02\x14\x15\x03\x02\x02\x02\x15\b\x03\x02\x02" +
		"\x02\x16\x1A\x07$\x02\x02\x17\x19\v\x02\x02\x02\x18\x17\x03\x02\x02\x02" +
		"\x19\x1C\x03\x02\x02\x02\x1A\x1B\x03\x02\x02\x02\x1A\x18\x03\x02\x02\x02" +
		"\x1B\x1D\x03\x02\x02\x02\x1C\x1A\x03\x02\x02\x02\x1D\'\x07$\x02\x02\x1E" +
		"\"\x07)\x02\x02\x1F!\v\x02\x02\x02 \x1F\x03\x02\x02\x02!$\x03\x02\x02" +
		"\x02\"#\x03\x02\x02\x02\" \x03\x02\x02\x02#%\x03\x02\x02\x02$\"\x03\x02" +
		"\x02\x02%\'\x07)\x02\x02&\x16\x03\x02\x02\x02&\x1E\x03\x02\x02\x02\'\n" +
		"\x03\x02\x02\x02(,\t\x03\x02\x02)*\x07\f\x02\x02*,\x07\x0F\x02\x02+(\x03" +
		"\x02\x02\x02+)\x03\x02\x02\x02,-\x03\x02\x02\x02-.\b\x06\x02\x02.\f\x03" +
		"\x02\x02\x02\b\x02\x14\x1A\"&+\x03\x02\x03\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MyGrammarLexer.__ATN) {
			MyGrammarLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(MyGrammarLexer._serializedATN));
		}

		return MyGrammarLexer.__ATN;
	}

}

