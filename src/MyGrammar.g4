grammar MyGrammar;

PLUS   : '+' ;
MINUS  : '-' ;
NUMBER : [0-9]+ ;
STRING
       : '"' (.)*? '"'
       | '\'' (.)*? '\'';

WhiteSpace : (' ' | '\n' | '\r' | '\n\r') -> channel(HIDDEN);

compilationUnit : expression EOF ;

expression
    : expression op = (PLUS | MINUS) expression   # addSubExpression
    | NUMBER                                      # numberExpression
    | STRING                                      # stringExpression
    ;