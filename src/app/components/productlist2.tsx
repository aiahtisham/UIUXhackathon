

import Image from "next/image";

const Products = [
  {
    title : "Graphics Design",
    title2: "English Department",
    price : "$16.48",
    oldPrice : "$6.48",
    image : "/image/p01.png",
    rating : 4,
  },
  {
    title : "Graphics Design",
    title2: "English Department",
    price : "$16.48",
    oldPrice : "$6.48",
    image : "/image/p02.png",
    rating : 4,
  },
  {
    title : "Graphics Design",
    title2: "English Department",
    price : "$16.48",
    oldPrice : "$6.48",
    image : "/image/p03.png",
    rating : 4,
  },
  {
    title : "Graphics Design",
    title2: "English Department",
    price : "$16.48",
    oldPrice : "$6.48",
    image : "/image/p04.png",
    rating : 4,
  },
  {
    title : "Graphics Design",
    title2: "English Department",
    price : "$16.48",
    oldPrice : "$6.48",
    image : "/image/p05.png",
    rating : 4,
  },
  {
    title : "Graphics Design",
    title2: "English Department",
    price : "$16.48",
    oldPrice : "$6.48",
    image : "/image/p06.png",
    rating : 4,
  },
  {
    title : "Graphics Design",
    title2: "English Department",
    price : "$16.48",
    oldPrice : "$6.48",
    image : "/image/p07.png",
    rating : 4,
  },
  {
    title : "Graphics Design",
    title2: "English Department",
    price : "$16.48",
    oldPrice : "$6.48",
    image : "/image/p08.png",
    rating : 4,
  },
  {
    title : "Graphics Design",
    title2: "English Department",
    price : "$16.48",
    oldPrice : "$6.48",
    image : "/image/p09.png",
    rating : 4,
  },
  {
    title : "Graphics Design",
    title2: "English Department",
    price : "$16.48",
    oldPrice : "$6.48",
    image : "/image/p010.png",
    rating : 4,
  },
  {
    title : "Graphics Design",
    title2: "English Department",
    price : "$16.48",
    oldPrice : "$6.48",
    image : "/image/p011.png",
    rating : 4,
  },
  {
    title : "Graphics Design",
    title2: "English Department",
    price : "$16.48",
    oldPrice : "$6.48",
    image : "/image/p12.png",
    rating : 4,
  },

];

const ProductBox = ({ product }: { product: any }) => (
  <div className="max-w-7xl mx-auto px-4 py-10">
    <Image src={product.image} width={239} height={300} alt={product.title2} />
    <div className="pt-2 text-center mt-2">
      <h1 className="font-bold text-[16px] font-mono text-[#252B42] ">{product.title}</h1>
      <h2 className="font-bold text-[14px] text-[#737373] font-mono ">{product.title2}</h2>
      <div className=" space-x-2 text-center">
        <span className="text-[#BDBDBD] font-bold">{product.price}</span>
        {product.oldPrice && (
          <span className="text-[#23856D] font-bold "> {product.oldPrice} </span>
        )}
      </div>
      <div className="flex justify-center space-x-1 text-yellow-400 text-md pt-1">
        <img src="image/product-colors.png" alt="color" className=" h-[16px]" />
        
      </div>
    </div>
  </div>
);

const ProductList2 = () => (
  <main className="max-w-7xl mx-auto px-4 py-10">
     <div className="grid grid-cols-4 gap-1">
      {Products.map((product, index) => (
        <ProductBox key={index} product={product} />
      ))}
    </div>
  </main>
);

export default ProductList2;