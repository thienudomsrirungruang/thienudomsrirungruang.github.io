import "./MainContent.css";
import { Container, Grid } from "@material-ui/core";
import bio from "../assets/text/Bio.js"
import timetable from "../assets/text/TimetableSpreadsheet.js"
import FadeInSection from "./FadeInSection";
import PlaceholderImage from "../assets/images/placeholder.png"
import Paragraphize from "./Paragraphize";

function MainContent(props){
    return (
        <div className="content_wrapper">
            <Container>
                <h1>Bio</h1>
                <Grid container spacing={5}>
                    <Grid item xs={12} md={6}>
                        <FadeInSection fade_direction="fade_right">
                            <Paragraphize content={bio}></Paragraphize>
                        </FadeInSection>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FadeInSection fade_direction="fade_left">
                            <img class="inline_image" src={PlaceholderImage} alt="placeholder"/>
                        </FadeInSection>
                    </Grid>
                </Grid>
                <h1>Projects</h1>
                <Grid container spacing={5}>
                    <Grid item xs={12} md={8}>
                        <FadeInSection fade_direction="fade_right">
                            <h3>Timetable Spreadsheet</h3>
                            <Paragraphize content={timetable}></Paragraphize>
                            <p>You can find this <a href="https://docs.google.com/spreadsheets/d/1whLY_6DZZo7oUEzyGk94aX59XgR2EmK9iYAlogeQ8kE/edit?usp=sharing">
                                here
                            </a> and the instructions <a href="https://docs.google.com/document/d/1JAS3doUkGZXRaHi1lSiXcSqMTLsJ4HO2N7qkAgVb070/edit?usp=sharing">
                                here
                            </a>.
                            </p>
                        </FadeInSection>
                    </Grid>
                    <Grid item xs={12} md={4}>
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

