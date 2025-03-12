import { Button, ButtonProps } from "@mui/material"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

import '../assets/css/components/StartAssignmentButton.css'

interface StartAssignmentButtonProps extends ButtonProps {
	label: string,
	onClick: () => void
}

const StartAssignmentButton: React.FC<StartAssignmentButtonProps> = ({ label, onClick, ...props }) => {
	return (
		<Button
			className="start-assignment-button"
			variant="outlined"
			endIcon={<ArrowForwardIcon />}
			onClick={onClick}
			{...props}
		>
			{label}
		</Button>
	)
}

export default StartAssignmentButton
