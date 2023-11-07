import { useContext } from 'react';
import { ThemeContext } from '../App';
import {
  FacebookShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";
import {
  FacebookIcon,
  WhatsappIcon,
  TwitterIcon,
  LinkedinIcon,
} from "react-share";

function SocialShare({url,label}) {
    const themeData = useContext(ThemeContext);
    const {theme , toggleTheme} = themeData;
  return (
    <div className="social-share">
      <h4 className='social-heading'>Share this amazing recipe with your friends & family</h4>
      <div className="social-btns mt-4">
        <FacebookShareButton url={url} className='mx-2' quote={label}>
                  <FacebookIcon
                    round={true}
                    size={32}
                    iconFillColor={theme === 'light' ? '#4ecca3' : '#7d98e3'}
                    bgStyle={{ fill:theme === 'light' ? '#1E1E1E' : '#EAE4E4' }}
                  ></FacebookIcon>
                </FacebookShareButton>

                <WhatsappShareButton url={url} className='mx-2' title={label}>
                  <WhatsappIcon
                    round={true}
                    size={32}
                      iconFillColor={theme === 'light' ? '#4ecca3' : '#7d98e3'}
                    bgStyle={{ fill:theme === 'light' ? '#1E1E1E' : '#EAE4E4' }}
                  ></WhatsappIcon>
                </WhatsappShareButton>

                <TwitterShareButton url={url} className='mx-2'  title={label}>
                  <TwitterIcon
                    round={true}
                    size={32}
                      iconFillColor={theme === 'light' ? '#4ecca3' : '#7d98e3'}
                    bgStyle={{ fill:theme === 'light' ? '#1E1E1E' : '#EAE4E4' }}
                  ></TwitterIcon>
                </TwitterShareButton>

                <LinkedinShareButton url={url} className='mx-2' title={label}>
                  <LinkedinIcon
                    round={true}
                    size={32}
                      iconFillColor={theme === 'light' ? '#4ecca3' : '#7d98e3'}
                    bgStyle={{ fill:theme === 'light' ? '#1E1E1E' : '#EAE4E4' }}
                  ></LinkedinIcon>
                </LinkedinShareButton>
      </div>
    </div>
  )
}

export default SocialShare
