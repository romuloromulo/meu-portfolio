import FormInput from "../UI/InputFormulario";

const FormularioContato = () => {
  return (
    <div className="lg:w-1/2">
      <div className="leading-loose">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left">
          <p className="font-general-medium text-dim-gray dark:text-primary-light text-2xl mb-8">
            Formulário para Contato
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
          <div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
            <button>Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormularioContato;
