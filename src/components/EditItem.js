import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import PropTypes from 'prop-types'

class AddItem extends React.Component {
  static propTypes = {
    editItem: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.name,
      text: this.props.text
  }
    this.handleInputChange = this.handleInputChange.bind(this)
  }
  ItemTitle = React.createRef()
  ItemText = React.createRef()

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.isItemChange(e)
    this.props.editItem(this.ItemTitle.current.value, this.ItemText.current.value, this.props.id)
    e.currentTarget.reset()
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    })
  }
  render() {
    const {
      title,
      text
    } = this.state
    return (
      <Form inline onSubmit={this.handleSubmit} className="m-4">
        <FormGroup className="mb-2 m-1 mr-sm-2 mb-sm-0">
          <Label for="title" className="mr-sm-2">Title</Label>
          <Input type="text" onChange={this.handleInputChange} value={title} innerRef={this.ItemTitle} name="title" placeholder="Add title" />
        </FormGroup>
        <FormGroup className="mb-2 m-1 mr-sm-2 mb-sm-0">
          <Label for="text" className="mr-sm-2">Text</Label>
          <Input type="text" onChange={this.handleInputChange} value={text} innerRef={this.ItemText} name="text" placeholder="Add text" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default AddItem