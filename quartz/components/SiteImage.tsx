import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
interface Options {
    filename: string
}

const defaultOptions: Options = {
    filename: "siteImage.jpg",
}

export default ((userOpts?: Options) => {
    const opts = {...defaultOptions, ...userOpts }
    function SiteImage(props: QuartzComponentProps) {
        return <img src={"static/" + opts.filename} />
    }

    return SiteImage
}) satisfies QuartzComponentConstructor
