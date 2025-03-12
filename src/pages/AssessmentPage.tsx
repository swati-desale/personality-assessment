import { Card, CircularProgress, Box } from '@mui/material'

import ProgressBar from '../components/shared/ProgressBar'
import QuestionComponent from '../components/shared/Question'
import useAssesmentFlow from '../hooks/useAssesmentFlow'
import useAssessmentPageStyles from '../styles/assessmentPageStyles'

const AssessmentPage: React.FC = () => {
	const classes = useAssessmentPageStyles()
	const { questions, currentIndex, currentQuestion, handleOptionSelect } = useAssesmentFlow()
	
	if (questions.length === 0) return <CircularProgress />

	return (
		<Card sx={{ minWidth: 275 }}>
			<Box className={classes.root}>
				<ProgressBar currentStep={currentIndex} totalStep={questions.length} />
				<QuestionComponent
					question={currentQuestion.question}
					options={currentQuestion.options}
					onSelect={handleOptionSelect}
				/>
			</Box>
		</Card>   
	)
}

export default AssessmentPage
