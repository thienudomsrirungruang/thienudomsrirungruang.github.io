import "./MainContent.css";
import { Container, Grid } from "@material-ui/core";
import bio from "../assets/text/bio.js"

function MainContent(props){
    return (
        <div className="content_wrapper">
            <Container>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={6}>
                        <h1>Bio</h1>
                        <p>{bio}</p>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default MainContent;

