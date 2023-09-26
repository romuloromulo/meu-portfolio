import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";

const contacts = [
  {
    id: 1,
    name: " São Luís, Maranhão, Brasil",
    icon: <FiMapPin />,
  },
  {
    id: 2,
    name: "romulrviana@gmail.com",
    icon: <FiMail />,
  },
];

const Detalhes = () => {
  return (
    <div className="w-full lg:w-2/5">
      <div className="lg:text-left max-w-xl px-6">
        <h2 className="font-general-medium text-2xl text-dim-gray dark:text-primary-light md:mt-12 mb-8">
          Outros detalhes
        </h2>
        <ul className="font-general-regular">
          {contacts.map((contact) => (
            <li className="flex " key={contact.id}>
              <i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
                {contact.icon}
              </i>
              <span className="text-lg mb-4 text-dim-gray">{contact.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Detalhes;
