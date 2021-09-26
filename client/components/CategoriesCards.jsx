import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
// import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'

import { getCategoryActions } from '../apis/api'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ListItems from './ListItems'
import { Backdrop, Button, Fade, Modal } from '@material-ui/core'

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
  }
}))

export default function CategoriesCards (props) {
  const classes = useStyles()
  const [expanded, setExpanded] = useState(false)

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

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card className={classes.root}>
      <CardHeader

        title={props.title}
        subheader="category description"
      />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Info about category
        </Typography>
      </CardContent>
      <CardActions disableSpacing>

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
        <Button variant='outlined' onClick={handleOpen}>
          OPEN MODEL
        </Button>
        <Modal
          className={classes.modal}
          open={open}
          onClose={handleClose}
        >
          <ListItems/>
        </Modal>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <ListItems handleToggle={props.handleToggle} checked={props.checkedActions} actions={actions} />
        </CardContent>
      </Collapse>
    </Card>
  )
}
