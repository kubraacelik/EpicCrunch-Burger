import * as yup from "yup";

export const basicSchema = yup.object().shape({
  nameSurname: yup.string().required("Ad ve soyad girmek zorunludur"),
  email: yup
    .string()
    .email("Geçerli bir email formatı giriniz")
    .required("E-mail adresi girmek zorunludur"),
  text: yup.string().required("Mesaj girmek zorunludur"),
});
