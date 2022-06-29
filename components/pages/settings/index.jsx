import { TopHeader } from "../../ui/layouts/Headers";
import Container from "../../ui/layouts/Container";
import { IonContent, IonPage } from "@ionic/react";

import SettingsMenus from "../../ui/profile-management/settings-menu";

const Settings = () => {
  const SettingsMenuItems = [
    {
      name: "Password Reset",
      link: "change-password",
    },
  ];

  return (
    <IonPage>
      <TopHeader pageName={"Settings"} back={true} />
      <IonContent>
        <Container>
          <div className="flex flex-col mx-auto">
            <SettingsMenus subMenuItems={SettingsMenuItems} />
          </div>
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
