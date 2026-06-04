//When user click on 'help' page link then page loading starts and my code fetch value of 'isDark' from local storage and if it is true then it add 'dark-mode' class in body and dark theme work on my page

//my main purpose to do these is because i want that if user change theme to dark mode then it remain applicable until it doesn't want to change and even on refresh the theme applicable so in the solution i use local storage method in which if user change theme then i store the boolean value in local storage and if page refresh or page change then on loading my code fetch value from local storage and if value of 'dark-mode' is true then dark theme applied.

let isDark=localStorage.getItem("isDark");
if (isDark=="true"){
    console.log("in body add 'dark-mode' class");
    document.body.classList.add("dark-mode");
}
else{
    console.log("in body remove 'dark-mode' class");
    document.body.classList.remove("dark-mode");
}