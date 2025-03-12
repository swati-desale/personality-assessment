import { CircularProgress, Box, Typography } from "@mui/material"

import useAssessmentPageStyles from '../../styles/assessmentPageStyles'

type ProgressBarProps = {
	currentStep: number,
	totalStep: number
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalStep }) => {
	const classes = useAssessmentPageStyles()

	const progress = (currentStep / totalStep) * 100

	return (
		<Box className={classes.progressBar}>
			<CircularProgress variant="determinate" value={progress} />
			<Box className={classes.progress}>
				<Typography
					variant="caption"
				>{`${Math.round(progress)}%`}</Typography>
			</Box>
		</Box>
	)
}

export default ProgressBar
