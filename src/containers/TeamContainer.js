import {Grid} from "@mui/material";
import TeamMember from "../components/TeamMember";
import {useState} from "react";
import {TeamMembersList} from "../info"

const TeamContainer = () => {

    const [memberList, updateMemberList] = useState(TeamMembersList);

    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
        >
            {
                memberList.map(member => {
                    return (
                        <Grid key={member.id} item xs={12} sm={6} md={4}>
                            <TeamMember member={member} />
                        </Grid>
                    )
                })
            }

        </Grid>
    );

}

export default TeamContainer;