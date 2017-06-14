// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
// http://www.regular-expressions.info/reference.html
// http://regexr.com/
// https://regex101.com/
// https://regexper.com/ rails road diagram
  // https://atom.io/packages/regex-railroad-diagram
  // apm install regex-railroad-diagram
// http://ivanzuzak.info/noam/webapps/regex_simplifier/
// http://ivanzuzak.info/noam/webapps/fsm_simulator/
// http://ivanzuzak.info/noam/webapps/fsm2regex/

/ab+c/i;
new RegExp('ab+c', 'i');
new RegExp(/ab+c/, 'i');

// flag
// g global match
// i ignore case
// m multiline, makes ^ and $ match lines rather than the whole string
  "\nIs th\nis h\nis?".match(/^is/gm)
  "\nIs th\nis h\nis?".match(/^is/g)
// u unicode
  /\u{61}/u.test('a')
  /\u{61}/.test('a')
// y sticky
  // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky

// Character Classes
. // dot, matches any single character except line terminators: \n, \r, \u2028 or \u2029.
  /l.t/ // let lot lt => let, lot
\d // digit [0-9]
  /ifpb\d/ // ifpb1 ifpb2 ifpb@ => ifpb1, ifpb2
\D // digit [^0-9]
  /ifpb\D/ // ifpb1 ifpb2 ifpb@ => ifpb@
\w // word [A-Za-z0-9_]
  /\w@/ // w@ a@ ?@ => w@, a@
\W // not word [^A-Za-z0-9_]
  /\W@/ // w@ a@ ?@ => ?@
\s // whitespace
   // [ \f\n\r\t\v\u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]
   // http://www.fileformat.info/info/unicode/category/Zs/list.htm
   // single white space character, including space, tab, form feed, line feed and other Unicode spaces
  /a\sa/ // a a aba => a a
\S // not whitespace
  /a\Sa/ // a a aba => aba
\ //
  /a\.a/  // a.a aba => a.a

// Character Sets
[] // character set
  /[xyz]/ // abcdefghijklmnopqrstuvwxyz => x, y, z
  /[a-c]/ // abcdefghijklmnopqrstuvwxyz => a, b, c
  /[a-c12]/ // abcdefghijklmnopqrstuvwxyz0123456789 => a, b, c, 1, 2
  /[0-9]/ // abcdefghijklmnopqrstuvwxyz0123456789 => 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
  /[A-Z]/ // ABCDEFGHIJKLMNOPQRSTUVWXYZ => A, B... Z
  /[a-z]/ // ABCDEFGHIJKLMNOPQRSTUVWXYZ =>
  /[A-Za-z0-9_]/ // ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_
               //   => a, b, c... z, A, B, C... Z, 0, 1, 2... 9, _
[^] // complemented character set
  /[^xyz]/ // tuvwxyz => t, u, v, w
  /[^7-9]/ // 0123456789 => 0, 1, 2, 3, 4, 5, 6
  /[^A-Za-z0-9_]/ // !@#$qwert => !@#$

// Alternation
|
  /x|y/ // abcdefghijklmnopqrstuvwxyz => x, y = [xy]
  /green|red/ // red green blue => green, red != [green|red]

// Boundaries
^ // beginning
  /^instituto/ // instituto federal => instituto
  /^instituto/ // o instituto federal da paraíba =>
  /^\w{4}/g // lorem\nipsum\ndolor => lore
  /^\w{4}/gm // lorem\nipsum\ndolor => lore, ispu, dolo
$ // end
  /federal$/ // instituto federal => federal
  /federal$/ // o instituto federal da paraíba =>
\b // word boundary
  /\ba\w*/ // apple, blackberry, cherry => apple
  /\w*y\b/ // apple, blackberry, cherry => blackberry, cherry
\B // non-word boundary
  /\w*rr\B\w*/ // apple, blackberry, cherry => blackberry, cherry

// Grouping and back references
() // capturing group
  /bab(y|ies)/ // baby, babies, boom => baby, babies

\n // backreference
   // http://www.regular-expressions.info/backref.html
   // http://www.regular-expressions.info/backref2.html
  /(\w)a\1/ // hah dad bad dab gag gab => hah, dad, gag
  /<(p)>(.*)<\/\1>/ // <p>lorem ipsum</p> => <p>lorem ipsum</p>

(?:x) // non-capturing group
  /(?:http|ftp)://([^/\r\n]+)(/[^\r\n]*)?/
    // "http://stackoverflow.com/" =>
      // Match "http://stackoverflow.com/"
      // Group 1: "stackoverflow.com"
      // Group 2: "/"
    // "http://stackoverflow.com/questions/tagged/regex" =>
      // Match "http://stackoverflow.com/questions/tagged/regex"
      // Group 1: "stackoverflow.com"
      // Group 2: "/questions/tagged/regex"
  /([0-9]+)(?:st|nd|rd|th)?/
    // 1st =>
      // Match = 1st
      // Group 1: 1

// Quantifiers
x*
  /<.*>/ // "<foo> <bar>" => "<foo> <bar>"
  /\d*/ // abc12345678cde90fgh => 12345678, 90
x+
  /\w+@\w+/ // root@ifpb => root@ifpb
  /\w+@\w+/ // root@1 => root@1
  /\w+@\w+/ // root@ =>
  /\w+/ // root@ifpb => root, ifpb
  /\d+/ // abc12345678cde90fgh => 12345678, 90
x?
  /\w+@\w?/ // root@ifpb => root@i
  /\w+@\w?/ // root@1 => root@1
  /\w+@\w?/ // root@ => root@
x{n}
  /\d{5}/ // abc12345678cde90fgh => 12345
x{n,}
  /\d{5,}/ // abc12345678cde90fgh => 12345678
x{n,m}
  /\d{1,5}/ // abc12345678cde90fgh => 12345, 678, 90
x*?
  /<.*?>/ // "<foo> <bar>" => "<foo>", "<bar>"
x+?
  /\d+?/ // abc12345678cde90fgh => 1, 2, 3, 4, 5, 6, 7, 8, 9, 0
x??
  /\d??/ // 12 => "", "", ""
x{n}?
  /\d{5}/ // abc12345678cde90fgh => 12345
x{n,}?
  /\d{5,}/ // abc12345678cde90fgh => 12345
x{n,m}?
  /\d{1,5}/ // abc12345678cde90fgh => 1, 2, 3, 4, 5, 6, 7, 8, 9, 0

// Assertions
x(?=y) // positive lookahead, x only if x is followed by y
  /\d(?=px)/ // 1pt 2px 3em 4px => 2, 4

x(?!y) // negative lookahead, x only if x is not followed by y
  /\d(?!px)/ // 1pt 2px 3em 4px =>, 1, 3

// Patterns
// https://code.tutsplus.com/tutorials/8-regular-expressions-you-should-know--net-6149
// hexa number
0x1f
0x1F
0X1f
0X1FFFF
/^0[xX][\dA-Fa-f]+$/

// ip
255.255.255.255
/^\d{3}\.\d{3}\.\d{3}\.\d{3}$/
/^(\d{3}\.){3}\d{3}$/

// cep
01001000
01001-000
01.001-000
/^\d{2}\.?\d{3}-?\d{3}$/

// cpf
11122233344
111.222.333-44
/^(\d{9}|\d{3}(\.\d{3}){2}-\d{2})$/

// hora
12:12:12
12:12
23:12
/^([0-1]\d|2[0-3])(:[0-5]\d){1,2}$/

// data
31/01/1970
01/31/1970
01-31-1970
1970-01-31
/^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}|(0[1-9]|[12]\d|3[01])-(0[1-9]|1[0-2])-\d{4}$/
// o sonho http://stackoverflow.com/questions/15491894/regex-to-validate-date-format-dd-mm-yyyy

// number
1000000 // \d+
10
1.000.000
1.000.000,0
1.000.000,10
/^(\d+|\d{1,3}(\.\d{3})*)(,\d{1,2})?$/

1.100

// currency
R$ 1.000.000,10
R$10,10

// phone
12341234
1234 1234
(83) 1234 1234
(83) 1234-1234
(83)1234-1234
(83)9 1234-1234
(83) 9 1234-1234
(83)9.1234-1234
(83) 9.1234-1234
(83)91234-1234
055 83 91234-1234
05583912341234
+55 83 91234-1234
+5583912341234

// username

// url

// email

// password
// http://stackoverflow.com/questions/19605150/regex-for-password-must-be-contain-at-least-8-characters-least-1-number-and-bot
// http://stackoverflow.com/questions/22254442/regular-expression-for-password-does-not-begin-with-does-not-contain
/^[a-z0-9_-]{*,}$/
/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

Minimum 8 characters at least 1 Alphabet and 1 Number
/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
Minimum 8 characters at least 1 Alphabet, 1 Number and 1 Special Character:
/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/
Minimum 8 characters at least 1 Uppercase Alphabet, 1 Lowercase Alphabet and 1 Number:
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
Minimum 8 characters at least 1 Uppercase Alphabet, 1 Lowercase Alphabet, 1 Number and 1 Special Character:
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/
Minimum 8 and Maximum 10 characters at least 1 Uppercase Alphabet, 1 Lowercase Alphabet, 1 Number and 1 Special Character:
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,10}/


// RegExp
/\w+/.test("ifpb")
/\w+/.test("!@#$")

/\w+/.exec("ifpb")
/\w+/.exec("!@#$")

// String
"mensagem <b>importante</b>".match(/<b>(.*)<\/b>/)
"mensagem <b>importante</b>".match(/ifpb/)
"11:11:20".match(/([0-1]\d|2[0-3])(:[0-5]\d){1,2}/) // match and groups
"11:11:20".match(/([0-1]\d|2[0-3])(:[0-5]\d){1,2}/g)

"lorem ipsum\ndolor".split(/\s/)

"mensagem <b>importante</b>".search(/<b>(.*)<\/b>/)
"mensagem <b>importante</b>".search(/ifpb/)

"mensagem <b>importante</b>".replace(/<b>(.*)<\/b>/,"<i>importante</i>")
"mensagem <b>importante</b>".replace(/<b>(.*)<\/b>/,"<i>$1</i>")
"mensagem <b>importante</b> e <b>interessante</b>".replace(/<b>(.*)<\/b>/,"<i>$1</i>")
"01/12/2017".replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$3-$2-$1")

// input pattern
<input type="text" pattern="\d{5}-\d{3}">

// Problem
// contain cep
// extract ceps
var text = "Lorem ipsum 12345-123 dolor sit amet, 12345123 consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

// format yyyy-mm-dd
var date = "12/30/2016";

// criar uma função para validar cpf e cnpj
// tanto no padrão quanto no digito verificador
// http://ghiorzi.org/DVnew.htm

// validação de formulário

// Será que é possível usar RegExp no campo de pesquisa do Atom?
