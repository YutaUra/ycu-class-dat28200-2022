import { Routes, Route } from "react-router-dom";
import Introduction from "./Introduction";
import Lesson01 from "./Lesson-01";
import Lesson02 from "./Lesson-02";
import Lesson03 from "./Lesson-03";
import Lesson04 from "./Lesson-04";
import Lesson05 from "./Lesson-05";
import Lesson06 from "./Lesson-06";
import Lesson07 from "./Lesson-07";
import Lesson08 from "./Lesson-08";
import Lesson09 from "./Lesson-09";
import Lesson10 from "./Lesson-10";
import Lesson11 from "./Lesson-11";
import Lesson12 from "./Lesson-12";
import Lesson13 from "./Lesson-13";
import Lesson14 from "./Lesson-14";
import Lesson15 from "./Lesson-15";

function MainContent() {
  return (
    <Routes>
      <Route
        path={`${process.env.PUBLIC_URL}/`}
        element={<Introduction />}
      ></Route>
      <Route path="/Lesson-01" element={<Lesson01 />}></Route>
      <Route path="/Lesson-02" element={<Lesson02 />}></Route>
      <Route path="/Lesson-03" element={<Lesson03 />}></Route>
      <Route path="/Lesson-04" element={<Lesson04 />}></Route>
      <Route path="/Lesson-05" element={<Lesson05 />}></Route>
      <Route path="/Lesson-06" element={<Lesson06 />}></Route>
      <Route path="/Lesson-07" element={<Lesson07 />}></Route>
      <Route path="/Lesson-08" element={<Lesson08 />}></Route>
      <Route path="/Lesson-09" element={<Lesson09 />}></Route>
      <Route path="/Lesson-10" element={<Lesson10 />}></Route>
      <Route path="/Lesson-11" element={<Lesson11 />}></Route>
      <Route path="/Lesson-12" element={<Lesson12 />}></Route>
      <Route path="/Lesson-13" element={<Lesson13 />}></Route>
      <Route path="/Lesson-14" element={<Lesson14 />}></Route>
      <Route path="/Lesson-15" element={<Lesson15 />}></Route>
    </Routes>
  );
}

export default MainContent;
