import { useContext, useState } from "react";

const Context = React.createContext();

export const ImageProvider = ({ children }) => {
  const [image, setImage] = useState("");
  return (
    <Context.Provider value={{ image, setImage }}>{children}</Context.Provider>
  );
};

export const useImage = () => {
  return useContext(Context);
};

export default Context;
