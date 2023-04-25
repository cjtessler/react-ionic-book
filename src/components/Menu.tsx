import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { bookOutline, listOutline, returnDownForwardOutline } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Cover',
    url: '/',
    iosIcon: bookOutline,
    mdIcon: bookOutline
  },
  {
    title: 'Table of Contents',
    url: '/toc',
    iosIcon: listOutline,
    mdIcon: listOutline
  },
  {
    title: 'Chapter 1',
    url: '/chapter/1',
    iosIcon: returnDownForwardOutline,
    mdIcon: returnDownForwardOutline
  },
  {
    title: 'Chapter 2',
    url: '/chapter/2',
    iosIcon: returnDownForwardOutline,
    mdIcon: returnDownForwardOutline
  },
  {
    title: 'Chapter 3',
    url: '/chapter/3',
    iosIcon: returnDownForwardOutline,
    mdIcon: returnDownForwardOutline
  },
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>My Book</IonListHeader>
          <IonNote>John Smith</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
