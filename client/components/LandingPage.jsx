import React from 'react'
import { Box, Button, Grid, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => {
  return {
    page: {
      background: '#e8edea',
      marginTop: '80px',
      height: '700px',
      border: '1px solid black'
    },
    button: {
      marginTop: '20px'
    }
  }
})

export default function LandingPage () {
  const classes = useStyles()
  return (
    <>
      <Box>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Box className={classes.page}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et magnis dis parturient montes nascetur ridiculus. Faucibus et molestie ac feugiat sed. Tellus at urna condimentum mattis pellentesque id nibh. Consequat ac felis donec et odio pellentesque. Dapibus ultrices in iaculis nunc sed augue. Rhoncus mattis rhoncus urna neque viverra justo nec. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Viverra aliquet eget sit amet tellus cras adipiscing. Tristique senectus et netus et.

Turpis nunc eget lorem dolor sed viverra ipsum. Elit pellentesque habitant morbi tristique senectus et netus et. Pellentesque id nibh tortor id aliquet lectus. Mauris sit amet massa vitae tortor condimentum lacinia quis. Diam donec adipiscing tristique risus nec. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Etiam erat velit scelerisque in dictum non consectetur. Id venenatis a condimentum vitae sapien pellentesque habitant. Magna sit amet purus gravida quis. Risus quis varius quam quisque. Sed sed risus pretium quam vulputate dignissim. Vel pharetra vel turpis nunc eget lorem dolor sed viverra. Non pulvinar neque laoreet suspendisse interdum. Vel fringilla est ullamcorper eget.

Et ligula ullamcorper malesuada proin libero nunc consequat. Tempus iaculis urna id volutpat lacus laoreet. Neque laoreet suspendisse interdum consectetur libero id faucibus. Pellentesque adipiscing commodo elit at imperdiet dui. Elit eget gravida cum sociis. Vitae tempus quam pellentesque nec nam. Faucibus turpis in eu mi bibendum neque. Felis eget nunc lobortis mattis. Id semper risus in hendrerit. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus.

Euismod nisi porta lorem mollis aliquam ut porttitor leo. Est ullamcorper eget nulla facilisi etiam dignissim diam. Id cursus metus aliquam eleifend mi. Nibh cras pulvinar mattis nunc sed blandit libero volutpat sed. Consequat mauris nunc congue nisi vitae suscipit tellus. Varius quam quisque id diam vel quam elementum pulvinar etiam. Eget magna fermentum iaculis eu non diam phasellus vestibulum. Lectus vestibulum mattis ullamcorper velit sed ullamcorper. Felis eget velit aliquet sagittis id consectetur purus ut. At ultrices mi tempus imperdiet nulla malesuada pellentesque. Et odio pellentesque diam volutpat commodo sed egestas egestas. Elit duis tristique sollicitudin nibh sit. Eget arcu dictum varius duis. Consequat semper viverra nam libero justo laoreet sit amet.
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Box className={classes.page}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et magnis dis parturient montes nascetur ridiculus. Faucibus et molestie ac feugiat sed. Tellus at urna condimentum mattis pellentesque id nibh. Consequat ac felis donec et odio pellentesque. Dapibus ultrices in iaculis nunc sed augue. Rhoncus mattis rhoncus urna neque viverra justo nec. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Viverra aliquet eget sit amet tellus cras adipiscing. Tristique senectus et netus et.

Turpis nunc eget lorem dolor sed viverra ipsum. Elit pellentesque habitant morbi tristique senectus et netus et. Pellentesque id nibh tortor id aliquet lectus. Mauris sit amet massa vitae tortor condimentum lacinia quis. Diam donec adipiscing tristique risus nec. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Etiam erat velit scelerisque in dictum non consectetur. Id venenatis a condimentum vitae sapien pellentesque habitant. Magna sit amet purus gravida quis. Risus quis varius quam quisque. Sed sed risus pretium quam vulputate dignissim. Vel pharetra vel turpis nunc eget lorem dolor sed viverra. Non pulvinar neque laoreet suspendisse interdum. Vel fringilla est ullamcorper eget.

Et ligula ullamcorper malesuada proin libero nunc consequat. Tempus iaculis urna id volutpat lacus laoreet. Neque laoreet suspendisse interdum consectetur libero id faucibus. Pellentesque adipiscing commodo elit at imperdiet dui. Elit eget gravida cum sociis. Vitae tempus quam pellentesque nec nam. Faucibus turpis in eu mi bibendum neque. Felis eget nunc lobortis mattis. Id semper risus in hendrerit. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus.

Euismod nisi porta lorem mollis aliquam ut porttitor leo. Est ullamcorper eget nulla facilisi etiam dignissim diam. Id cursus metus aliquam eleifend mi. Nibh cras pulvinar mattis nunc sed blandit libero volutpat sed. Consequat mauris nunc congue nisi vitae suscipit tellus. Varius quam quisque id diam vel quam elementum pulvinar etiam. Eget magna fermentum iaculis eu non diam phasellus vestibulum. Lectus vestibulum mattis ullamcorper velit sed ullamcorper. Felis eget velit aliquet sagittis id consectetur purus ut. At ultrices mi tempus imperdiet nulla malesuada pellentesque. Et odio pellentesque diam volutpat commodo sed egestas egestas. Elit duis tristique sollicitudin nibh sit. Eget arcu dictum varius duis. Consequat semper viverra nam libero justo laoreet sit amet.
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.button} display='flex' justifyContent='center'>
        <Button variant='contained' color='primary' href='#'>
          Start
        </Button>
      </Box>
    </>
  )
}
