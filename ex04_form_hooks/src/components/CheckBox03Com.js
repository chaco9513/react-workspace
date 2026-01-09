const CheckBox03Com = ({isChecked, onChange}) => {
  return (
    <>
      확인
      <input type="checkbox" checked={isChecked} onChange={onChange}></input>
    </>
  );
};
export const CheckComponent = ({ hobby, onChangeHobby }) => {
  // console.log(hobby);
  return (
    <>
      {hobby.map((data) => (
        <span key={data.key}>
          <label htmlFor={data.key}>{data.label}</label>
          <input id={data.key} type="checkbox" checked={data.isChecked} onChange={onChangeHobby} />
        </span>
      ))}
    </>
  );
};
export default CheckBox03Com;