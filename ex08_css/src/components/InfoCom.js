import styled from "styled-components";
import { StyleContentBlock, StyleContentWrap } from "./common/StyleContent";
import {ProductTitle} from "./common/StyleProduct"
import StyledButton from "./common/StyleButton";

const InfoWrap = styled.div`
    width: 30%;margin:auto;border:1px solid gray;border-radius : 5px;font-size:24px;padding:20px;
`;
const InfoCom = ({ data, onDelete, onModifyForm }) => {
  return (
    <>
          <ProductTitle>개인정보</ProductTitle>
          <InfoWrap>
            {data && (
              <>
                username<br></br>- {data.username}
                <hr></hr>
                password<br></br>- {data.password}
                <hr></hr>
                role<br></br>- {data.role}<hr></hr>
              </>
            )}
            <StyledButton onClick={onDelete}>삭제</StyledButton>
            <StyledButton onClick={onModifyForm}>수정</StyledButton>
          </InfoWrap>
    </>
  );
};
export default InfoCom;