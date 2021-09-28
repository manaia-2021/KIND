import React, { useEffect, useState } from 'react'
import { red } from '@material-ui/core/colors'
import { getCategoryActions } from '../apis/api'
import ListItems from './ListItems'
import { Button, Modal, Box, Typography, CardContent, CardActions, CardHeader, Card, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: red[500]
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  boxModal: {
    maxHeight: '500px',
    overflow: 'scroll',
    overflowX: 'hidden',
    '&::-webkit-scrollbar-track': {
      webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.3)',
      backgroundColor: '#F5F5F5'
    },
    '&::-webkit-scrollbar': {
      width: '5px',
      backgroundColor: '#F5F5F5'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#555',
      borderRadius: '10px',
      border: '2px solid #555555'
    }
  }
}))

export default function CategoriesCards (props) {
  const classes = useStyles()

  const [actions, setActions] = useState([])

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const [open, setOpen] = useState(false)

  useEffect(() => {
    getCategoryActions(props.id)
      .then(actions => {
        setActions(actions)
        return null
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <Card className={classes.root}>
      <CardHeader
        title={props.title}
        data-testid="subheader"
        subheader="category description"
      />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Info about category
        </Typography>
      </CardContent>
      <CardActions disableSpacing>

        <Button variant='outlined' onClick={handleOpen}>
          SEE ACTIONS
        </Button>
        <Modal
          className={classes.modal}
          open={open}
          onClose={handleClose}
        >
          <Box className={classes.boxModal} data-testid="button">
            <ListItems handleToggle={props.handleToggle} checked={props.checkedActions} actions={actions} />
          </Box>
        </Modal>
      </CardActions>
    </Card>
  )
}
