import React from "react";

function Sobre() {
  return (
    <section id="Sobre" className="container mx-auto h-1/2">
      <div className="flex flex-col justify-center items-center">
        <div>
          <h1
            className="text-dim-gray text-2xl sm:text-3xl md:text-4xl font-medium  underline decoration-1  decoration-[#efeff555] underline-offset-8
">
            Sobre mim{" "}
          </h1>
        </div>
        <div className="w-4/5 flex flex-col justify-center items-center mt-10 group">
          <div className="border p-14 rounded-tl-2xl rounded-br-2xl border-cool-black-300 sm:rounded-r-full sm:rounded-b-full sm:group-hover:rounded-l-full  ease-in duration-300">
            <p className="text-dim-gray ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              quis mollis mauris. Donec tristique magna quis ligula sagittis
              lacinia. Morbi aliquam vel mi a pellentesque. Mauris dapibus velit
              non diam scelerisque, at volutpat urna maximus. Maecenas sed leo
              eu nisi pretium auctor in eget mauris.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
