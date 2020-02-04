export default {
    util: {
        baseMediaURL: "https://d12tr9sso4aiq7.cloudfront.net",
    },

    client: {
        name: "Kiewit - LSA",
        logo: "/campaign-test/LSA_Logo.png",
    },

    products: [
        {
            name: "LCC Decals",
            singleItem: false,
            category: "decal",
            displayImg: "/campaign-test/Decals@2x.png",
            parent_key: "SPTX14700",
            children_selected: ["SPTX14700-1"],
            columns: 1,
            items: [
                {
                    key: "SPTX14700-1",
                    img: "/campaign-test/decal-excavation@2x.png",
                    alt: "excavation",
                    selected: false
                },
                {
                    key: "SPTX14700-2",
                    img: "/campaign-test/decal-interface@2x.png",
                    alt: "human equipment interface",
                    selected: false

                },
                {
                    key: "SPTX14700-3",
                    img: "/campaign-test/decal-lift@2x.png",
                    alt: "lifting and rigging",
                    selected: false

                },
                {
                    key: "SPTX14700-4",
                    img: "/campaign-test/decal-util@2x.png",
                    alt: "utilities ",
                    selected: false

                }
            ]
        },
        {
            name: "Message Banners",
            singleItem: true,
            category: "banner",
            displayImg: "/campaign-test/banner_red@2x.png",
            parent_key: "SPTX14310",
            children_selected: ["SPTX14310"],
            columns: 1,
            items: [
                {
                    key: "SPTX14310",
                    img: "/campaign-test/banner_red.png",
                    alt: "red message banner",
                    selected: false

                }
            ]
        },
        {
            name: "all icon banners",
            singleItem: true,
            category: "banner",
            parent_key: "SPTX14400",
            displayImg: "/campaign-test/LSA_full.png",
            children_selected: ["SPTX14400"],
            columns: 2,
            items: [
                {
                    key: "SPTX14400",
                    img: "campaign-test/LSA_full.png",
                    alt: "all icon banner",
                    selected: false

                }
            ]
        },
        {
            name: "category banners",
            singleItem: true,
            category: "banner",
            parent_key: "SPTX14800",
            children_selected: ["SPTX14800"],
            displayImg: "/campaign-test/confinedBanner.png",
            columns: 1,
            items: [
                {
                    key: "SPTX14800",
                    img: "campaign-test/confinedBanner.png",
                    alt: "category banner",
                    selected: false
                }
            ]
        }
    ]
}

