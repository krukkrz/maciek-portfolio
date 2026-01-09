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
    type?: VideoType
}

export type VideoType = 'VERTICAL' | 'HORIZONTAL'