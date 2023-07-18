import FormInput from "../UI/InputFormulario";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const FormularioContato = () => {
  const [enviar, setEnviar] = useState("Enviar");
  const [styleButton, setStyleButton] = useState(
    "bg-indigo-500 text-white  hover:bg-indigo-600 "
  );
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    setEnviar("Enviando... ");
    setStyleButton(
      "text-cool-black-300 bg-indigo-200  hover:bg-indigo-600 focus:ring-indigo-900"
    );

    emailjs
      .sendForm(
        "service_8pwnevy",
        "template_bueqi1d",
        form.current,
        "7nsUQEWBczrTywy5f"
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            setTimeout(() => {
              setEnviar("ok!");
              setStyleButton(
                "bg-green-500 text-black  hover:bg-green-700 focus:ring-green-900 "
              );
              e.target.reset();
            }, 2000);
          }
        },
        (error) => {
          console.log(error.text);
          setTimeout(() => {
            setEnviar("Tente mais tarde!");
            setStyleButton("bg-red-800 text-white focus:ring-red-900");
          }, 2000);
        }
      );

    setTimeout(() => {
      setEnviar("Enviar");
      setStyleButton(
        "bg-indigo-500 text-white hover:bg-indigo-600 focus:ring-indigo-900 "
      );
    }, 4000);
  };

  return (
    <div className="lg:w-1/2">
      <div className="leading-loose ">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left">
          <p className="font-general-medium text-dim-gray dark:text-primary-light text-3xl mb-8 underline underline-offset-4 ">
            Me manda uma mensagem!
          </p>
          <FormInput
            inputLabel="Nome completo"
            labelFor="name"
            inputType="text"
            inputId="name"
            inputName="name"
            placeholderText="Seu nome"
            ariaLabelName="Name"
          />
          <FormInput
            inputLabel="Email"
            labelFor="email"
            inputType="email"
            inputId="email"
            inputName="email"
            placeholderText="Seu email"
            ariaLabelName="Email"
          />
          <FormInput
            inputLabel="Assunto"
            labelFor="subject"
            inputType="text"
            inputId="subject"
            inputName="subject"
            placeholderText="Assunto"
            ariaLabelName="Subject"
          />

          <div className="mt-6">
            <label
              className="block text-lg text-dim-gray dark:text-primary-light mb-2"
              htmlFor="message">
              Mensagem
            </label>
            <textarea
              className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
              id="message"
              name="message"
              cols="14"
              rows="6"
              aria-label="Mensagem"></textarea>
          </div>
          <div>
            <button
              type="submit"
              className={`${styleButton} font-general-medium w-40 px-4 py-2.5 text-center font-medium tracking-wider focus:ring-1 rounded-lg mt-6 duration-500`}>
              {enviar}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormularioContato;
