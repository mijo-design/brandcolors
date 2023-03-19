type BrandColors = {
    /** Name of the brand. e.g.: YouTube */
    name: string
    /** Array of colors of the brand. e.g.: [{ name: 'Red', hex: '#FF0000' }] */
    brandColors: Color[]
    /** URL of the brand. e.g.: https://www.youtube.com/ */
    brandUrl: string
    /** Link to source where you found the colors. e.g.: https://www.youtube.com/howyoutubeworks/resources/brand-resources/#logos-icons-and-colors */
    source: string
    /** URL of the brand logo. e.g.: https://www.youtube.com/yts/img/favicon_32-vflOogEID.png */
    brandLogo?: {
        url: string
        source?: string
    }
}

type Color = {
    /** Name of the color. e.g.: Red */
    name?: string
    /** Hex value of the color. e.g.: #FF0000 */
    hex: string
    /** CYMK value of the color. e.g.: 0,100,100,0 */
    cymk?: string
    /** Pantone value of the color. e.g.: 186 */
    pantone?: string
}