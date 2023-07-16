import { useEffect, useState } from 'react';
import { ref, onValue, remove } from 'firebase/database';

// TODO: This component doesn't work
const List = ({ userUID, db }) => {
  const [list, setList] = useState([]);

  // When userUID changes, read the database list and use setList to display data.
  useEffect(() => {
    const listRef = ref(db);
    onValue(listRef, (snapshot) => {
      if (userUID === null) {
        setList([]);
        return;
      }
      const data = snapshot.val().Users[userUID];
      setList(createJSX(data));
    });
  }, [userUID]);

  const createJSX = (dataObj) => {
    let listArr = [];
    for (const childObj in dataObj) {
      listArr.push(
        <div
          className={Object.keys(dataObj)}
          key={dataObj[childObj].trackName}
          onClick={handleDelete}
        >
          <div className={Object.keys(dataObj)}>
            {dataObj[childObj].trackName}
          </div>
          <div className={Object.keys(dataObj)}>{dataObj[childObj].tempo}</div>
        </div>
      );
    }
    return listArr;
  };

  const handleDelete = (e) => {
    console.log('delete');
    console.log(e.target.className);
  };

  return (
    <div>
      <div>List:</div>
      <div>{list}</div>
    </div>
  );
};

export default List;
