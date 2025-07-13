import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorComponent } from './administrador/administrador.component';
import { CarritoComponent } from './carrito/carrito.component';
import { DardosNerfNSeries80uniKidsComponent } from './categoria-kids/dardos-nerf-nseries80uni-kids/dardos-nerf-nseries80uni-kids.component';
import { FamiliaComponent } from './categoria-familia/familia/familia.component';
import { FansComponent } from './categoria-fans/fans/fans.component';
import { FiguraDidacticaCaraDePapaExpresionesPreComponent } from './categoria-preescolar/figura-didactica-cara-de-papa-expresiones-pre/figura-didactica-cara-de-papa-expresiones-pre.component';
import { FiguraDidacticaCaraPapaPreComponent } from './categoria-preescolar/figura-didactica-cara-papa-pre/figura-didactica-cara-papa-pre.component';
import { FiguraDidacticaSrCaraPapaPreComponent } from './categoria-preescolar/figura-didactica-sr-cara-papa-pre/figura-didactica-sr-cara-papa-pre.component';
import { FiguraDidacticaSraCaraPapaPreComponent } from './categoria-preescolar/figura-didactica-sra-cara-papa-pre/figura-didactica-sra-cara-papa-pre.component';
import { FiguraMarvelClassicOlympusSpidermanFansComponent } from './categoria-fans/figura-marvel-classic-olympus-spiderman-fans/figura-marvel-classic-olympus-spiderman-fans.component';
import { FiguraMarvelClassicOlympusVenomFansComponent } from './categoria-fans/figura-marvel-classic-olympus-venom-fans/figura-marvel-classic-olympus-venom-fans.component';
import { GuanteElectronicoMarvelJuegoDeRolThorFansComponent } from './categoria-fans/guante-electronico-marvel-juego-de-rol-thor-fans/guante-electronico-marvel-juego-de-rol-thor-fans.component';
import { CascoElectronicoFanStarWarsBlackSeriesMandalorianoFansComponent } from './categoria-fans/casco-electronico-fan-star-wars-black-series-mandaloriano-fans/casco-electronico-fan-star-wars-black-series-mandaloriano-fans.component';
import { JuegoMesaAvalonHillTalismanFamComponent } from './categoria-familia/juego-mesa-avalon-hill-talisman-fam/juego-mesa-avalon-hill-talisman-fam.component';
import { JuegoMesaDungeonsAndDragonsTheYawningPortalFamComponent } from './categoria-familia/juego-mesa-dungeons-and-dragons-the-yawning-portal-fam/juego-mesa-dungeons-and-dragons-the-yawning-portal-fam.component';
import { JuegoMesaMonopolyGamerMarioKartFamComponent } from './categoria-familia/juego-mesa-monopoly-gamer-mario-kart-fam/juego-mesa-monopoly-gamer-mario-kart-fam.component';
import { JuegoMesaMonopolyHarryPotterFamComponent } from './categoria-familia/juego-mesa-monopoly-harry-potter-fam/juego-mesa-monopoly-harry-potter-fam.component';
import { KidsComponent } from './categoria-kids/kids/kids.component';
import { LanzadorNerfNSeriesPackTripleAccionKidsComponent } from './categoria-kids/lanzador-nerf-nseries-pack-triple-accion-kids/lanzador-nerf-nseries-pack-triple-accion-kids.component';
import { LanzadorNerfNSeriesShadowStormKidsComponent } from './categoria-kids/lanzador-nerf-nseries-shadow-storm-kids/lanzador-nerf-nseries-shadow-storm-kids.component';
import { LanzadorNerfNSeriesStrikeBackKidsComponent } from './categoria-kids/lanzador-nerf-nseries-strike-back-kids/lanzador-nerf-nseries-strike-back-kids.component';
import { LanzadorNerfWildWolfPackKidsComponent } from './categoria-kids/lanzador-nerf-wild-wolf-pack-kids/lanzador-nerf-wild-wolf-pack-kids.component';
import { LoginComponent } from './registro-cliente/login/login.component';
import { MasasPlayDohPreComponent } from './categoria-preescolar/masas-play-doh-pre/masas-play-doh-pre.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { PreescolarComponent } from './categoria-preescolar/preescolar/preescolar.component';
import { RegistroComponent } from './registro-cliente/registro/registro.component';
import { HomeComponent } from './home/home.component';
import { ProdAdminComponent } from './admin-productos/prod-admin/prod-admin.component';

const routes: Routes = [
  { path:'kids', component: KidsComponent},  
  { path:'familia', component: FamiliaComponent},
  { path:'fans', component: FansComponent},
  { path:'preescolar', component: PreescolarComponent},
  { path:'carrito', component: CarritoComponent},
  { path: 'index', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'administrador', component: AdministradorComponent },
  { path: 'casco-electronico-fan-star-wars-black-series-mandaloriano-fans', component: CascoElectronicoFanStarWarsBlackSeriesMandalorianoFansComponent },
  { path: 'figura-marvel-classic-olympus-spiderman-fans', component: FiguraMarvelClassicOlympusSpidermanFansComponent },
  { path: 'figura-marvel-classic-olympus-venom-fans', component: FiguraMarvelClassicOlympusVenomFansComponent },
  { path: 'guante-electronico-marvel-juego-de-rol-thor-fans', component: GuanteElectronicoMarvelJuegoDeRolThorFansComponent },
  { path: 'dardos-nerf-nseries80uni-kids', component: DardosNerfNSeries80uniKidsComponent },
  { path: 'lanzador-nerf-nseries-pack-triple-accion-kids', component: LanzadorNerfNSeriesPackTripleAccionKidsComponent },
  { path: 'lanzador-nerf-nseries-shadow-storm-kids', component: LanzadorNerfNSeriesShadowStormKidsComponent },
  { path: 'lanzador-nerf-nseries-strike-back-kids', component: LanzadorNerfNSeriesStrikeBackKidsComponent },
  { path: 'lanzador-nerf-wild-wolf-pack-kids', component: LanzadorNerfWildWolfPackKidsComponent },
  { path: 'masas-play-doh-pre', component: MasasPlayDohPreComponent },
  { path: 'figura-didactica-cara-de-papa-pre', component: FiguraDidacticaCaraPapaPreComponent },
  { path: 'figura-didactica-sr-cara-papa-pre', component: FiguraDidacticaSrCaraPapaPreComponent },
  { path: 'figura-didactica-sra-cara-papa-pre', component: FiguraDidacticaSraCaraPapaPreComponent },
  { path: 'figura-didactica-cara-de-papa-expresiones-pre', component: FiguraDidacticaCaraDePapaExpresionesPreComponent },
  { path: 'juego-mesa-avalon-hill-talisman-fam', component: JuegoMesaAvalonHillTalismanFamComponent },
  { path: 'juego-mesa-dungeons-and-dragons-the-yawning-portal-fam', component: JuegoMesaDungeonsAndDragonsTheYawningPortalFamComponent },
  { path: 'juego-mesa-monopoly-gamer-mario-kart-fam', component: JuegoMesaMonopolyGamerMarioKartFamComponent },
  { path: 'juego-mesa-monopoly-harry-potter-fam', component: JuegoMesaMonopolyHarryPotterFamComponent },
  { path: 'perfil-usuario', component: PerfilUsuarioComponent },
  { path: 'prod-admin', component: ProdAdminComponent },
  { path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
