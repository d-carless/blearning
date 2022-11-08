import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { UsuarioComponent } from './usuario/usuario.component';
import { TipoUsuarioComponent } from './usuario/tipo-usuario/tipo-usuario.component';
import { NivelEducativoComponent } from './usuario/nivel-educativo/nivel-educativo.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    TipoUsuarioComponent,
    NivelEducativoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


