/**
 * Interface 
 * {
 *  id (integer)
 *  portfolioId : foreign key to relation of data portfolio (integer)
 *  title : title of detail (string)
 *  desc : desc of detail (string | Array : {title,desc})
 *  image : (optional) image of detail (string -> url image | Array : string)
 * }
 */

const DetailPortfolio = [
    {
        id: 14,
        portfolioId: 0,
        title: "",
        desc: "",
        image: "/assets/portfolio/mom-0.jpg"
    },
    {
        id: 0,
        portfolioId: 0,
        title: "My Job",
        desc: "Saya berperan untuk mendesain UI dari MoM Tracking System ini agar tampil dengan tampilan menarik dan tentunya memudahkan user dalam menggunakan MoM Tracking System ini",
        image: ""
    },
    {
        id: 1,
        portfolioId: 0,
        title: "Teknologi Yang Digunakan",
        desc: "Dalam development MoM Tracking System ini, saya dan rekan tim saya memilih untuk menggunakan framework Laravel, Bootstrap, dan sistem manajemen database MySQL. Dengan menggunakan teknologi tersebut, diharapkan tahapan development dapat lebih cepat dan tentunya mempermudah dokumentasi dari sistem untuk pengembangan selanjutnya",
        image: ""
    },
    {
        id: 14,
        portfolioId: 0,
        title: "Dashboard User Interface",
        desc: "",
        image: "/assets/portfolio/mom-1.png"
    },
    {
        id: 12,
        portfolioId: 1,
        title: "",
        desc: "",
        image: "/assets/portfolio/vl-0.png"
    },
    {
        id: 2,
        portfolioId: 1,
        title: "My Job",
        desc: [
            {
                title: "Desain UI/UX",
                desc: "Bertanggung jawab dalam merancang antarmuka pengguna (UI) yang menarik dan user-friendly. Melakukan penelitian pengguna, membuat wireframe, dan mengembangkan desain visual yang sesuai dengan kebutuhan pengguna dan branding perusahaan."
            },
            {
                title: "Fullstack Dev",
                desc: "Terlibat dalam pengembangan fullstack dengan menggunakan React.js untuk mengimplementasikan tampilan frontend yang responsif dan interaktif. Di sisi backend, menggunakan Laravel (Lumen) untuk mengembangkan layanan aplikasi yang tangguh dan efisien. Terlibat dalam pengembangan fitur-fitur dari awal hingga akhir, termasuk manajemen basis data, routing, dan integrasi dengan frontend."
            }
        ],
        image: ""
    },
    {
        id: 3,
        portfolioId: 1,
        title: "Teknologi Yang Digunakan",
        desc: "Dalam pengembangan Vehicle Logistics, kami menggunakan React.js sebagai framework frontend untuk membangun antarmuka pengguna yang responsif, interaktif, dan mudah dikelola. Komponen-komponen reusable dalam React.js memungkinkan pengembangan dan pemeliharaan UI yang optimal, serta integrasi dengan aplikasi lain termasuk aplikasi mobile. Di sisi backend, kami mengadopsi Laravel (Lumen) sebagai framework untuk mengembangkan layanan aplikasi yang tangguh dan efisien. Dengan fitur routing yang kuat, sistem keamanan terintegrasi, dan kemampuan pengelolaan basis data yang canggih melalui ORM, kami dapat mengelola permintaan dan respons dengan mudah.",
        image: ""
    },
    {
        id: 13,
        portfolioId: 1,
        title: "Dashboard User Interface",
        desc: "",
        image: "/assets/portfolio/vl-1.png"
    },
    {
        id: 10,
        portfolioId: 2,
        title: "",
        desc: "",
        image: "/assets/portfolio/sn-residence-0.png"
    },
    {
        id: 4,
        portfolioId: 2,
        title: "My Job",
        desc: "Peranan saya pada projek ini sebagai Frontend Developer dengan menggunakan framework React JS untuk mengembangkan UI Web, seperti komponen carousel, form, footer, dan lainnya.",
        image: ""
    },
    {
        id: 5,
        portfolioId: 2,
        title: "Teknologi yang Digunakan",
        desc: "Untuk teknologi yang digunakan pada pengembangan web ini sendiri ialah menggunakan fraework React Js pada frontend, Laravel pada Backend, dan MySQl sebagai sistem manajemen database.",
        image: ""
    },
    {
        id: 6,
        portfolioId: 3,
        title: "Frontend",
        desc: "Peranan saya pada projek ini sebagai Frontend Developer dengan menggunakan framework React JS untuk mengembangkan UI Web, serta menambahkan efek animasi partikel agar tampilan lebih menarik serta interaktif.",
        image: "/assets/portfolio/hrev-0.jpg"
    },
    {
        id: 7,
        portfolioId: 4,
        title: "",
        desc: "",
        image: "/assets/portfolio/helpdesk-it-0.png"
    },
    {
        id: 8,
        portfolioId: 4,
        title: "My Job",
        desc: [
            {
                title: "Desain Entity Relationship Diagram (ERD)",
                desc: "Merancang struktur database menggunakan ERD. Mengidentifikasi entitas, atribut, dan hubungan antar entitas dalam sistem helpdesk IT. Menyusun ERD yang terstruktur dan memastikan konsistensi dan integritas data."
            },
            {
                title: "Desain UI/UX",
                desc: "Mendesain antarmuka pengguna (UI) aplikasi dengan memperhatikan prinsip-prinsip desain yang baik. Merancang tata letak, komponen, dan elemen UI yang intuitif dan responsif agar pengguna dapat dengan mudah berinteraksi dengan aplikasi."
            },
            {
                title: "Frontend Dev",
                desc: "Mengembangkan frontend menggunakan Next.js dan Tailwindcss"
            },
            {
                title: "Backend Dev",
                desc: "Mengembangkan backend menggunakan Nest.js dengan metode microservice"
            },
            {
                title: "Develop Whatsapp Service",
                desc: "Mengembangkan sistem whatsapp service berbasis API untuk dapat digunakan oleh Helpdesk API sebagai fitur notifikasi serta pesan Whatsapp"
            },
        ],
        image: ""
    },
    {
        id: 9,
        portfolioId: 4,
        title: "Dashboard User Interface",
        desc: "",
        image: "/assets/portfolio/helpdesk-it-1.png"
    },
    {
        id: 11,
        portfolioId: 2,
        title: "Booking Form User Interface",
        desc: "",
        image: "/assets/portfolio/sn-residence-1.png"
    },


]

export default DetailPortfolio;