
const counter = () => {
    let count = 0;
    for (let i = 0; i <= 5; i++) {
        console.log(count);
        count++; // ESLint might flag this for being unused or misplaced
    }
}

counter();
