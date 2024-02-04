//над рядком 'number' виконується конкатенація отримаємо 'number3'
//над рядком 'number3' виконується конкатенація отримаємо 'number33'
console.log('number' + 3 + 3)

//відбувається неявне перетворення null у число (null перетворюється на 0)
//тобто 0+3 отиримаємо 3
console.log(null + 3)


//&& логічне 'І' повертає останнє true значення, оскільки обидва true поверне qwerty
console.log(5 && "qwerty")

//через '+' рядки перетворяться у числа
//рядок '40' перетвориться у число 40
//рядок '2' перетвориться у число 2
//число 40 додасться до числа 2 отримаємо 42
//конктенація числа 42 та рядка "hillel" отримаємо 42hillel
console.log(+'40' + +'2' + "hillel")

//рядок '10' перетвориться у число 10 (через '-')
//число 10 минус число 5 отримаємо 5
//===: порівнює два значення на рівність як за значенням, так і за типом даних, оскільки 5 і 6 не рівні поверне false
console.log('10' - 5 === 6)

//через '+' рядки перетворяться у числа
//true перетворюється на 1
//false перетворюється на 0
//1 + 0 отрримаємо 1
console.log(true + false)

//через '-' рядок '4px' буде перетворено в число, але оскільки 4px не є числом отримаємо NaN
//NaN - 3 отримаємо NaN
console.log('4px' - 3)

//через '-' рядок '4' буде перетворено в число 4
//4 - 3 отримаємо 1
console.log('4' - 3)

//зведення в ступінь має більний пріорітет тому проводиться першою отже 3 ** 0 отрмуємо 1
//над рядком '6' виконується контакенація отримаємо '61'
console.log('6' + 3 ** 0)

//через арифметичну операцію '/' рядок '6' перетворюється на число 6
//12 поділене на 6 отримаємо 2
console.log(12 / '6')

//спочатку виконється операція в дужках
//===: порівнює два значення на рівність як за значенням, так і за типом даних, оскільки 5 і 6 не рівні поверне false
//над рядком '10' виконується контакенація отримаємо '10false'
console.log('10' + (5 === 6))

//null не приводимо до 0, а '' приведемо до 0
//null при порівнянні з 0 поверне false
console.log(null == '')

//спочатку виконється операція в дужках
//9 поділити на 3 отримаємо 3
//3 в ступені 3 отримаємо 27
console.log(3 ** (9 / 3))

//!! - перетворення до boolean, не пустий рядок перетворється на true
//'false' не пустий рядок тож отримаємо true
//'true' не пустий рядок тож отримаємо true
//true порівняємо з true і отримаємо true
console.log(!!'false' == !!'true')

//|| - виходимо, як тільки знайшли хоч один true
//&& - обчислення припиняються, як тільки знаходимо false
//оскільки все true тобо дійшли до кінця - повертається останнє обчислене значення отримаємо 1
console.log(0 || '0' && 1)


//+null перетворемо на число отримаємо 0
//false при порівнянні приведемо до числа і отримаємо 0
//0 порівняємо з 0 отримаємо true
//true при порівнянні '<' приведемо до 1
//1 не меньше ніж 1(1 < 1) отримаємо false
console.log((+null == false) < 1)

//&& має більний пріорітет тому виконається перший
// false && true - поверне false тому що один з операндів false
// false || true - поверне true тому що один з операндів true
console.log(false && true || true)


//першою виконається операція в дужках
// false || true - поверне true тому що один з операндів true
// false && true - поверне false тому що один з операндів false
console.log(false && (false || true))

//першою виконається операція в дужках
//+null перетворемо на число отримаємо 0
//false при порівнянні приведемо до числа і отримаємо 0
//0 порівняємо з 0 отримаємо true
//** має більний пріорітет тому виконається перший
//true при порівнянні '<' приведемо до 1
//1 не меньше ніж 1(1 < 1) отримаємо false
console.log((+null == false) < 1 ** 5)
