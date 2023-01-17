import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, NotFound } from "./pages";

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: { refetchInterval: 2000 },
    },
  });

  return (
    <QueryClientProvider client={client}>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
