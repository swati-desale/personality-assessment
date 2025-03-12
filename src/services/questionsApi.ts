import { assesmentQuestions } from '../resources/questionsMap'

export type Question = {
  question: string,
	options: { text: string, trait: string, emoji: string}[],
	category: string,
}

export const fetchQuestions = (): Promise<Question[]> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			return resolve(assesmentQuestions.questions)
		}, 100)
	})
}