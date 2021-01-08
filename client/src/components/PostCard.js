import React from 'react';
import { Card, Icon, Label,Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import moment from 'moment';

function PostCard({ post: { body, createdAt, id, username, likeCount, commentCount, likes}}){
    return (
        <Card fluid>
            <Card.Content>
                <Image floated="right" size="mini" />
                <Card.Header>{{username}}</Card.Header>
                <Card.Meta as={ Link } to={`/posts/${id}`}>{moment(createdat).fromNow()}</Card.Meta>
                <Card.Description>{body}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <p>Hello</p>
            </Card.Content>
        </Card>
    )
}

export default PostCard