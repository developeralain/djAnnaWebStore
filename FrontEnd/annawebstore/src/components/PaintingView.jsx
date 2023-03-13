// import React, { useState } from 'react'
// import {
//   Button,
//   Form,
//   FormGroup,
//   Label,
//   Input,
//   Modal,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
// } from 'reactstrap'

// import {
//   Button,
//   TextField,
//   Typography,
//   Modal,
//   Pagination,
// } from '@material-ui/core'

// function PaintingView({ originalItem }) {
//   const [modal, setModal] = useState(false)
//   const toggle = () => setModal(!modal)

//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [confirmPassword, setConfirmPassword] = useState('')

//   const handleEmailChange = (event) => setEmail(event.target.value)
//   const handlePasswordChange = (event) => setPassword(event.target.value)
//   const handleConfirmPasswordChange = (event) =>
//     setConfirmPassword(event.target.value)

//   const handleSubmit = (event) => {
//     event.preventDefault()
//     // handle user registration logic
//     console.log('User registration submitted:', {
//       email,
//       password,
//       confirmPassword,
//     })
//   }
//   return (
//     <div>
//       <button className="btn-contact" onClick={toggle}>
//         Register
//       </button>
//       <Modal isOpen={modal} toggle={toggle}>
//         <ModalHeader toggle={toggle}>User Registration</ModalHeader>
//         <ModalBody>
//           <Form onSubmit={handleSubmit}>
//             <FormGroup>
//               <Label for="email">Email</Label>
//               <Input
//                 type="email"
//                 name="email"
//                 id="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={handleEmailChange}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="password">Password</Label>
//               <Input
//                 type="password"
//                 name="password"
//                 id="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={handlePasswordChange}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="confirmPassword">Confirm Password</Label>
//               <Input
//                 type="password"
//                 name="confirmPassword"
//                 id="confirmPassword"
//                 placeholder="Confirm Password"
//                 value={confirmPassword}
//                 onChange={handleConfirmPasswordChange}
//               />
//             </FormGroup>
//           </Form>
//         </ModalBody>
//         <ModalFooter>
//           <Button color="primary" onClick={handleSubmit}>
//             Register
//           </Button>
//           <Button color="secondary" onClick={toggle}>
//             Cancel
//           </Button>
//         </ModalFooter>
//       </Modal>
//     </div>
//   )
// }
// export default PaintingView

import * as React from 'react'
import PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Typography from '@mui/material/Typography'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}))

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 9,
            top: 9,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  )
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
}

export default function CustomizedDialogs({ originalItem }) {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }))

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <CssBaseline />
        <Container
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '0.7rem',
            paddingBottom: '0',
          }}
        >
          <img
            src={originalItem.image}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              width: 'auto',
              height: 'auto',
              marginTop: '2rem',
              marginBottom: '0.01rem',
            }}
            alt={originalItem.image}
          />
        </Container>
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          {' '}
          {originalItem.title}
        </BootstrapDialogTitle>

        <div>
          <Stack direction="row" spacing={2}>
            <Item>Item 1</Item>
            <Item>Item 2</Item>
            <Item>Item 3</Item>
          </Stack>
        </div>

        <DialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  )
}
