export const getRandomObject = <T>(arr: T[]): T => {
	const randomIndex = Math.floor(Math.random() * arr.length);
	return arr[randomIndex];
};

export const greetUserByTime = (): string => {
	const currentDate = new Date();
	const currentHour = currentDate.getHours();

	let greeting: string;

	if (currentHour >= 0 && currentHour < 6) {
		greeting = 'Доброй ночи';
	} else if (currentHour >= 6 && currentHour < 12) {
		greeting = 'Доброе утро';
	} else if (currentHour >= 12 && currentHour < 18) {
		greeting = 'Добрый день';
	} else {
		greeting = 'Добрый вечер';
	}

	return greeting;
};

export const getButtonText = (count: number): string => {
	const cases = [2, 0, 1, 1, 1, 2];
	const words = ['помещение', 'помещения', 'помещений'];

	let wordIndex;

	if (count % 100 > 4 && count % 100 < 20) {
		wordIndex = 2;
	} else {
		wordIndex = cases[Math.min(count % 10, 5)];
	}

	return `Забронировать ${count} ${words[wordIndex]}`;
};

export const validateEmail = (email: string): boolean => {
	const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
	return emailRegex.test(email);
};
