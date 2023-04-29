
const DataPortfolio = [
    {
        id: 0,
        slug: 'mom-tracking-system',
        title: 'MoM Tracking System',
        technologies: ['Laravel', 'Bootstrap', 'MySQL', 'Figma'],
        image: { src: '/assets/project/mom-tracking-system.jpg' },
        partner: {
            name: 'PT. Hadji Kalla',
            logo: '/assets/partner-logo/kalla.png',
            location: 'Makassar - Indonesia'
        },
        effort: ['UI Design', 'Dev Frontend', 'Dev Backend'],
        description: `Projek ini merupakan projek selama saya mengikuti program 
        Magang Bersertifikat Kampus Merdeka di PT. Hadji Kalla, Makassar. MoM 
        Tracking System digunakan untuk mengelola dokumentasi meeting seluruh Sub-unit Bisnis PT. 
        Hadji Kalla.`,
        startDate: 'Sep 2022',
        endDate: 'Nov 2022',
        role: 'UI/UX Designer & Fullstack Dev assistant (Intern)'
    },
    {
        id: 1,
        slug: 'vehicle-logistics',
        title: 'Kalla Vehicle Logistics',
        technologies: ['React Js', 'Tailwind Css', 'Laravel', 'MySQL', 'Figma'],
        image: { src: '/assets/project/vehicle-logistics.jpg' },
        partner: {
            name: 'PT. Hadji Kalla',
            logo: '/assets/partner-logo/kalla.png',
            location: 'Makassar - Indonesia'
        },
        effort: ['UI Design', 'Dev Frontend', 'Dev Backend'],
        description: `Projek ini merupakan projek selama saya mengikuti program 
        Magang Bersertifikat Kampus Merdeka di PT. Hadji Kalla, Makassar. Vehicle 
        Logistics digunakan untuk mengelola dokumentasi logistik mobil di PT. 
        Hadji Kalla`,
        startDate: 'Oct 2022',
        endDate: 'Jan 2023',
        role: 'UI/UX Designer & Frontend Dev (Intern)'
    },
    {
        id: 2,
        slug: 'sn-residence',
        title: 'SN Residence',
        technologies: ['React Js', 'Tailwind Css', 'Laravel', 'MySQL', 'Figma'],
        image: { src: '/assets/project/sn-residence.jpg' },
        partner: {
            name: 'SN Residence Bantaeng',
            logo: '/assets/partner-logo/sn.png',
            location: 'Online'
        },
        effort: ['UI Design', 'Dev Frontend'],
        description: `Projek ini merupakan projek yang kami kerjakan di HREV Team, bekerja sama dengan SN Residence Bantaeng
        untuk membuat web yang dapat menjadi landing page serta mengelola pemesanan unit rumah oleh calon pembeli di SN Residence
         Bantaeng.`,
        startDate: 'Feb 2023',
        endDate: 'Mar 2023',
        role: 'UI/UX Designer assistant & Frontend Dev'
    },
    {
        id: 3,
        slug: 'hrev-landinig-page',
        title: 'HREV Landing Page',
        technologies: ['React Js', 'Tailwind Css'],
        image: { src: '/assets/project/hrev-profile.jpg' },
        partner: {
            name: 'HREV Software House',
            logo: '/assets/partner-logo/hrev.svg',
            location: 'Online'
        },
        effort: ['Dev Frontend'],
        description: `Projek ini merupakan pembuatan landing page untuk HREV Team agar memudahkan calon klien dalam melihat profile
         HREV Team secara detail.`,
        startDate: 'Mar 2023',
        endDate: 'Apr 2023',
        role: 'Frontend Dev'
    },
    {
        id: 4,
        slug: 'helpdesk-it',
        title: 'Helpdesk IT App BPS Riau',
        technologies: ['Next Js', 'Tailwind Css', 'Nest Js', 'TypeORM', 'MySQL', 'Figma'],
        image: { src: '/assets/project/helpdesk-it.jpg' },
        partner: {
            name: 'Badan Pusat Statistik Provinsi Riau',
            logo: '/assets/partner-logo/bps.png',
            location: 'Pekanbaru - Indonesia'
        },
        effort: ['Analyze System', 'UI Design', 'Dev Frontend', 'Dev Backend'],
        description: `Projek ini merupakan projek magang sekaligus penelitian saya di Badan Pusat Statistik Provinsi Riau
        (BPS Riau). Helpdesk IT sendiri merupakan sistem yang dapat mengelola laporan gangguan/permintaan teknologi 
        yang ada pada BPS Riau agar pelaporan dapat lebih efektif,efisien, dan terdokumentasi.`,
        startDate: 'Feb 2023',
        endDate: 'Current',
        role: 'Software Engineer (Intern)'
    },


]
export default DataPortfolio.sort((a, b) => b.id - a.id).map(data => data)