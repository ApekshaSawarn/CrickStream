import { Routes } from '@angular/router';
import { LiveScoreComponent } from './pages/live-score/live-score.component';
import { HomeComponent } from './pages/home/home.component';
import { PointTableComponent } from './pages/point-table copy/point-table.component'; // Adjust the path as needed
import { CWC2023PointTableComponent } from './pages/point-table/point-table.component';
import { AllMatchesComponent } from './pages/all-matches/all-matches.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'live',
        pathMatch: 'full'
    },
    {
        path: 'live',
        component: LiveScoreComponent,
        data: { title: 'Live Score' }
    },
    {
        path: 'home',
        component: HomeComponent,
        data: { title: 'Home' }
    },
    {
        path: 'points-table/:matchName',
        component: PointTableComponent,
        data: { title: 'Point Table' }
    },
    {
        path: 'points/CWC2023',  
        component: CWC2023PointTableComponent,
        data: { title: 'CWC2023 Point Table' }   
    },
    {   
        path: 'all-matches',
        component: AllMatchesComponent,
        data: { title: 'Matches History' }   
    },
];