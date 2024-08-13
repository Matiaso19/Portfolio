"use client"

import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
    return (
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <Image src="/home-4.png" priority width="800" height="800" alt="Foto del Profile"/>
                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">Programador Fullstack con conocimientos en... 
                        <TypeAnimation
                        sequence={[
                            "Javascript",
                            1000,
                            "React",
                            1000,
                            "Java",
                            1000,
                            "Spring Boot",
                            1000,
                            "PostgreSql",
                            1000,
                            "Node",
                            1000,
                            

                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        className="block font-bold text-secondary"
                        />

                    </h1>
                    <p className="mx-auto mb-2 text-xl md:mx-0 md:mb-8">
                    Como desarrollador FullStack con orientación al Backend, me dedico a crear aplicaciones robustas, escalables y seguras. Mi enfoque principal está en la arquitectura del sistema, la optimización de bases de datos y la implementación de API eficientes. Trabajo con tecnologías modernas y mejores prácticas para asegurar un rendimiento óptimo y una experiencia de usuario fluida.
                    </p>
                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                        <Link href="/portfolio" className="px-4 py-3 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                        Ver Proyectos
                        </Link>
                        <Link href="https://drive.google.com/file/d/1RhwJJA9nWwPkaRDCVzHS1FHpHLvAm9py/view?usp=drive_link" className="px-4 py-3 transition-all border-2 cursor-pointer text-secondary border-secondary text-md w-fit rounded-xl hover:shadow-xl hover:shadow-secondary">
                        Ver mi CV
                         </Link>
                        { /*
                        <Link href="https://drive.google.com/file/d/1RhwJJA9nWwPkaRDCVzHS1FHpHLvAm9py/view?usp=drive_link" className="px-4 py-3 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                        
                        </Link> */}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Introduction;