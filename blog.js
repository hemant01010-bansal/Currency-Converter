isDark=localStorage.getItem("isDark");

if (isDark=="true"){
    document.body.classList.add("dark-mode");
}
else{
    document.body.classList.remove("dark-mode");
}