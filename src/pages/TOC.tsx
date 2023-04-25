import { IonButton, IonButtons, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonItem, IonList, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import { arrowBack, menuOutline, arrowForward } from "ionicons/icons";

const TOC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle>Table of Contents</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonList>
        <IonItem routerLink="/chapter/1">Chapter 1</IonItem>
        <IonItem routerLink="/chapter/2">Chapter 2</IonItem>
        <IonItem routerLink="/chapter/3">Chapter 3</IonItem>
      </IonList>
    </IonContent>

    <IonFooter>
        <IonToolbar>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonButton routerDirection="back" routerLink="/" expand="full">
                  <IonIcon icon-only slot="start" icon={arrowBack} />
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton disabled expand="full">
                  <IonIcon icon-only slot="" icon={menuOutline} />
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton routerDirection="forward" routerLink="chapter/1" expand="full">
                  <IonIcon icon-only slot="end" icon={arrowForward} />
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonFooter>
  </IonPage>
);

export default TOC;
