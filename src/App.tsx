import { RouterProvider } from "react-router-dom"
import { mainRoute } from "./router/mainRoute"
import {  store } from "./global/Store"
import { Provider } from "react-redux"
import {QueryClientProvider, QueryClient} from "@tanstack/react-query"

const App = () => {
  const client = new QueryClient()
  return (
    <div className="font-Poppins">
      <Provider store ={store}>
      <QueryClientProvider client={client}>
      <RouterProvider router={mainRoute}/>
      </QueryClientProvider>
      </Provider>
    </div>
  )
}

export default App