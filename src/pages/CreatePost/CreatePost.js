// MEUS CSS
import styles from './CreatePost.module.css'

// MEUS IMPORTS
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthValue } from '../../context/AuthContext'

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState([]);
    const [formError, setFormError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <section className={`${styles.create} create`}>
            <h1>Criar Post</h1>
            <p>Escreva sobre o que quiser e compartilhe o seu conhecimento</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Título: </span>
                    <input
                        type="text"
                        name='title'
                        required
                        placeholder='Pense em um título para o seu post'
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                </label>
                <label>
                    <span>URL da imagem: </span>
                    <input
                        type="text"
                        name='image'
                        required
                        placeholder='Insira aqui uma imagem para personalizar o seu post'
                        onChange={(e) => setImage(e.target.value)}
                        value={image}
                    />
                </label>
                <label>
                    <span>Conteúdo: </span>
                    <input
                        type="text"
                        name='body'
                        required
                        placeholder='Insira aqui o conteúdo do seu post'
                        onChange={(e) => setBody(e.target.value)}
                        value={body}
                    />
                </label>
                <label>
                    <span>Tags: </span>
                    <input
                        type="text"
                        name='tags'
                        required
                        placeholder='Insira as tags separadas por vírgula(,)'
                        onChange={(e) => setTags(e.target.value)}
                        value={tags}
                    />
                </label>
                <button className='btn btn-success my-4'>Criar post</button>
                {/* {!loading && <button className='btn btn-success my-4'>Criar post</button>}
                {loading && <button className='btn btn-success my-4'>Aguarde...</button>}
                {error && <p className={`${styles.error} text-danger fw-bold`}>{error}</p>} */}
            </form>
        </section>
    )
}

export default CreatePost