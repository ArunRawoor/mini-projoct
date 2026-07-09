import UserContext from "./UserContext";

const UserContextProvider = ({ children, userName, age }) => {
  return (
    <UserContext.Provider value={{ userName, age }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;