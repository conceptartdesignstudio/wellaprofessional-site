import Image from "next/image";

export default function ProductBrand({brandName}) {
  const brands = [
    {
      name: "wella",
      image: "/wella.png",
      width: "100",
      height: "54",
    },
    {
      name: "wellapro",
      image: "/wellapro.png",
      width: "100",
      height: "62",
    },
    {
      name: "sebastian",
      image: "/sebastian.png",
      width: "200",
      height: "46",
    },
    {
      name: "nioxin",
      image: "/nioxin.png",
      width: "200",
      height: "42",
    },
    {
      name: "wedo",
      image: "/wedo.png",
      width: "150",
      height: "53",
    },
    {
      name: "opi",
      image: "/opi.png",
      width: "150",
      height: "46",
    },
  ];

  const filteredBrand = brands.filter((brand) => brand.name === brandName);

  return (
    <>
      {filteredBrand.map((brand) => (
        <Image
          className="brand-logo"
          alt="Brand Logo"
          key={brand.image}
          src={brand.image}
          width={brand.width}
          height={brand.height}
          priority
        />
      ))}
    </>
  );
}
