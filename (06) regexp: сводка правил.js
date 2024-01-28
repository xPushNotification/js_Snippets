
//----------
RegExp:
//----------

//     ^           Matches beginning of input                                  /^This/ matches "This is…"
//     $           Matches end of input                                        /end$/ matches "This is the end"
//     *           Matches zero or more times                                  /se*/ matches "seeee" as well as "se"
//     ?           Matches zero or one time                                    /ap?/ matches "apple" and "and"
//     +           Matches one or more times                                   /ap+/ matches "apple" but not "and"
//     {n}         Matches exactly n times                                     /ap{2}/ matches "apple" but not "apie"
//     {n,}        Matches n or more times                                     /ap{2,}/ matches all p’s in apple and appple but not apie
//     {n,m}       Matches at least n, at most m times                         /ap{2,4}/ matches four p’s in apppppple
//     .           Any character except newline                                /a.e/ matches ape and axe
//     […]         Any character within brackets                               /a[px]e/ matches ape and axe but not ale
//     [^…]        Any character but those within brackets                     /a[^px]/ matches ale but not axe or ape
//     \b          Matches on word boundary                                    /\bno/ matches the first no in nono
//     \B          Matches on non-word boundary                                /\Bno/ matches the second no in nono
//     \d          Digits from 0 to 9                                          /\d{3}/ matches 123 in Now in 123
//     \D          Any non-digit character                                     /\D{2,4}/ matches Now ' in ‘Now in 123;
//     \w          Matches word character(letters,digits,underscores)          /\w/ matches j in javascript
//     \W          Matches any non-word (not letters, digits, or underscores)  \/W/ matches % in 100%
//     \n          Matches a line feed
//     \s          A single whitespace character
//     \S          A single character that is not whitespace
//     \t          A tab
//     (x)         Capturing parentheses                                       Remembers the matched characters
//
// --- from another book:
//
// 	/abc/ 		A sequence of characters
// 	/[abc]/ 	Any character from a set of characters
// 	/[^abc]/ 	Any character not in a set of characters
// 	/[0-9]/ 	Any character in a range of characters
// 	/x+/ 		One or more occurrences of the pattern x
// 	/x+?/ 		One or more occurrences, non-greedy
// 	/x*/ 		Zero or more occurrences
// 	/x?/ 		Zero or one occurrence
// 	/x{2,4}/ 	Two to four occurrences
// 	/(abc)/ 	A group
// 	/a|b|c/ 	Any one of several patterns
// 	/\d/ 		Any digit character
// 	/\w/ 		An alphanumeric character (“word character”)
// 	/\s/ 		Any whitespace character
// 	/./ 		Any character except newlines
// 	/\b/ 		A word boundary
// 	/^/ 		Start of input
// 	/$/ 		End of input

// get pattern
    let pattern = document.getElementById("pattern").value;
    let re = new RegExp(pattern,"g");
    
// get string
    let searchString = document.getElementById("incoming").value;
    let matchArray;
    let resultString = "<pre>";
    let first=0;
    let last=0;
    
// find each match
while((matchArray = re.exec(searchString)) != null)
{
    last = matchArray.index;
    
    // get all of string up to match, concatenate
    resultString += searchString.substring(first, last);
    
    // add matched, with class
    resultString += "<span class='found'>" + matchArray[0] + "</span>";
    first = re.lastIndex;
 }
 
 // finish off string
    resultString += searchString.substring(first,searchString.length);
    resultString += "</pre>";
    
 // insert into page
    document.getElementById("searchResult").innerHTML = resultString;

