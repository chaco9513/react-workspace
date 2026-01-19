import { StyleContentBlock, StyleContentWrap } from "./common/StyleContent";
import StyledForm from "./common/StyleForm";
import StyledInput from "./common/StyleInput";
import StyledButton from "./common/StyleButton";
const RegCom = ({onChange, onSubmit, username, password, role}) => {
  return (
    <>
          <StyledForm onSubmit={onSubmit} width="30%">
            <StyledInput name="username" value={username} onChange={onChange} placeholder="input username"/>
            <StyledInput name="password" value={password} onChange={onChange} placeholder="input password"/>
            <StyledInput name="role" value={role} onChange={onChange} placeholder="input role" />
            <StyledButton>회원 가입</StyledButton>
          </StyledForm>
    </>
  );
};
export default RegCom;
