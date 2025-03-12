import { makeStyles } from '@mui/styles'

const usePersonalityClassificationStyles = makeStyles({
  personalityCard: {
    padding: '16px',
    borderRadius: '16px',
    background: 'linear-gradient(135deg, #6A85B6, #E95E77)',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    color: '#FFFFFF'
  },
  personalityTitle: {
    fontSize: '28px !important',
    fontWeight: 'bold !important',
    marginBottom: '8px !important'
  },
  personalityDesc: {
    fontSize: '16px !important'
  }
})

export default usePersonalityClassificationStyles