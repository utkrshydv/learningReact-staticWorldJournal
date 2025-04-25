import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./components/data"

function App() {


  const dataElement = data.map((entry) => {
    return(
      <Entry
       key={entry.key}
       entry={entry}
      />
    )
  }) 

  return (
    <>
     <Header />
    {dataElement}   
    </>
  )
}

export default App
