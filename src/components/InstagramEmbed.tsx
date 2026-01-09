import { useEffect } from "react";

declare global {
    interface Window {
        instgrm?: { Embeds: { process: () => void } };
    }
}

const InstagramEmbed = (props: { id: string }) => {
    useEffect(() => {
        if (window.instgrm) {
            window.instgrm.Embeds.process();
        }
    }, [props.id]);

    const url = "https://www.instagram.com/p/" + props.id + "/";

    return (
        <blockquote
            className="instagram-media"
            data-instgrm-permalink={url}
            data-instgrm-version="14"
        >
            {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
            <a href={url} aria-label="Instagram post" />
        </blockquote>
    );
};

export default InstagramEmbed;