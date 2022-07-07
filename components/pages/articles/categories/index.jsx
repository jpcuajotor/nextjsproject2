import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  categories,
  categoryNames,
} from "../../../../lib/constants/categoryNames";
import { backend_api } from "../../../../lib/constants/routes_constants";
import formatTitle from "../../../../lib/hooks/formatTitle";
import ArticlesSection from "../../../ui/articles/ArticlesSection";
import CategoriesMobile from "../../../ui/articles/CategoriesMobile";
import Container from "../../../ui/layouts/Container";
import { IonContent, IonPage } from "@ionic/react";
import { TopHeader } from "../../../ui/layouts/Headers";

const CategoryName = () => {
  const params = useParams();
  const [articles, setArticles] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    (async () => {
      const tags = categories[params.category];
      const name =
        categoryNames.find((c) => c.route.endsWith(params.category))?.name ??
        "";

      setTitle(name);
      if (!tags) return;
      try {
        const response = await fetch(
          `${backend_api}/categories/${params.category}`,
          {
            method: "POST",
            body: JSON.stringify({ tags }),
          }
        );
        const result = await response.json();
        setArticles(result);
      } catch (err) {
        throw err;
      }
    })();
  }, []);

  return (
    <IonPage>
      <TopHeader pageName={"Articles"} back />
      <IonContent>
        <Container>
          <div className="md:flex mt-6 justify-between">
            <div className="md:hidden">
              <CategoriesMobile title={title} />
            </div>
            <div>
              <ArticlesSection articles={articles} title={formatTitle(title)} />
            </div>
          </div>
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default CategoryName;