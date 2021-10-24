import './App.css';
import { ThemeProvider } from '@emotion/react';
import {Box, createTheme, CssBaseline} from "@mui/material";
import NavBar from "./components/navigation/NavBar";
import HomeView from "./views/HomeView";

const theme = createTheme();

function App() {
  return (
      <div className="App">
          <ThemeProvider theme={theme}>
              <Box component="main">
                  <CssBaseline />
                  <NavBar />
                  <HomeView />
              </Box>
          </ThemeProvider>
      </div>
  );
}

export default App;
