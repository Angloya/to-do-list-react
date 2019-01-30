import React, {PureComponent} from 'react';
import { ListGroup, Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import Item from './Item'
import AddItem from './AddItem'

class ToDoList extends PureComponent {
  static propTypes = {
    removeItem: PropTypes.func,
    items: PropTypes.array.isRequired,
    addItem: PropTypes.func.isRequired,
    doneItem: PropTypes.func.isRequired,
    editItem: PropTypes.func.isRequired,
  }
  render () {
    const {
      items,
      addItem,
      removeItem,
      doneItem,
      editItem
    } = this.props
    return (
      <Container>
        <Row>
          <Col sm="12" xs={{ size: 10, offset: 1 }} md={{ size: 8, offset: 2 }}>
           <AddItem addItem={addItem}/>
          </Col>
        </Row>
        <Row>
          <Col sm="12" md={{ size: 8, offset: 2 }}>
            <ListGroup>
            {items.map((item, idx) => 
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
    )
  }
};

export default ToDoList;
