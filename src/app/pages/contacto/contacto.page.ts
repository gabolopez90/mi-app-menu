import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, 
  IonButtons, IonMenuButton, IonList, IonItem, 
  IonLabel, IonInput, IonSelect, IonSelectOption, 
  IonTextarea, IonButton, IonIcon 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { sendOutline } from 'ionicons/icons';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, 
    IonButtons, IonMenuButton, IonList, IonItem, 
    IonLabel, IonInput, IonSelect, IonSelectOption, 
    IonTextarea, IonButton, IonIcon, 
    CommonModule, FormsModule
  ]
})
export class ContactoPage {
  constructor() {
    addIcons({ sendOutline });
  }

  // Método para manejar el envío (puedes llamarlo desde el (click) del botón)
  enviarFormulario() {
    console.log('Formulario enviado');
  }
}