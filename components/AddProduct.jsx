import React, { useState } from 'react';
import { useForm } from 'react-hook-form';


export default function AddProduct() {
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
    console.log('Form data:', data);
    alert('Form data submitted! Check the console for details.');
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
