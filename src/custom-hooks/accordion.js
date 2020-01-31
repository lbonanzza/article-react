import {useState} from "react";

export default () => {

  const [openItemId, setOpenIyemId] = useState(null);
  const toggleOpenItem = (id) => () => setOpenIyemId(id);

  return { openItemId, toggleOpenItem }

};