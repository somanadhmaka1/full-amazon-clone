import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/dist/client/router";

const BrandsFilter = ({ brands, brandHandler }: any) => {
    const [show, setShow] = useState(true);
    const router = useRouter();
    const existedBrand = router.query.brand || "";
    return (
        <div className="w-full">
            <h3
                onClick={() => setShow((prev: any) => !prev)}
                className={`cursor-pointer my-4 flex items-center justify-between font-semibold `}
            >
                Brands
                <span>
                    {show ? (
                        <MinusIcon className="w-5 h-5" />
                    ) : (
                        <PlusIcon className="w-5 h-5" />
                    )}
                </span>
            </h3>
            {show && (
                <div className="grid grid-cols-2 gap-3">
                    {brands.map((brand: any, i: any) => (
                        <button onClick={() => brandHandler(`${existedBrand ? `${existedBrand}_${brand}` : brand}`)} className="flex justify-center rounded border bg-white py-1 hover:border-slate-500 focus:border-slate-500">
                            <Image src={`/../public/assets/images/${brand.toLowerCase()}.png`} width={50} height={50} alt={brand.toLowerCase()} />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BrandsFilter;
