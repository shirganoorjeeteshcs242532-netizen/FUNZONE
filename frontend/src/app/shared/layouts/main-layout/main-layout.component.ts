import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { TopbarComponent } from '../../components/topbar/topbar.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, SidebarComponent, TopbarComponent],
  template: `
    <div class="layout-wrapper">
      <app-sidebar></app-sidebar>
      <div class="main-content">
        <app-topbar></app-topbar>
        <div class="content-area">
          <router-outlet></router-outlet>
        </div>
        <footer class="main-footer glass">
          <div class="footer-content">
            <span class="creator-badge orbitron">MADE BY JEETESH SHIRGANOOR AND VIKAS PAL</span>
            <p class="copyright orbitron">NEON-PROTOCOL &copy; 2026</p>
          </div>
        </footer>
      </div>
    </div>
  `,
  styles: [`
    .layout-wrapper {
      display: flex;
      min-height: 100vh;
    }

    .main-content {
      flex: 1;
      margin-left: 260px;
      display: flex;
      flex-direction: column;
      background: #0a0a0c;
    }

    .content-area {
      padding: 2rem;
      min-height: calc(100vh - 130px);
      flex: 1;
    }

    .main-footer {
      padding: 1.5rem 2.5rem;
      border-top: 1px solid rgba(0, 242, 255, 0.1);
      background: rgba(10, 10, 12, 0.8);
      backdrop-filter: blur(20px);
      z-index: 10;
    }

    .footer-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
    }

    .creator-badge {
      font-size: 0.8rem;
      letter-spacing: 3px;
      color: #00f2ff;
      text-shadow: 0 0 10px #00f2ff;
      padding: 6px 16px;
      border-left: 3px solid #00f2ff;
      background: rgba(0, 242, 255, 0.05);
      font-weight: 900;
      transition: all 0.3s ease;
      &:hover {
        background: rgba(0, 242, 255, 0.1);
        letter-spacing: 5px;
      }
    }

    .copyright {
      font-size: 0.65rem;
      color: #333;
      font-weight: 800;
      letter-spacing: 1px;
    }

    @media (max-width: 992px) {
      .main-content {
        margin-left: 0;
      }
      app-sidebar {
        display: none;
      }
      .footer-content {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
      }
    }
  `]
})
export class MainLayoutComponent { }
