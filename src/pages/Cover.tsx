import { IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonImg, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Cover.css'

const Cover: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle>Cover</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent fullscreen>
      <IonHeader collapse="condense"></IonHeader>
      <div className="cover-container">
        <h1 className='book-title'>My Book</h1>
        <IonImg className="cover" src="https://picsum.photos/600/900" />
        <h2>My Name</h2>
      </div>
    </IonContent>

    <IonFooter>
      <IonToolbar>
      <IonButton expand="block" routerLink="/toc">Start Reading</IonButton>
      </IonToolbar>
    </IonFooter>
  </IonPage>
);

export default Cover;
