import React from 'react';
import { Card, Icon, Label, Image, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import moment from 'moment';

function PostCard({ post: { body, createdAt, id, username, likeCount, commentCount, likes}}){

    function likePost(){

    }

    function commentPost(){

    }

    return (
        <Card fluid>
            <Card.Content>
                <Image floated="right" size="mini" src="https://react.semantic-ui.com/images/avatar/small/molly.png" />
                <Card.Header>{username}</Card.Header>
                <Card.Meta as={ Link } to={`/posts/${id}`}>{moment(createdAt).fromNow()}</Card.Meta>
                <Card.Description>{body}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div>
                    <Button as='div' labelPosition='right' onClick={likePost}>
                        <Button color='red' basic>
                            <Icon name='heart' />
                        </Button>
                        <Label as='a' basic color='red' pointing='left'>
                           {likeCount}
                        </Label>
                        </Button>
                    <Button as='div' labelPosition='right' onClick={commentPost}>
                            <Button basic color='blue' basic>
                                <Icon name='comments' />
                        </Button>
                        <Label as='a' basic color='blue' pointing='left'>
                            {commentCount}
                        </Label>
                    </Button>
                </div>
            </Card.Content>
        </Card>
    )
}

export default PostCard