import { useEffect, useRef } from "react";

const RefForm = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
  };

  useEffect(() => {
    emailRef.current.focus(); //its getting focus on email filed from first loading
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mx-auto mt-5">
        Please Fill the Form
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col  items-center mt-5">
          <input
            className="input w-full max-w-xs"
            ref={emailRef}
            type="email"
            placeholder="Email"
            name="email"
          />
          <input
            className="input w-full max-w-xs"
            ref={passwordRef}
            type="password"
            placeholder="Password"
            name="password"
          />
          <input type="submit" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
};

export default RefForm;
