import Image from "next/image";

export default function ImageFundo() {
    return (
        <div className="absolute w-screen h-[800px] -z-20" >
            <Image alt="logo" src={'/imgs/vistaazul.jpg'} layout="fill" objectFit="cover" objectPosition="bottom left" className="-z-40" />
            <div className="w-screen h-[800px] bg-primary/80" />
        </div>
    )
}