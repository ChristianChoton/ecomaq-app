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
        name: "MAQUINARIA",
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
      {
        state: "services",
        name: "SERVICIOS",
        type: "sub",
        icon: "arrow_right_alt",
        children: [],
      },
    ],
  },
  {
    state: "pages",
    name: "SESIÓN",
    type: "sub",
    icon: "pages",
    children: [
      {
        state: "session/signin",
        name: "INICIAR SESIÓN",
        type: "link",
        icon: "arrow_right_alt"
      },
      {
        state: "session/signup",
        name: "REGISTRAR",
        type: "link",
        icon: "arrow_right_alt",
      },
      {
        state: "session/forgot-password",
        name: "RECUPERAR CONTRASEÑA",
        type: "link",
        icon: "arrow_right_alt",
      }
    ],
  },
    {
    state: "admin",
    name: "ADMINISTRADO",
    type: "link",
    icon: "admin"
  }
];


@Injectable({
  providedIn: "root",
})
export class MenuItems {
  getMainMenu = (): Menu[] => headerOneItems;}
