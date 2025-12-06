interface DataType {
  id: number;
  data_wow_delay: string;
  title: string;
  icon: string;
  contact_1: JSX.Element;
  contact_2: JSX.Element;
}
[];

const faq_contact_data: DataType[] = [
  {
    id: 1,
    data_wow_delay: ".5s",
    title: "Mail Address",
    icon: "fa-solid fa-envelope",
    contact_1: <>info@shrinavkarblowpack.com</>,
    contact_2: <>info@shrinavkarblowpack.com</>,
  },
  {
    id: 2,
    data_wow_delay: ".7s",
    title: "Factory Locations",
    icon: "fa-solid fa-location-dot",
    contact_1: <>Ankleshwar, Gujarat</>,
    contact_2: <>Panoli, Gujarat</>,
  },
  {
    id: 3,
    data_wow_delay: ".9s",
    title: "Office Hour",
    icon: "fa-solid fa-clock",
    contact_1: <>Mon to Sat: 9:00 AM to 6:00 PM</>,
    contact_2: <>Mon to Sat: 9:00 AM to 6:00 PM</>,
  },
];

const FaqContact = ({ padding }: any) => {
  return (
    <section
      className={`contact-info-area fix section-padding ${
        padding ? "section-padding" : "pt-0"
      }`}
    >
      <div className="container">
        <div className="contact-info-wrapper-2">
          <div className="row g-4">
            {faq_contact_data.map((item) => (
              <div
                key={item.id}
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay={item.data_wow_delay}
              >
                <div className="contact-info-items">
                  <div className="icon">
                    <i className={item.icon}></i>
                  </div>
                  <div className="content">
                    <h3>{item.title}</h3>
                    <ul>
                      <li>{item.contact_1}</li>
                      <li>{item.contact_2}</li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqContact;
