import { makeStyles } from '@mui/styles'

const useAssessmentPageStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height:'70vh',
    textAlign: "center",
    padding: '20px'
  },
  questionCard: {
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    opacity: '0.9',
    transition: "opacity 0.3s ease-in-out",
    padding: '20px',
  },
  progressBar: {
    position: 'relative',
    display: 'inline-flex',
    marginBottom: '20px',
  },
  progress: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',  
    color: '#1976d2'
  },
  buttonConatiner: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginTop: '20px',
  },
  optionButton: {
    testAlign: 'left',
    justifyContent: 'flex-start',
    marginBottom: '8px',
    padding: '12px 16px',
    fontSize: '16px',
    width: '100%',
    "&:hover": {
      backgroundColor: '#5F3CFF',
      transform: 'scale(1.01)',
      transition: '0.2s ease-in-out',
      color: 'black',
    },
    "&:focus": {  
      outline: 'none',
    },
  }
})

export default useAssessmentPageStyles