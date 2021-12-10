module.exports =
{
    products: [
        {
            name: "TENGER GYÜMÖLCSEI 1000G",
            shortName: "tenger-gyumolcsei-1000g",
            categories: [""],
            page: "https://shopsuleiman.hu/tenger-gyumolcsei-1000g-4358",
            data: [
                {
                    name: "price",
                    selector: "div.product-page-price-wrapper > div > div.price_row.price_row_2 > span",
                    property: "textContent",
                    formatFn: () => {}
                },
            ],
        }
    ],
}