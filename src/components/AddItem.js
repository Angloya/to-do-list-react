import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import PropTypes from 'prop-types'

class AddItem extends React.Component {
  static propTypes = {
    addItem: PropTypes.func
  }
  ItemTitle = React.createRef()
  ItemText = React.createRef()

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addItem(this.ItemTitle.current.value, this.ItemText.current.value)
    e.currentTarget.reset()
  }
  render() {
    return (
      <Form inline onSubmit={this.handleSubmit} className="m-4">
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="title" className="mr-sm-2">Title</Label>
          <Input type="text" innerRef={this.ItemTitle} name="title" placeholder="add title" />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="text" className="mr-sm-2">Text</Label>
          <Input type="text" innerRef={this.ItemText} name="text" placeholder="add text" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default AddItem