import { createContext, useContext, useMemo } from "react";
// useNavigate is a hook that returns a function that lets you navigate a user programatically
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./hooks";

// context lets the parent component make some information available to any component in the tree below it w/o passing it specifically through props
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // get user from local storage if it exists
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();

  // call this function to authenticate the user
  const login = async (data) => {
    // sets the user using local storage, then navigate to the user's profile
    setUser(data);
    navigate("/profile");
  };

  const logout = () => {
    setUser(null);
    navigate("/", { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

// useAuth hook exposes users state and methods for login/ logout
export const useAuth = () => {
    return useContext(AuthContext)
}
