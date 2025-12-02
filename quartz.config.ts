import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Logan's Lab",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        /*
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
        */
        /*
        header: "Orbitron",            // futuristic, glowing/arcane
        body: "Source Sans Pro",       // readable neutral body
        code: "Fira Code",             // modern programming feel with ligatures
        */
        /*
        header: "Exo 2",             // futuristic/technical titles
        body: "Source Sans Pro",      // neutral, scientific readability
        code: "IBM Plex Mono"         // clean lab notebook style
        */
        /*
        header: "Roboto Slab",       // academic serif, formal
        body: "IBM Plex Sans",        // neutral, readable, scientific
        code: "Fira Code"             // technical, programming friendl
        */
        header: "Orbitron",           // futuristic, techy headings
        body: "Roboto",                // clean, neutral scientific body text
        code: "Space Mono"             // sci-fi terminal feel


      },
      colors: {
        lightMode: {
          /*
          light: "#073642",     // page background
          lightgray: "#2aa198", // borders
          gray: "#859900",      // Graph Links, heavy border
          darkgray: "#268bd2",  // Body text
          dark: "#6c71c4",      // Header text and icons
          secondary: "#d33682", // link color
          tertiary: "#cb4b16",  // hover states and visited graph nodes
          highlight: "rgba(143, 159, 169, 0.15)", // internal link background highlighted text, highlighted lines of code
          textHighlight: "#fff23688", // markdown highlighted text background
          */

          /*
          light:       "#0b1523",     // deep desaturated blue background
          lightgray:   "#3aaed8",     // borders / delicate highlights
          gray:        "#4ad9c0",     // graph links (cyan/teal lab glow)
          darkgray:    "#b5d6ff",     // body text (cool soft-blue white)
          dark:        "#7f9fff",     // headers / icons (scientific-feeling periwinkle)
          secondary:   "#18e0ff",     // links (bright aqua neon)
          tertiary:    "#00ffa6",     // hover states (neon lab green)
          highlight:   "rgba(0, 255, 230, 0.12)", // subtle cyan glow behind highlighted text
          textHighlight: "#244aff88", // translucent electric-blue
          */

          /*
          light:       "#06101c",     // darker, more cinematic background
          lightgray:   "#45c8f5",     // borders (electric cyan)
          gray:        "#37ffc4",     // graph links (bright mint)
          darkgray:    "#e0ecff",     // body text (near-white with blue tint)
          dark:        "#9bb0ff",     // header text (neon periwinkle)
          secondary:   "#ff4df0",     // link color (bright magenta sci-fi highlight)
          tertiary:    "#00ffb3",     // hover states (green-hologram glow)
          highlight:   "rgba(0, 255, 194, 0.18)", // strong teal glow
          textHighlight: "#7f00ff66", // lavender-violet sci-fi highlighting
          */

          /*
          light:       "#0e1a26",     // calm deep blue
          lightgray:   "#7ac4d8",     // subtle borders
          gray:        "#4fa0b5",     // graph links
          darkgray:    "#d5e4ef",     // body text (soft ice white)
          dark:        "#8cabff",     // header text
          secondary:   "#5fd1ff",     // light-blue links
          tertiary:    "#43f6c1",     // hover/visited nodes
          highlight:   "rgba(95, 209, 255, 0.15)", // gentle analytical blue highlight
          textHighlight: "#fff36a55", // pale laboratory yellow marker
          */

/*
          light:       "#0b1a13",        // deep forest background
          lightgray:   "#5c7f71",        // soft mossy borders
          gray:        "#89a88f",        // graph links / soft green connections
          darkgray:    "#dfeee4",        // body text (misty pale green)
          dark:        "#c4e8d9",        // headers (moonlit mint)
          secondary:   "#88ffe0",        // links (magical turquoise glow)
          tertiary:    "#a4ff6f",        // hover states (fae-green shimmer)
          highlight:   "rgba(140, 250, 175, 0.15)", // soft emerald glimmer
          textHighlight: "#fff6a088",    // “sunbeam” yellow
          */

          light:       "#002b36",  // background (base03)
          lightgray:   "#586e75",  // borders / secondary elements (base01)
          gray:        "#839496",  // graph links / muted elements (base0)
          darkgray:    "#93a1a1",  // body text (base1)
          dark:        "#eee8d5",  // headers / icons (base2)
          secondary:   "#268bd2",  // links (blue)
          tertiary:    "#2aa198",  // hover states / visited nodes (cyan)
          highlight:   "rgba(42, 161, 152, 0.15)", // subtle highlight for internal links / code
          textHighlight: "#b5890066", // yellow for highlighted text

        },
        darkMode: {
          light: "#161618",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#7b97aa",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
