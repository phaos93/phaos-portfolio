import { Button } from "@/app/components/button"
import { TechBadge } from "@/app/components/tech-badge"
import Image from "next/image"
import { HiArrowNarrowRight } from "react-icons/hi"
import { TbBrandGithub, TbBrandLinkedin, TbBrandWhatsapp } from "react-icons/tb";

const MOCK_CONTACTS = [
    {
        url: 'https://github.com/phaos93',
        icon: <TbBrandGithub/>

    },
    {
        url: 'https://www.linkedin.com/in/pedro-araujo-silva/',
        icon: <TbBrandLinkedin/>
    },
    {
        url: 'https://api.whatsapp.com/send/?phone=5571981903434&text&type=phone_number&app_absent=0',
        icon: <TbBrandWhatsapp/>
    }  
]

export const HeroSection = () => {
    return (
        <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 lg:pb-[110px]">
            <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
                <div className="w-full lg:max-w-[530px]">
                    <p className="font-mono text-emerald-400">Oi! Meu nome é</p>
                    <h2 className="text-4xl font-medium mt-2">Pedro Silva</h2>

                        <p className="text-gray-400 my-6 text-sm sm:text-base">
                            Sou um desenvolvedor full-stack apaixonado por tecnologia, pets, esportes e games. Tenho como objetivo criar interfaces bonitas, funcionais e responsivas além de também criar API's bem estruturadas e de fácil manutenção. Estou sempre aberto a novas experiencias e oportunidades.
                        </p>
                    <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
                        {Array.from({ length: 6 }).map((_, index) => (
                            <TechBadge name="Techs"/>
                        ))}
                    </div>
                    <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
                        <Button className="w-max shadow-button">
                            Entre em Contato
                            <HiArrowNarrowRight size={18} />
                        </Button>

                        <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
                            {MOCK_CONTACTS.map((contact, index) => (
                                <a
                                    href={contact.url}
                                    key={`contacts-${index}`}
                                    target="_blank"
                                    className="hover: text-gray-100 transition-colors"
                                >
                                    {contact.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <Image
                    width={420}
                    height={404}
                    src="/images/profile-pic.jpg"
                        alt="Foto de perfil de Pedro"
                        className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
                    />
            </div>
        </section>
    )
}