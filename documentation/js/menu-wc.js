'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">juego-de-mesa-angular documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-7e36f017e9f91aeb0c9942ad32917c066eb8a6b5e926971e377c8154baa58ca872485829a199f998a7e3c690d3dcac28d7067461add5b9704ead05386c3d7767"' : 'data-bs-target="#xs-components-links-module-AppModule-7e36f017e9f91aeb0c9942ad32917c066eb8a6b5e926971e377c8154baa58ca872485829a199f998a7e3c690d3dcac28d7067461add5b9704ead05386c3d7767"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-7e36f017e9f91aeb0c9942ad32917c066eb8a6b5e926971e377c8154baa58ca872485829a199f998a7e3c690d3dcac28d7067461add5b9704ead05386c3d7767"' :
                                            'id="xs-components-links-module-AppModule-7e36f017e9f91aeb0c9942ad32917c066eb8a6b5e926971e377c8154baa58ca872485829a199f998a7e3c690d3dcac28d7067461add5b9704ead05386c3d7767"' }>
                                            <li class="link">
                                                <a href="components/AdministradorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdministradorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CarritoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CarritoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CascoElectronicoFanStarWarsBlackSeriesMandalorianoFansComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CascoElectronicoFanStarWarsBlackSeriesMandalorianoFansComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DardosNerfNSeries80uniKidsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DardosNerfNSeries80uniKidsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FamiliaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FamiliaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FansComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FansComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FiguraDidacticaCaraDePapaExpresionesPreComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FiguraDidacticaCaraDePapaExpresionesPreComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FiguraDidacticaCaraPapaPreComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FiguraDidacticaCaraPapaPreComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FiguraDidacticaSrCaraPapaPreComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FiguraDidacticaSrCaraPapaPreComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FiguraDidacticaSraCaraPapaPreComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FiguraDidacticaSraCaraPapaPreComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FiguraMarvelClassicOlympusSpidermanFansComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FiguraMarvelClassicOlympusSpidermanFansComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FiguraMarvelClassicOlympusVenomFansComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FiguraMarvelClassicOlympusVenomFansComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GuanteElectronicoMarvelJuegoDeRolThorFansComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GuanteElectronicoMarvelJuegoDeRolThorFansComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/JuegoMesaAvalonHillTalismanFamComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JuegoMesaAvalonHillTalismanFamComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/JuegoMesaDungeonsAndDragonsTheYawningPortalFamComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JuegoMesaDungeonsAndDragonsTheYawningPortalFamComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/JuegoMesaMonopolyGamerMarioKartFamComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JuegoMesaMonopolyGamerMarioKartFamComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/JuegoMesaMonopolyHarryPotterFamComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JuegoMesaMonopolyHarryPotterFamComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/KidsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >KidsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LanzadorNerfNSeriesPackTripleAccionKidsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LanzadorNerfNSeriesPackTripleAccionKidsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LanzadorNerfNSeriesShadowStormKidsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LanzadorNerfNSeriesShadowStormKidsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LanzadorNerfNSeriesStrikeBackKidsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LanzadorNerfNSeriesStrikeBackKidsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LanzadorNerfWildWolfPackKidsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LanzadorNerfWildWolfPackKidsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MasasPlayDohPreComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MasasPlayDohPreComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PerfilUsuarioComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PerfilUsuarioComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PreescolarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PreescolarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProdAdminComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProdAdminComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegistroComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegistroComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-AppModule-7e36f017e9f91aeb0c9942ad32917c066eb8a6b5e926971e377c8154baa58ca872485829a199f998a7e3c690d3dcac28d7067461add5b9704ead05386c3d7767"' : 'data-bs-target="#xs-pipes-links-module-AppModule-7e36f017e9f91aeb0c9942ad32917c066eb8a6b5e926971e377c8154baa58ca872485829a199f998a7e3c690d3dcac28d7067461add5b9704ead05386c3d7767"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AppModule-7e36f017e9f91aeb0c9942ad32917c066eb8a6b5e926971e377c8154baa58ca872485829a199f998a7e3c690d3dcac28d7067461add5b9704ead05386c3d7767"' :
                                            'id="xs-pipes-links-module-AppModule-7e36f017e9f91aeb0c9942ad32917c066eb8a6b5e926971e377c8154baa58ca872485829a199f998a7e3c690d3dcac28d7067461add5b9704ead05386c3d7767"' }>
                                            <li class="link">
                                                <a href="pipes/PrecioPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrecioPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CarritoService.html" data-type="entity-link" >CarritoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductoService.html" data-type="entity-link" >ProductoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SesionService.html" data-type="entity-link" >SesionService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ProductosMod.html" data-type="entity-link" >ProductosMod</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});