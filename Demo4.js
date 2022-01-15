var userName;
userName = prompt("your name");
if (userName == "") {
    document.write('user name cant be empty');
}
else if (userName == null) {
    document.write("you cancelled input");
}
document.write("hello! " + userName);
