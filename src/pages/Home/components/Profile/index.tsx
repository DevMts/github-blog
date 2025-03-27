import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dates, ProfileContainer } from "./style";
import { useEffect, useState } from "react";

interface Profile {
  login?: string;
  name?: string;
  avatar_url?: string;
  followers?: number;
  bio?: string;
  company?: string;
  html_url?: string;
}


export function Profile() {
  const [dates, setDates] = useState<Profile>({})

  async function getDates(){
    const response = await fetch('https://api.github.com/users/DevMts')
    const data = await response.json()
    console.log(data)
    setDates(data)
  }



  useEffect(()=>{
    getDates()
  },[])


  return (
    <ProfileContainer>
      <img src={dates.avatar_url} alt="" />
      <div>
        <div>
          <strong>{dates.name}</strong>
          <a href={dates.html_url} target="_blank" >Github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>
        <div>
          <p>{dates.bio ?? 'Sem bio'}</p>
        </div>
        <Dates>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>{dates.login}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faBuilding} />
            <span>{dates.company ?? 'Sem Empresa'}</span>
            </div>
          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>{dates.followers} {dates.followers == 1 ? 'Seguidor' : 'Seguidores'}</span>
          </div>
        </Dates>
      </div>
    </ProfileContainer>
  )
}

