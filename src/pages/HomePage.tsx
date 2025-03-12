import { useNavigate  } from 'react-router-dom'
import { Box, Card, CardContent } from '@mui/material'

import ProfileHeader from '../components/ProfileHeader'
import StartAssignmentButton from '../components/StartAssignmentButton'
import { labels } from '../utils/constants'
import useHomePageStyles from '../styles/homePageStyles'

const HomePage: React.FC = () => {
	const navigate = useNavigate()
	const classes = useHomePageStyles()

	return (
		<Card sx={{ minWidth: 275 }}>
			<CardContent>
				<Box className={classes.root}>
					<ProfileHeader />
					<StartAssignmentButton
						label={labels.startButtonLabel}
						onClick={() => navigate('/assesment')}
					/>				
				</Box>	
			</CardContent>
		</Card>   
	)
}

export default HomePage
