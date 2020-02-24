import styled from 'styled-components/native';
import {
    Avatar,
    List,
} from 'react-native-paper';

export const PageContainer = styled.View`
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    text-align: center;
    height:100%;
    tintColor:white;
`;

export const AvatarIcon = styled(Avatar.Text)`         
    margin-top: 5%;
`;

export const NameTag = styled.Text`
    font-size:22px;
    padding: 10px;
    color:#000;
`;

export const ItemList = styled(List.Item)`
`;
