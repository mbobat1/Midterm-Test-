import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function AddProduct() {
  const { register, handleSubmit } = useForm();
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    category: '',
    quantity: '',
    price: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const onSubmit = (data) => {
    alert(`Form Data: ${JSON.stringify(data, null, 2)}`);
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Name"
        name="name"
        {...register('name')}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Description"
        name="description"
        {...register('description')}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Category"
        name="category"
        {...register('category')}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Quantity"
        name="quantity"
        {...register('quantity')}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Price"
        name="price"
        {...register('price')}
        onChange={handleInputChange}
      />

      <input type="submit" />
    </form>
  );
}

function SignUpUser() {
  const { register, handleSubmit, formState: { errors }, watch, setError } = useForm();
  const passwordValue = watch('password', '');

  const onSubmit = (data) => {
    const { password, confirmPassword } = data;
    if (password !== confirmPassword) {
      setError('confirmPassword', { type: 'manual', message: 'Passwords Dose not Match' });
      return;
    }

    alert(`Form Data: ${JSON.stringify(data, null, 2)}`);
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="First Name"
        {...register("firstName", { required: true })}
      />
      {errors.firstName && <span>*</span>}

      <input
        type="text"
        placeholder="Last Name"
        {...register("lastName", { required: true })}
      />
      {errors.lastName && <span>*</span>}

      <input
        type="text"
        placeholder="User Name"
        {...register("userName", { required: true })}
      />
      {errors.userName && <span>*</span>}

      <input
        type="email"
        placeholder="Email"
        {...register("email", {
          required: true,
          pattern: /^\S+@\S+$/i,
        })}
      />
      {errors.email && <span>*</span>}

      <input
        type="password"
        placeholder="Password"
        {...register("password", { required: true })}
      />
      {errors.password && <span>*</span>}

      <input
        type="password"
        placeholder="Confirm Password"
        {...register("confirmPassword", {
          required: true,
          validate: (value) => value === passwordValue || "Passwords do not match",
        })}
      />
      {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}

      <input type="submit" />
    </form>
  );
}

export { AddProduct, SignUpUser }; 