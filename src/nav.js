function Nav(props) {
    console.log(props)
    const {name} = props
    const {name : n} = props
    const {name : a, addr} = props
  return (
    <div>
      <ul>
        <li><a href="javascript">{name}</a></li>
        <li><a href="javascript">{n}</a></li>
        <li><a href="javascript">{addr}</a></li>
      </ul>
      <hr></hr>
    </div>
  );
}
export default Nav;
