import React from "react";
import {
    PageContainer,
    AvatarIcon,
    NameTag,
    ItemList,
} from '../Style/ProfileStyle';
import { 
    Divider,
    List,
    Surface,
    Text,
    Switch,
 } from "react-native-paper";
 import {
     View,
 } from 'react-native';
 import AboutIcon from '../assets/about.png';
 import DarkIcon from '../assets/night.png';
 import EditIcon from '../assets/pencil.png';
 import RouteIcon from '../assets/routes.png';
 import LogoutIcon from '../assets/logout.png';
 import Bg from '../assets/SettingsBg.jpg';

function Profile({history}) {
    return(
        <PageContainer source={Bg}>
            <AvatarIcon size={150} label="AZ" />
            <NameTag>Name</NameTag>
            <Divider />
            <Surface style={{width:'90%',height:'auto',elevation:4}}>
                <ItemList
                        title="Dark Theme"
                        description="This enables the dark theme"
                        right={() => <Switch value={false} />}
                        left={() => <List.Icon icon={DarkIcon} />}
                />
                <Divider />
                <ItemList
                    title="Pull Notification"
                    description="This disables the pull notification"
                    right={() => <Switch value={false} />}
                    left={() => <List.Icon icon={DarkIcon} />}
                />
                <Divider />
                <ItemList
                    title="Edit Personal details"
                    description="Name, Password, Email, Contact..."
                    left={() => <List.Icon icon={EditIcon} />}
                />
                <Divider />
                <ItemList
                    title="My Route info"
                    description="Route no, Driver Info..."
                    left={() => <List.Icon icon={RouteIcon} />}
                />
                <Divider />
                <ItemList
                    title="About App"
                    left={() => <List.Icon icon={AboutIcon} />}
                />
                <Divider />
                <ItemList
                    title="Logout"
                    left={() => <List.Icon icon={LogoutIcon} />}
                    onPress={() => {history.push("/Register");}}
                />
            </Surface>
        </PageContainer>
    );
}

export default Profile;