
function calculateResult() {
    const name = document.getElementById("name").value.trim();
    const subjectIds = ["java", "javascript", "css", "database"];
    const result = document.getElementById("result");

    if (name === "") {
        result.innerHTML = '<p class="message">Please enter your name.</p>';
        return;
    }

    const marks = [];

    for (const id of subjectIds) {
        const input = document.getElementById(id);
        const value = input.value.trim();

        if (value === "" || Number(value) < 0 || Number(value) > 100) {
            result.innerHTML = '<p class="message">Enter marks from 0 to 100 for every subject.</p>';
            input.focus();
            return;
        }
        marks.push(Number(value));
    }

    const total = marks.reduce((sum, mark) => sum + mark, 0);
    const percentage = total / marks.length;
    const passed = marks.every(mark => mark >= 35);

    let grade;

    if (!passed) {
        grade = "F";
    } else if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B";
    } else if (percentage >= 60) {
        grade = "C";
    } else if (percentage >= 35) {
        grade = "D";
    } else {
        grade = "F";
    }

    result.innerHTML = `
    <h2>Result:${passed ? "PASS" : "FAIL"}</h2>
    <strong>Student</strong>
    `

}
