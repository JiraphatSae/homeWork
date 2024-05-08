var x = 0;
var isCorrect1 = false;
var isCorrect2 = false;
function checkAnswer01(answer) {
    const result = document.getElementById('result1');
    const calCu = document.getElementById('Cal');
    if (answer === 'a') {
        result.textContent = "ถูกต้อง PIM ย่อมาจาก PIM";
        result.style.color = 'green';
        if(!isCorrect1)
            x++;
            isCorrect1 =true;
            calCu.textContent = "คุณได้คะแนนทั้งหมด"+x+"ข้อ";
    } else {
        result.textContent = "Incorrect! Try again.";
        result.style.color = 'red';
    }
 }

 function checkAnswer02(answer) {
    const result = document.getElementById('result02');
    const calCu = document.getElementById('Cal');
    if (answer === 'b') {
        result.textContent = "ถูกต้อง ศูนย์กระจายสินค้าแห่งแรกของ CPALL คือ บางบัวทอง";
        result.style.color = 'green';
        if(!isCorrect2)
            x++;
            isCorrect2 =true;
            calCu.textContent = "คุณได้คะแนนทั้งหมด "+x+" ข้อ";
    } else {
        result.textContent = "Incorrect! Try again.";
        result.style.color = 'red';
    }
 }
 