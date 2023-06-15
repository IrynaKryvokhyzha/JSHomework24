// Задача  1. Дано масив рядкових представлень чисел (тобто масив чисел у лапках (string). 
// З використанням перевірки за допомогою регулярних виразів і груп підрахувати кількість тих, 
// у яких перша і остання літери однакові.
console.log('Задача 1');
let arr = ['34','54','58','88','85','99','868','896','969','505']
let count = 0
let task1 = /(\d)(.*?)\1$/
for (let i = 0; i < arr.length; i++) {
	if (arr[i].match(task1))
	count++
}
console.log(count);
// -----------------------------------------------------------------------------

// Замінити номер розділяючи послідовності цифр дефісом згідно з форматом
// 0504546626   🡪  +380-50-45-466-26
console.log('Задача 2');
let str = '0504546626'
let task2 = str.replace(/(\d{1})(\d{2})(\d{2})(\d{3})(\d{2})/g, '+38$1-$2-$3-$4-$5')
console.log(task2);
// -----------------------------------------------------------------------------

// Задача 3. Після кожного значення року після 2000 року додати «р.»
// «Я народився 2001, а в школі пішов 2007» 🡪 «Я народився 2001р., а в школі пішов 2007р.»
console.log('Задача 3')
let str3 = 'Я народився 2001, а в школу пішов 2007'
let task3 = str3.replace(/(2[0-9][0-9][1-9])/g, '$&p.')
console.log(task3);
// --------------------------------------------------------------------------------

// Задача 4. Вводиться велике число. Кожні 3 розряди відділяти пробілом.
// 7457896524 🡪 7 457 896 524
console.log('Задача 4')
let str4 = '7457896524'
let task4 = str4.replace(/(?=(\d{3})+(?!\d))/g, ' $&')
console.log(task4);
// ---------------------------------------------------------------------------------

// Задача 5. Дано список з віком учнів. 
// Підрахувати скільки разів кожне значення зустрічається у списку і максимальне.
console.log('Задача 5')
let str5 = [9,10,7,9,7,15,10,8,11,12,13]
let maxVal = 0
let map = new Map()
for (const el of str5) {
	let elCount = map.get(el)||0
	map.set(el,elCount+1)
	if(el>maxVal)maxVal = el
}
console.log(map, maxVal);
// ---------------------------------------------------------------------------------

// Задача 6.  Дано масив книг (назва, рік видання, автор). Підрахувати кількість книг для кожного автора.
console.log('Задача 6')
let arr6 = [
	{
		title: 'Pride and Prejudice',
		year: 2000,
		author: 'Jane Austen'
	},
		{
		title: 'The Great Gatsby',
		year: 1990,
		author: 'F. Scott Fitzgerald'
	},
		{
		title: 'In Cold Blood',
		year: 1865,
		author: 'Truman Capote'
	},
		{
		title: 'Brave New World',
		year: 2005,
		author: 'Aldous Huxley'
	},		{
		title: 'Tender in the night',
		year: 1995,
		author: 'F. Scott Fitzgerald'
	},
]
let map1 = new Map()
for (const el of arr6) {
	let elCount1 = map1.get(el.author)||0
	map1.set(el.author,elCount1+1)
}
console.log(map1);
// -------------------------------------------------------------------------

// Задача 7. Дано інформацію про відвідувачів деякого сайту (для кожного відвідувача зберігається логін). 
// Підрахувати для кожного клієнта кількість відвідувань.
console.log('Задача 7')
let str7 = ['Ivan', 'Petro', 'Oleg', 'Alex', 'Oleg', 'Olga', 'Petro', 'Petro', 'Oleg', 'Alex']
let map2 = new Map()
for (const el of str7) {
	let elCount = map2.get(el)||0
	map2.set(el,elCount +1)
}
console.log(map2);
// --------------------------------------------------------------------------------

// Задача 8. Дано масив студентів (піб, курс, факультет). Підрахувати кількість різних факультетів, 
// та кількість студентів кожного з курсів. 
console.log('Задача 8')
let studentArr = [
	{
		name: 'Ivan Petrov',
		course: 1,
		faculty: 'Science'
	},
	{
		name: 'Artem Fedorov',
		course: 3,
		faculty: 'History'
	},
	{
		name: 'Olga Terentiev',
		course: 2,
		faculty: 'Science'
	},
	{
		name: 'Alex Totar',
		course: 1,
		faculty: 'Web Development'
	},
	{
		name: 'Pavlo Sobol',
		course: 5,
		faculty: 'Web Design'
	},
	{
		name: 'Igor Dash',
		course: 4,
		faculty: 'History'
	},
	{
		name: 'Mariya Bobsley',
		course: 4,
		faculty: 'Web Development'
	}
]

let facultyNum = new Set()
for (const el of studentArr) {
	facultyNum.add(el.faculty)
}
console.log('Кількість різних факультетів:', facultyNum.size);

let studentsNumOnCourse = new Map()
for (const el of studentArr) {
	let elCount = studentsNumOnCourse.get(el.course)||0
	studentsNumOnCourse.set(el.course, elCount+1)
}
console.log(studentsNumOnCourse);
// ---------------------------------------------------------------------------------------------------

// Задача 9. Дано масив показів температур. Підрахувати кількість входжень кожного із показів
// let temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9]
// Заокруглити вверх значення та підрахувати кількість різних показів.
console.log('Задача 9')
let temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9]
let map3 = new Map()
for (const temp of temperatures) {
	let tempCount = map3.get(temp)||0
	map3.set(temp, tempCount+1)
}
console.log(map3);

let set = new Set(temperatures.map(temperatures => Math.ceil(temperatures)))
console.log('Кількість різних показів:', set.size);
// -------------------------------------------------------------------------------------------------

// Задача 10 Дано два списки прізвищ студентів, що відвідують гуртки з математики і історії.
// Підрахувати скільки студентів з гуртка з історії також відвідують гурток з математики. 
// Також підрахувати скільки всього студентів відвідують хоча б один гурток. 
console.log('Задача 10')
let mathStudentsList = ['Artem Fedorov','Igor Dash','Pavlo Sobol','Alex Totar','Ivan Petrov']
let historyStudentsList = ['Mariya Bobsley','Artem Fedorov','Igor Dash','Olga Terentiev','Ivan Petrov']

let mathStudentsSet = new Set(mathStudentsList)
let historyStudentsSet = new Set(historyStudentsList)
let commonStudents = 0
for (const student of historyStudentsSet) {
	if (mathStudentsSet.has(student))
	commonStudents++
}
console.log('Кількість студентів з гуртка з історії, що також відвідують гурток з математики:',commonStudents);
let allStudents = new Set([...mathStudentsSet, ...historyStudentsList])
console.log('Кількість студентів, що відвідують хоча б один гурток:',allStudents.size);
// ----------------------------------------------------------------------------------------------

// Задача 11. Користувач може змінювати колір фону, що вибирає користувач з використанням
// <input type="color">.
// Зберігати цей колір і відновлювати при наступному відкритті. Також зберігати і відображати кількість
// змін протягом одного сеансу.

function saveUserColor(){
	let userColor = document.getElementById('colorId').value
	localStorage.setItem('backgroundColor',userColor)
	body.style.backgroundColor = localStorage.getItem('backgroundColor')

	let counter = sessionStorage.getItem('backgroundChanged')||0
	counter++
	sessionStorage.setItem('backgroundChanged', counter)
	counter_Id.innerText = `Кількість змін = ${counter} `
}
window.onload = function(){
	if(localStorage.getItem('backgroundColor')){
		body.style.backgroundColor = localStorage.getItem('backgroundColor')
}
	button_Id.onclick = saveUserColor
}
// ------------------------------------------------------------------------------------------------


// Задача 12. Зберігати у пам’яті список справ, які користувачу треба виконати (зберігати у localStorage). 
// Періодично випадковим чином вибирати якусь з справ і виводити користувачу (з використанням confirm).
// Якщо користувач натискає на «Ок», то видаляти цю задачу
let toDoListArr = ["Виконати дз","Прибрати","Поїсти","Попрати речі"]
localStorage.setItem('toDoList', JSON.stringify(toDoListArr))

let toDoStart = setInterval(()=>{
	let tasks = JSON.parse(localStorage.getItem('toDoList'))
	let randomIndex =  Math.floor(Math.random()*tasks.length)
	let task = tasks[randomIndex]
	if(task){
		if(confirm(tasks[randomIndex])){
			tasks.splice(randomIndex, 1)
			localStorage.setItem('toDoList', JSON.stringify(tasks))
		}
		}
		else{
			localStorage.removeItem('toDoList')
			clearInterval(toDoStart)
		}
	},5000
	)


