import React from 'react';


export function Register() {
  return (
    <div style={styles.container}>
      <div style={styles.form}>
        <h1 style={styles.title}>Login</h1>
        <form>
          <input type="text" placeholder="Usuário" style={styles.input} />
          <input type="password" placeholder="Senha" style={styles.input} />
          <button type="submit" style={styles.button}>
            Entrar
          </button>
        </form>
        <button style={styles.googleButton}>
         <img src="./download.png" alt=""  />
           
    
          Entrar com Google
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#fff',
  },
  form: {
    backgroundColor: '#fdfbf4',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    width: '90%',
    maxWidth: '400px',
  },
  title: {
    marginBottom: '1rem',
    color: '#F3ABC5',
  },
  input: {
    display: 'block',
    width: '100%',
    padding: '0.8rem',
    margin: '0.5rem 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  button: {
    width: '100%',
    padding: '0.8rem',
    margin: '1rem 0',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#F3ABC5',
    color: '#fff',
    fontSize: '1rem',
    cursor: 'pointer',
  },
  googleButton: {
    width: '100%',
    padding: '0.8rem',
    marginTop: '0.5rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
    backgroundColor: '#fff',
    color: '#000',
    fontSize: '1rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

};
