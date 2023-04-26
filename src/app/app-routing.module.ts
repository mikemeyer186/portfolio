import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LegalComponent } from './legal/legal.component';

const routes: Routes = [
  { path: '', component: PortfolioComponent },
  //{ path: 'legal', component: LegalComponent },
  //{ path: 'data-protection', component: DataProtectionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
