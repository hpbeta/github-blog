import React from "react";
import { ContainerSearch } from "./styles";
import * as z from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormData = z.infer<typeof searchFormSchema>;

interface SearchProps {
  getIssues: (query: string) => Promise<void>
  issuesLength: number
}

export function Search({ getIssues, issuesLength }:SearchProps) {
  const { register, handleSubmit } = useForm<SearchFormData>({
    resolver: zodResolver(searchFormSchema),
  });

  const handleSearchPosts: SubmitHandler<SearchFormData> = async (data) => {
    await getIssues(data.query);
  };

  return (
    <ContainerSearch onSubmit={handleSubmit(handleSearchPosts)}>
      <div>
        <p>Publicações</p>
        {<span>Publicações: {issuesLength}</span>}
      </div>

      
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register("query")}
        />
      
    </ContainerSearch>
  );
}
