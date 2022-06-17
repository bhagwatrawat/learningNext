import classes from './registrationform.module.css'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object().shape({
    fullname: yup.string().required(),
    username: yup.string().required(),
    password: yup.string().required().min(5),
    email: yup.string().email().required(),
    confpassword: yup.string().required().oneOf([yup.ref('password')], 'Passwords must match')

})
function RegistrationForm() {

    const {register,handleSubmit,formState: { errors }, reset} = useForm({
        resolver: yupResolver(schema),

});
    const onSubmit = data => {
        console.log(data)
    reset();
}
  return (
    <div  className={classes.container}>
        <div>
        <h1>Registration</h1>
        <form className={classes.formcontainer} onSubmit={handleSubmit(onSubmit)}>
            <label>Full Name</label>
            <input type="text"name="fullname" placeholder="Full Name" {...register('fullname')} />
            <span className={classes.message}>{errors.fullname?.message}</span>
            <label>Username</label>
            <input type="text" name="username" placeholder="Username"  {...register('username')} />
            <span className={classes.message}>{errors.username?.message}</span>
            <label>Email</label>
            <input type="text" name="email" placeholder="Email"  {...register('email')}/>
            <span className={classes.message}>{errors.email?.message}</span>
            <label>Phone Number</label>
            <input type="number" name="number" placeholder="Phone Number"  {...register('number')}/>
            <span className={classes.message}>{errors.number?.message}</span>
            <label>Password</label>
            <input type="password" name="password" placeholder="Password"  {...register('password')}/>
            <span className={classes.message}>{errors.password?.message}</span>
            <label>Confirm Password</label>
            <input type="password" name="confpassword" placeholder="Confirm Password"  {...register('confpassword')}/>
            <span className={classes.message}>{errors.confpassword?.message}</span>
            <button type="submit">Submit</button>
        </form>
        </div>
    </div>
  )
}

export default RegistrationForm