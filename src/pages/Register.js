import React from 'react';
import { useForm } from 'react-hook-form';

const Register = () => {
 const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
 } = useForm({
    mode: 'onBlur', // Validate fields on blur
    reValidateMode: 'onChange', // Re-validate fields on change
 });

 const onSubmit = (data) => {
    console.log(data);
    // Here you can handle the form submission, e.g., send data to an API
 };

 return (
  <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 my-4">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Register
        </h1>
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor='name' className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                 Name
                </label>
                <input {...register('name', { required: true })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                {errors.name && <p className="text-red-500 text-xs">Name is required</p>}
              </div>
              <div>
                <label htmlFor='email' className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                 Email
                </label>
                <input {...register('email', { required: true })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                {errors.email && <p className="text-red-500 text-xs">Email is required</p>}
              </div>
              <div>
                <label htmlFor='companyName' className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                 Company Name
                </label>
                <input {...register('companyName', { required: true })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                {errors.companyName && <p className="text-red-500 text-xs">Company Name is required</p>}
              </div>
              <div>
                <label htmlFor='password' className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                 Password
                </label>
                <input type="password" {...register('password', { required: true })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                {errors.password && <p className="text-red-500 text-xs">Password is required</p>}
              </div>
              <div>
                <label htmlFor='confirmPassword' className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                 Confirm Password
                </label>
                <input type="password" {...register('confirmPassword', { required: true, validate: value => value === watch('password') || 'Passwords do not match' })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                {errors.confirmPassword && <p className="text-red-500 text-xs">{errors.confirmPassword.message}</p>}
              </div>
              <input type="submit" value="Register" className="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" />
            </form>
          </div>
        </div>
      </div>
    </section>
 );
};

export default Register;

