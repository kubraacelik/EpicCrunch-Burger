import React from "react";
import ContactBurger from "../assets/contact.jpg";
import "../styles/Contact.css";
import { useFormik } from "formik";
import { basicSchema } from "../schemas";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);

  //butona tekrar 1 sn sonra basabilirim ve butona bastıktan 1 sn sonra form temizlenecek
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};

const Contact = () => {
  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        nameSurname: "",
        email: "",
        text: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });

  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${ContactBurger})` }}
      ></div>
      <div className="rightSide">
        <h1>Bizimle İletişime Geçin</h1>
        <form onSubmit={handleSubmit}>
          <label>Ad Soyad</label>
          <input
            type="text"
            value={values.nameSurname}
            onChange={handleChange}
            id="nameSurname"
            name="name"
            placeholder="Lütfen Adınızı ve Soyadınızı Giriniz..."
            autoComplete="off"
            className={errors.nameSurname ? "input-error" : ""}
          />
          {/* email yazılmamışsa error class'ını ver, hata mesajı ver */}
          {errors.nameSurname && <p className="error">{errors.nameSurname}</p>}

          <label>E-Mail</label>
          <input
            type="email"
            value={values.email}
            onChange={handleChange}
            id="email"
            name="email"
            placeholder="Lütfen E-Mail Adresinizi Giriniz..."
            autoComplete="off"
            className={errors.email ? "input-error" : ""}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <label>Mesajınız</label>
          <textarea
            type="text"
            value={values.text}
            onChange={handleChange}
            id="text"
            name="message"
            rows="6"
            placeholder="Lütfen Mesajınızı Giriniz..."
            autoComplete="off"
            className={errors.text ? "input-error" : ""}
          ></textarea>
          {errors.text && <p className="error">{errors.text}</p>}

          <button>GÖNDER</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
