import React from "react";
import {
  FaGithub,
  FaCalendar,
  FaComments,
  FaExternalLinkAlt,
  FaChevronLeft,
} from "react-icons/fa";
import { Container, ContainerInfo, ContainerNavigate, Content } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";
import { relativeDateFormatter } from "../../utils/formatter";
import ReactMarkdown from "react-markdown";
import { LinkExternal } from "../../components/Link";

interface userProps {
  html_url: string;
  title: string;
  user: {
    login: string;
  };
  created_at: number ;
  comments: number;
  body: string;
  
}

export function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState<userProps | null>(null);
  const username = "hpbeta";
  const repo = "github-blog";

  async function getInfoIssues() {
    const response = await api.get(`/repos/${username}/${repo}/issues/${id}`);
    setPost(response.data);
  }

  useEffect(() => {
    getInfoIssues();
  }, []);
  return (
    <>
      <Container>
        <ContainerNavigate>
          <a href="/">
            <FaChevronLeft />
            Voltar
          </a>
         {
          post &&(
            <LinkExternal
            text={"Ver no Github"}
            href={post?.html_url}
            target="_blank"
            icon={<FaExternalLinkAlt />}
          />
          )
         }
        </ContainerNavigate>
        <ContainerInfo>
          <h2>{post?.title}</h2>
          <ul>
            <li>
              <FaGithub />
              <span>{post?.user?.login}</span>
            </li>

            <li>
              <FaCalendar />
              <span>{relativeDateFormatter(post?.created_at)}</span>
            </li>
            <li>
              <FaComments />
              <span>{post?.comments}</span>
            </li>
          </ul>
        </ContainerInfo>
      </Container>

      <Content>
        <ReactMarkdown>{post?.body}</ReactMarkdown>
      </Content>
    </>
  );
}
