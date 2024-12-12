import styles from './LoginPage.module.css'
import NavBar from '../components/NavBar'
import Button from '../components/Button'
/* eslint-disable react/react-in-jsx-scope */
function LoginPage() {
    return (
        <div className={styles.login}>
            {/* navBar */}
            <NavBar/>

            {/* login form */}
            <form>
                {/* email address */}
                <div className='flex flex-col'>
                    <label htmlFor='email'>Email address</label>
                    <input type='email' id='email' value={'jack@example.com'}/>
                </div>

                {/* Password */}

                <div className='flex flex-col'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' value={'12345678'}/>
                </div>

                {/* login button */}
                <Button type={'primary'}>Login</Button>
            </form>

        </div>
    )
}

export default LoginPage