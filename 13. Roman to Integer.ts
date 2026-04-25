function romanToInt(s: string): number {
    let number = 0
    for (let i = 0; i <= s.length; i++) {
        switch (s[i]) {
            case "M":
                if (s[i - 1] === "C") {
                    number += 900
                } else {
                    number += 1000
                }
                break;
            case "D":
                if (s[i - 1] === "C") {
                    number += 400
                } else {
                    number += 500
                }
                break;
            case "C":
                if (s[i+1] !== "D" && s[i+1] !== "M" && s[i-1] === "X") {
                    number += 90
                } else if (s[i+1] !== "D" && s[i+1] !== "M" && s[i-1] !== "X") {
                    number += 100
                }
                break;
            case "L":
                if (s[i - 1] === "X") {
                    number += 40
                } else {
                    number += 50
                }
                break;
            case "X":
                if (s[i + 1] !== "L" && s[i + 1] !== "C" && s[i-1] !== "I") {
                    number += 10
                } else if (s[i - 1] === "I" && (s[i + 1] !== "L" && s[i + 1] !== "C")) {
                    number += 9
                }
                break;
            case "V":
                if (s[i - 1] === "I") {
                    number += 4
                } else {
                    number += 5
                }
                break;
            case "I":
                if (s[i + 1] !== "V" && s[i + 1] !== "X") {
                    number += 1
                }
        }
    }

    return number
}