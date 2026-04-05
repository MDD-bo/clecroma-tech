import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Recomendacion {
  id: number;
  titulo: string;
  descripcion: string;
  icono: string;
  detalles: string[];
}

@Component({
  selector: 'app-recomendaciones',
  imports: [CommonModule],
  templateUrl: './recomendaciones.html',
  styleUrl: './recomendaciones.scss',
})
export class RecomendacionesComponent {
  recomendaciones: Recomendacion[] = [
    {
      id: 1,
      titulo: 'Limpieza Regular',
      descripcion: 'Mantén tu computadora libre de polvo',
      icono: '🧹',
      detalles: [
        'Limpia el polvo cada 3-6 meses',
        'Usa aire comprimido para ventiladores',
        'Evita uso en ambientes muy polvorientos',
        'Desconecta antes de limpiar'
      ]
    },
    {
      id: 2,
      titulo: 'Gestión de Temperatura',
      descripcion: 'Controla la temperatura de tu equipo',
      icono: '🌡️',
      detalles: [
        'Mantén ventilación adecuada',
        'Evita superficies suaves para ventilación',
        'Monitorea temperatura con software',
        'Reemplaza pasta térmica si es necesario'
      ]
    },
    {
      id: 3,
      titulo: 'Software Actualizado',
      descripcion: 'Mantén tu sistema operativo actualizado',
      icono: '💾',
      detalles: [
        'Instala parches de seguridad',
        'Actualiza drivers regularmente',
        'Usa antivirus confiable',
        'Evita software pirateado'
      ]
    },
    {
      id: 4,
      titulo: 'Copias de Seguridad',
      descripcion: 'Protege tus datos importantes',
      icono: '💾',
      detalles: [
        'Realiza copias semanales',
        'Usa almacenamiento en la nube',
        'Guarda en disco externo',
        'Verifica integridad de copias'
      ]
    },
    {
      id: 5,
      titulo: 'Optimización de Disco',
      descripcion: 'Mejora el rendimiento de tu almacenamiento',
      icono: '⚡',
      detalles: [
        'Desinstala programas no usados',
        'Limpia archivos temporales',
        'Desfragmenta disco (HDD)',
        'Mantén 10-15% espacio libre'
      ]
    },
    {
      id: 6,
      titulo: 'Cuidado del Hardware',
      descripcion: 'Protege los componentes físicos',
      icono: '🔧',
      detalles: [
        'Evita movimientos bruscos',
        'No derramar líquidos cerca',
        'Usa protector de voltaje',
        'Apaga correctamente siempre'
      ]
    }
  ];
}
