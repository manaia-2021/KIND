import { Box, Grid, Toolbar } from "@material-ui/core"
import React from "react"
import CategoriesCards from "./CategoriesCards"
import HeaderBar from './HeaderBar'
import { Button } from "@material-ui/core"

export default function CategoriesPage() {
  return (
    <>
      <HeaderBar />
      <Toolbar />
      <Box style={{ paddingTop: '15px' }}>

        <Box >
          <Grid container justifyContent='center' alignItems='flex-end' direction='row' style={{ minHeight: '50vh', border: '0px solid black' }} spacing={3}>
            <Grid item>
              <CategoriesCards />
            </Grid>
            <Grid item>
              <CategoriesCards />
            </Grid>
            <Grid item>
              <CategoriesCards />
            </Grid>
            <Grid item>
              <CategoriesCards />
            </Grid>
            <Grid item>
              <CategoriesCards />
            </Grid>
            <Grid item>
              <CategoriesCards />
            </Grid>
          </Grid>
        </Box>
        <Box display='flex' justifyContent='center' alignItems='flex-end' direction='column' style={{ paddingTop: '20px', minHeight: '2vw', border: '0px solid black' }}>
          <Button size='large' variant='contained' color='primary'>
            CONTINUE
          </Button>
        </Box>

      </Box>
    </>
  )
}