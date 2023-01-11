import { graphQLRequest } from "./request";

export const folderLoader = async () => {
  const query = `query Folder { 
    folders {
      id
      name
      createdAt
    }
  }`;

  const data = await graphQLRequest({ query });
  return data;
};
