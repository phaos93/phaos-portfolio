import { Link } from "@/app/components/link"
import { TechBadge } from "@/app/components/tech-badge"
import Image from "next/image"
import { HiArrowNarrowRight } from "react-icons/hi"

export const ProjectCard = () => {
    return (
        <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
            <div className="w-full h-full">
                <Image
                    width={420}
                    height={404}
                    src="/images/rest-api.png"
                    alt="thumbnail para projetos de API rest"
                    className="w-full h-[200px] sm:h-[300px] lg:w-[420px]  lg:min-h-full object-cover rounded-lg"
                />
            </div>

            <div>
                <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
                    <Image
                        width={20}
                        height={20}
                        alt=""
                        src="/images/icons/project-title-icon.svg"
                    />
                    Api Rest
                </h3>

                <p className="text-gray-400 my-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, voluptatum ut? Aut deserunt quod quidem, placeat exercitationem sit consectetur sequi nam ratione nemo aperiam quam, dolorem magnam eos eligendi quis ducimus in. Numquam atque, neque dolores nesciunt odit suscipit dolorum asperiores consequatur dolore, eligendi nobis sed expedita soluta minima id.
                </p>

                <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
                    <TechBadge name="Next.js" />
                    <TechBadge name="Next.js" />
                    <TechBadge name="Next.js" />
                    <TechBadge name="Next.js" />
                    <TechBadge name="Next.js"/>
                </div>

                <Link href={'/projects/api-rest'}>
                    Ver Projeto
                    <HiArrowNarrowRight/>
                </Link>
            </div>
        </div>
    )
}