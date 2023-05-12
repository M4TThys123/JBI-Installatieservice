import { createPrismic } from "@prismicio/vue";

import { linkResolver } from "../../../../temp/prismic/LinkResolver";

const prismic = createPrismic({
    endpoint: "your-endpoint",
    linkResolver,
});

export default prismic;