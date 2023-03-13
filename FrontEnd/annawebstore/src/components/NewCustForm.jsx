import React from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import { useState, useEffect } from 'react'
import axios from 'axios'

import { API_URL_NEW_CUSTOMER } from '../constants'

const NewCustForm = ({ items, handleOpenModal, handleCloseModal }) => {
    const [customer, setCustomer] = useState(
        {
            name: '',
            email: '',
            phone_number: '',
            address: '',
            city: '',
            state: '',
            zip_code: '',
            country: '',
        }
    )


  componentDidMount() {
    if (this.props.student) {
      const { pk, name, document, email, phone } = this.props.student
      this.setState({ pk, name, document, email, phone })
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  createCustomer = (e) => {
    e.preventDefault()
    axios.post(API_URL, this.state).then(() => {
      this.props.resetState()
      this.props.toggle()
    })
  }

  editCustomer = (e) => {
    e.preventDefault()
    axios.put(API_URL + this.state.pk, this.state).then(() => {
      this.props.resetState()
      this.props.toggle()
    })
  }

  defaultIfEmpty = (value) => {
    return value === '' ? '' : value
  }
  return (<Form
        onSubmit={this.props.student ? this.editStudent : this.createStudent}
      >
        <FormGroup>
          <Label for="name">Name:</Label>
          <Input
            type="text"
            name="name"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.name)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email:</Label>
          <Input
            type="email"
            name="email"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.email)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="document">Document:</Label>
          <Input
            type="text"
            name="document"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.document)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="phone">Phone:</Label>
          <Input
            type="text"
            name="phone"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.phone)}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>)}
      export default NewCustForm

