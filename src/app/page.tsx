import Header from "./elements/header";
import ImageFundo from "./elements/imageFundo";

export default function Home() {
  return (
    <div className="h-screen text-secondary">
      <Header />
      <ImageFundo />
      <div className="flex justify-center items-center h-full">
        <div className="bg-red-500 h-52 w-[550px]">
          <div className="text-[60px] text-justify">
            Coloque sua energia no lugar certo!
          </div>
        </div>
        <div className="bg-red-300 h-52 w-[700px]">
          aaaaaaaaaa
        </div>

      </div> 

    </div>
  );
}
