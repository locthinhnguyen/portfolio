import React, { useState } from 'react';
import Button from '../components/Button';

export const Touch = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
  const [errors, setErrors] = useState({});
  const [information, setInformation] = useState({
    name: '',
    lastname: '',
    email: '',
    phone: '',
    message: '',
  });

  const { name, lastname, email, phone, message } = information;

  const handleChange = (e, value) => {
    setInformation({ ...information, [value]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!name) {
      newErrors.nameError = 'Name not empty';
    } else if (name.length <= 1) {
      newErrors.nameError = 'Name must be 2 characters long';
    }

    if (!lastname) {
      newErrors.lastnameError = 'Last Name not empty';
    } else if (lastname.length <= 1) {
      newErrors.lastnameError = 'Last Name must be 2 characters long';
    }

    if (!email) {
      newErrors.emailError = 'Email not empty';
    } else if (emailRegex.test(email) === false) {
      newErrors.emailError = 'Invalid email address';
    }

    if (!phone) {
      newErrors.phoneError = 'Phone not be empty';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Submitted data:', information);
      setInformation({
        name: '',
        lastname: '',
        email: '',
        phone: '',
        message: '',
      });
      alert('Submit sussecs');
    }
  };

  return (
    <section className="flex justify-center">
      <div className="wrapper flex flex-col items-center justify-center pb-[95px]">
        <h2 className="text-primaryColor text-[48px] font-bold mb-[80px]">
          Get in touch
        </h2>
        <div className="form-box mb-[160px]">
          <form className="flex flex-col items-center" onSubmit={handleSubmit}>
            <div className="flex item-center gap-[37px]">
              <div className="input-box w-[350px] h-[30px] relative border-b border-thirdColor my-5">
                <label className="text-thirdColor absolute transform -translate-y-1/2 pointer-events-none transition">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full h-full bg-transparent text-[white] border-none outline-none"
                  value={name}
                  onChange={(e) => handleChange(e, 'name')}
                />
                {errors.nameError && name.length <= 1 ? (
                  <p className="text-red-500">{errors.nameError}</p>
                ) : (
                  ''
                )}
              </div>
              <div className="input-box w-[350px] h-[30px] relative border-b border-thirdColor my-5">
                <label className="text-thirdColor absolute transform -translate-y-1/2 pointer-events-none transition">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full h-full bg-transparent text-[white] border-none outline-none"
                  value={lastname}
                  onChange={(e) => handleChange(e, 'lastname')}
                />
                {errors.lastnameError && lastname.length <= 1 ? (
                  <p className="text-red-500">{errors.lastnameError}</p>
                ) : (
                  ''
                )}
              </div>
            </div>
            <div className="flex item-center gap-[37px]">
              <div className="input-box w-[350px] h-[30px] relative border-b border-thirdColor my-5">
                <label className="text-thirdColor absolute transform -translate-y-1/2 pointer-events-none transition">
                  Email
                </label>
                <input
                  type="text"
                  className="w-full h-full bg-transparent text-[white] border-none outline-none"
                  value={email}
                  onChange={(e) => handleChange(e, 'email')}
                />
                {errors.emailError && (
                  <p className="text-red-500">{errors.emailError}</p>
                )}
              </div>

              <div className="input-box w-[350px] h-[30px] relative border-b border-thirdColor my-5">
                <label className="text-thirdColor absolute transform -translate-y-1/2 pointer-events-none transition">
                  Phone Number
                </label>
                <input
                  type="phone"
                  className="w-full h-full bg-transparent text-[white] border-none outline-none"
                  value={phone}
                  onChange={(e) => handleChange(e, 'phone')}
                />
                {errors.phoneError && (
                  <p className="text-red-500">{errors.phoneError}</p>
                )}
              </div>
            </div>
            <div className="input-box w-[750px] h-[109px] relative border border-thirdColor my-5">
              <label className="text-thirdColor absolute pointer-events-none transition">
                Message
              </label>
              <input
                type="text"
                className="w-full h-full bg-transparent text-[white] border-none outline-none"
                value={message}
                onChange={(e) => handleChange(e, 'message')}
              />
            </div>
            <Button type="submit">Submit now</Button>
          </form>
        </div>
        <p className="text-thirdColor text-[14px] font-medium">
          © Oyindamola 2020
        </p>
      </div>
    </section>
  );
};
