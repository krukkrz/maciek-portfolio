const YouTubeEmbed = (props: { id: string }) => {
    return (
        <iframe
            className="w-full aspect-video"
            src={"https://www.youtube.com/embed/" + props.id}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
        />
    );
};

export default YouTubeEmbed;