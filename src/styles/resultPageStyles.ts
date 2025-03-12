import { makeStyles } from '@mui/styles'

const useResultPageStyles = makeStyles({
  actionButtonsConatiner: {
    display: "flex",
    justifyContent: "space-between",
    padding: '20px 40px',
  },
  actionButtons: {
    borderRadius: '50px !important',
    "&:focus": {  
      outline: 'none',
    },
  }

})

export default useResultPageStyles