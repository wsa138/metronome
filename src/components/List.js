import { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';

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
      // TODO: Instead of setting it to beatsPerMinute I need to iterate the object and create the list.
      const data = snapshot.val().Users[userUID];
      setList(createJSX(data));
    });
  }, [userUID]);

  const createJSX = (dataObj) => {
    let listArr = [];
    for (const childObj in dataObj) {
      listArr.push(
        <div key={dataObj[childObj].trackName}>
          <div>{dataObj[childObj].trackName}</div>
          <div>{dataObj[childObj].tempo}</div>
        </div>
      );
    }
    return listArr;
  };

  function test() {
    console.log(list);
  }

  return (
    <div>
      <div onClick={test}>List:</div>
      <div>{list}</div>
    </div>
  );
};

export default List;
