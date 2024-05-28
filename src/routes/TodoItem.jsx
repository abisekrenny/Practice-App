import React from 'react';
import { useParams } from 'react-router-dom';
import {todos as items} from "../data.json";

const TodoItem = () => {
    const {Slug} = useParams();
    const item = items.find((x) => x.Slug == Slug);
  return (
    <div>
        <h1>TodoItem</h1>
        <p>{item.id}</p>
        <p>{item.todo}</p>
        <p>{item.Slug}</p>
        </div>
  )
}

export default TodoItem