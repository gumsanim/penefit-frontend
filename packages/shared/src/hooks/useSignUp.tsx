import { useState } from "react";

const useSignUp = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [petName, setPetName] = useState("");
};

export default useSignUp;
