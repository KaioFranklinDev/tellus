import Image from "next/image";

export default function ImageFundo() {
    return (
        <div className="absolute  bg-blue-600/90 w-screen h-[800px]" >
            <Image alt="logo" src={'/imgs/vistaazul.jpg'} layout="fill" objectFit="cover" objectPosition="bottom left" className="-z-40" />
        </div>
    )
}