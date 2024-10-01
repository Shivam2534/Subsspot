import {
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  RedditShareButton,
  RedditIcon,
  TelegramShareButton,
  TelegramIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

const ShareButtons = () => {
  const shareUrl = "https://subsspot.vercel.app/";
  const title =
    "Check out this awesome website! and enjoy youtube premium at minimum cost";

  return (
    <div className="flex gap-3">
      <WhatsappShareButton url={shareUrl} title={title}>
        <WhatsappIcon size={36} round />
      </WhatsappShareButton>
      <TelegramShareButton url={shareUrl} title={title}>
        <TelegramIcon size={36} round />
      </TelegramShareButton>
      <FacebookShareButton url={shareUrl} title={title}>
        <FacebookIcon size={36} round />
      </FacebookShareButton>
      <LinkedinShareButton url={shareUrl} title={title}>
        <LinkedinIcon size={36} round />
      </LinkedinShareButton>
      <TwitterShareButton url={shareUrl} title={title}>
        <TwitterIcon size={36} round />
      </TwitterShareButton>
      <EmailShareButton url={shareUrl} title={title}>
        <EmailIcon size={36} round />
      </EmailShareButton>
      <RedditShareButton url={shareUrl} title={title}>
        <RedditIcon size={36} round />
      </RedditShareButton>
    </div>
  );
};

export default ShareButtons;
