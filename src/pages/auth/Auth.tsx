import LoginForm from './Login'
import SignupForm from './Register'
import { useLocation } from 'react-router-dom'

const Auth = () => {
  const location = useLocation()
  const isLogin: boolean = location.pathname === '/login'
  const isRegister: boolean = location.pathname === '/register'
  return (
    <div className="min-h-screen w-full relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(45deg, #FFB3D9 0%, #FFD1DC 20%, #FFF0F5 40%, #E6F3FF 60%, #D1E7FF 80%, #C7E9F1 100%)`,
        }}
      />
      <div className="flex items-center justify-center w-full p-6 min-h-svh md:p-10 absolute z-10">
        <div className="w-full max-w-sm">
          {isLogin && <LoginForm />}
          {isRegister && <SignupForm />}
        </div>
      </div>
    </div>
  )
}

export default Auth
