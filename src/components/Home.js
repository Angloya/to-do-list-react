import React, {PureComponent} from 'react';
import { ListGroup, Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import Item from './Item'

class Home extends PureComponent {
  static propTypes = {
    removeItem: PropTypes.func,
    items: PropTypes.array.isRequired,
    doneItem: PropTypes.func.isRequired,
    editItem: PropTypes.func.isRequired
  }
  render () {
    const {
      items,
      removeItem,
      doneItem,
      editItem
    } = this.props
    return (
    <div className="home">
      <Container>
          <Row>
            <Col sm="12" md={{ size: 8, offset: 2 }} className="text-center">
              <h2>Current items</h2>
              <ListGroup>
              {items.filter(p => p.isItemDone !== true).map((item, idx) => 
                <Item 
                  key={idx}
                  id={idx}
                  name={item.name}
                  text={item.text}
                  isItemDone={item.isItemDone}
                  removeItem={removeItem}
                  doneItem={doneItem}
                  editItem={editItem}
                />
              )}
              </ListGroup>
            </Col>
            </Row>
            <Row>
            <Col sm="12" md={{ size: 8, offset: 2 }} className="text-center">
              <h2>Done items</h2>
              <ListGroup>
              {items.filter(p => p.isItemDone === true).map((item, idx) => 
                <Item 
                  key={idx}
                  id={idx}
                  name={item.name}
                  text={item.text}
                  isItemDone={item.isItemDone}
                  removeItem={removeItem}
                  doneItem={doneItem}
                  editItem={editItem}
                />
              )}
              </ListGroup>
            </Col>
            </Row>
        </Container>
      </div>
    )
  }
}

export default Home
