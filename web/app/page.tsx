import { graphqlClient } from "@/lib/graphql-client";
import { graphql } from "../gql";

const GetAllProjects = graphql(/* GraphQL */ `
  query GetAllProjects {
    projects {
      data {
        id
        attributes {
          title
        }
      }
    }
  }
`);

export default async function Home() {
  const { projects } = await graphqlClient.request(GetAllProjects);

  return (
    <main>
      <p>Hello World</p>
      {projects && (
        <div>
          {projects.data.map(({ id, attributes }) => (
            <div key={id}>
              <h2>{attributes?.title}</h2>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
