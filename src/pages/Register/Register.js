// MEU CSS
import styles from './Register.module.css'

// MEUS IMPORTS
import { useState, useEffect } from 'react'

const Register = () => {
  const [displayName, setDisplayName] = useState ("")
  const [email, setEmail] = useState ("")
  const [password, setPassword] = useState ("")
  const [confirmPassword, setConfirmPassword] = useState ("")
  const [error, setError] = useState ("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")

    const user = { displayName, email, password }

    if (password !== confirmPassword) {
      setError("As suas senhas precisam estar idênticas.")
      return
    }
    console.log(user)
  }
  

  return (
    <div className={ `${styles.register} container`}>
        <h1>Cadastre-se para postar seu conteúdo</h1>
        <p>Crie seu usuário e compartilhe suas histórias.</p>
        <form onSubmit={ handleSubmit }>
          <label>
            <span>Nome: </span>
            <input type="text" name='displayName' required placeholder='Nome de usuário' value={ displayName } onChange={ (e) => setDisplayName(e.target.value) }/>
          </label>
          <label>
            <span>E-mail </span>
            <input type="email" name='demail' required placeholder='E-mail de acesso' value={ email } onChange={ (e) => setEmail(e.target.value) }/>
          </label>
          <label>
            <span>Senha: </span>
            <input type="password" name='password' required placeholder='Insira sua senha' value={ password } onChange={ (e) => setPassword(e.target.value) }/>
          </label>
          <label>
            <span>Confirmação Senha: </span>
            <input type="password" name='onfirmPassword' required placeholder='Confirme a sua senha' value={ confirmPassword } onChange={ (e) => setConfirmPassword(e.target.value) }/>
          </label>
          <button className='btn btn-success my-4'>Cadastrar</button>
          { error && <p className={`${styles.error} text-danger fw-bold`}>{ error }</p>}
        </form>
    </div>
  )
}

export default Register