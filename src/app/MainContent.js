import "./MainContent.css";
import { Container, Grid } from "@material-ui/core";
import bio from "../assets/text/bio.js"
import FadeInSection from "./FadeInSection";
import PlaceholderImage from "../assets/images/placeholder.png"
import Paragraphize from "./Paragraphize";

function MainContent(props){
    return (
        <div className="content_wrapper">
            <Container>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={6}>
                        <FadeInSection fade_direction="fade_right">
                            <h1>Bio</h1>
                            <Paragraphize content={bio}></Paragraphize>
                        </FadeInSection>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FadeInSection fade_direction="fade_left">
                            <img class="inline_image" src={PlaceholderImage} alt="placeholder"/>
                        </FadeInSection>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default MainContent;

