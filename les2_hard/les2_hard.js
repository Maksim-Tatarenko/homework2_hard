var week = [
"Понедельник",
"Вторник",
"Среда",
"Четверг",
"Пятница",
"Суббота",
"Воскресенье"
];

for (let i = 0; i < week.length; i++) {
	if (i <4) {
		document.write(week[i] + "<br/>");
	} else if (i == 4) {
		document.write(week[i].italics() + "<br/>")
	} else if (i >= 5) {
		document.write(week[i].bold() + "<br/>");
	} 
}
	
