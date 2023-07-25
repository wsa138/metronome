import { useEffect, useState } from 'react';
import { ref, onValue, remove } from 'firebase/database';

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
          className={Object.keys(dataObj)[0]}
          key={dataObj[childObj].trackName}
          onClick={handleDelete}
        >
          <div className={Object.keys(dataObj)[0]}>
            {dataObj[childObj].trackName}
          </div>
          <div className={Object.keys(dataObj)[0]}>
            {dataObj[childObj].tempo}
          </div>
        </div>
      );
    }
    return listArr;
  };

  // Deletes entry using the class name to identify the entry.
  const handleDelete = (e) => {
    console.log('delete');
    let entryID = e.target.className;
    console.log(entryID);
    let deleteRef = ref(db, 'Users/' + userUID + '/' + entryID);
    remove(deleteRef);
  };

  return (
    <div>
      <div>List:</div>
      <div>{list}</div>
    </div>
  );
};

export default List;
