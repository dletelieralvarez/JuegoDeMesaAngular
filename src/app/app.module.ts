import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarritoComponent } from './carrito/carrito.component';
import { LoginComponent } from './registro-cliente/login/login.component';
import { RegistroComponent } from './registro-cliente/registro/registro.component';
import { JuegoMesaAvalonHillTalismanFamComponent } from './categoria-familia/juego-mesa-avalon-hill-talisman-fam/juego-mesa-avalon-hill-talisman-fam.component';
import { JuegoMesaDungeonsAndDragonsTheYawningPortalFamComponent } from './categoria-familia/juego-mesa-dungeons-and-dragons-the-yawning-portal-fam/juego-mesa-dungeons-and-dragons-the-yawning-portal-fam.component';
import { JuegoMesaMonopolyGamerMarioKartFamComponent } from './categoria-familia/juego-mesa-monopoly-gamer-mario-kart-fam/juego-mesa-monopoly-gamer-mario-kart-fam.component';
import { JuegoMesaMonopolyHarryPotterFamComponent } from './categoria-familia/juego-mesa-monopoly-harry-potter-fam/juego-mesa-monopoly-harry-potter-fam.component';
import { FamiliaComponent } from './categoria-familia/familia/familia.component';
import { CascoElectronicoFanStarWarsBlackSeriesMandalorianoFansComponent } from './categoria-fans/casco-electronico-fan-star-wars-black-series-mandaloriano-fans/casco-electronico-fan-star-wars-black-series-mandaloriano-fans.component';
import { FiguraMarvelClassicOlympusSpidermanFansComponent } from './categoria-fans/figura-marvel-classic-olympus-spiderman-fans/figura-marvel-classic-olympus-spiderman-fans.component';
import { FiguraMarvelClassicOlympusVenomFansComponent } from './categoria-fans/figura-marvel-classic-olympus-venom-fans/figura-marvel-classic-olympus-venom-fans.component';
import { GuanteElectronicoMarvelJuegoDeRolThorFansComponent } from './categoria-fans/guante-electronico-marvel-juego-de-rol-thor-fans/guante-electronico-marvel-juego-de-rol-thor-fans.component';
import { FansComponent } from './categoria-fans/fans/fans.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { DardosNerfNSeries80uniKidsComponent } from './categoria-kids/dardos-nerf-nseries80uni-kids/dardos-nerf-nseries80uni-kids.component';
import { LanzadorNerfNSeriesPackTripleAccionKidsComponent } from './categoria-kids/lanzador-nerf-nseries-pack-triple-accion-kids/lanzador-nerf-nseries-pack-triple-accion-kids.component';
import { LanzadorNerfNSeriesStrikeBackKidsComponent } from './categoria-kids/lanzador-nerf-nseries-strike-back-kids/lanzador-nerf-nseries-strike-back-kids.component';
import { LanzadorNerfWildWolfPackKidsComponent } from './categoria-kids/lanzador-nerf-wild-wolf-pack-kids/lanzador-nerf-wild-wolf-pack-kids.component';
import { LanzadorNerfNSeriesShadowStormKidsComponent } from './categoria-kids/lanzador-nerf-nseries-shadow-storm-kids/lanzador-nerf-nseries-shadow-storm-kids.component';
import { KidsComponent } from './categoria-kids/kids/kids.component';
import { FiguraDidacticaCaraDePapaExpresionesPreComponent } from './categoria-preescolar/figura-didactica-cara-de-papa-expresiones-pre/figura-didactica-cara-de-papa-expresiones-pre.component';
import { FiguraDidacticaCaraPapaPreComponent } from './categoria-preescolar/figura-didactica-cara-papa-pre/figura-didactica-cara-papa-pre.component';
import { FiguraDidacticaSrCaraPapaPreComponent } from './categoria-preescolar/figura-didactica-sr-cara-papa-pre/figura-didactica-sr-cara-papa-pre.component';
import { FiguraDidacticaSraCaraPapaPreComponent } from './categoria-preescolar/figura-didactica-sra-cara-papa-pre/figura-didactica-sra-cara-papa-pre.component';
import { MasasPlayDohPreComponent } from './categoria-preescolar/masas-play-doh-pre/masas-play-doh-pre.component';
import { PreescolarComponent } from './categoria-preescolar/preescolar/preescolar.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProductoComponent } from './producto/producto.component';
import { HomeComponent } from './home/home.component';
import { PrecioPipe } from './validaciones/precio.pipe';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CarritoComponent,
    LoginComponent,
    RegistroComponent,
    JuegoMesaAvalonHillTalismanFamComponent,
    JuegoMesaDungeonsAndDragonsTheYawningPortalFamComponent,
    JuegoMesaMonopolyGamerMarioKartFamComponent,
    JuegoMesaMonopolyHarryPotterFamComponent,
    FamiliaComponent,
    CascoElectronicoFanStarWarsBlackSeriesMandalorianoFansComponent,
    FiguraMarvelClassicOlympusSpidermanFansComponent,
    FiguraMarvelClassicOlympusVenomFansComponent,
    GuanteElectronicoMarvelJuegoDeRolThorFansComponent,
    FansComponent,
    AdministradorComponent,
    DardosNerfNSeries80uniKidsComponent,
    LanzadorNerfNSeriesPackTripleAccionKidsComponent,
    LanzadorNerfNSeriesStrikeBackKidsComponent,
    LanzadorNerfWildWolfPackKidsComponent,
    LanzadorNerfNSeriesShadowStormKidsComponent,
    KidsComponent,
    FiguraDidacticaCaraDePapaExpresionesPreComponent,
    FiguraDidacticaCaraPapaPreComponent,
    FiguraDidacticaSrCaraPapaPreComponent,
    FiguraDidacticaSraCaraPapaPreComponent,
    MasasPlayDohPreComponent,
    PreescolarComponent,
    PerfilUsuarioComponent,
    NavbarComponent,
    FooterComponent,
    ProductoComponent,
    HomeComponent,
    PrecioPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
