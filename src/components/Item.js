import React, {PureComponent} from 'react'
import { ListGroupItem, ListGroupItemHeading, ListGroupItemText, Button, Container, Row, Col } from 'reactstrap'
import PropTypes from 'prop-types'
import EditItem from './EditItem'

class Item extends PureComponent {
  static propTypes = {
    removeItem: PropTypes.func.isRequired,
    doneItem: PropTypes.func.isRequired,
    editItem: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }
  state = {
    isItemChange: false
  }
  isItemChange = () => {
    this.setState( prevState => {
      return {
        isItemChange: !prevState.isItemChange
      }
    })
  }
  render () {
    const {
      id,
      name,
      text,
      removeItem,
      doneItem, 
      isItemDone,
      editItem
    } = this.props
    if (this.state.isItemChange) {
      return (
        <EditItem editItem={editItem} isItemChange={this.isItemChange} id={id} name={name} text={text}/>
      )
    } else {
      return (
        <ListGroupItem className="m-2" color={isItemDone? "success" : ""}>
          <Container className="p-0">
            <Row>
             <Col sm="1.5" className="m-1">
                <Button outline onClick={() => doneItem(id)}>
                <span aria-hidden>✔</span>
                </Button>
              </Col>
              <Col sm="1.5" className="m-1">
                <Button outline onClick={this.isItemChange}>
                <span aria-hidden>edit</span>
                </Button>
              </Col>
              <Col sm="9" xs="7">
                <ListGroupItemHeading>
                  {name}
                </ListGroupItemHeading>
                <ListGroupItemText>
                  {text} 
                </ListGroupItemText>
              </Col>
              <Col sm="0.5" className="p-0">
                <Button close aria-label="Cancel" onClick={() => removeItem(id)}>
                <span aria-hidden>&ndash;</span>
                </Button>
              </Col>
            </Row>
          </Container>
        </ListGroupItem>
      )
    }
  }
}

export default Item
