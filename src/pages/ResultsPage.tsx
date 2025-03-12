import { useEffect, useState } from 'react'
import { useNavigate  } from 'react-router-dom'
import { Box, Card } from '@mui/material'

import { useAssessment } from '../context/AssessmentContext'
import ResultChart from '../components/ResultChart'
import PersonalityClassification from '../components/PersonalityClassification'
import PrimaryButton from '../components/shared/PrimaryButton'
import { labels } from '../utils/constants'
import useResultPageStyles from '../styles/resultPageStyles'

const ResultsPage: React.FC = () => {
	const { answers } = useAssessment()
	const navigate = useNavigate()
	const classes = useResultPageStyles()

	const [traitScores, setTraitScores] = useState<Record<string, number>>({})
	const [dominantTrait, setDominantTrait] = useState<string>("")
	
	useEffect(() => {
		const scores: Record<string, number> = {}
		answers.forEach((answer) => {
			scores[answer.trait] = (scores[answer.trait] || 0) + 5
		})

		setTraitScores(scores)

		const highestTrait = Object.keys(scores)?.reduce((maxTrait, trait) => scores[trait] > scores[maxTrait] ? trait : maxTrait, Object.keys(scores)[0])
		setDominantTrait(highestTrait)

	},[answers])
	
	return (
		<Card>
			<Box p={4}>
			{
				dominantTrait && (
					<>
						<Box mb={3}>
							<ResultChart traitScores={traitScores} />
						</Box>
						<PersonalityClassification dominantTrait={dominantTrait} />
					</>
				)
			}
			<div className={classes.actionButtonsConatiner}>
				{/* TODO */}
				<PrimaryButton
					className={classes.actionButtons}
					label={labels.shareResultLabel}
				/>
				<PrimaryButton
					className={classes.actionButtons} 
					label={labels.retakeTestLabel}
					onClick={() => navigate('/')}
				/>
			</div>
		</Box>
		</Card>
	)
}

export default ResultsPage
