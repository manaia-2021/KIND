import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Box, Grid, Toolbar, Button } from '@material-ui/core'
import CategoriesCards from './CategoriesCards'

import { getCategories, addNewUserActions } from '../apis/api'

const CategoriesPage = ({ user }) => {
  const [categories, setCategories] = useState([])
  const [checkedActions, setCheckedActions] = useState([])

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
    addNewUserActions(user.id, checkedActions)
    alert('actions added successfully')
    setCheckedActions([])
    // TODO redirect to users dashboard page
  }

  return (
    <>
      {/* <HeaderBar /> */}
      <Toolbar />
      <Box style={{ paddingTop: '15px' }}>

        <Box >
          <Grid container justifyContent='center' alignItems='flex-end' direction='row' style={{ minHeight: '50vh', border: '0px solid black' }} spacing={3}>
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
          <Button size='large' variant='contained' color='primary' onClick={handleButtonClick}>
            CONTINUE
          </Button>
        </Box>

      </Box>
    </>
  )
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(CategoriesPage)
