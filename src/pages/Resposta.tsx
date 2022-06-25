import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { Logo } from "../components/Logo";



export function InscricaoConfirmada(){
    const navigate = useNavigate()
    function eventoButton(event: FormEvent) {
        event.preventDefault()
        navigate('/event/lesson/abertura-do-evento-ignite-lab')
    }
    
    return (
        <div>
            <Header />
            <h1 className="w-full py-5 flex items-center justify-center text-1xl font-bold mt-8 text-[2.5rem] leading-relaxed" > Inscrição confirmada com sucesso</h1>
            <img src="/src/assets/react-icon.png" className="w-full max-w-[500px] flex items-center justify-between mt-10 mx-auto ml-[1000px]" alt="" />
            <div className="w-full max-w-[1200px] flex items-center justify-between mt-[-250px] mx-auto">
              
                <div className="max-w-[640px]">
                    <Logo />
                    <h1 className="mt-8 text-[2.5rem] leading-tight">Seja bem vindo futuro dev, a imersão do <strong className="text-blue-500">ignite lab</strong>, do zero, com <strong className="text-blue-500">React</strong> JS</h1>
                    <p className="mt-4 text-gray-200 leading-relaxed">Comece o curso hoje e se torne um desenvoledor a ser disputado no mercado pelas grandes empresas do mundo todo. Vamos da um play na sua carreira!.</p>
                </div>
                <button 
                    className="mt-[150px] bg-green-500 uppercase py-4 px-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
                    onClick={eventoButton}>
                    Começar o ignite, agora!
                        </button>
            </div>
        </div>
        
    )
}

function redirect(arg0: string) {
    throw new Error("Function not implemented.");
}
function submitForm(target: EventTarget) {
    throw new Error("Function not implemented.");
}

