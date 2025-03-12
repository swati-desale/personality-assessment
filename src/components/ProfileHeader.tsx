import React from 'react'
import CircleIcon from '@mui/icons-material/Circle'
import Typography from '@mui/material/Typography'

import useHomePageStyles from '../styles/homePageStyles'
import { labels } from '../utils/constants'

const ProfileHeader: React.FC = () => {
	const classes = useHomePageStyles()

	return (
		<>
			<CircleIcon className={classes.profileIcon}/>
			<Typography variant="h5" className={classes.header}>
				{labels.profileHeader}
			</Typography>
		</>
	)
}

export default ProfileHeader
