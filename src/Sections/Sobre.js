import React from "react";

function Sobre() {
  return (
    <section id="Sobre" className="container mx-auto h-1/2">
      <div className="flex flex-col justify-center items-center">
        <div>
          <h1
            className="text-dim-gray text-2xl sm:text-3xl md:text-4xl font-medium  underline decoration-1  decoration-[#efeff555] underline-offset-8
"
          >
            Sobre mim{" "}
          </h1>
        </div>
        <div className="w-[90%] flex flex-col justify-center items-center mt-10 group">
          <div className="border p-2 sm:p-8 md:p-10  lg:p-14  rounded-lg border-cool-black-300  ">
            <p className="text-dim-gray md:text-base text-sm leading-8">
              Desenvolvedor Full Stack apaixonado por criar soluções escaláveis,
              performáticas e de fácil manutenção. Atualmente atuo no
              desenvolvimento de uma plataforma corporativa do Grupo Equatorial
              (via EQTLab/Digisystem), onde contribuí para reduzir
              significativamente a latência da aplicação por meio de estratégias
              de cache com Redis e para aumentar a confiabilidade das entregas
              com testes automatizados.
              <br />
              <br />
              Tenho experiência tanto em back-end quanto em front-end. Trabalho
              com Node.js, TypeScript e Express na construção de APIs e
              arquiteturas BFF, além de microsserviços em Java (Quarkus),
              otimização de consultas SQL e integrações entre sistemas. No
              front-end, desenvolvo aplicações com React e Next.js, criando
              interfaces modernas, componentes reutilizáveis e integrações
              eficientes com APIs. Também possuo experiência com desenvolvimento
              mobile utilizando React Native.
              <br />
              <br />
              No dia a dia utilizo PostgreSQL, MySQL, MongoDB, Redis, Docker,
              Jest, Vitest e Swagger/OpenAPI, seguindo metodologias ágeis como
              Scrum. Também incorporo ferramentas de IA, como Claude Code,
              ChatGPT, GitHub Copilot e Cursor, ao fluxo de desenvolvimento para
              acelerar entregas sem abrir mão da qualidade.
              <br />
              <br />
              Sou formado em Análise e Desenvolvimento de Sistemas pelo Centro
              Universitário UNDB e estou sempre em busca de novos desafios e
              oportunidades para construir produtos que gerem impacto real.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
