import technologies from "./technologies.jsx"
import features from './features.jsx'

const projects =
{
    FastTrack: {
        Title: "Fast Track",
        Slogan: "Log it, Track it, Done",
        ShortDescription: 'Issue Tracking Web Application',
        LongDescription: 'is a longer description',
        Features: [
            features.login,
            features.authorization,
            features.authentication,
            features.crud
        ],
        Technologies: [
            technologies.aspCoreMvc,
            technologies.aspCore,
            technologies.bootstrap,
            technologies.html,
            technologies.css,
            technologies.javaScript,
            technologies.sourceControl,
            technologies.postgreSql
        ],
        BannerLink: 'https://i.postimg.cc/xTy7N3DK/Bug-Tracks.png',
        SiteLink: 'private',
        GitLink: 'https://github.com/Peterkb/BugTracks',

        Featured: true,
        isReady: true,
        Modal: 'BugTracksModal',
        Css: 'bugtracks'       
    },
    ContactCrate: {
        Title: "Contact Crate",
        ShortDescription: 'Next level Contact Book',
        LongDescription: 'This is a longer description',
        Features: [
            features.login,
            features.authorization,
            features.authentication,
            features.crud
        ],
        Technologies: [
            technologies.netMvc6,
            technologies.bootstrap,
            technologies.javaScript,
            technologies.html,
            technologies.css,
            technologies.postgreSql,
            technologies.sourceControl
        ],
        BannerLink: 'https://i.postimg.cc/9QcbfVBf/Contact-Crate1.png',
        SiteLink: 'https://contactcrate.up.railway.app/',
        GitLink: 'https://github.com/Peterkb/ContactCrate',

        Featured: false,
        isReady: true,
        Modal: 'ContactCrateModal',
        Css: 'contactCrate'
    },
    Blog: {
        Title: "My Blog",
        ShortDescription: 'Cheat sheet to my coding journey',
        LongDescription: 'This is a longer description',
        Features: [
            features.login,
            features.authorization,
            features.authentication,
            features.crud
        ],
        Technologies: [
            technologies.cSharp,
            technologies.netMvc6,
            technologies.bootstrap,
            technologies.html,
            technologies.javaScript,
            technologies.css,
            technologies.postgreSql,
            technologies.sourceControl
        ],
        BannerLink: 'https://i.postimg.cc/XqPYDd1s/Code-Drops.png',
        SiteLink: '',
        GitLink: '',

        Featured: false,
        isReady: true,
        Modal: 'BlogModal',
        Css: 'blog'
    },
    MoviePro: {
        Title: "Movie Pro",
        ShortDescription: 'My coding journey written down',
        LongDescription: 'A Blogging site web application written with C# Asp.Net 6 MVC.',
        Features: [
            features.login,
            features.authorization,
            features.authentication,
            features.crud,
            features.comments
        ],
        Technologies: [
            technologies.cSharp,
            technologies.netMvc6,
            technologies.bootstrap,
            technologies.javaScript,
            technologies.html,
            technologies.css,
            technologies.postgreSql
        ],
        BannerLink: 'https://bootstrapmade.com/content/templatefiles/Techie/Techie-bootstrap-website-template.avif',
        SiteLink: '',
        GitLink: 'https://github.com/Peterkb/MovieProNet6MVC',

        Featured: false,
        Modal: 'MovieProModal',
    },
    BlazorCom: {
        Title: "Blazor Com",
        ShortDescription: 'EComm Site Made with Asp.Net Blazor',
        LongDescription: 'This is a longer description',
        Features: [
            features.login,
            features.authorization,
            features.authentication,
            features.crud
        ],
        Technologies: [
            technologies.aspCore,
            technologies.blazor,
            technologies.bootstrap,
            technologies.javaScript,
            technologies.html,
            technologies.css,
            technologies.postgreSql,
            technologies.sourceControl
        ],
        BannerLink: 'https://bootstrapmade.com/content/templatefiles/Techie/Techie-bootstrap-website-template.avif',
        SiteLink: '#',
        GitLink: '#',

        Featured: false,
        isReady: false,
        Modal: 'BlazorComModal',
        Css: 'blazorcom'
    },

    // Live Sites
    DrFB: {
        Title: "Dr F Badenhorst",
        ShortDescription: 'Medical practice information and blogging site',
        LongDescription: 'This is a longer description',
        Features: [
            features.login,
            features.authorization,
            features.authentication,
            features.crud
        ],
        Technologies: [
            technologies.wordpress,
            technologies.php,
            technologies.css
        ],
        BannerLink: 'https://i.postimg.cc/KYGmQKDy/Dr-FBadenhorst.png',
        SiteLink: 'https://drfbadenhorst.com/',
        GitLink: 'private',

        Featured: false,
        isReady: true,
        Modal: 'drFBadenhorstModal',
        Css: 'drfb'
    },
    ItaEcco: {
        Title: "ita-ecco",
        ShortDescription: 'Italian Language Learning, Podcast & Blogging Site',
        LongDescription: 'This is a longer description',
        Features: [
            features.login,
            features.authorization,
            features.authentication,
            features.crud,
            'Stripe payment Integration',
            'Calender Booking'
        ],
        Technologies: [
            technologies.wordpress,
            technologies.php,
            technologies.css
        ],
        BannerLink: 'https://i.postimg.cc/4NRQpjcV/Ita-Ecco.png',
        SiteLink: 'https://www.ita-ecco.com/',
        GitLink: 'private',

        Featured: false,
        isReady: true,
        Modal: 'itaEccoModal',
        Css: 'itaecco'
    },

    // Coding Projects
    FizzBuzz: {
        Title: "FizzBuzz",
        ShortDescription: 'The classic FizzBuzz App',
        LongDescription: 'A FizzBuzz Web Application that takes user input and generates a list of numbers between 0 and 100 substituting numbers divisible ',
        Features: [
            features.userInput,
            features.domManipulation
        ],
        Technologies: [
            technologies.javaScript,
            technologies.html,
            technologies.css,
            technologies.sourceControl
        ],
        BannerLink: 'https://i.postimg.cc/G2jrcwzs/FizzBuzz.png',
        SiteLink: 'https://cerulean-strudel-05fc4c.netlify.app/index.html',
        GitLink: 'https://github.com/Peterkb/FizzBuzz',

        Featured: false,
        isReady: true,
        Modal: 'FizzBuzzModal',
        Css: 'fizzbuzz'
    },
    EasyLoan: {
        Title: "Mortage Calculator",
        ShortDescription: 'Amortization calculator',
        LongDescription: 'A web based application that displays an amortization table with monthly payment information taking in the principal amount, number of payments and intrest rate as user input. It is achieved by using regular expressions, objects, loops, functions, and conditional statements.',
        Features: [
            features.userInput,
            features.domManipulation
        ],
        Technologies: [
            technologies.javaScript,
            technologies.html,
            technologies.css,
            technologies.bootstrap,
            technologies.sourceControl
        ],
        BannerLink: 'https://i.postimg.cc/BQfDJ9MM/EasyLoan.png',
        SiteLink: 'https://spectacular-frangollo-95a65a.netlify.app/',
        GitLink: 'https://github.com/Peterkb/LoanCalculator',

        Featured: false,
        isReady: true,
        Modal: 'MortCalcModal',
        Css: 'mortage'
    },
    LionOil: {
        Title: "Lion Oil",
        ShortDescription: 'Palindrome Checker',
        LongDescription: 'This is a longer description',
        Features: [                
            features.userInput,
            features.domManipulation
        ],
        Technologies: [
            technologies.javaScript,
            technologies.html,
            technologies.css,
            technologies.bootstrap,
            technologies.sourceControl
        ],
        BannerLink: 'https://i.postimg.cc/hGZ2BFM2/LionOil.png',
        SiteLink: 'https://snazzy-hamster-700577.netlify.app/code.html',
        GitLink: 'https://github.com/Peterkb/LionOil',

        Featured: false,
        isReady: true,
        Modal: 'LionOilModal',
        Css: 'lionoil'
    }
}

export default projects