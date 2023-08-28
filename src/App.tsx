import { RouterProvider } from "react-router-dom"
import { mainRoute } from "./router/mainRoute"

const App = () => {
  return (
    <div className="font-Poppins">
      <RouterProvider router={mainRoute}/>
    </div>
  )
}

export default App