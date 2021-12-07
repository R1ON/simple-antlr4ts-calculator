1. Паттерн Visitor
2. https://habr.com/ru/post/351906/
   
   В этом посте есть строки:
   ```
   const chars = new antlr4.InputStream(input);
   const lexer = new ECMAScriptLexer.ECMAScriptLexer(chars);
   const tokens = new antlr4.CommonTokenStream(lexer);
   const parser = new ECMAScriptParser.ECMAScriptParser(tokens);
   ```
   Нужно разобрать зачем нужна каждая из них.

   ```
   Разница между токенами и лексемами:
   
      [Token]       [Informal Description]                  [Sample Lexemes]
        if            characters i, f                         if
        else          characters e, l, s, e                   else
        comparison    < or > or <= or >= or == or !=          <=, !=      
        number        any numeric constant                    3.14159, 0, 6.02e23
        literal       anything but ", surrounded by "'s       "core dumped"
    ```  
3. Чтобы сгенерировать свою грамматику, нужно установить JAVA
   Как пишется грамматика: https://github.com/antlr/antlr4/blob/master/doc/grammars.md



Синтаксис грамматики:
x y ... z     - последовательность правил
( x | y | z ) - правило с альтернативами 
x?            - необязательное правило
x*            - правило повторяется 0 и более раз
x+            - правило повторяется 1 и более раз
-> skip       - выбросить что-то из парсинга
.             - все, что угодно