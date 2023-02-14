import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "dumm",
    email: "mail@rajeshky.com",
  },
});
UserContext.displayName = "UserContext";
export default UserContext;
