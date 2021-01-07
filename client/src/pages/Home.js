import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Grid, Image } from 'semantic-ui-react';

function Home() {
    const { loading, data } = useQuery(FETCH_POSTS_QUERY)

    if(data){
        console.log(data)
    }
    return (
        <Grid columns={3} divided>
            <Grid.Row>
                <h1>Recent Posts</h1>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

const FETCH_POSTS_QUERY = gql `
    {
        getPosts{
            id body createdAt username likeCount
            likes{
                username
            }
            commentCount
            comments{
                id username createdAt body 
            }
        }
    }
`
export default Home;