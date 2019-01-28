import React, {PureComponent} from 'react'
import { ListGroupItem, ListGroupItemHeading, ListGroupItemText, Button, Container, Row, Col } from 'reactstrap'
import PropTypes from 'prop-types'

class Item extends PureComponent {
  static propTypes = {
    removeItem: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  };
  render () {
    const {
      id,
      name,
      text,
      removeItem
    } = this.props
    return (
      <ListGroupItem className="m-1">
        <Container>
          <Row>
            <Col sm="10">
              <ListGroupItemHeading>
                {name}
              </ListGroupItemHeading>
              <ListGroupItemText>
                {text} 
              </ListGroupItemText>
            </Col>
            <Col sm="2">
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

export default Item
