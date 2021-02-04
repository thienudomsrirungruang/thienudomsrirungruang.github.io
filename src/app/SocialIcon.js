import './SocialIcon.css';
import { Divider, IconButton, SvgIcon, Tooltip, withStyles } from '@material-ui/core';

function SocialIcon(props) {
    const IconTooltip = withStyles((theme) => ({
        tooltip: {
            backgroundColor: "#F8F7F6",
            fontSize: 11,
            color: "#1E1C25",
            border: "1px",
        }
    })) (Tooltip);
    return (
        <div className="grayout icon_wrapper">
            <IconTooltip title={props.alt}>
                <div>
                    <a aria-label={props.aria_label} href={props.link}>
                        <img src={props.icon} alt={props.alt} className="btn"></img>
                    </a>
                </div>
            </IconTooltip>
        </div>
    );
}

export default SocialIcon;
