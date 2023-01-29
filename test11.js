function repeatProgression(base, times) {
    if (isNaN(times) || times <= 0) return base;
    let progression = "";
    for (let i = 1; i <= times; i++) {
        progression += base * i;
        if (i !== times) progression += "---";
    }
    return progression;
}
console.log(repeatProgression(5, 8)); // "5---10---15"
console.log(repeatProgression(3, 2)); // "3---6"
console.log(repeatProgression(2, -2)); // 2
console.log(repeatProgression(2, "a")); // 2