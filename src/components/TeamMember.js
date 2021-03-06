import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia, Divider, List,
    ListItem, ListItemIcon, ListItemText,
    Typography
} from "@mui/material";


import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';

const TeamMember = (props) => {

    const member = props.member;

    return (
        <Card sx={{ maxWidth: 380 }}>
            <CardMedia
                component="img"
                height="300"
                image={`${process.env.PUBLIC_URL}/images/${member.id}.png`}
                alt="default avatar"
            />
            <CardContent>

                <Typography align={"center"} component="h2" variant="h5">
                    {member.name}
                </Typography>

                <Typography align={"center"} gutterBottom >
                    {member.speciality}
                </Typography>

                <Divider />

                <List>
                    <ListItem>
                        <ListItemIcon>
                            <MailIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography>
                                {member.mail}
                            </Typography>
                        </ListItemText>
                    </ListItem>

                    <ListItem>
                        <ListItemIcon>
                            <LocationOnIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography>
                                {member.address}
                            </Typography>
                        </ListItemText>
                    </ListItem>
                </List>

            </CardContent>

            <CardActions>
                <Button href={member.github} > <GitHubIcon /> </Button>
                <Button href={member.linkedin} > <LinkedInIcon /> </Button>
            </CardActions>

        </Card>
    );

}

export default TeamMember;