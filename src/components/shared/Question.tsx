import { Box, Typography } from "@mui/material"

import Options from './Options'
import useAssessmentPageStyles from '../../styles/assessmentPageStyles'

type Option = {
	text: string,
	trait: string,
	emoji: string,
}

type QuestionProps = {
	question: string,
	options: Option[],
	onSelect: (selectedOption: string) => void,
}

const Question: React.FC<QuestionProps> = ({ question, options, onSelect }) => {
	const classes = useAssessmentPageStyles()

	return (
		<Box className={classes.questionCard}>
			<Typography variant="h5" >{question}</Typography>
			<div className={classes.buttonConatiner}>
				{
					options.map((option: Option, index: number) => (
						<Options
							key={index}
							text={option.text}
							emoji={option.emoji}
							onClick={() => onSelect(option.text)}
						/>
					))
				}
			</div>
		</Box>
	)
}

export default Question