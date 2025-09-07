import { Component } from "@angular/core";

@Component({
  selector: "app-service-list",
  templateUrl: "./service-list.component.html",
  styleUrls: ["./service-list.component.scss"],
})
export class ServiceListComponent {
  pageTitle: string = "Servicios";
  serviceList = [
    {
      title: "Servicios Financieros",
      short_content:"Tasación certificada de maquinaria y equipos. <br> Financiamiento y leasing para compras de segunda mano. <br> Seguros especializados (transporte, riesgos en obra, garantía extendida).",
    },
    {
      title: "Asesoría y Consultoría",
      short_content:
        "Decisiones estratégicas basadas en datos. <br>  Reciba informes técnicos que cuantifican el ahorro y el valor generado al optar por equipos reutilizados, optimizando su inversión y reduciendo riesgos. <br>",

    },
    {
      title: "Logística y Operaciones",
      short_content:
        "Transporte y desmontaje de maquinaria. <br> Depósitos temporales para resguardo. <br> Mantenimiento preventivo y reparación previo a la venta.",
    },
    {
      title: "Economía Circular y Sostenibilidad",
      short_content:
        "Certificado verde de reutilización con métricas de CO₂ y ahorro de recursos. <br> <br> <br>",
    },
  ];

  joinWhatsApp = () => window.open("https://chat.whatsapp.com/DrDJ6qxpLc8KsgtP34AUNa?mode=ems_wa_c o", "_blank");
}
