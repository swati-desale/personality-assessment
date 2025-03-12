import { Typography } from '@mui/material'

import { personalityTypes } from '../resources/personalityTypes'
import usePersonalityClassificationStyles from '../styles/components/personalityClassificationStyles'

type PersonalityClassificationProps = {
  dominantTrait: string
}

const PersonalityClassification: React.FC<PersonalityClassificationProps> = ({ dominantTrait }) => {
  const classes = usePersonalityClassificationStyles()

  return (
    <div className={classes.personalityCard}>
      <Typography className={classes.personalityTitle} >
        {personalityTypes[dominantTrait]?.title}
      </Typography>
			<Typography className={classes.personalityDesc} >
        {personalityTypes[dominantTrait]?.desc}
      </Typography>
    </div>
  )
}

export default PersonalityClassification

