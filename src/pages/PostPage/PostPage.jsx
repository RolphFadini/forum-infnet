import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostPage = () => {
	const { id } = useParams();
	const [post, setPost] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchPost = async () => {
			try {
				const response = await fetch(`https://mhw-db.com/events/${id}`);
				if (!response.ok) {
					throw new Error("Erro ao obter o post");
				}
				const data = await response.json();
				setPost(data);
				setLoading(false);
			} catch (error) {
				console.error(error);
				setLoading(false);
			}
		};

		fetchPost();
	}, [id]);

	if (loading) {
		return <p>Carregando...</p>;
	}

	if (!post) {
		return <p>Post não encontrado!</p>;
	}

	return (
		<div>
			<h1>{post.name}</h1>
			<p>Tipo: {post.type}</p>
			<p>Descrição: {post.description}</p>
			<p>Requisitos: {post.requirements}</p>
			<p>Ranque da Quest: {post.questRank}</p>
			<p>Condições de Sucesso: {post.successConditions}</p>
			<p>
				Data de Início: {new Date(post.startTimestamp).toLocaleDateString()}
			</p>
			<p>
				Data de Término: {new Date(post.endTimestamp).toLocaleDateString()}
			</p>
			<h2>Localização:</h2>
			<p>Nome: {post.location.name}</p>
			<p>Zonas: {post.location.zoneCount}</p>
			<div>
				<h3>Camps:</h3>
				{post.location.camps.map((camp) => (
					<p key={camp.id}>
						{camp.name} - Zone {camp.zone}
					</p>
				))}
			</div>
		</div>
	);
};

export default PostPage;
