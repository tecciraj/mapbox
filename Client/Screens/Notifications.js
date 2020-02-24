import React from 'react';
import {
    PageWrap,
    MsgText,
} from '../Style/NotificationStyle';
import {
    Card,
    Title,
    Button,
    Paragraph,
} from 'react-native-paper';

// <PageWrap>
//         <MsgText>No Notifications to show</MsgText>
// </PageWrap>


const Notifications = () => {
    return(
        <PageWrap>
            <Card style={{width:'90%',elevation:1}}>
                <Card.Content>
                    <Title>Sample notification header</Title>
                    <Paragraph>Brief about notification...</Paragraph>
                </Card.Content>
            </Card>
        </PageWrap>
    );
}

export default Notifications;