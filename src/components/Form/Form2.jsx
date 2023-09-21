import { useState } from "react";

const Form2 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password Must be at least 6 characters");
    } else {
      setError("");
    }
    console.log(email);
    console.log(password);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mx-auto mt-5">
        Please Fill the Form
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col  items-center mt-5">
          <input
            className="input w-full max-w-xs"
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleEmail}
          />
          <input
            className="input w-full max-w-xs"
            type="password"
            placeholder="Password"
            name="password"
            onChange={handlePassword}
          />
          <input type="submit" className="btn btn-primary" />
          {error && <p className="text-red-600">{error}</p>}
        </div>
      </form>
    </div>
  );
};

export default Form2;
