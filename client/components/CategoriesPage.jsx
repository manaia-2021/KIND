import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Box, Grid, Toolbar, Button, Typography } from '@material-ui/core'
import CategoriesCards from './CategoriesCards'
import { Alert, AlertTitle } from '@material-ui/lab'

import { getCategories, addNewUserActions } from '../apis/api'
import { teal } from '@material-ui/core/colors'

const CategoriesPage = ({ user }) => {
  const [categories, setCategories] = useState([])
  const [checkedActions, setCheckedActions] = useState([])
  const [showAlert, setShowAlert] = useState(false)

  useEffect(() => {
    getCategories()
      .then(categories => {
        setCategories(categories)
        return null
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const handleToggle = (value) => () => {
    const currentIndex = checkedActions.indexOf(value)
    const newChecked = [...checkedActions]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    setCheckedActions(newChecked)
  }

  const handleButtonClick = () => {
    if (checkedActions.length > 0) {
      addNewUserActions(user.id, checkedActions)
      setShowAlert(true)
      setCheckedActions([])
    }
  }

  return (
    <>
      <Toolbar />
      <Box pt={10}>
        <Box textAlign="center" fontSize="h4.fontSize" >
          <Typography variant="h4" component="div">
        Which categories would you like to select from?
          </Typography>
        </Box>
        <Box style={{ paddingTop: '50px' }}>

          <Grid container justifyContent='center' alignItems='center' direction='row' style={{ minHeight: '50vh', border: '0px solid black' }} spacing={3}>
            {categories.map(category => {
              return (
                <Grid item key={category.id}>
                  <CategoriesCards {...category} checkedActions={checkedActions} handleToggle={handleToggle} />
                </Grid>
              )
            })}
          </Grid>
        </Box>
        <Box display='flex' justifyContent='center' alignItems='flex-end' direction='column' style={{ paddingTop: '20px', minHeight: '2vw', border: '0px solid black' }}>
          { (checkedActions.length > 0) && (<Button size='large' variant='contained' style={{ backgroundColor: teal[400], color: '#FFFFFF' }} onClick={handleButtonClick}>
            Done
          </Button>)}
        </Box>
        <Box display='flex' justifyContent='center' alignItems='flex-end' direction='column' style={{ paddingTop: '20px', minHeight: '2vw' }}>
          {showAlert && (
            <Box>
              <Alert severity="success">
                <AlertTitle>Success</AlertTitle>
                  Actions have been added! - <strong><a href="/dashboard">View Dashboard</a></strong>
              </Alert>
            </Box>
          )}
        </Box>
      </Box>
    </>
  )
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(CategoriesPage)
