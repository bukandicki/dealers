import FacebookIcon from "@/assets/icons/Facebook.vue";
import TwitterIcon from "@/assets/icons/Twitter.vue";
import IstagramIcon from "@/assets/icons/Instagram.vue";
import YoutubeIcon from "@/assets/icons/Youtube.vue";
import EmailIcon from "@/assets/icons/Email.vue";
import MapPinIcon from "@/assets/icons/MapPin.vue";
import DownloadIcon from "@/assets/icons/Download.vue";
import CarIcon from "@/assets/icons/Car.vue";
import CalculatorIcon from "@/assets/icons/Calculator.vue";
import NoteIcon from "@/assets/icons/Note.vue";

export const socialMedia = [
    {
        id: 0,
        icon: FacebookIcon,
        to: "#"
    },
    {
        id: 1,
        icon: TwitterIcon,
        to: "#"
    },
    {
        id: 2,
        icon: IstagramIcon,
        to: "#"
    },
    {
        id: 3,
        icon: YoutubeIcon,
        to: "#"
    },
    {
        id: 4,
        icon: EmailIcon,
        to: "#"
    }
];

export const navLinks = [
    {
        id: 1,
        title: "about us",
        hasDropdown: true,
        to: "#"
    },
    {
        id: 2,
        title: "explore cars",
        hasDropdown: true,
        to: "#"
    },
    {
        id: 3,
        title: "promo",
        hasDropdown: false,
        to: "#"
    },
    {
        id: 4,
        title: "news & events",
        hasDropdown: true,
        to: "#"
    }
];

export const menuLinks = [
    {
        id: 1,
        title: "FIND DEALER",
        icon: MapPinIcon,
        to: "#"
    },
    {
        id: 2,
        title: "BROCHURE DOWNLOAD",
        icon: DownloadIcon,
        to: "#"
    },
    {
        id: 3,
        title: "TEST DRIVE",
        icon: CarIcon,
        to: "#"
    },
    {
        id: 4,
        title: "CREDIT SIMULATION",
        icon: CalculatorIcon,
        to: "#"
    },
    {
        id: 5,
        title: "PURCHASE CONSULTATION",
        icon: NoteIcon,
        to: "#"
    }
];
