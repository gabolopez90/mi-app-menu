import { Component } from '@angular/core';
// Importación de componentes necesarios para el Standalone
import { IonApp, IonRouterOutlet, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonMenuToggle, IonItem, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { addIcons } from 'ionicons';
import { homeOutline, personOutline, mailOutline } from 'ionicons/icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  // Debes declarar aquí cada componente de Ionic que uses en el HTML
  imports: [
    IonApp, IonRouterOutlet, IonMenu, IonHeader, IonToolbar, IonTitle, 
    IonContent, IonList, IonMenuToggle, IonItem, IonIcon, IonLabel, 
    RouterLink, RouterLinkActive, CommonModule
  ],
})
export class AppComponent {
  // Arreglo de navegación para el ngFor del menú
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home-outline' },
    { title: 'Información Personal', url: '/informacion', icon: 'person-outline' },
    { title: 'Contacto', url: '/contacto', icon: 'mail-outline' },
  ];

  constructor() {
    // Registro manual de iconos requeridos en versiones Standalone
    addIcons({ homeOutline, personOutline, mailOutline });
  }
}