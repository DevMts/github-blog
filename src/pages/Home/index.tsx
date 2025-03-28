import { useEffect, useState } from "react";
import { data } from "react-router-dom";
import { Cards } from "./components/Card";
import { Profile } from "./components/Profile";
import { Form, HomeContainer } from "./style";

export interface Post {
	title: string;
	body: string;
	id: string;
	created_at: string;
	url?: string;
	number: number;
}
export function Home() {
	const [posts, setPosts] = useState<Post[]>([]);
	const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts);
	const [search, setSearch] = useState("");

	async function getPosts() {
		const response = await fetch(
			"https://api.github.com/repos/DevMts/posts/issues",
		);
		const data = await response.json();
		setPosts(data);
		console.log(data);
	}

	useEffect(() => {
		setFilteredPosts(posts);
	}, [posts]);

	useEffect(() => {
		getPosts();
	}, []);

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newSearch = event.target.value;
		setSearch(newSearch);

		console.log("Valor mudou:", newSearch);

		if (newSearch.trim() === "") {
			setFilteredPosts(posts);
			return;
		}

		const resultados = posts.filter(
			post =>
				post.title
					.normalize("NFD") // Decompõe os caracteres acentuados
					.replace(/[\u0300-\u036f]/g, "") // Remove os caracteres de acento
					.toLowerCase()
					.includes(
						newSearch
							.normalize("NFD")
							.replace(/[\u0300-\u036f]/g, "")
							.toLowerCase(),
					) ||
				post.body
					.normalize("NFD")
					.replace(/[\u0300-\u036f]/g, "")
					.toLowerCase()
					.includes(
						newSearch
							.normalize("NFD")
							.replace(/[\u0300-\u036f]/g, "")
							.toLowerCase(),
					),
		);

		setFilteredPosts(resultados); // Atualiza os posts filtrados
		console.log("Resultados:", resultados);
	};

	return (
		<HomeContainer>
			<Profile />
			<Form action="">
				<div>
					<span>Publicações</span>
					<span>
						{" "}
						{data.length === 1
							? data.length + " Publicação"
							: data.length + " Publicações"}
					</span>
				</div>
				<input type="text" value={search} onChange={handleSearch} />
			</Form>
			<Cards post={filteredPosts} />
		</HomeContainer>
	);
}
