import React from "react";
import { useSelector, useDispatch } from "react-redux";

function addCourseAction(title) {
  return { type: "ADD_COURSE", title };
}

export default function CourseList() {
  const textInput = React.createRef();

  const dispatch = useDispatch();

  function addCourse() {
    dispatch(addCourseAction(textInput.current.value));
  }

  const courses = useSelector((state) => state.data);

  return (
    <>
      <ul>
        {courses.map((course) => (
          <li key={course}>{course}</li>
        ))}
      </ul>
      <input ref={textInput} placeholder="Insira um curso" />
      <button type="button" onClick={addCourse}>
        Adicionar Curso{" "}
      </button>
    </>
  );
}
