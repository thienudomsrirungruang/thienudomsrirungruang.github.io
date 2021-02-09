import "./MainContent.css";
import { Container, Grid } from "@material-ui/core";
import bio from "../assets/text/Bio.js"
import timetable from "../assets/text/TimetableSpreadsheet.js"
import impostor from "../assets/text/Impostor.js"
import FadeInSection from "./FadeInSection";
import PlaceholderImage from "../assets/images/placeholder.png"
import Paragraphize from "./Paragraphize";
import ImpostorImage from "../assets/images/impostor.png"
import warships from "../assets/text/Warships.js"

function MainContent(props){
    return (
        <div className="content_wrapper">
            <Container>
                <FadeInSection fade_direction="fade_right">
                    <h1>Bio</h1>
                    <Grid container spacing={5}>
                        <Grid item xs={12} md={6}>
                            <Paragraphize content={bio}></Paragraphize>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <img className="inline_image" src={PlaceholderImage} alt="placeholder"/>
                        </Grid>
                    </Grid>
                </FadeInSection>
                <FadeInSection fade_direction="fade_right">
                    <h1>Projects</h1>
                    <Grid container spacing={5}>
                        <Grid item xs={12} md={8}>
                            <h3>Timetable Spreadsheet</h3>
                            <Paragraphize content={timetable}></Paragraphize>
                            <p>You can find this <a href="https://docs.google.com/spreadsheets/d/1whLY_6DZZo7oUEzyGk94aX59XgR2EmK9iYAlogeQ8kE/edit?usp=sharing">
                                here
                            </a> and the instructions <a href="https://docs.google.com/document/d/1JAS3doUkGZXRaHi1lSiXcSqMTLsJ4HO2N7qkAgVb070/edit?usp=sharing">
                                here
                            </a>.
                            </p>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <img className="inline_image" src={PlaceholderImage} alt="placeholder"/>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <img className="inline_image" src={ImpostorImage} alt="placeholder"/>
                        </Grid>
                        <Grid item xs={12} md={9}>
                            <h3>Impostor Chatbot</h3>
                            <Paragraphize content={impostor}></Paragraphize>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <h3>Warships</h3>
                            <Paragraphize content={warships}></Paragraphize>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <img className="inline_image" src={PlaceholderImage} alt="placeholder"/>
                        </Grid>
                    </Grid>
                </FadeInSection>
            </Container>
        </div>
    );
}

export default MainContent;

