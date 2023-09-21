const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.email.value);
    console.log(e.target.password.value);
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
          />
          <input
            className="input w-full max-w-xs"
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

export default Form;
