import { Injectable } from "@angular/core";

export interface Menu {
  state: string;
  name?: string;
  type?: string;
  icon?: string;
  children?: Menu[];
}

const headerOneItems = [
  {
    state: "home",
    name: "INICIO",
    type: "link",
    icon: "home",
  },
  {
    state: "products",
    name: "CATEGORIAS",
    type: "sub",
    mega: true,
    icon: "party_mode",
    children: [
      {
        state: "products",
        name: "PRODUCTOS",
        type: "sub",
        icon: "arrow_right_alt",
        children: [
          {
            state: "products",
            id: "688cec094054641b0cc3e093",
            name: "Madera",
            type: "queryParams",
            icon: "arrow_right_alt",
          },
          {
            state: "products",
            id: "688cec3c4054641b0cc3e096",
            name: "Metales",
            type: "queryParams",
            icon: "arrow_right_alt",
          },
          {
            state: "products",
            id: "688cec444054641b0cc3e099",
            name: "Vidrios",
            type: "queryParams",
            icon: "arrow_right_alt",
          },
          {
            state: "products",
            id: "688cec4e4054641b0cc3e09c",
            name: "Cerámicos",
            type: "queryParams",
            icon: "arrow_right_alt",
          },
          {
            state: "products",
            id: "688cec574054641b0cc3e09f",
            name: "Compuestos",
            type: "queryParams",
            icon: "arrow_right_alt",
          },
        ],
      },
      {
        state: "machinery",
        name: "MAQUINANRIA",
        type: "sub",
        icon: "arrow_right_alt",
        children: [
          {
            state: "machinery",
            name: "M. Pesada",
            id: "688e4b92ae6c2d1a6cbff2ef",
            type: "queryParams",
            icon: "arrow_right_alt",
          },
          {
            state: "machinery",
            name: "M. Liviana",
            id: "688e4ba5ae6c2d1a6cbff2f2",
            type: "queryParams",
            icon: "arrow_right_alt",
          },
          {
            state: "machinery",
            name: "Equipos Menores",
            id: "688e4bb3ae6c2d1a6cbff2f5",
            type: "queryParams",
            icon: "arrow_right_alt",
          },
          {
            state: "machinery",
            name: "Equipos Electrónicos",
            id: "688e4bc2ae6c2d1a6cbff2f8",
            type: "queryParams",
            icon: "arrow_right_alt",
          },
        ],
      },
    ],
  },
  {
    state: "",
    name: "SHOP",
    type: "sub",
    icon: "pages",
    children: [
     
      {
        state: "checkout",
        name: "CHECKOUT",
        type: "link",
        icon: "arrow_right_alt",
      },
      {
        state: "checkout/payment",
        name: "PAYMENT",
        type: "link",
        icon: "arrow_right_alt",
      },
    ],
  },
  {
    state: "pages",
    name: "PAGES",
    type: "sub",
    icon: "pages",
    children: [
      { state: "about", name: "ABOUT", type: "link", icon: "arrow_right_alt" },
      {
        state: "term-condition",
        name: "TERM AND CONDITION",
        type: "link",
        icon: "arrow_right_alt",
      },
      {
        state: "privacy-policy",
        name: "PRIVACY POLICY",
        type: "link",
        icon: "arrow_right_alt",
      },
      {
        state: "blogs/detail",
        name: "BLOG DETAIL",
        type: "link",
        icon: "arrow_right_alt",
      },
      {
        state: "faq",
        name: "FAQ",
        type: "link",
        icon: "arrow_right_alt",
      },
      {
        state: "not-found",
        name: "404 PAGE",
        type: "link",
        icon: "arrow_right_alt",
      },
      {
        state: "account/profile",
        name: "User Profile",
        type: "link",
        icon: "arrow_right_alt",
      },
      {
        state: "session",
        name: "SESSION",
        type: "subChild",
        icon: "supervised_user_circle",
        children: [
          {
            state: "session/signin",
            name: "SIGN IN",
            type: "link",
            icon: "arrow_right_alt",
          },
          {
            state: "session/signup",
            name: "REGISTER",
            type: "link",
            icon: "arrow_right_alt",
          },
          {
            state: "session/forgot-password",
            name: "FORGET PASSWORD",
            type: "link",
            icon: "arrow_right_alt",
          },
          {
            state: "session/thank-you",
            name: "THANK YOU",
            type: "link",
            icon: "arrow_right_alt",
          },
        ],
      },
    ],
  },
  // {
  //   state: "contact",
  //   name: "CONTACT US",
  //   type: "link",
  //   icon: "perm_contact_calendar",
  // },
  // {
  //   state: "admin-panel",
  //   name: "ADMIN PANEL",
  //   type: "link",
  //   icon: "perm_identity",
  // },
];


@Injectable({
  providedIn: "root",
})
export class MenuItems {
  getMainMenu = (): Menu[] => headerOneItems;}
