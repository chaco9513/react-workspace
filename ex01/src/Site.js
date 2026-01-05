function Site({arr, a_tag}) {
    const li =[];

    a_tag.forEach(v => {
      // console.log(v)
      // li = li.concat(<li> <a href={v.href}>{v.txt}</a></li>)
      li.push(
        <li>
          <a href={v.href}>{v.txt}</a>
        </li>
      );
    })
    /*for(let i=0;i<arr.length;i++){
        console.log(`arr ${i} : ${arr[i]}`)
    }*/

    const testArr = arr.map(value => <h3>{value}</h3>);
    const testTag = a_tag.map((value) => <a href={value.href}>{value.txt}</a>);

  return (
    <>
    <div>{a_tag.map((value) => <a href={value.href}>{value.txt}</a>)}</div>
    <div>{testTag}</div>
    <div>{testArr}</div>
      <nav>
        <ul>{li}</ul>
      </nav>
    </>
  );
}
export default Site;