//Q.Create a function that checks if a string is a palindrome.

function checkPalimdrome(str){
    let arr = Array.from(str);
    let s = 0;
    let e = arr.length-1;
    while(s<e){
        if(arr[s]==arr[e]){
            alert("Given String is Palindrome");
        }
        else{
            alert("Given String is not Palindrome");
        }
        s++;
        e--;
    }
}

let str = prompt("Enter a string to check if it is Palindrome, (use only lowercase or uppercase to give input)");
checkPalimdrome(str);