export const weekDayNames = [
	'Воскр.',
	'Понед.',
	'Вторн.',
	'Среда.',
	'Четве.',
	'Пятни.',
	'Суббо.',
];

export const monthNames = [
	'Янв',
	'Фев',
	'Мар',
	'Апр',
	'Май',
	'Июн',
	'Июл',
	'Авг',
	'Сен',
	'Окт',
	'Ноя',
	'Дек',
];

export const getDate = function (dateUnix, timezone) {
	const date = new Date((dateUnix + timezone) * 1000);
	const weekDayName = weekDayNames[date.getUTCDay()];
	const monthName = monthNames[date.getUTCMonth()];

	return `${weekDayName} ${date.getUTCDate()}, ${monthName}`;
};

export const getTime = function (timeUnix, timezone) {
	const date = new Date((timeUnix + timezone) * 1000);
	const hours = date.getUTCHours();
	const minutes = date.getUTCMinutes();

	return `${hours}:${minutes}`;
};

export const getHours = function (timeUnix, timezone) {
	const date = new Date((timeUnix + timezone) * 1000);
	const hours = date.getUTCHours();
	const minutes = date.getUTCMinutes();

	return `${hours}`;
};

export const mps_to_kmh = (mps) => {
	const mph = mps * 3600;

	return mph / 1000;
};
