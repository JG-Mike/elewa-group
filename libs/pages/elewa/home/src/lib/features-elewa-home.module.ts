import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@elewa-group/elements/layout';

import { HomeJobsSectionComponent } from './components/home-jobs-section/home-jobs-section.component';
import { HomeHeroSectionComponent } from './components/home-hero-section/home-hero-section.component';

import { HomePageComponent } from './pages/home-page/home-page.component';

import { HomeRoutingModule } from './home.routing';
import { HomeActivitySectionComponent } from './components/home-activity-section/home-activity-section.component';
import { CardsModule } from '@elewa-group/features/components/cards';


@NgModule({
  imports: [CommonModule, LayoutModule, HomeRoutingModule, CardsModule],
  declarations: [
    HomePageComponent,
    HomeHeroSectionComponent,
    HomeJobsSectionComponent,
    HomeActivitySectionComponent,
  ],
  exports: [
    HomePageComponent,
    HomeHeroSectionComponent,
    HomeJobsSectionComponent,
  ],
})
export class HomePageModule {}
