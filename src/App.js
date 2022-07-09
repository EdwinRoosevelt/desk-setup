import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AssemblePage from "./components/AssemblePage";
import HomePage from "./components/HomePage";
import SelectPage from "./components/SelectPage"
import Header from "./components/Header";
import FinishPage from "./components/FinishPage";
import Footer from "./components/Footer";

const originalDeskItemData = [
  {
    id: 1,
    itemName: "Monitor",
    description:
      "We as visual beings need to see the fruit of our labour and this enables you to do that.",
    isSelected: false,
    isAssembled: false,
  },
  {
    id: 2,
    itemName: "Keyboard",
    description:
      "Why wait till the end for contentment when you can achieve that by the sound of working. Type right away!",
    isSelected: false,
    isAssembled: false,
  },
  {
    id: 3,
    itemName: "Clock",
    description: "To make sure you get off of work on time",
    isSelected: false,
    isAssembled: false,
  },
  {
    id: 4,
    itemName: "Books",
    description:
      "A sense of accomplishment is better attained when you feel the pages and make notes using your own handwriting",
    isSelected: false,
    isAssembled: false,
  },
  {
    id: 5,
    itemName: "Plant",
    description:
      "Make sure you get some piece of nature even when you remain indoors ",
    isSelected: false,
    isAssembled: false,
  },
  {
    id: 6,
    itemName: "Pen Stand",
    description:
      "You need to take notes if your screen is busy running other stuff. How will you take notes when your battery runs out.",
    isSelected: false,
    isAssembled: false,
  },
  {
    id: 7,
    itemName: "Motivational Poster",
    description: "Boost your consistency with a dose of sentences everyday ",
    isSelected: false,
    isAssembled: false,
  },
  {
    id: 8,
    itemName: "Photos",
    description:
      "Stay in touch with your personal life and dreams every minute. Revel in memories even when you work",
    isSelected: false,
    isAssembled: false,
  },
]

function App() {
  const [deskItemsData, setDeskItemsData] = useState(originalDeskItemData)

  function toggleItemSelection (id) {
    console.log("trigered selection");
    const newDeskItemData = deskItemsData.map(deskItem => {
      if (id === deskItem.id) deskItem.isSelected = !deskItem.isSelected
      return deskItem }) 
    setDeskItemsData(newDeskItemData)
  }

  function toggleItemAssembly(id) {
    console.log("trigered assemble")
    const newDeskItemData = deskItemsData.map((deskItem) => {
      if (id === deskItem.id) {
        deskItem.isAssembled = !deskItem.isAssembled
        deskItem.isSelected = !deskItem.isAssembled
      }
      return deskItem;
    });
    setDeskItemsData(newDeskItemData);
  }

  return (
    <>
      <Router>
        <Header />
        <div className="container w-auto p-sm-5 py-2">
          <Routes>
            <Route
              exact
              path="/select"
              element={
                <SelectPage
                  deskItemsData={deskItemsData}
                  handleItemSelection={toggleItemSelection}
                />
              }
            />
            <Route
              path="/assemble"
              element={
                <AssemblePage
                  deskItemsData={deskItemsData}
                  handleItemAssembly={toggleItemAssembly}
                />
              }
            />
            <Route
              path="/finish"
              element={<FinishPage deskItemsData={deskItemsData} />}
            />
            <Route exact path="/" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
      <Footer/>
    </>

    // <div>Hi</div>
    // <HomePage />
  );
}

export default App;
