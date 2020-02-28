import React, { useContext } from 'react';
import { MdAdd } from 'react-icons/md';
import { useDrop } from 'react-dnd';

import BoardContext from '../Board/context';

import Card from '../Card';

import { Container } from './styles';

export default function List({ data, index: listIndex }) {
  const { move } = useContext(BoardContext);

  const [, drop] = useDrop({
    accept: 'CARD',
    drop: (monitor) => {
      const itemIndex = monitor.index;
      const itemListIndex = monitor.listIndex;

      if (itemListIndex !== listIndex) {
        move(itemIndex, itemListIndex, listIndex);
      }
    }
  });

  return (
    <Container done={data.done} ref={drop}>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <button type="button">
            <MdAdd size={24} color="#eaeaea" />
          </button>
        )}
      </header>

      <ul>
        {data.cards.map((card, index) => (
          <Card key={card.id} index={index} listIndex={listIndex} data={card} />
        ))}
      </ul>
    </Container>
  );
}

// logic
// 1 - when pass to an empty space never have a card,
//  so will be the last
//
