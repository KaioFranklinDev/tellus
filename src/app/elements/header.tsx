import Image from "next/image";
import profilePic from '..imgs/logo.webp'

export default function Header() {
    return (
        <header className="flex flex-row justify-around items-center bg-primary text-secondary">
            <div className="flex flex-row items-center gap-10">
                <div>
                    <Image alt="logo" src={'/imgs/logo.webp'} height={50} width={50} />
                </div>
                <nav className=" flex flex-row gap-5 text-sm">
                    <a>Como funciona</a>
                    <a>Por que a Tellus?</a>
                    <a>Dúvidas frequentes</a>
                </nav>
            </div>
            <button className=" text-primary h-8 bg-secondary border border-none rounded-2xl p-1 hover:text-secondary hover:bg-primarylow">
                <p className="px-4 text-xs font-bold">Calcular desconto</p>
            </button>
        </header>
    )
}