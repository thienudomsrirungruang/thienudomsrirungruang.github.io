import { Container } from "@material-ui/core";
import Box from '@material-ui/core/Box';
import "./Footer.css";

function Footer() {
    return (
        <Box boxShadow={5} id="footer_wrapper">
            <Container>
                <div id="footer">
                    This website was made in React, and deployed with github-pages, by yours truly. View the github repo <a href="https://github.com/thienudomsrirungruang/thienudomsrirungruang.github.io">here</a>.
                </div>
            </Container>
        </Box>
    );
}

export default Footer;
