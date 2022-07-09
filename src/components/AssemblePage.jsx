import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useEffect } from 'react';
import DragDropContainer from './DragDropContainer';

function AssemblePage({ deskItemsData, handleItemAssembly }) {
  const [selectedItems, setSelectedItems] = useState([]);
  const [assembledItems, setAssembledItmes] = useState([]);

  useEffect(() => {
    setSelectedItems(
      deskItemsData.filter(
        (deskItem) => deskItem.isSelected && !deskItem.isAssembled
      )
    );
  },[])

  const idToList = {
    selectedItemsCol: selectedItems,
    assembledItemsCol: assembledItems,
  };

  function dragEndHandler({ source, destination }) {
    // dropped outside the list
    if (!destination) {
      return;
    }

    // dropped on the SAME list
    if (source.droppableId === destination.droppableId) {
      const newList = Array.from(idToList[source.droppableId]);
      const [removed] = newList.splice(source.index, 1);
      newList.splice(destination.index, 0, removed);

      if (source.droppableId === "selectedItemsCol") 
        setSelectedItems(newList);
      else 
        setAssembledItmes(newList);

    // dropped on the OTHER list
    } else {
      const newSelectedList = Array.from(selectedItems);
      const newAssembledList = Array.from(assembledItems);

      if (source.droppableId === "selectedItemsCol") {
        handleItemAssembly(selectedItems[source.index].id);
        const [removed] = newSelectedList.splice(source.index, 1);
        newAssembledList.splice(destination.index, 0, removed);
      } else {
        handleItemAssembly(assembledItems[source.index].id);
        const [removed] = newAssembledList.splice(source.index, 1);
        newSelectedList.splice(destination.index, 0, removed);
      }

      
      setSelectedItems(newSelectedList)
      setAssembledItmes(newAssembledList);
    }
  }

  return (
    <div className="container shadow p-sm-5 p-2">
      <h1 className=" display-5 mb-5">Assemble Items for the desk</h1>
      <DragDropContext onDragEnd={dragEndHandler}>
        <div className="row">
          <DragDropContainer
            items={selectedItems}
            droppableId="selectedItemsCol"
            title="Selected Items"
          />
          <DragDropContainer
            items={assembledItems}
            droppableId="assembledItemsCol"
            title="Assembled Items"
          />
        </div>
      </DragDropContext>

      <Link to="/finish">
        <div className="d-grid gap-2 mt-5">
          <button className="btn btn-primary" type="button">
            Finish
          </button>
        </div>
      </Link>
    </div>
  );
}

export default AssemblePage;