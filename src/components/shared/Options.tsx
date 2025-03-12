import { Button } from "@mui/material"

import useAssessmentPageStyles from '../../styles/assessmentPageStyles'

type OptionsProps = {
	text: string,
	emoji: string,
	onClick: () => void,
}

const Options: React.FC<OptionsProps> = ({ text, emoji, onClick}) => {
	const classes = useAssessmentPageStyles()

	return (
		<Button 
			variant="outlined"
			className={classes.optionButton}
			onClick={onClick}
		>
			{emoji} {text}
		</Button>
	)
}

export default Options
