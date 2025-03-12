import { makeStyles } from '@mui/styles'

const useHomePageStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height:'70vh',
    textAlign: "center",
  },
  profileIcon: {
    color: '#5F3CFF',
    fontSize: '100px',
  },
  header: {
    padding: 20,
    background: 'linear-gradient(to right, blue, purple, pink)',
    color: 'transparent',
    backgroundClip: 'text',
    fontWeight: 'bold',
  }
})

export default useHomePageStyles