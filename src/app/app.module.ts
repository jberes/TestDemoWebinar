import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { View1Component } from './view1/view1.component';
import { IgxGridModule, IgxListModule, IgxAvatarModule, IgxIconModule, IgxNavbarModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxNavigationDrawerModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { View2Component } from './view2/view2.component';
import { IgxCategoryChartModule } from 'igniteui-angular-charts';
import { View3Component } from './view3/view3.component';

@NgModule({
  declarations: [
    AppComponent,
    View1Component,
    View2Component,
    View3Component
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxGridModule,
    FormsModule,
    IgxListModule,
    IgxAvatarModule,
    IgxIconModule,
    IgxCategoryChartModule,
    IgxNavbarModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxToggleModule,
    IgxNavigationDrawerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
