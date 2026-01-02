function Header(props){
    console.log(props)
    return (
        <div>
            <h1>HEADER 영역</h1>
            <hr></hr>
            props.test : {props.test}<br></br>
            props.number : {props.number}
        </div>
    )
}
export default Header;