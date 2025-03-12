import { createContext, useContext, useState, ReactNode } from 'react';

type Answer = {
	question: string,
	selectedOption: string,
	trait: string,
}

type AssessmentContextType = {
	answers: Answer[],
	traitScores: { [key: string]: number },
	saveAnswer: (answer: Answer) => void,
}

const AssessmentContext = createContext<AssessmentContextType | undefined>(undefined)

export const AssessmentProvider = ({ children }: { children: ReactNode }) => {
	const [answers, setAnswers] = useState<Answer[]>([])
	const [traitScores, setTraitScores] = useState<{ [key: string]: number }>({})

	const saveAnswer = (answer: Answer) => {
		setAnswers((prevAnswers) => [...prevAnswers, answer])

		setTraitScores((prevTraitScores) => {
			const score = { ...prevTraitScores }
			score[answer.trait] = (score[answer.trait] || 0 ) + 1
			return score
		})
	}

	return (
		<AssessmentContext.Provider value={{ answers, traitScores, saveAnswer }}>
			{children}
		</AssessmentContext.Provider>
	)
}

export const useAssessment = () => {
	const context = useContext(AssessmentContext)
	if (!context) {
		throw new Error('useAssessment must be used within an AssessmentProvider')
	}
	return context
}
