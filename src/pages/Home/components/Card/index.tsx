import { formatDistanceToNow, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import type { Post } from "../..";
import { Card, CardContainer } from "./style";

export function Cards({ post }: { post: Post[] }) {
	console.log(post);

	return (
		<CardContainer>
			{post.map(post => (
				<Card key={post.id} to={`/post/${post.number}`}>
					<div>
						<h2>{post.title}</h2>
						<span>
							{formatDistanceToNow(parseISO(post.created_at), {
								addSuffix: true,
								locale: ptBR,
							})}
						</span>
					</div>
					<p>{post.body}</p>
				</Card>
			))}
		</CardContainer>
	);
}
