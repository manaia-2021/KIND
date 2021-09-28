import React, { useEffect, useState } from 'react'
import { red } from '@material-ui/core/colors'
import { getCategoryActions } from '../apis/api'
import ListItems from './ListItems'
import { Button, Modal, Box, CardContent, CardActions, CardHeader, Card, makeStyles, Typography } from '@material-ui/core'
import CardMedia from '@material-ui/core/CardMedia'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 175
  },
  media: {
    height: '100%',
    width: '100%',
    paddingTop: '100%' // 1:1
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
    <Card className={classes.root} >
      <CardMedia
        className={classes.media}
        image={props.icon}
        title={props.title}
      />
      <CardHeader
        flexwrap='wrap'
        title={props.title}
      />
      <CardContent>
        <Typography>
          {props.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>

        <Button variant='outlined' onClick={handleOpen}>
          Select Actions
        </Button>
        <Modal
          className={classes.modal}
          open={open}
          onClose={handleClose}
        >
          <Box className={classes.boxModal}>
            <ListItems handleToggle={props.handleToggle} checked={props.checkedActions} actions={actions} />
          </Box>
        </Modal>
      </CardActions>
    </Card>
  )
}
