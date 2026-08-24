function TikTokEmbed({ videoId }) {
  return (
    <iframe
      className="tiktok-iframe"
      src={`https://www.tiktok.com/embed/v2/${videoId}`}
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      referrerPolicy="no-referrer-unsafe-url"
      title="YH Models TikTok video"
    />
  );
}

export default TikTokEmbed;
