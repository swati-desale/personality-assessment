import { Button, ButtonProps } from '@mui/material';

interface PrimaryButtonProps extends ButtonProps {
	label: string,
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ label,  ...props }) => {
	return (
		<Button variant="outlined" className="common-button" {...props}>
			{label}
		</Button>
	)
}

export default PrimaryButton
