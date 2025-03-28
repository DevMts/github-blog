import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import { useParams } from "react-router-dom";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { PostInfo } from "./components/PostInfo";
import { Code, MarkdownContainer, PostContainer } from "./style";

export interface Profile {
	html_url?: string;
	title?: string;
	body?: string;
	created_at?: string;
	user?: {
		login?: string;
	};
	comments?: string;
}
export function Post() {
	const { number } = useParams();
	const [post, setPost] = useState<Profile>({});

	const getProfile = () => {
		fetch(`https://api.github.com/repos/DevMts/posts/issues/${number}`)
			.then(response => response.json())
			.then(data => {
				setPost(data);
				console.log(data);
			})
			.catch(err => console.error("Error:", err));
	};

	useEffect(() => {
		getProfile();
	}, []);

	return (
		<PostContainer>
			<PostInfo dates={post} />
			<MarkdownContainer>
				<Markdown
					components={{
						pre: "article",
						code: ({ children, className }) => (
							<Code
								language={className?.replace("language-", "") || "js"}
								style={dracula}
							>
								{children}
							</Code>
						),
					}}
				>
					{post.body}
				</Markdown>
			</MarkdownContainer>
		</PostContainer>
	);
}
