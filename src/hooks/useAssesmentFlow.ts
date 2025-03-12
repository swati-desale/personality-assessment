import { useState, useEffect } from 'react'
import { useNavigate  } from 'react-router-dom'

import { fetchQuestions, Question } from '../services/questionsApi'
import { useAssessment } from '../context/AssessmentContext'

const useAssesmentFlow = () => {
  const navigate = useNavigate()
	const { saveAnswer } = useAssessment()
	
	const [questions, setQuestions] = useState<Question[]>([])
	const [currentIndex, setCurrentIndex] = useState(0)

	const currentQuestion = questions[currentIndex]

  useEffect(() => {
		fetchQuestions().then((questions) => {
			setQuestions(questions)
		})
  }, [])

	const handleOptionSelect = (selectedOption: string) => {
		const selectedTrait = currentQuestion.options.find((option) => option.text === selectedOption)?.trait || ""
		if(selectedTrait) saveAnswer({ question: currentQuestion.question, selectedOption, trait: selectedTrait })

		setTimeout(() => {
			if(currentIndex < questions.length - 1) {
				setCurrentIndex(currentIndex + 1)
			} else {
				navigate('/result')
			}
		}, 500)
	}

  return { questions, currentIndex, currentQuestion, handleOptionSelect }
}

export default useAssesmentFlow
