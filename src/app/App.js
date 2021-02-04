import './App.css';
import SocialIcon from './SocialIcon';
import Box from '@material-ui/core/Box';
import GithubIcon from '../assets/icons/GithubIcon.svg';

function App() {
    return (
        <div id="window_container">
            <Box boxShadow={5} id="top">

            </Box>
            <div id="bottom">
                <div class="centerer">
                    <SocialIcon
                        link="https://github.com/thienudomsrirungruang"
                        icon={GithubIcon}
                        aria_label="github"
                        alt="Github"
                    />
                </div>
            </div>
            <div class="middle_container">
                <div class="picture"></div>
            </div>
        </div>
    );
}

export default App;
