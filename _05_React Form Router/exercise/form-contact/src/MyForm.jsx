import React, { useState } from 'react';

const MyForm = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});

  const validateName = (value) => {
    const nameRegex = /^[a-zA-Z\s]+$/;
    return nameRegex.test(value);
  };

  const validateDate = (value) => {
    const dateRegex = /^(0?[1-9]|[12][0-9]|3[01])[/-](0?[1-9]|1[012])[/-]\d{4}$/;
    return dateRegex.test(value);
  };

  const validatePhone = (value) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        setErrors((prevErrors) => ({
          ...prevErrors,
          name: validateName(value) ? '' : 'Invalid name',
        }));
        break;
      case 'date':
        setDate(value);
        setErrors((prevErrors) => ({
          ...prevErrors,
          date: validateDate(value) ? '' : 'Invalid date',
        }));
        break;
      case 'phone':
        setPhone(value);
        setErrors((prevErrors) => ({
          ...prevErrors,
          phone: validatePhone(value) ? '' : 'Invalid phone',
        }));
        break;
      default:
        break;
    }
  };

  return (
    <form>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        placeholder="Enter name"
      />
      {errors.name && <div>{errors.name}</div>}

      <input
        type="text"
        name="date"
        value={date}
        onChange={handleChange}
        placeholder="Enter date (dd/mm/yyyy)"
      />
      {errors.date && <div>{errors.date}</div>}

      <input
        type="text"
        name="phone"
        value={phone}
        onChange={handleChange}
        placeholder="Enter phone number"
      />
      {errors.phone && <div>{errors.phone}</div>}
    </form>
  );
};

export default MyForm;