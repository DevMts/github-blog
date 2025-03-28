import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
	faCalendarDay,
	faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare";
import { faComment } from "@fortawesome/free-solid-svg-icons/faComment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatDistanceToNow, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Link } from "react-router-dom";
import type { Profile } from "../..";
import { Dates, PostInfoContainer } from "./style";

export function PostInfo({ dates }: { dates: Profile }) {
	const date =
		dates.created_at === undefined
			? new Date().toDateString()
			: formatDistanceToNow(parseISO(dates.created_at), {
					addSuffix: true,
					locale: ptBR,
				});

	return (
		<PostInfoContainer>
			<div>
				<Link to={"/"}>
					<FontAwesomeIcon icon={faChevronLeft} />
					VOLTAR
				</Link>
				<a href={dates.html_url} target="_blank" rel="noreferrer">
					VER NO GITHUB
					<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
				</a>
			</div>
			<strong>{dates.title}</strong>
			<Dates>
				<div>
					<FontAwesomeIcon icon={faGithub} />
					<span>{dates.user?.login}</span>
				</div>
				<div>
					<FontAwesomeIcon icon={faCalendarDay} />
					<span>{date}</span>
				</div>
				<div>
					<FontAwesomeIcon icon={faComment} />
					<span>{dates.comments} Comentários</span>
				</div>
			</Dates>
		</PostInfoContainer>
	);
}
