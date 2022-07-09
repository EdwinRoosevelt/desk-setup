import React from 'react'
import { Droppable, Draggable } from "react-beautiful-dnd";

function DragDropContainer({ items, title, droppableId }) {

  const container = {
    display: "flex",
    flexDirection: "flex-column",
  };

  return (
    <div className="col-6 p-2">
      <h4>{title}</h4>
      <div style={container}>
        <Droppable droppableId={droppableId}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className={`p-3 flex-grow-1 ${
                snapshot.isDraggingOver ? "bg-warning" : ""
              }`}
              style={{ height: "300px", overflowY: "scroll" }}
            >
              {items.map((deskItem, index) => (
                <Draggable
                  draggableId={deskItem.id}
                  index={index}
                  key={deskItem.id}
                >
                  {(provided, snapshot) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <div
                        key={deskItem.id}
                        className={`card mb-2 ${
                          snapshot.isDragging ? "bg-primary" : ""
                        }`}
                      >
                        <div className="card-body">{deskItem.itemName}</div>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </div>
  );
}

export default DragDropContainer