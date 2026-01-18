import { useEffect } from "react";
import ListCom from "../components/ListCom";
import { useDispatch, useSelector } from "react-redux";
import { getList } from "../service/member.js";
import { list } from "../redux/memberDataSlice";
import { memberThunk } from "../service/memberThunk.js";

function ListCon() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(memberThunk("mem"));
    /* 2차 데이터 불러오기 전
    const getMList = async () => {
      const res = await getList();
      console.log("list con res : ", res);
      const data = await res.json();
      console.log("list con data : ", data);
      dispatch(list(data));
    };
    getMList();
    /* 데이터 불러오기 전
    const mlist = getList();
    dispatch(list(mlist));
     */
  }, [dispatch]);

  const memberList = useSelector((state) => {
    return state.memberData.data;
  });
  
  const {loading,error} = useSelector((state) => {
    return state.memberData;
  });
  return (
    <>
      <ListCom loading={loading} error={error} list={memberList} />
    </>
  );
}
export default ListCon;
