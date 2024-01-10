import { useState } from "react";

export const Form = () => {
  const [user, setUser] = useState({
    firstName: "Max",
    lastName: "Alexeev",
  });

  const handleFirstNameChange = (event) => {
    setUser({
      ...user,
      firstName: event.target.value,
    });
  };

  return (
    <form>
      <input
        type="text"
        value={user.firstName}
        onChange={handleFirstNameChange}
      />
    </form>
  );
};
