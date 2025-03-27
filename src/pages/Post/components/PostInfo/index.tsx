import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dates, PostInfoContainer } from "./style";
import { faCalendarDay, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons/faComment";

export function PostInfo() {
  return (
    <PostInfoContainer>
      <div>
        <a href="">
          <FontAwesomeIcon icon={faChevronLeft} />
          VOLTAR
        </a>
        <a href="">
          VER NO GITHUB
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </div>
      <strong>
        JavaScript data types and data structures
      </strong>
      <Dates>
        <div>
          <FontAwesomeIcon icon={faGithub} />
          <span>devmts</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faCalendarDay} />
          <span>há 1 dia</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faComment} />
          <span>5 Comentários</span>
        </div>
      </Dates>
    </PostInfoContainer>
  )
}