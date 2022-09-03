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

export const responseDealers = {
    current_page: 1,
    data: [
        {
            id: 78,
            title: "Srikandi Mampang",
            slug: "srikandi-mampang",
            company: "PT. Srikandi Diamond Motors",
            address: "Jl. Mampang Prapatan No. 21-23, Kota Jakarta Selatan",
            phone: "(021) 79188888 / 78, 79190066",
            province: "DKI Jakarta",
            city: "Jakarta Selatan",
            fax: null,
            website: null,
            latitude: "-6.243485",
            longitude: "106.82534",
            car_type: "semua_kendaraan",
            bengkel_available: true,
            bengkel_open_status: false,
            bengkel_operational_hours: [
                {
                    days: "Monday - Sunday",
                    is_open: true,
                    hours: "8:00 - 16:00"
                }
            ],
            showroom_available: true,
            showroom_open_status: false,
            showroom_operational_hours: [
                {
                    days: "Monday - Sunday",
                    is_open: true,
                    hours: "8:00 - 16:00"
                }
            ],
            distance_km: 1.22,
            services: ["sales", "service", "sparepart"],
            car_types: ["semua_kendaraan"],
            status: "PUBLISHED"
        },
        {
            id: 17,
            title: "Bumen Redja Tebet",
            slug: "bumen-redja-tebet",
            company: "PT. Bumen Redja Abadi",
            address: "Jl. Dr. Saharjo No. 321, Jakarta Selatan, DKI Jakarta",
            phone: "(021) 8309256",
            province: "DKI Jakarta",
            city: "Jakarta Selatan",
            fax: null,
            website: null,
            latitude: "-6.228593",
            longitude: "106.847713",
            car_type: "kendaraan_penumpang,triton",
            bengkel_available: true,
            bengkel_open_status: false,
            bengkel_operational_hours: [
                {
                    days: "Monday - Sunday",
                    is_open: true,
                    hours: "8:00 - 16:00"
                }
            ],
            showroom_available: true,
            showroom_open_status: false,
            showroom_operational_hours: [
                {
                    days: "Monday - Sunday",
                    is_open: true,
                    hours: "8:00 - 16:00"
                }
            ],
            distance_km: 3.53,
            services: ["sales", "service", "sparepart", "bodi-cat"],
            car_types: ["kendaraan_penumpang", "triton"],
            status: "PUBLISHED"
        },
        {
            id: 67,
            title: "Prabu Slipi",
            slug: "prabu-slipi",
            company: "PT Prabu Mandiri Motor",
            address: "Jl. Jend. Gatot Subroto Kav. 50-52, Jakarta Pusat, DKI Jakarta",
            phone: "(021) 5709057, 5709068-69, 5709072",
            province: "DKI Jakarta",
            city: "Jakarta Timur",
            fax: null,
            website: null,
            latitude: "-6.202275",
            longitude: "106.800942",
            car_type: "semua_kendaraan",
            bengkel_available: true,
            bengkel_open_status: false,
            bengkel_operational_hours: [
                {
                    days: "Monday - Sunday",
                    is_open: true,
                    hours: "8:00 - 16:00"
                }
            ],
            showroom_available: true,
            showroom_open_status: false,
            showroom_operational_hours: [
                {
                    days: "Monday - Sunday",
                    is_open: true,
                    hours: "8:00 - 16:00"
                }
            ],
            distance_km: 4.19,
            services: ["sales", "service", "sparepart"],
            car_types: ["semua_kendaraan"],
            status: "PUBLISHED"
        },
        {
            id: 111,
            title: "Ciwangi Ciputat",
            slug: "ciwangi-ciputat",
            company: "PT. Ciwangi Berlian Motors",
            address: "Jl. Raya Ciputat No. 155, Jakarta Selatan, DKI Jakarta",
            phone: "(021) 7401448 (Hunting)",
            province: "DKI Jakarta",
            city: "Jakarta Selatan",
            fax: null,
            website: null,
            latitude: "-6.248842",
            longitude: "106.778054",
            car_type: "semua_kendaraan",
            bengkel_available: true,
            bengkel_open_status: false,
            bengkel_operational_hours: [
                {
                    days: "Monday - Sunday",
                    is_open: true,
                    hours: "8:00 - 16:00"
                }
            ],
            showroom_available: true,
            showroom_open_status: false,
            showroom_operational_hours: [
                {
                    days: "Monday - Sunday",
                    is_open: true,
                    hours: "8:00 - 16:00"
                }
            ],
            distance_km: 4.5,
            services: ["sales", "service", "sparepart"],
            car_types: ["semua_kendaraan"],
            status: "PUBLISHED"
        },
        {
            id: 112,
            title: "Ciwangi Pondok Indah",
            slug: "ciwangi-pondok-indah",
            company: "PT. Ciwangi Berlian Motors",
            address: "Jl. Sultan Iskandar Muda No. 28-29, Jakarta Selatan, DKI Jakarta",
            phone: "Hotline service : (021) 7227365, (021) 7225648",
            province: "DKI Jakarta",
            city: "Jakarta Selatan",
            fax: null,
            website: null,
            latitude: "-6.259684",
            longitude: "106.781595",
            car_type: "kendaraan_penumpang,triton",
            bengkel_available: true,
            bengkel_open_status: false,
            bengkel_operational_hours: [
                {
                    days: "Monday - Sunday",
                    is_open: true,
                    hours: "8:00 - 16:00"
                }
            ],
            showroom_available: true,
            showroom_open_status: false,
            showroom_operational_hours: [
                {
                    days: "Monday - Sunday",
                    is_open: true,
                    hours: "8:00 - 16:00"
                }
            ],
            distance_km: 4.67,
            services: ["sales", "service", "sparepart"],
            car_types: ["kendaraan_penumpang", "triton"],
            status: "PUBLISHED"
        },
        {
            id: 266,
            title: "Mustika Dewi Sartika",
            slug: "mustika-dewi-sartika",
            company: "PT. Mustika Prima Berlian",
            address: "Jl. Dewi Sartika No. 294, Jakarta Timur, DKI Jakarta",
            phone: "(021) 80883636",
            province: "DKI Jakarta",
            city: "Jakarta Timur",
            fax: null,
            website: null,
            latitude: "-6.25243",
            longitude: "106.864973",
            car_type: "kendaraan_niaga,kendaraan_niaga_ringan",
            bengkel_available: true,
            bengkel_open_status: false,
            bengkel_operational_hours: [
                {
                    days: "Monday - Sunday",
                    is_open: true,
                    hours: "8:00 - 16:00"
                }
            ],
            showroom_available: true,
            showroom_open_status: false,
            showroom_operational_hours: [
                {
                    days: "Monday - Sunday",
                    is_open: true,
                    hours: "8:00 - 16:00"
                }
            ],
            distance_km: 5.61,
            services: ["sales"],
            car_types: ["kendaraan_niaga", "kendaraan_niaga_ringan"],
            status: "PUBLISHED"
        },
        {
            id: 44,
            title: "Lautan Berlian Matraman",
            slug: "lautan-berlian-matraman",
            company: "PT. LAUTAN BERLIAN UTAMA MOTOR",
            address: "Jl. Matraman Raya No. 71 - 73, Jakarta Timur, DKI Jakarta",
            phone: "(021) 8581642-45",
            province: "DKI Jakarta",
            city: "Jakarta Timur",
            fax: null,
            website: null,
            latitude: "-6.204191",
            longitude: "106.857905",
            car_type: "kendaraan_niaga,kendaraan_niaga_ringan",
            bengkel_available: true,
            bengkel_open_status: false,
            bengkel_operational_hours: [
                {
                    days: "Monday - Sunday",
                    is_open: true,
                    hours: "8:00 - 16:00"
                }
            ],
            showroom_available: true,
            showroom_open_status: false,
            showroom_operational_hours: [
                {
                    days: "Monday - Sunday",
                    is_open: true,
                    hours: "8:00 - 16:00"
                }
            ],
            distance_km: 5.79,
            services: ["sales", "service", "sparepart"],
            car_types: ["kendaraan_niaga", "kendaraan_niaga_ringan"],
            status: "PUBLISHED"
        },
        {
            id: 79,
            title: "Srikandi Pos Pengumben",
            slug: "srikandi-pos-pengumben",
            company: "PT. Srikandi Diamond Motors",
            address: "Jl. Pos Pengumben Raya No.20, Kebon Jeruk, Kota Jakarta Barat",
            phone: "(021) 22530123, 22530303, 22530333",
            province: "DKI Jakarta",
            city: "Jakarta Barat",
            fax: null,
            website: null,
            latitude: "-6.217634",
            longitude: "106.765582",
            car_type: "kendaraan_penumpang,triton",
            bengkel_available: true,
            bengkel_open_status: false,
            bengkel_operational_hours: [
                {
                    days: "Monday - Sunday",
                    is_open: true,
                    hours: "8:00 - 16:00"
                }
            ],
            showroom_available: true,
            showroom_open_status: false,
            showroom_operational_hours: [
                {
                    days: "Monday - Sunday",
                    is_open: true,
                    hours: "8:00 - 16:00"
                }
            ],
            distance_km: 6.04,
            services: ["sales", "service", "sparepart"],
            car_types: ["kendaraan_penumpang", "triton"],
            status: "PUBLISHED"
        },
        {
            id: 307,
            title: "Mitsubishi Sun Star Prima Motor - Cempaka Putih",
            slug: "mitsubishi-sun-star-prima-motor---cempaka-putih",
            company: "Mitsubishi Sun Star Prima Motor",
            address: "Jl. Letjend Suprapto No.M-78, Cempaka Putih, Jakarta Pusat",
            phone: null,
            province: "DKI Jakarta",
            city: "Jakarta Pusat",
            fax: null,
            website: null,
            latitude: "-6.28807862135264",
            longitude: " 106.79517285049629",
            car_type: "kendaraan_penumpang,kendaraan_niaga_ringan",
            bengkel_available: false,
            bengkel_open_status: false,
            bengkel_operational_hours: [
                {
                    days: "Monday - Sunday",
                    is_open: false,
                    hours: null
                }
            ],
            showroom_available: false,
            showroom_open_status: false,
            showroom_operational_hours: [
                {
                    days: "Monday - Sunday",
                    is_open: false,
                    hours: null
                }
            ],
            distance_km: 6.21,
            services: ["sales", "service"],
            car_types: ["kendaraan_penumpang", "kendaraan_niaga_ringan"],
            status: "PUBLISHED"
        }
    ],
    first_page_url: "?limit=9&page=1",
    from: 1,
    last_page: 35,
    last_page_url: "?limit=9&page=35",
    next_page_url: "?limit=9&page=2",
    path: "",
    per_page: 9,
    prev_page_url: null,
    to: 9,
    total: 309
};

export const responseProvince = [
    {
        id: 11,
        name: "Aceh",
        created_at: null,
        updated_at: null
    },
    {
        id: 12,
        name: "Sumatera Utara",
        created_at: null,
        updated_at: null
    },
    {
        id: 13,
        name: "Sumatera Barat",
        created_at: null,
        updated_at: null
    },
    {
        id: 14,
        name: "Riau",
        created_at: null,
        updated_at: null
    },
    {
        id: 15,
        name: "Jambi",
        created_at: null,
        updated_at: null
    },
    {
        id: 16,
        name: "Sumatera Selatan",
        created_at: null,
        updated_at: null
    },
    {
        id: 17,
        name: "Bengkulu",
        created_at: null,
        updated_at: null
    },
    {
        id: 18,
        name: "Lampung",
        created_at: null,
        updated_at: null
    },
    {
        id: 19,
        name: "Kepulauan Bangka Belitung",
        created_at: null,
        updated_at: null
    },
    {
        id: 21,
        name: "Kepulauan Riau",
        created_at: null,
        updated_at: null
    },
    {
        id: 31,
        name: "Dki Jakarta",
        created_at: null,
        updated_at: null
    },
    {
        id: 32,
        name: "Jawa Barat",
        created_at: null,
        updated_at: null
    },
    {
        id: 33,
        name: "Jawa Tengah",
        created_at: null,
        updated_at: null
    },
    {
        id: 34,
        name: "Di Yogyakarta",
        created_at: null,
        updated_at: null
    },
    {
        id: 35,
        name: "Jawa Timur",
        created_at: null,
        updated_at: null
    },
    {
        id: 36,
        name: "Banten",
        created_at: null,
        updated_at: null
    },
    {
        id: 51,
        name: "Bali",
        created_at: null,
        updated_at: null
    },
    {
        id: 52,
        name: "Nusa Tenggara Barat",
        created_at: null,
        updated_at: null
    },
    {
        id: 53,
        name: "Nusa Tenggara Timur",
        created_at: null,
        updated_at: null
    },
    {
        id: 61,
        name: "Kalimantan Barat",
        created_at: null,
        updated_at: null
    },
    {
        id: 62,
        name: "Kalimantan Tengah",
        created_at: null,
        updated_at: null
    },
    {
        id: 63,
        name: "Kalimantan Selatan",
        created_at: null,
        updated_at: null
    },
    {
        id: 64,
        name: "Kalimantan Timur",
        created_at: null,
        updated_at: null
    },
    {
        id: 65,
        name: "Kalimantan Utara",
        created_at: null,
        updated_at: null
    },
    {
        id: 71,
        name: "Sulawesi Utara",
        created_at: null,
        updated_at: null
    },
    {
        id: 72,
        name: "Sulawesi Tengah",
        created_at: null,
        updated_at: null
    },
    {
        id: 73,
        name: "Sulawesi Selatan",
        created_at: null,
        updated_at: null
    },
    {
        id: 74,
        name: "Sulawesi Tenggara",
        created_at: null,
        updated_at: null
    },
    {
        id: 75,
        name: "Gorontalo",
        created_at: null,
        updated_at: null
    },
    {
        id: 76,
        name: "Sulawesi Barat",
        created_at: null,
        updated_at: null
    },
    {
        id: 81,
        name: "Maluku",
        created_at: null,
        updated_at: null
    },
    {
        id: 82,
        name: "Maluku Utara",
        created_at: null,
        updated_at: null
    },
    {
        id: 91,
        name: "Papua Barat",
        created_at: null,
        updated_at: null
    },
    {
        id: 94,
        name: "Papua",
        created_at: null,
        updated_at: null
    }
];
