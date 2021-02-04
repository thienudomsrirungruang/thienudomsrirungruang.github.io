import './SocialIcon.css';
import { Divider, IconButton, SvgIcon, Tooltip } from '@material-ui/core';

function SocialIcon(props) {
    return (
        <div class="grayout icon_wrapper">
            <a aria-label={props.aria_label} href={props.link}>
                <img src={props.icon} alt={props.alt} class="btn"></img>
            </a>
        </div>
    );
}

export default SocialIcon;
