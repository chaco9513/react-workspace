import { useState } from "react";
import QuizRadioCom from "../components/QuizRadioCom";
const initalRadio = [
  { key: 4, value: "10대", namet: "age", isChecked: true },
  { key: 5, value: "20대", namet: "age", isChecked: false },
  { key: 6, value: "30대", namet: "age", isChecked: false },
];
function QuizRadioCon() {
    const [age, setAge] = useState(initalRadio)
    const onChange = (key) => {
        console.log("key : ", key)
        const updateAge = age.map(data => {
          return {...data,isChecked: key == data.key,}
        });
        setAge(updateAge);
    }
  return (
    <>
      <QuizRadioCom age={age} onChange={onChange} />
    </>
  );
}
export default QuizRadioCon;
