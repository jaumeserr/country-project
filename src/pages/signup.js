import { useState } from "react";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>SIGN UP</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter name"
          onChange={(evt) =>
            setFormData({ ...formData, name: evt.target.value })
          }
        />
        <input
          placeholder="Enter lastname"
          onChange={(evt) =>
            setFormData({ ...formData, lastname: evt.target.value })
          }
        />
        <input
          type="email"
          placeholder="Enter email"
          onChange={(evt) =>
            setFormData({ ...formData, email: evt.target.value })
          }
        />
        <input
          type="password"
          placeholder="Enter password"
          onChange={(evt) =>
            setFormData({ ...formData, password: evt.target.value })
          }
        />
        <button>Send</button>
      </form>
    </div>
  );
};

export default SignUpPage;
