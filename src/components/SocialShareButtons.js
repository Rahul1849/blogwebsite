import React from 'react';

const SocialShareButtons = ({ url }) => {
  return (
    <div className="social-share">
      <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}>Share on Facebook</a>
      <a href={`https://twitter.com/intent/tweet?url=${url}`}>Share on Twitter</a>
      <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}>Share on LinkedIn</a>
    </div>
  );
};

export default SocialShareButtons;
