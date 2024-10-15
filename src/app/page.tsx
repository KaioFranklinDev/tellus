import Form from "./elements/form";
import Header from "./elements/header";
import ImageFundo from "./elements/imageFundo";

export default function Home() {
  return (
    <div className="h-screen text-secondary">
      <Header />
      <ImageFundo />
      <div className="flex gap-14 justify-center pt-16 h-full ">
        <div className=" w-[550px]">
          <div className=" text-justify text-[30px]">
            <p className="font-bold text-[20px]">Pra sua casa</p>
            <p className=" pt-6 font-bold text-[60px] leading-none">Prospere desde a 1ª conta de luz</p>
            <p className="pt-6"><span className="font-bold">Contrate a Tellus</span> para a sua casa e garanta economia todo mês e a 1ª fatura grátis</p>
            <div className="text-nowrap pl-8 text-[25px]">
              <p>&rsaquo; <span className="font-bold">Garantimos seu desconto</span> todos os meses</p>
              <p>&rsaquo; Atendimento do seu jeito</p>
              <p>&rsaquo; Sem custo de instalação ou investimento inicial</p>
            </div>
          </div>
        </div>
        <div className="h-[600px] w-[500px]">
          <Form />
        </div>

      </div>

    </div>
  );
}
