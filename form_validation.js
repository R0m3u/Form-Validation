//variaveis
let _name = document.querySelectorAll(".name");
let email = document.querySelector(".email");
let password = document.querySelector(".password");

//eventos
for(var i = 0; i < _name.length; i++) {
  _name[i].addEventListener("keyup", function(event) {
    let input = event.target;

    if(input.value === "") {

      input.classList.remove("correct");
      input.classList.add("wrong");

    }

    else {

      input.classList.remove("wrong");
      input.classList.add("correct");

    }
  });
}

email.addEventListener("keyup", checkEmail);
password.addEventListener("keyup", passwordStrength);

//funcoes
function checkEmail() {
  let regex =  /(^[a-zA-Z0-9_.-]+@[a-zA-Z0-9\.-]+\.[a-zA-Z]{3,4}$)/;

  if(email.value === "") {

    email.classList.remove("correct")
    email.classList.add("wrong");

  }

  else if(email.value.match(regex)) {

    email.classList.remove("wrong");
    email.classList.add("correct");

  }

  else {

    email.classList.remove("correct");
    email.classList.add("wrong");

  }
}

function passwordStrength() {
  //code here

}

function showHide() {
  let btn = document.querySelector(".showHide");

  btn.addEventListener("click", function(event) {
    btn.classList.toggle("show");

    if(btn.classList.contains("show")) {
      password.setAttribute("type", "text");
    }

    else if(!btn.classList.contains("show")) {
      password.setAttribute("type", "password");
    }

  });
}

showHide();
// analisar como posso criar novas tags do lado de uma tag especifica com javascritp puro
`REGULAR EXPRESSIONS
%CHARACTERS AND MATCHES%
-[...] match if any character inside the brackets has in the string
-[^...] match if any character inside the brackets doesn't have in the string
-\w - [a-z0-9A-Z_]: letters and numbers including  underscore character
-\W - [^a-z0-9A-Z_]: is the reverse of \w, match if dont have any character inside the brackets
-\s - match if there has a whitespace
-\S - match if doesn't have whitespace
-\d - match if there has one digit between 0-9: [0-9]
-\D - match if there doesn't have digits: [^0-9]
-[\b] - represent the backspace (this is a special case)

%REPETIONS%
- + - match one or more previous character (ex: /[a+]/)
- {m,n} - Match the previous item at least n times but no more than m time
- {m} - match if has exactly m repetions of previous character
- {m, } - match m times or more the previous character
- ? - Match zero or one occurrences of the previous item. That is, the previous item is optional. Equivalent to {0,1}<!important: be careful to use this sign>.
- * - Match zero or one occurrences of the previous item. That is, the previous item is optional. Equivalent to {0,1}<!important: be careful to use this sign>.
voltar na pagina 275

%ALTERNATING, GROUPING AND REFERENCES%
- (...) - group characters as one,being able to use the +, |, * or ?. the pattern can remenbered for use a reference later.
- (?:...) - group only, the pattern not remenbered to make a reference
- \n - Match the same characters that were matched when group number n was first matched. Groups are subexpressions
       within (possibly nested) parentheses. Group numbers are assigned by counting left parentheses from left to right.
       Groups formed with (?:) are not numbered.    


%ESPECIFYING MATCH POSITION%

- \B - match a position that is not a word boundary
- \b - Match a word boundary. That is, match the position between a \w character and a \W character or between a character and the beginning or end of a string. (Note, however, that [\b] matches backspace.)
- ^ -  match the beggining of a string,in multiline searches, match end beggining of line
- $ - match the end of a string, multiline search, match end of a line *revisar
- (?= p) - a positive lookahead assertion A positive lookahead assertion. Require that the following characters match the pattern p, but do not include those characters in the match 
- (?! p) - a negative lookahead assertion. Require that following characters do not match the pattern p

%FLAGS%

- i - case-sensitive macthing
- m - Perform a global match—that is, find all matches rather than stopping after the first match.
- m - Multiline mode. ^ matches beginning of line or beginning of string, and $ matches end of line or end of string.

%STRINGS METHODS FOR PATTERN MATCHING%

- regex.search() - This method takes a regular-expression argument and returns either the character position of the start of the first matching substring or -1 if there is no much.
- regex.replace() - method performs a search-and-replace operation.
- regex.match() - match the pattern in if has in the string.
- regex.split() - This method breaks the string on which it is called into an array of substrings, using the argument as a separator.
- regex.test() - evaluate the result return a boolean value, true or false
- regex.exec() - 

%REGEX OBJECT%
syntax: new RegEx(regex, )

`

