import { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';

const List = ({ userUID, db }) => {
  const [list, setList] = useState('No data');

  // When userUID changes, read the database list and use setList to display data.
  useEffect(() => {
    const listRef = ref(db);
    onValue(listRef, (snapshot) => {
      if (userUID === null) {
        setList('No data');
        return;
      }
      // TODO: Instead of setting it to beatsPerMinute I need to iterate the object and create the list.
      const data = snapshot.val().Users[userUID].beatsPerMinute;
      setList(data);
    });
  }, [userUID]);

  return (
    <div>
      <div>List:</div>
      <div>{list}</div>
    </div>
  );
};

export default List;
