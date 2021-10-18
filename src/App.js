import './App.css';
import TeamContainer from "./containers/TeamContainer";
import {Divider, Typography} from "@mui/material";

function App() {
  return (
    <div className="App">

        <Typography align={"center"} gutterBottom variant={"h1"} > Genies Soft </Typography>

        <TeamContainer />

    </div>
  );
}

export default App;
