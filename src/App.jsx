
import {Controller, useForm} from 'react-hook-form'
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"

import './App.css'

function App() {
     const schema = yup.object().shape({
      name: yup.string().required("Name is required"),
      address: yup.string().required("Address is required"),
      phone: yup.string().required("Phone Number is required"),
      email: yup.string().required("Email is required").email("Email is invalid")

     })

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      address: "",
      phone: 0,
      email: "",
    },
    resolver: yupResolver(schema),
  });


  const onSubmitFormCallback = (values) => {
    console.log("values", values);
  };

  console.log("errors", errors);

  return (
       <div>
        <h1>Form</h1>
        <form onSubmit={handleSubmit(onSubmitFormCallback)}>
          <Controller 
          name="name"
          control={control}
          render={({field}) => (
            <div>
               <input {...field} type='text' placeholder='Name' />
            </div>
          )} 
          />
           <Controller 
          name="address"
          control={control}
          render={({field}) => (
            <div>
               <input {...field} type='text' placeholder='Address' />
            </div>
          )} 
          />
           <Controller 
          name="phone"
          control={control}
          render={({field}) => (
            <div>
               <input {...field} type='number' placeholder='Phone Number' />
            </div>
          )} 
          />
             <Controller
          name="email"
          control={control}
          render={({ field }) => {
            return (
              <div>
                <input {...field} type="text" placeholder="Email" />
                {errors["email"] && <p>{errors.email.message}</p>}
              </div>
            );
          }}
        />
          <div>
            
        <label>Triệu chứng trong vòng 14 ngày qua:</label>
        <div>
        <input type="checkbox" id="cough"  />
        <label htmlFor="cough">Ho</label>
        <input type="checkbox" id="fever" />
        <label htmlFor="fever">Sốt</label>
        </div>
      </div>
          <button type='submit'>Submit</button>
          </form>
       </div>
  )
}


export default App
