import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

export default function ArticleDetail() {

    // Destructuring per ottenere l'id dalla URL
    const { id } = useParams();

    // Stato per memorizzare i dati del post
    const [post, setPost] = useState({});
    const [posts, setPosts] = useState([]);

    // Funzione per fare la chiamata API per ottenere i post e il post specifico
    function fetchPosts() {

        axios.get('http://localhost:3000/posts')

            .then(res => {
                // Imposto la lista completa dei post
                setPosts(res.data);
                // Trovo il post corrente
                const currentPost = res.data.find(post => post.id === parseInt(id));
                // Imposto il post corrente
                setPost(currentPost);

            })

            .catch(err => console.log('Errore nel caricamento dei post:', err));

    }

    // Effettua la chiamata quando l'ID cambia
    useEffect(() => {

        fetchPosts();

    }, [id]);

    // Se il post non è ancora caricato, mostra "Loading..."
    if (!post || Object.keys(post).length === 0) return <div>Loading...</div>;

    // Trovo l'ID del post precedente e successivo
    const currentIndex = posts.findIndex(post => post.id === parseInt(id));
    const prevPost = posts[currentIndex - 1];
    const nextPost = posts[currentIndex + 1];

    return (
        <>
            <nav>

                {/* Link per il post precedente, se disponibile */}
                {prevPost && (
                    <Link to={`/articles/${prevPost.id}`}>Prev</Link>
                )}

                {/* Link per il post successivo, se disponibile */}
                {nextPost && (
                    <Link to={`/articles/${nextPost.id}`}>Next</Link>
                )}

            </nav>

            <h2>{post.title}</h2>
            <p><strong>Autore:</strong> {post.autore}</p>
            <p>{post.content}</p>
            <p><strong>Categoria:</strong> {post.tags ? post.tags.join(', ') : 'Nessuna categoria'}</p>
            <img src={post.image} alt={post.title} />

        </>

    );

}

