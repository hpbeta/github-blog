import { useEffect, useState } from "react";
import { ContainerIssue, ContainerIssueInfo } from "./styles";
import { api } from "../../lib/axios";
import { relativeDateFormatter } from "../../utils/formatter";
import { Search } from "../Search";
import { Link } from "react-router-dom";
import React from "react";

interface issuesProps {
  number: number;
  title: string;
  created_at: number ;
  body: string;
}

export function Posts() {
  const [issues, setIssues] = useState<issuesProps[]>([]);

  const username = "hpbeta";
  const repo = "github-blog";

  async function getIssues(query = "") {
    const response = await api.get(
      `/search/issues?q=${query}%20repo:${username}/${repo}`
    );
    setIssues(response.data.items);
  }

  useEffect(() => {
    getIssues();
  }, []);

  return (
    <>
      <Search issuesLength={issues.length} getIssues={getIssues} />

      <ContainerIssue>
        {issues.map((issue, index) => (
          <Link key={index} to={`/postDetails/${issue.number}`}>
            <ContainerIssueInfo key={index}>
              <div>
                <h2>{issue.title}</h2>
                <span>{relativeDateFormatter(issue.created_at)}</span>
              </div>
              <p>{issue.body.slice(0, 200) + "..."}</p>
            </ContainerIssueInfo>
          </Link>
        ))}
      </ContainerIssue>
    </>
  );
}
