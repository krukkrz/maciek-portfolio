export type Portfolio = {
    sections: Section[]
}

export type Section = {
    title: string
    videos: Video[]
}

export type Video = {
    title: string
    yt_id?: string
    ig_id?: string
}