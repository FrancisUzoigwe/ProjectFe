import { RouterProvider } from "react-router-dom";
import { mainRoute } from "./router/mainRoute";
import { Store } from "./global/Store";
import { Provider } from "react-redux";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const App = () => {
  const client = new QueryClient();
  const persistor = persistStore(Store);
  return (
    <div className="font-Poppins">
      <Provider store={Store}>
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={client}>
            <RouterProvider router={mainRoute} />
            {/* <ReactQueryDevtools /> */}
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </div>
  );
};

export default App;
