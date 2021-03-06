import Test from "../../test/Test";

import Header from "../Header";
import Nav from "../Nav";
import Popup from "../Popup";
import { Route, Routes } from "react-router-dom";
import TeamA from "../../teams/TeamA";
import Page1 from "../../../pages/Assessments/Page1";
import Page6 from "../../../pages/Assessments/Page6";
import Page5 from "../../../pages/Assessments/Page5";
import Page4 from "../../../pages/Assessments/Page4";
import Page3 from "../../../pages/Assessments/Page3";

import RatingAndScore from "../../common/ReatingAndScore";

import TeamH from "../../teams/TeamH";
import Training from "../../../pages/FreeStyle/Training";
import Exercise from "../../../pages/TrainReading/Level/Exercise";
import ExerciseClock from "../../../pages/TrainReading/Level/ExerciseClock";
import ExerciseQuestion from "../../../pages/TrainReading/Level/ExerciseQuestion";
import ExerciseRate from "../../../pages/TrainReading/Level/ExerciseRate";
import ExerciseResult from "../../../pages/TrainReading/Level/ExerciseResult";
// import TeamC from '../../teams/TeamC'
//---- נא לקבל שינויים לפופאפ קונטקטס -team-b
import { useContext } from "react";
import { popupContext } from "../../../context/context";
import BookDetails from "../../../pages/TrainReading/BookDetails";
import BookInfo from "../../common/BookInfo";
import PushUpTimer from "../../../pages/TrainReading/PushUpTimer";
import PushUpInstructions from "../../../pages/TrainReading/PushUpInstructions";
//----
// import Popup from "../Popup/Popup"

import { SignIn } from "../../../pages/SignUp/Sign-in/SignIn.jsx";

import CalibrateCam from "../../../pages/TrainFocus/CalibrateCam";
// import TextArea from "../common/TextArea/Index";
// import Context from "../../../context";

import Results from "../../../pages/TrainFocus/TrainFocusResults";
import StartFocus from "../../../pages/TrainFocus/StartFocus";
import Settings from "../../../pages/Settings";

import Contact from "../../../../src/pages/Contact";

import Instructions from "../../../pages/FreeStyle/Instructions";
// import Exercise from "../../../pages/TrainFocus/Exercise";
import Dashboard from "../../../pages/Dashboard";
//  import Popup from "./popup/Popup";
// import { Outlet, Route, Routes } from "react-router-dom";
// import TextArea from "../common/TextArea/Index";
// import Context from "../../../context";

import TeamF from "../../teams/TeamF";
import ChangePassword from "../../../pages/ChangePassword";


function Main() {
  const { popup } = useContext(popupContext);
  return (
    <>
      <Header />
      <Routes>
        {/* Team A */}
        <Route path="teama">
          <Route path="page1" element={<Page1 />} />
          <Route path="page3" element={<Page3 />} />
          <Route path="page4" element={<Page4 />} />
          <Route path="page5" element={<Page5 />} />
          <Route path="page6" element={<Page6 />} />
          <Route index element={<TeamA />} />
        </Route>

        {/* Team B */}
        <Route path="train-reading">
          <Route index element={<BookDetails />} />
          <Route path="book-info" element={<BookInfo />} />
          <Route path="instructions" element={<PushUpInstructions />} />
          <Route path="timer" element={<PushUpTimer />} />
        </Route>

        {/* Team C */}
        {/* <Route path="train_reading_level"> */}
        {/* <Route index element={<>team's components</>} /> */}
        {/* <Route path="exercise" element={<Exercise />} />
          <Route path="exercise_clock" element={<ExerciseClock />} />
          <Route path="rate" element={<ExerciseRate />} />
          <Route path="question" element={<ExerciseQuestion />} />
          <Route path="result" element={<ExerciseResult />} /> */}
        {/* </Route> */}

        {/* Team D */}
        {/* <Route path="teams-path">
          <Route index element={<>team's components</>} />
          <Route path="components-path" element={<>team's components</>} />
        </Route> */}

        {/* Team E */}
        {/* <Route path="teams-path">
          <Route index element={<>team's components</>} />
          <Route path="components-path" element={<>team's components</>} />
        </Route> */}

        {/* Team F */}
        <Route path="/">
          <Route index element={<TeamF />} />
          <Route path="settings" element={<Settings />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="contact" element={<Contact />} />
          <Route path="sign-out" element={<SignIn />} />
          <Route path="settings/changePassword" element={<ChangePassword  />} />
        </Route>

        {/* Team G */}
        {/* <Route path="/train-focus"> */}
        {/* <Route index element={<>team's components</>} />
          <Route path="exercise" element={<Exercise />} />
          <Route path="StartFocus" element={<StartFocus />} />
          <Route path="result" element={<Results />} />
          <Route path="calibration" element={<CalibrateCam />} /> */}
        {/* <Route path="/result" element={<Results />} /> */}
        {/* </Route> */}

        {/* Team H
        <Route path="/teams/TeamH">
          {/* <Route index element={<TeamH />} /> */}
        {/* <Route path="/teams/TeamH/Training" element={<Training />} /> */}
        {/* <Route path="components-path" element={<>team's components</>} /> */}
        {/* </Route> */}

        {/* Test */}
        <Route path="/test" element={<Test />} />
        {/* <Route path="test/Dashboard" element={} /> */}
      </Routes>
      <Nav />
      {popup && (
        <Popup bookDetails={{ name: "harry potter", genre: "novel" }} />
      )}
    </>
  );
}
export default Main;
