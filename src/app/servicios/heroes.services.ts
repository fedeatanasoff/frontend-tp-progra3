import { Injectable } from "@angular/core";

@Injectable()
export class DepartamentoService {
  private departamentos: Departamento[] = [
    {
      atletas: [
        {
          nombre: "Franco Armani",
          nacionalidad: "Argentina",
          deporte: "futbol",
          genero: "MASCULINO"
        },
        {
          nombre: "Leonel Vangioni",
          nacionalidad: "Argentina",
          deporte: "futbol",
          genero: "MASCULINO"
        },
        {
          nombre: "Gonzalo Martinez",
          nacionalidad: "Argentina",
          deporte: "futbol",
          genero: "MASCULINO"
        },
        {
          nombre: "Gabriel Mercado",
          nacionalidad: "Argentina",
          deporte: "futbol",
          genero: "MASCULINO"
        }
      ],
      ocupados: 4,
      id: 1
    },
    {
      atletas: [
        {
          nombre: "Federico Briano",
          nacionalidad: "Uruguay",
          deporte: "voley",
          genero: "MASCULINO"
        },
        {
          nombre: "Federico Araujo",
          nacionalidad: "Uruguay",
          deporte: "voley",
          genero: "MASCULINO"
        },
        {
          nombre: "Gast�n Bald",
          nacionalidad: "Uruguay",
          deporte: "voley",
          genero: "MASCULINO"
        },
        {
          nombre: "Pablo Rodr�guez",
          nacionalidad: "Uruguay",
          deporte: "voley",
          genero: "MASCULINO"
        }
      ],
      ocupados: 4,
      id: 2
    },
    {
      atletas: [
        {
          nombre: "Fabian Cardena",
          nacionalidad: "Argentina",
          deporte: "arco",
          genero: "MASCULINO"
        },
        {
          nombre: "Emanuel Ginobili",
          nacionalidad: "Argentina",
          deporte: "basquet",
          genero: "MASCULINO"
        },
        {
          nombre: "Rafael Becker",
          nacionalidad: "Brasil",
          deporte: "golf",
          genero: "MASCULINO"
        },
        {
          nombre: "Teo Gutierrez",
          nacionalidad: "Colombia",
          deporte: "futbol",
          genero: "MASCULINO"
        }
      ],
      ocupados: 4,
      id: 3
    },
    {
      atletas: [
        {
          nombre: "Diego Laborde",
          nacionalidad: "Uruguay",
          deporte: "hockey",
          genero: "MASCULINO"
        }
      ],
      ocupados: 1,
      id: 4
    },
    {
      atletas: [
        {
          nombre: "Rosangela Lopez",
          nacionalidad: "Colombia",
          deporte: "futbol",
          genero: "FEMENINO"
        },
        {
          nombre: "Analia Elaskar",
          nacionalidad: "Colombia",
          deporte: "futbol",
          genero: "FEMENINO"
        },
        {
          nombre: "Gabriela Escobar",
          nacionalidad: "Colombia",
          deporte: "futbol",
          genero: "FEMENINO"
        },
        {
          nombre: "Leonor Abtt",
          nacionalidad: "Colombia",
          deporte: "futbol",
          genero: "FEMENINO"
        }
      ],
      ocupados: 4,
      id: 5
    },
    {
      atletas: [
        {
          nombre: "Antonela Rios",
          nacionalidad: "Argentina",
          deporte: "futbol",
          genero: "FEMENINO"
        },
        {
          nombre: "Macarena Sanz",
          nacionalidad: "Argentina",
          deporte: "handball",
          genero: "FEMENINO"
        },
        {
          nombre: "Valentina Galiano",
          nacionalidad: "Argentina",
          deporte: "voley",
          genero: "FEMENINO"
        },
        {
          nombre: "Lidia Morales",
          nacionalidad: "Bolivia",
          deporte: "golf",
          genero: "FEMENINO"
        }
      ],
      ocupados: 4,
      id: 6
    },
    {
      atletas: [
        {
          nombre: "Flavia Gaullo",
          nacionalidad: "Brasil",
          deporte: "basquet",
          genero: "FEMENINO"
        },
        {
          nombre: "Paola Valenzuela",
          nacionalidad: "Colombia",
          deporte: "hockey",
          genero: "FEMENINO"
        }
      ],
      ocupados: 2,
      id: 7
    }
  ];

  constructor() {
    console.log("servicio listo para usarse");
  }

  getDepartamentos(): Departamento[] {
    return this.departamentos;
  }
}

export interface Departamento {
  atletas: Array<Atleta>;
  id: number;
  ocupados: number;
}

export interface Atleta {
  nombre: string;
  nacionalidad: string;
  deporte: string;
  genero: string;
}
