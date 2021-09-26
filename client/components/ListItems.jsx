import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'

const useStyles = (theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
})

class ListItems extends React.Component {
  render () {
    const { handleToggle, checked, actions, classes } = this.props

    return (
      <List dense className={classes.root}>
        {actions.map((action) => {
          const labelId = `checkbox-list-secondary-label-${action.id}`
          return (
            <ListItem key={`action ${action.id}`} button>
              <ListItemText id={labelId} primary={action.description} />
              <ListItemSecondaryAction>
                <Checkbox
                  edge="end"
                  onChange={handleToggle(action.id)}
                  checked={checked.includes(action.id)}
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemSecondaryAction>
            </ListItem>
          )
        })}
      </List>
    )
  }
}

// const ListItems = ({ handleToggle, checked, actions }) => {
//   const classes = useStyles()

//   return (
//     <List dense className={classes.root}>
//       {actions.map((action) => {
//         const labelId = `checkbox-list-secondary-label-${action.id}`
//         return (
//           <ListItem key={`action ${action.id}`} button>
//             <ListItemText id={labelId} primary={action.description} />
//             <ListItemSecondaryAction>
//               <Checkbox
//                 edge="end"
//                 onChange={handleToggle(action.id)}
//                 checked={checked.includes(action.id)}
//                 inputProps={{ 'aria-labelledby': labelId }}
//               />
//             </ListItemSecondaryAction>
//           </ListItem>
//         )
//       })}
//     </List>
//   )
// }

export default withStyles(useStyles)(ListItems)
