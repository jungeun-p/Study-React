import { useEffect, useState } from "react";

const useTitle = (init) => {
  const [word, setWord] = useState();
  const [title, setTitle] = useState(init);

  const onChange = (e) => {
    const { value } = e.target;
    setWord(value);
  };

  const onClick = () => {
    setTitle(word + "🦊");
  };

  // useEffect(() => {
  //   document.title = title;
  // }, [title]);

  return { title, onChange, onClick };
};

export default useTitle;
