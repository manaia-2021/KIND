import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Button, Grid, makeStyles, Typography } from '@material-ui/core'
import { teal } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => {
  return {
    page: {
      background: '#ffffff',
      marginTop: '80px',
      height: '700px'

    },
    button: {
      marginTop: '20px'
    },
    buttonColor: {
      // backgroundColor: teal[200]
    }
  }
})

export default function LandingPage () {
  const classes = useStyles()
  return (
  // <>
  //   {/* <Box display='flex' pt={3}>
  //     <Box className={classes.page} px={'25%'}>
  //       <Typography component="div">
  //         <Box textAlign="center" fontSize="h3.fontSize" py={3}>
  //             Take Action Against Climate Change
  //         </Box>
  //         <Box textAlign="left" m={1} pb={3}>
  //             Climate change is affecting every country on every continent. It is disrupting national economies and affecting lives. Weather patterns are changing, sea levels are rising, and weather related events are becoming more extreme.
  //         </Box>
  //         <Box textAlign="left" m={1}>
  //             Saving lives and livelihoods requires urgent action and here at KIND we want to enable you to make the right choices and to have fun while doing it.
  //         </Box>
  //         <Box textAlign="center" fontSize="h4.fontSize" py={3}>
  //             How does it work?
  //         </Box>
  //         <Box textAlign="left" m={1}>
  //             Our philosophy is that lots of people making small changes can make a big difference on climate change. Getting started is really simple:
  //         </Box>

    //         {/* Cards */}
    //         <Box py={5} px={5}>
    //           <Grid container spacing={6} justify="center">
    //             <Grid item md={4} style={{ display: 'flex' }}>
    //               <Card sx={{ minWidth: 275 }} >
    //                 <CardContent display='flex' >
    //                   <Typography variant="h5" component="div" >
    //                     1. Select
    //                   </Typography>
    //                   <Typography variant="body2">
    //                     Choose from the list of high-impact, everyday actions to help reduce your carbon footprint.
    //                   </Typography>
    //                 </CardContent>
    //               </Card>
    //             </Grid>
    //             <Grid item md={4} style={{ display: 'flex' }}>
    //               <Card sx={{ minWidth: 275 }}>
    //                 <CardContent>
    //                   <Typography variant="h5" component="div">
    //                     2. Take Action
    //                   </Typography>
    //                   <Typography variant="body2">
    //                     You’ll be awarded points for each action you complete. Points vary based on the action’s impact on climate change.
    //                   </Typography>
    //                 </CardContent>
    //               </Card>
    //             </Grid>
    //             <Grid item md={4} style={{ display: 'flex' }}>
    //               <Card sx={{ minWidth: 275 }}>
    //                 <CardContent>
    //                   <Typography variant="h5" component="div">
    //                     3. Celebrate
    //                   </Typography>
    //                   <Typography variant="body2">
    //                     Compete with friends and family on the leaderboard.
    //                   </Typography>
    //                 </CardContent>
    //               </Card>
    //             </Grid>
    //           </Grid>
    //         </Box>
    //       </Typography>
    //     </Box>
    //   </Box>
    //   <Box className={classes.button} display='flex' justifyContent='center'>
    //     <Button component={Link} variant='contained' to='/categories' className={classes.buttonColor}>
    //       Start
    //     </Button>
    //   </Box> */}
    // </>
    <div>landing</div>
  )
}
