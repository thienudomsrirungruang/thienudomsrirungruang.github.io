import './App.css';
import SocialIcon from './SocialIcon';
import Box from '@material-ui/core/Box';
import GithubIcon from '../assets/icons/GithubIcon.svg';
import CodeforcesIcon from '../assets/icons/CodeforcesIcon.svg';
import AtcoderIcon from '../assets/icons/AtcoderIcon.png'

function App() {
    return (
        <div id="window_container">
            <Box boxShadow={10} id="top">

            </Box>
            <Box boxShadow={5} id="bottom">
                <div class="centerer">
                    <SocialIcon
                        link="https://github.com/thienudomsrirungruang"
                        icon={GithubIcon}
                        aria_label="github"
                        alt="Github"
                    />
                    <SocialIcon
                        link="https://codeforces.com/profile/Thienu"
                        icon={CodeforcesIcon}
                        aria_label="codeforces"
                        alt="Codeforces"
                    />
                    <SocialIcon
                        link="https://atcoder.jp/users/Thienu"
                        icon={AtcoderIcon}
                        aria_label="atcoder"
                        alt="Atcoder"
                    />
                </div>
            </Box>
            <div class="middle_container">
                <div class="picture"></div>
            </div>
        </div>
    );
}

export default App;
