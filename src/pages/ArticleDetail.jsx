import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';


export default function ArticleDetail() {
    // Destructuring per ottenere l'id dalla URL
    const { id } = useParams();

    // Stato per memorizzare i dati dell'articolo
    const [post, setPost] = useState({});

    // Funzione per fare la chiamata API per ottenere il post
    function fetchPost() {

        axios.get(`http://localhost:3000/posts/${id}`)
            .then(res => setPost(res.data))
            .catch(err => console.log('Errore nel caricamento del post:', err));

    }

    // Effettua la chiamata quando l'ID cambia
    useEffect(() => {

        fetchPost();

    }, [id]);

    // Se il post non è ancora caricato, mostra "Loading..."
    if (!post || Object.keys(post).length === 0) return <div>Loading...</div>;

    return (
        <>
            <h2>{post.title}</h2>
            <p><strong>Autore:</strong> {post.autore}</p>
            <p>{post.content}</p>
            <p><strong>Categoria:</strong> {post.tags ? post.tags.join(', ') : 'Nessuna categoria'}</p>
            <img src={post.image} alt={post.title} />

        </>

    );

}