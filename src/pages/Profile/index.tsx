import React from "react";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaUserCheck,
  FaUsers,
} from "react-icons/fa";

import {
  ContainerInfo,
  ContainerLink,
  ContainerMain,
  ImageAvatar,
} from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { LinkExternal } from "../../components/Link";


interface userDataProps {
  avatar_url: string
  name: string
  bio: string
  login: string
  followers: number
  following: number
  html_url: string
}

export function Profile() {
  const [userData, setUserData] = useState<userDataProps | null>(null);

  const userName = "hpbeta"
  async function getUser() {
    const response = await api.get(`/users/${userName}`);
    setUserData(response.data);
  }

  useEffect(() => {
    getUser();
  }, []);
  return (
    <ContainerMain>
      <ImageAvatar src={userData?.avatar_url} alt="" />

      <ContainerInfo>
        <h3>{userData?.name}</h3>
        <p>{userData?.bio}</p>
        <ul>
          <li>
            <FaGithub />
            <span>{userData?.login}</span>
          </li>
          <li>
            <FaUsers />
            <span>Seguidores: {userData?.followers} </span>
          </li>
          <li>
            <FaUserCheck />
            <span> Seguindo: {userData?.following} </span>
          </li>
        </ul>
      </ContainerInfo>

      <ContainerLink>
       {
        userData &&(
          <LinkExternal
          text={"GitHub"}
          href={userData?.html_url}
          icon={<FaExternalLinkAlt />}
          target={"_blank"}
        />
        )
       }
      </ContainerLink>
    </ContainerMain>
  );
}
